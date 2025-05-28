import WindowPrintView from "@/components/views/window-print-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Print",
  description: "Window Print",
}

export default function WindowPrint() {
  return <WindowPrintView />;
}