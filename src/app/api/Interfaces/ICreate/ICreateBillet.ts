/**
 * Interface responsável por definir um padrão para o debito do tipo
 * boleto

 * @example
      {
        id: 1;
        debtId: 3;
        scannableLines: '34191790010104351004791020150008493170026000';

      }

 * @augments debtId - deve conter o id do tipo correspondente a transação
 * @augments scannableLines - linha que corresponde a linha digital do boleto
 */
export default interface ICreateBillet {
  id?: number;
  debtId: number;
  scannableLines: string;
}
