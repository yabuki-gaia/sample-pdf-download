"use client"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function JsPdfView() {

  // 日本語版のダウンロード
  const handlePDFDownload = async () => {
    const element = document.getElementById("pdf-content-japanese");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 1 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("transaction.pdf");

    // transaciton.status を見て表示内容を変える

    // 【ガイアBTMサービス】 お取引完了のお知らせ 
    //  ■注文番号：{{transactionId}}
    //  ■取引内容：自己売買、お客様の暗号資産の売却に対して当社の暗号資産の買取に基づく円貨への両替取引。 
    //  ■約定日時： {{transactedAt}} 
    //  ■受領暗号資産数量： {{sendAmount}} {{currencyType}} 
    //  ■約定暗号資産数量： {{amount}} {{currencyType}} 
    //  ■両替手数料{{feePercentage}}％（消費税込）： {{jpCommission}} 円（約定暗号資産数量の内、{{commission}} {{currencyType}}が相当します。） 
    //  ■両替希望円貨額： {{jpAmount}} 円 
    //  ■取引レート（実勢交換レート）：{{rate}} 円
    // 
    //  株式会社ガイア 登録番号：T8120001128473 
    //  8%対象：0 円 （内 消費税額 0 円）
    //  {{feePercentage}}%対象：{{jpCommission}} 円 
    // （内 消費税額 {{jpCommissionTax}} 円）

    // 
  };
  const transaction = {
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
      <p>JSPDFを使用してPDFをダウンロードする</p>
      <p>tailwindcssの色指定を使用できない</p>
      <p>モバイルとPCでPDFの表示が違う</p>
    
      <div className="w-full md:w-1/2 p-2">
          <div
            id="pdf-content-japanese"
            className="p-4 bg-white  w-full "
            style={{
             border: "2px solid #e5e7eb",
            }}
          >
            <h1 className="text-2xl font-bold">取引内容</h1>
            <p>注文番号：{transaction.transacitonId}</p>
            <p>取引内容：お客様の円貨の売却に対する暗号資産への両替取引</p>
            <p>約定日時：{transaction.transactedAt}</p>
            <p>受領暗号資産数量：{transaction.sendAmount} {transaction.currencyType}</p>
            <p>約定暗号資産数量：{transaction.amount} {transaction.currencyType}</p>
            <p>両替手数料{transaction.feePercentage}%（消費税込）：{transaction.jpCommission} 円（約定暗号資産数量の内、{transaction.commission} {transaction.currencyType}が相当します。）</p>
            <p>両替希望円貨額：{transaction.jpAmount} 円</p>
            <p>取引レート（実勢交換レート）：{transaction.rate.toLocaleString()} 円</p>

            <p>株式会社ガイア 登録番号：T8120001128473</p>
            <p>8%対象：{transaction.jpAmount.toLocaleString()} 円 （内 消費税額 0 円）</p>
            <p>{transaction.feePercentage}%対象：{transaction.jpCommission.toLocaleString()} 円 （内 消費税額 {transaction.jpCommissionTax.toLocaleString()} 円）</p>
          </div>
          <div className="mt-2 text-center flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handlePDFDownload}
            >
              PDFをダウンロード
            </button>
          </div>
        </div>
    </div>
  )
}