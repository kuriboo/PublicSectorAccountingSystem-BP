import React from 'react';

// 型定義
type BudgetComponentProps = {
  year: string;
  budgetCategory: string;
  startCopyNumber: number;
  endCopyNumber: number;
  startCopyTargetNumber: number;
  items: {
    lineNumber: string;
    calculationBasis: string;
    unitPriceQuantity: string;
    unit: string;
    amount: string;
  }[];
  onSearchClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onCancelClick: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  year,
  budgetCategory,
  startCopyNumber,
  endCopyNumber,
  startCopyTargetNumber,
  items,
  onSearchClick,
  onOkClick,
  onClearClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {/* フィルターセクション */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <label className="font-bold">年度:</label>
          <select className="p-1 border rounded" value={year}>
            {/* 年度選択オプション */}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label className="font-bold">予算編成区分:</label>
          <input className="p-1 border rounded" value={budgetCategory} readOnly />
        </div>
        <div className="flex items-center space-x-2">
          <label className="font-bold">複写元行番号:</label>
          <input className="p-1 border rounded" value={startCopyNumber} readOnly />
          <span>から</span>
          <input className="p-1 border rounded" value={endCopyNumber} readOnly />
        </div>
        <div className="flex items-center space-x-2">
          <label className="font-bold">複写先行番号:</label>
          <input className="p-1 border rounded" value={startCopyTargetNumber} readOnly />
        </div>
        <button className="p-2 bg-blue-500 text-white rounded" onClick={onSearchClick}>科目検索</button>
      </div>

      {/* テーブルセクション */}
      <table className="w-full mt-4 border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">行番号</th>
            <th className="border p-2">積算基礎</th>
            <th className="border p-2">単価/数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.lineNumber}</td>
              <td className="border p-2">{item.calculationBasis}</td>
              <td className="border p-2">{item.unitPriceQuantity}</td>
              <td className="border p-2">{item.unit}</td>
              <td className="border p-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタンセクション */}
      <div className="flex space-x-2 mt-4">
        <button className="p-2 bg-green-500 text-white rounded" onClick={onOkClick}>OK</button>
        <button className="p-2 bg-yellow-500 text-white rounded" onClick={onClearClick}>クリア</button>
        <button className="p-2 bg-red-500 text-white rounded" onClick={onCancelClick}>キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetComponent;
```