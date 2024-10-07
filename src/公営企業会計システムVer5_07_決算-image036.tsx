import React from 'react';

// プロパティの型定義
interface FiscalYearUpdateProps {
  currentYear: string;
  nextYear: string;
  lastUpdateDate: string;
}

const FiscalYearUpdate: React.FC<FiscalYearUpdateProps> = ({
  currentYear,
  nextYear,
  lastUpdateDate,
}) => {
  return (
    <div className="max-w-xl mx-auto p-4 border rounded shadow-md">
      {/* タイトル */}
      <h1 className="text-xl font-bold text-purple-600 mb-4">年次更新処理</h1>

      {/* 会計年度情報 */}
      <div className="mb-4">
        <div>当期会計年度: <span className="font-semibold">{currentYear}</span></div>
        <div>次期会計年度: <span className="font-semibold">{nextYear}</span></div>
      </div>

      {/* 概要情報 */}
      <div className="border p-4 mb-4">
        <h2 className="font-bold mb-2">処理概要</h2>
        <p>当期会計年度から次期会計年度へ更新します。</p>
        <p>決算額を確定します。</p>
        <p>決算処理終了後に実行してください。</p>
      </div>

      {/* 最終更新日時 */}
      <div>
        <div className="font-bold">最終更新日時</div>
        <div>{lastUpdateDate}</div>
      </div>

      {/* ボタン */}
      <div className="mt-4 flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">エラー確認</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">終了</button>
      </div>
    </div>
  );
};

export default FiscalYearUpdate;
```