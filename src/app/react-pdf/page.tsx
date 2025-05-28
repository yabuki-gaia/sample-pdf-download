import ReactPdfView from "@/components/views/react-pdf-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React PDF",
  description: "React PDF",
}

export default function ReactPdf() {
  return <ReactPdfView />;
}