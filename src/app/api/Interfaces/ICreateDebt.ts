export default interface ICreateDebt {
  id?: Number;
  userId: Number;
  type: Number;
  value: Number;
  description: String;
  dueDate: Date;
  payed: Boolean;
}
