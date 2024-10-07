// DescriptionMaster.tsx

import React from 'react';

// TypeScriptの型定義
interface DescriptionMasterProps {
  title: string;
  entries: { code: string; content1: string; content2?: string; }[];
  onEntrySelect: (selectedCode: string) => void;
}

// Tailwind CSSを使用した再利用可能なコンポーネント
const DescriptionMaster: React.FC<DescriptionMasterProps> = ({ title, entries, onEntrySelect }) => {
  return (
    <div className="p-4 bg-blue-100 rounded shadow-md">
      {/* タイトル表示 */}
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      
      {/* テーブルのヘッダー */}
      <div className="flex items-center justify-between p-2 bg-blue-200 font-semibold">
        <span className="flex-1">コード</span>
        <span className="flex-1">内容1</span>
        <span className="flex-1">内容2</span>
      </div>

      {/* エントリー表示 */}
      {entries.map((entry) => (
        <div 
          key={entry.code}
          className="flex items-center justify-between p-2 bg-white border-b cursor-pointer hover:bg-blue-50"
          onClick={() => onEntrySelect(entry.code)}
        >
          <span className="flex-1">{entry.code}</span>
          <span className="flex-1">{entry.content1}</span>
          <span className="flex-1">{entry.content2 ?? ''}</span>
        </div>
      ))}
    </div>
  );
}

const ExampleUsage: React.FC = () => {
  const entries = [
    { code: '000001', content1: '月分給料', content2: '' },
    { code: '000002', content1: '月分手当', content2: '' },
    // 他のエントリー
  ];

  const handleEntrySelect = (selectedCode: string) => {
    console.log(`Selected entry code: ${selectedCode}`);
  };

  return (
    <div className="p-8">
      <DescriptionMaster 
        title="摘要初期値マスタ"
        entries={entries}
        onEntrySelect={handleEntrySelect}
      />
    </div>
  );
}

export default ExampleUsage;
