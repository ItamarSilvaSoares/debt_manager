export default interface IRequestDebit {
  type: string;
  value: number;
  description: string;
  dueDate: Date;
  payed?: boolean;
  extraInfos?: ExtraInfos;
}

type ExtraInfos = {
  to?: string;
  scannableLines?: string;
};
