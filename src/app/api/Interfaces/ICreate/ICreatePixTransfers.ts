/**
 * Interface responsável por definir um padrão para o debito do tipo
 * transferência ou tipo pix

 * @example
     {
        id: 1;
        debtId: 2;
        to: 'user_two';

      }

 * @augments debtId - deve conter o id do tipo correspondente a transação
 * @augments to - para quem recebeu a transação
 */
export default interface ICreatePixTransfers {
  id?: Number;
  debtId: Number;
  to: String;
}
