"use client"
import { Transaction } from "@/types/transaction";

type WindowPrintViewProps = { 
  transaction: Transaction;
}

export default function WindowPrintView({ transaction }: WindowPrintViewProps) {

  // 日本語を印刷
  const handlePDFDownload = () => {
    const japaneseElement = document.getElementById("pdf-content-japanese");
    const buttonJapanese = document.getElementById("pdf-download-button-japanese");
    const howToUseElement = document.getElementById("how-to-use");
    if (japaneseElement && buttonJapanese && howToUseElement) {
      buttonJapanese.style.display = "none";
      howToUseElement.style.display = "none";
      window.print();
      buttonJapanese.style.display = "block";
      howToUseElement.style.display = "block";
    }
    else {
      alert("not found");
    }

  };
  
  return (
    <div>
      <div className="flex w-full gap-4 flex-wrap">
        
        {/* 日本語ブロック */}
        <div className="w-full p-2 mx-auto">
          <div
            id="pdf-content-japanese"
            className="p-4 bg-white  w-full"
          >
            <h1 className="text-2xl font-bold">取引内容</h1>
            <p> <span className="font-bold w-10">■</span>注文番号：{transaction.transacitonId}</p>
            <p> <span className="font-bold">■</span>取引内容：お客様の円貨の売却に対する暗号資産への両替取引</p>
            <p> <span className="font-bold">■</span>約定日時：{transaction.transactedAt}</p>
            <p> <span className="font-bold">■</span>受領暗号資産数量：{transaction.sendAmount} {transaction.currencyType}</p>
            <p> <span className="font-bold">■</span>約定暗号資産数量：{transaction.amount} {transaction.currencyType}</p>
            <p> <span className="font-bold">■</span>両替手数料{transaction.feePercentage}%（消費税込）：{transaction.jpCommission} 円（約定暗号資産数量の内、{transaction.commission} {transaction.currencyType}が相当します。）</p>
            <p> <span className="font-bold">■</span>両替希望円貨額：{transaction.jpAmount} 円</p>
            <p>■ 取引レート（実勢交換レート）：{transaction.rate.toLocaleString()} 円</p>

            <p>株式会社ガイア 登録番号：T8120001128473</p>
            <p>8%対象：{transaction.jpAmount.toLocaleString()} 円 （内 消費税額 0 円）</p>
            <p>{transaction.feePercentage}%対象：{transaction.jpCommission.toLocaleString()} 円 （内 消費税額 {transaction.jpCommissionTax.toLocaleString()} 円）</p>
          </div>
          <button
              id="pdf-download-button-japanese"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handlePDFDownload}
            >
              PDFをダウンロード
            </button>
        </div>
       
        <div id="how-to-use" className="w-full md:w-1/2 p-4 rounded-md mx-auto bg-gray-100 space-y-4">
          <p className="text-2xl font-bold">ダウンロードができない方へ</p>
          {/* iPhoneの場合のダウンロード方法(chromeの場合) */}
          <div className="p-4 bg-white  w-full space-y-4">
            <h2 className="text-2xl font-bold">iPhoneの場合のダウンロード方法(chrome)</h2>
            <p>1. 画面をスクロールして下部の「PDFをダウンロード」ボタンをタップします。</p>
            <p>2. ダウンロードが完了すると、ダウンロードしたPDFファイルを開くことができます。</p>
          </div>

          {/* androidの場合のダウンロード方法 */}
          <div className="p-4 bg-white  w-full space-y-4">
            <h2 className="text-2xl font-bold">Androidの場合のダウンロード方法(chrome)</h2>
            <p>1. 画面をスクロールして下部の「PDFをダウンロード」ボタンをタップします。</p>
            <p>2. ダウンロードが完了すると、ダウンロードしたPDFファイルを開くことができます。</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}