"use client";
import { Transaction } from "@/types/transaction";
import dynamic from "next/dynamic";

const PdfDownloadButtons = dynamic(() => import("@/components/feature/pdf-download-button"), {
  ssr: false,
});

type ReactPdfRendererProps = {
  transaction: Transaction;
  token: string;
}

export default function ReactPdfRenderView({ transaction, token }: ReactPdfRendererProps) {

  return (
   <div>
    <PdfDownloadButtons 
      transaction={transaction}
      token={token}
     />
   </div>
  );
}
