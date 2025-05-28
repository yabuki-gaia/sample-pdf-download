import JsPdfView from "@/components/views/js-pdf-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JS PDF",
  description: "JS PDF",
}

export default function JsPdf() {
  return <JsPdfView />;
}