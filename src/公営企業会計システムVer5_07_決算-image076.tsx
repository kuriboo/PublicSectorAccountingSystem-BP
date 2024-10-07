import React from 'react';

// 型定義
type IncomeUpdateProps = {
  title: string;
  decisionYear: string;
  fiscalYear: string;
  incomeDivisionOptions: string[];
  decisionNumberRange: [number, number];
  budgetItemRange: [number, number];
  onSearch: () => void;
  onConfirm: () => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
  tableData: Array<{ [key: string]: string | number }>;
};

const IncomeUpdateComponent: React.FC<IncomeUpdateProps> = ({
  title,
  decisionYear,
  fiscalYear,
  incomeDivisionOptions,
  decisionNumberRange,
  budgetItemRange,
  onSearch,
  onConfirm,
  onOk,
  onClear,
  onExit,
  tableData,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg max-w-3xl mx-auto">
      {/* タイトル */}
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      
      {/* フォーム */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">決定年度:</label>
          <span>{decisionYear}</span>
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">年度:</label>
          <span>{fiscalYear}</span>
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">収入区分:</label>
          <select className="border rounded px-2">
            {incomeDivisionOptions.map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">決定番号:</label>
          <input
            type="number"
            className="border rounded px-2 w-16"
            defaultValue={decisionNumberRange[0]}
          />
          <span className="mx-2">~</span>
          <input
            type="number"
            className="border rounded px-2 w-16"
            defaultValue={decisionNumberRange[1]}
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">予算科目:</label>
          <input
            type="number"
            className="border rounded px-2 w-32"
            defaultValue={budgetItemRange[0]}
          />
          <span className="mx-2">~</span>
          <input
            type="number"
            className="border rounded px-2 w-32"
            defaultValue={budgetItemRange[1]}
          />
        </div>
        <button onClick={onSearch} className="bg-blue-500 text-white py-1 px-4 rounded">
          表示
        </button>
      </div>
      
      {/* テーブル */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1">収入区分</th>
            <th className="border border-gray-300 px-2 py-1">修正前</th>
            <th className="border border-gray-300 px-2 py-1">伝票区分</th>
            <th className="border border-gray-300 px-2 py-1">決定番号</th>
            <th className="border border-gray-300 px-2 py-1">明細番号</th>
            <th className="border border-gray-300 px-2 py-1">予算目コード</th>
            <th className="border border-gray-300 px-2 py-1">予算目名称</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 px-2 py-1">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* ボタン */}
      <div className="mt-4 space-x-2">
        <button onClick={onConfirm} className="bg-green-500 text-white py-1 px-4 rounded">
          確定
        </button>
        <button onClick={onOk} className="bg-blue-500 text-white py-1 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white py-1 px-4 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white py-1 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default IncomeUpdateComponent;
```