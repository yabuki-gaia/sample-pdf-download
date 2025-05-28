import ReactPdfRenderView from "@/components/views/react-pdf-render-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React PDF Renderer",
  description: "React PDF Renderer",
}

export default function ReactPdfRenderer() {
  return <ReactPdfRenderView />;
}