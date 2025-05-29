import ReactPdfRenderView from "@/components/views/react-pdf-render-view";
import { Transaction } from "@/types/transaction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React PDF Renderer",
  description: "React PDF Renderer",
}

export default function ReactPdfRenderer() {
  const randomDate = new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365);
  const randomDateString = randomDate.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",  
  });

  // ランダムな金額を生成
  const randomAmount = Math.floor(Math.random() * 1000000);
  const randomAmountString = randomAmount.toLocaleString("ja-JP");

  const transaction: Transaction = {
    transacitonId: "2019",
    transactedAt: randomDateString,
    sendAmount: randomAmountString,
    amount: randomAmountString,
    currencyType: "ETH",
    feePercentage: 10,
    jpCommission: 0,
    jpCommissionTax: 9,
    commission: "0.0001",
    jpAmount: 1000,
    rate: 15597938,

  }

  return <ReactPdfRenderView transaction={transaction} />;
}