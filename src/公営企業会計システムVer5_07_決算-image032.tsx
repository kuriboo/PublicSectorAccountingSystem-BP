import React from 'react';

// TypeScript 型定義
interface FiscalUpdateProps {
  currentYear: string;
  newYear: string;
  lastUpdate: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const FiscalUpdate: React.FC<FiscalUpdateProps> = ({
  currentYear,
  newYear,
  lastUpdate,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="font-sans p-4 space-y-4">
      <div className="bg-purple-100 p-3 rounded-md">
        <h1 className="text-xl">緑越残高更新処理</h1>
        <p className="text-right text-sm">行政市水道事業会計 料金課999 管理者 管理者</p>
        <p className="text-right text-sm">令和02年12月25日</p>
      </div>

      <div className="bg-white p-4 shadow-md">
        <div>
          <span>本年度</span>
          <span className="ml-4">{currentYear}</span>
          <span className="ml-8">年度</span>
        </div>
        <div>
          <span>新年度</span>
          <span className="ml-4">{newYear}</span>
          <span className="ml-8">年度</span>
        </div>
        <div className="mt-4 text-base">
          <p>指定した本年度から、新年度への緑越値を更新します。</p>
          <p>※決算終了後にこの処理を行わないと、新年度以下の帳票が正しく出力されません。</p>
        </div>
        <div className="border p-4 mt-4">
          <ul className="list-disc ml-4 text-sm">
            <li>月次合計残高試算表</li>
            <li>総勘定合計表</li>
            <li>資金予算表</li>
            <li>銀行預金別資金残高表</li>
            <li>銀行預金別入出金明細表</li>
            <li>総勘定元帳</li>
            <li>補助元帳</li>
            <li>月次損益計算書</li>
            <li>月次貸借対照表</li>
            <li>調定収入月計表</li>
            <li>作表棚卸計表（仕訳科目を設定している場合）</li>
          </ul>
          <p className="mt-2 text-sm">※何回でも実行可能です。</p>
        </div>
        <p className="mt-4 text-sm">最終更新日時</p>
        <p className="text-base">{lastUpdate}</p>
      </div>

      <div className="flex space-x-4 mt-4">
        <button onClick={onOk} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
          クリア
        </button>
        <button onClick={onExit} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
          終了
        </button>
      </div>
    </div>
  );
};

export default FiscalUpdate;
```