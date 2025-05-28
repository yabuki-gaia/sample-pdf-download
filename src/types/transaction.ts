export type Transaction = {
  transacitonId: string;
  transactedAt: string;
  sendAmount: string;
  amount: string;
  currencyType: string;
  feePercentage: number;
  jpCommission: number;
  jpCommissionTax: number;
  commission: string;
  jpAmount: number;
  rate: number;
}