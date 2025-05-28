"use client";
import { Transaction } from "@/types/transaction";
import dynamic from "next/dynamic";

const PdfDownloadButtons = dynamic(() => import("@/components/feature/pdf-download-button"), {
  ssr: false,
});



export default function ReactPdfRenderer() {
  const transaction: Transaction = {
    transacitonId: "2019",
    transactedAt: "2025-05-26 13:18",
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

  return (
   <div>
    <PdfDownloadButtons 
      transaction={transaction}
     />
   </div>
  );
}
