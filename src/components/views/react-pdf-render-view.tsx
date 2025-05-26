"use client";
import dynamic from "next/dynamic";

const PdfDownloadButtons = dynamic(() => import("@/components/feature/pdf-download-button"), {
  ssr: false,
});

export default function ReactPdfRenderer() {

  return (
   <div>
    <PdfDownloadButtons />
   </div>
  );
}
