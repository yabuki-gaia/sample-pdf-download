"use client";
import { Transaction } from "@/types/transaction";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// ✅ 日本語フォントを登録（publicに置く）
Font.register({
  family: "NotoSansJP",
  src: "/NotoSansJP-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "NotoSansJP",
  },
  section: { marginBottom: 10 },
  title: { fontSize: 20, marginBottom: 10 },
});



type PdfDownloadButtonsProps = {
  transaction: Transaction;
}

export default function PdfDownloadButtons({ transaction }: PdfDownloadButtonsProps) {
  //  日本語PDF
  const DocumentPDFJapanese = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>取引内容</Text>
          <Text>注文番号：{transaction.transacitonId}</Text>
          <Text>取引内容：お客様の円貨の売却に対する暗号資産への両替取引</Text>
          <Text>約定日時：{transaction.transactedAt}</Text>
          <Text>受領暗号資産数量：{transaction.sendAmount} {transaction.currencyType}</Text>
          <Text>約定暗号資産数量：{transaction.amount} {transaction.currencyType}</Text>
          <Text>両替手数料{transaction.feePercentage}%（消費税込）：{transaction.jpCommission} 円（約定暗号資産数量の内、{transaction.commission} {transaction.currencyType}が相当します。）</Text>
          <Text>両替希望円貨額：{transaction.jpAmount.toLocaleString()} 円</Text>
          <Text>取引レート（実勢交換レート）：{transaction.rate.toLocaleString()} 円</Text>
          <Text>株式会社ガイア 登録番号：T8120001128473</Text>
          <Text>8%対象：{transaction.jpAmount.toLocaleString()} 円 （内 消費税額 0 円）</Text>
          <Text>{transaction.feePercentage}%対象：{transaction.jpCommission} 円 （内 消費税額 {transaction.jpCommissionTax} 円）</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <div className="p-4 gap-4 w-full md:w-1/2">
      <p>ブラウザとPDFで表示が異なる可能性あり(改行などで崩れる可能性あり)</p>
        <div
            id="pdf-content-japanese"
            className="p-4 bg-white "
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
            <p>両替希望円貨額：{transaction.jpAmount.toLocaleString()} 円</p>
            <p>取引レート（実勢交換レート）：{transaction.rate.toLocaleString()} 円</p>

            <p>株式会社ガイア 登録番号：T8120001128473</p>
            <p>8%対象：{transaction.jpAmount.toLocaleString()} 円 （内 消費税額 0 円）</p>
            <p>{transaction.feePercentage}%対象：{transaction.jpCommission} 円 （内 消費税額 {transaction.jpCommissionTax} 円）</p>
        </div>
      <div className="flex justify-end py-2">
        <PDFDownloadLink
          document={<DocumentPDFJapanese />}
          fileName="transaction-jp.pdf"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {({ loading }) => (loading ? "読み込み中..." : "PDFをダウンロード")}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
