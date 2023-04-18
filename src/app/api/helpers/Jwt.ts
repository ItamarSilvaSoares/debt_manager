import {
  JsonWebTokenError,
  JwtPayload,
  Secret,
  sign,
  SignOptions,
  verify,
} from 'jsonwebtoken';
import {StatusCodes} from 'http-status-codes';
import CustomError from '../Errors/CustomError';
import {ErrosJwtMensagens} from '../Utils/Constants';
import {jwt} from '../Environments/dotenv';

/**
 * Classe responsável por contrato JWT de segurança
 * @param secret
 * @param jwtConfig
 * @link https://www.npmjs.com/package/jsonwebtoken
 */
class AContractJWT {
  private secret: Secret;
  private jwtConfig: SignOptions;

  constructor() {
    this.secret = jwt.secret;
    this.jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
      noTimestamp: true,
    };
  }

  /**
   * Método responsável por gerar token
   * @param payload - Dados do payload
   * @returns Token no formato String
   */
  createToken(payload: JwtPayload): string {
    return sign({...payload}, this.secret, this.jwtConfig);
  }

  /**
   * Método responsável por validar token
   * @param token
   * @returns JwtPayload de dados caso valido
   * @throws JsonWebTokenError caso token não seja valido
   * @throws TokenNotFoundError caso não seja passado token
   */
  async verifyToken(token: string | undefined): Promise<JwtPayload> {
    if (!token)
      throw new CustomError(
        StatusCodes.UNAUTHORIZED,
        ErrosJwtMensagens.TokenNotFound,
        'TokenNotFoundError'
      );
    try {
      const payload = verify(token, this.secret, this.jwtConfig);
      return payload as JwtPayload;
    } catch (error) {
      throw new JsonWebTokenError('Token must be a valid token');
    }
  }
}

export default new AContractJWT();
