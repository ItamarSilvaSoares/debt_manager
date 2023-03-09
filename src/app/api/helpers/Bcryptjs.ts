import {compareSync, hashSync} from 'bcryptjs';

class Bcryptjs {
  static getHash(password: string): string {
    return hashSync(password, 12);
  }

  static compareHash(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}

export default Bcryptjs;
