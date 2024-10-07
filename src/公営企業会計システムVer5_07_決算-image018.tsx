import React from 'react';

// プロパティの型定義
interface ComponentProps {
  year: string;
  handleYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  summary: string;
  onOkClick: () => void;
  onClearClick: () => void;
  onFinishClick: () => void;
}

// コンポーネント定義
const AccountingSystemComponent: React.FC<ComponentProps> = ({
  year,
  handleYearChange,
  summary,
  onOkClick,
  onClearClick,
  onFinishClick,
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-200 p-2 rounded mb-4">
        <h1 className="text-xl">決算貸借対照表集計処理</h1>
      </div>
      <div className="mb-4">
        <label className="mr-2">集計年度</label>
        <select
          value={year}
          onChange={handleYearChange}
          className="border rounded p-1"
        >
          <option value="平成29">平成29</option>
          <option value="平成30">平成30</option>
          {/* 他の年度を必要に応じて追加してください */}
        </select>
        <span className="ml-2">年度</span>
      </div>
      <div className="border rounded mb-4 p-4">
        <h2 className="text-lg mb-2">処理概要</h2>
        <p className="text-blue-900">{summary}</p>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOkClick}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClearClick}
          className="bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
        >
          クリア
        </button>
        <button
          onClick={onFinishClick}
          className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingSystemComponent;