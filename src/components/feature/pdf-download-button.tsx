"use client";
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

// ✅ 日本語PDF
const DocumentPDFJapanese = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>お取引内容</Text>
        <Text>注文番号：2019</Text>
        <Text>取引内容：お客様の円貨の売却に対する暗号資産への両替取引</Text>
        <Text>受発注日時：2025-05-26 13:18</Text>
        <Text>約定数量：0 ETH</Text>
        <Text>入金額：1,000 円</Text>
      </View>
    </Page>
  </Document>
);

// ✅ 英語PDF
const DocumentPDFEnglish = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Transaction Details</Text>
        <Text>Order Number: 2019</Text>
        <Text>
          Transaction Content: Exchange of cryptocurrency against the customer’s yen currency sale
        </Text>
        <Text>Order Date and Time: 2025-05-26 13:18</Text>
        <Text>Transaction Quantity: 0 ETH</Text>
        <Text>Deposit Amount: 1,000 yen</Text>
      </View>
    </Page>
  </Document>
);

export default function PdfDownloadButtons() {
  return (
    <div className="p-4 flex gap-4">
      <PDFDownloadLink
        document={<DocumentPDFJapanese />}
        fileName="transaction-jp.pdf"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {({ loading }) => (loading ? "読み込み中..." : "Download 日本語")}
      </PDFDownloadLink>

      <PDFDownloadLink
        document={<DocumentPDFEnglish />}
        fileName="transaction-en.pdf"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {({ loading }) => (loading ? "読み込み中..." : "Download English")}
      </PDFDownloadLink>
    </div>
  );
}
