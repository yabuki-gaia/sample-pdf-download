import WindowPrintView from "@/components/views/window-print-view";
import { sampleTransaction } from "@/types/transaction";
import jwt from "jsonwebtoken";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Window Print",
  description: "Window Print",
}

export default function WindowPrint() {
  const transaction = sampleTransaction;
  //署名　秘密鍵 jwt
  const payload = {
    "取引番号": transaction.transacitonId,
    "受領暗号資産数量": transaction.sendAmount,
    "約定暗号資産数量": transaction.amount,
    "約定日時": transaction.transactedAt,
    "両替手数料": transaction.feePercentage,
    "両替希望円貨額": transaction.jpAmount,
    "取引レート": transaction.rate,
    "取引通貨": transaction.currencyType,
  };
  
  const secret = process.env.JWT_SECRET!;
  const token = jwt.sign(
      payload, 
      secret, 
      { algorithm: "HS256",noTimestamp: true,}
    );

    console.log(token);
  
  return <WindowPrintView transaction={sampleTransaction} token={token} />;
}