/**
 * Interface responsável por definir um padrão para criar um novo tipo
 * de debito
 * @example
      {
        id: 1;
        type: 'tipo_debito';
      }
 */
export default interface ICreateDebType {
  id?: Number;
  type: String;
}
