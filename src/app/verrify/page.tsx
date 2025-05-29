"use client";
import { useState } from "react";

export default function Verify() {
  const [token, setToken] = useState("");
  const verifyTokenClient = async (token: string) => {
    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const result = await res.json();
    alert(result.valid ? "✅ 正しいトークンです！" : "❌ 無効なトークンです！");
  };
  return <div>
    <textarea className="border px-2 py-1" value={token} onChange={(e) => setToken(e.target.value)} />
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => verifyTokenClient(token)}>Verify</button>
  </div>;
}
