import React from "react";

// TypeScriptの型定義
type ReportProps = {
  title: string;
  dateCreated: string;
  collectionDate: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Next.js + TypeScriptコンポーネント
const ReportComponent: React.FC<ReportProps> = ({
  title,
  dateCreated,
  collectionDate,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 border border-gray-300 shadow-md">
      <header className="bg-blue-500 text-white p-4 rounded shadow">
        {/* タイトルセクション */}
        <h1 className="text-lg font-bold">{title}</h1>
      </header>
      
      <main className="my-4">
        {/* 作表日付セクション */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800">作表日付</h2>
          <p className="text-blue-600 bg-blue-100 p-2 rounded">{dateCreated}</p>
        </div>
        
        {/* 集計日時セクション */}
        <div>
          <h2 className="text-sm font-semibold text-gray-800">集計日時</h2>
          <p className="text-gray-800">{collectionDate}</p>
        </div>
      </main>

      <footer className="flex justify-end space-x-4 mt-6">
        {/* ボタンセクション */}
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={onOk}
        >
          OK
        </button>
        <button 
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          終了
        </button>
      </footer>
    </div>
  );
};

export default ReportComponent;
