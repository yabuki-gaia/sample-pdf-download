"use client"
export default function WindowPrintView() {

  // 日本語を印刷
  const handlePDFDownload = () => {
    const englishElement = document.getElementById("pdf-content-english");
    const japaneseElement = document.getElementById("pdf-content-japanese");
    const buttonJapanese = document.getElementById("pdf-download-button-japanese");
    const buttonEnglish = document.getElementById("pdf-download-button-english");
    const border = document.getElementById("pdf-download-border");
    if (englishElement && japaneseElement && buttonJapanese && buttonEnglish && border) {
      englishElement.style.display = "none";
      buttonJapanese.style.display = "none";
      buttonEnglish.style.display = "none";
      border.style.display = "none";
      window.print();
      englishElement.style.display = "block";
      buttonJapanese.style.display = "block";
      buttonEnglish.style.display = "block";
      border.style.display = "block";
    }
  };
  
  // 英語部分
  const handlePDFDownloadEnglish = () => {
    const japaneseElement = document.getElementById("pdf-content-japanese");
    const buttonJapanese = document.getElementById("pdf-download-button-japanese");
    const buttonEnglish = document.getElementById("pdf-download-button-english");
    const border = document.getElementById("pdf-download-border");
    if (japaneseElement && buttonJapanese && buttonEnglish && border) {
      japaneseElement.style.display = "none";
      buttonJapanese.style.display = "none";
      buttonEnglish.style.display = "none";
      border.style.display = "none";
      window.print();
      japaneseElement.style.display = "block";
      buttonJapanese.style.display = "block";
      buttonEnglish.style.display = "block";
      border.style.display = "block";
    }
  };
  return (
    <div>
      <div className="flex w-full gap-4 flex-wrap">
        {/* 日本語ブロック */}
        <div className="w-full md:w-1/2 p-2">
          <div
            id="pdf-content-japanese"
            className="p-4 bg-white text-black w-full"
          >
            <h1 className="text-2xl font-bold">お取引内容</h1>
            <p>注文番号：2019</p>
            <p>取引内容：お客様の円貨の売却に対する暗号資産への両替取引</p>
            <p>受発注日時：2025-05-26 13:18</p>
            <p>約定数量：0 ETH</p>
            <p>入金額：1,000 円</p>
          </div>
          <button
              id="pdf-download-button-japanese"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
              onClick={handlePDFDownload}
            >
              Download 日本語
            </button>
          <div id="pdf-download-border" className="border-t border-gray-300 mt-2"></div>
        </div>

        {/* 英語ブロック */}
        <div className="w-full md:w-1/2 p-2">
          <div
            id="pdf-content-english"
            className="p-4 bg-white text-black w-full"
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
          <button
              id="pdf-download-button-english"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
              onClick={handlePDFDownloadEnglish}
            >
              Download English
            </button>
          <div id="pdf-download-border" className="border-t border-gray-300 mt-2"></div>
        </div>
      </div>
    </div>
  );
}