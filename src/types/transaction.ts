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

export const sampleTransaction: Transaction = {
    transacitonId:"2018" ,
    transactedAt: "2025-05-29 10:00",
    sendAmount: "0.0001",
    amount: "0.0001",
    currencyType: "ETH",
    feePercentage: 10,
    jpCommission: 0,
    jpCommissionTax: 9,
    commission: "0.0001",
    jpAmount: 1000,
    rate: 15597938,
  } 