/**
 * Interface responsável por definir um padrão para o debito do tipo
 * transferência ou tipo pix

 * @example
      {
        id: number;
        debtId: number;
        to: string;
        scannableLines: string;
      }

 * @augments debtId - deve conter o id do tipo correspondente a transação
 * @augments to - para quem recebeu a transação
 */
export default interface ICreateExtraInfosDebt {
  id?: number;
  debtId: number;
  to?: string;
  scannableLines?: string;
}
