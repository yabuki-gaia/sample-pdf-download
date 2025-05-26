"use client"
import jsPDF from "jspdf";
import { NotoSansJPFont } from "@/fonts/NotoSansJP-Regular";
export default function JsPdfView() {
  const handlePDFDownload = () => {
    const pdf = new jsPDF();
    pdf.addFileToVFS("NotoSansJP-Regular.ttf", NotoSansJPFont);
    pdf.addFont("NotoSansJP-Regular.ttf", "NotoSansJP", "normal");
    pdf.setFont("NotoSansJP");

    pdf.text("お取引内容", 10, 20);
    pdf.text("取引金額", 10, 30);

    pdf.save("receipt.pdf");
  };


 // 英語版
 const handlePDFDownloadEnglish = () => {
  const pdf = new jsPDF();
  const maxWidth = 180; 
  const longText = "A proprietary trade involving the exchange of fiat currency to crypto assets, based on the purchase of fiat currency from the customer by our company.";

  pdf.setFontSize(24);
  pdf.text("Transaction Receipt", 10, 20);
  
  pdf.setFontSize(12);
  pdf.text("Order Number: 2019", 10, 30);
  
  pdf.text("Transaction Details", 10, 40); 

  const wrappedText = pdf.splitTextToSize(longText, maxWidth);
  pdf.text(wrappedText, 10, 45); 

  pdf.text("Order Date and Time: 2025-05-26 13:18", 10, 60);
  pdf.text("Executed Quantity: 0 ETH", 10, 70);
  pdf.text("Deposit Amount: ¥1,000", 10, 80);

  pdf.save("receipt.pdf");
 }
  return (
    
    <div>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handlePDFDownload}>download</button>
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handlePDFDownloadEnglish}>English</button>
      </div>
      <p>JSPDFを使用してPDFをダウンロードする</p>
    
      <div id="pdf-content">
        <h1>Hello world!</h1>
      </div>
    </div>
  )
}