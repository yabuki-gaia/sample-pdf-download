"use client"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function JsPdfView() {

  // 日本語版のダウンロード
  const handlePDFDownload = async () => {
    const element = document.getElementById("pdf-content-japanese");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("transaction.pdf");
  };

  // 英語版のダウンロード
  const handlePDFDownloadEnglish = async () => {
    const element = document.getElementById("pdf-content-english");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("transaction.pdf");
 }
  return (
    
    <div>
      <p>JSPDFを使用してPDFをダウンロードする</p>
    
      <div className="flex w-full gap-4 flex-wrap">
        {/* 日本語ブロック */}
        <div className="w-full md:w-1/2 p-2">
          <div
            id="pdf-content-japanese"
            className="p-4 bg-white  w-full shadow"
          >
            <h1 className="text-2xl font-bold">お取引内容</h1>
            <p>注文番号：2019</p>
            <p>取引内容：お客様の円貨の売却に対する暗号資産への両替取引</p>
            <p>受発注日時：2025-05-26 13:18</p>
            <p>約定数量：0 ETH</p>
            <p>入金額：1,000 円</p>
          </div>
          <div className="mt-2 text-center flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handlePDFDownload}
            >
              Download 日本語
            </button>
          </div>
        </div>

        {/* 英語ブロック */}
        <div className="w-full md:w-1/2 p-2">
          <div
            id="pdf-content-english"
            className="p-4 bg-white text-black w-full shadow"
          >
            <h1 className="text-2xl font-bold">Transaction Details</h1>
            <p>Order Number: 2019</p>
            <p>
              Transaction Details: A proprietary trade involving the exchange of fiat
              currency to crypto assets, based on the purchase of fiat currency from
              the customer by our company.
            </p>
            <p>Order Date and Time: 2025-05-26 13:18</p>
            <p>Executed Quantity: 0 ETH</p>
            <p>Deposit Amount: ¥1,000</p>
          </div>
          <div className="mt-2 text-center flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handlePDFDownloadEnglish}
            >
              Download English
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}