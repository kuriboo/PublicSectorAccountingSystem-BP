import React from 'react';

// TypeScript interface for the component props
interface BudgetDataComponentProps {
  yearLabel?: string;
  description?: string;
  onConfirm?: () => void;
  onClear?: () => void;
  onExit?: () => void;
}

const BudgetDataComponent: React.FC<BudgetDataComponentProps> = ({
  yearLabel = "年度",
  description = "前年度の経常または新規科目の積算基礎データを新年度に複写します。",
  onConfirm = () => alert('OK clicked'),
  onClear = () => alert('クリア clicked'),
  onExit = () => alert('終了 clicked'),
}) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-4 rounded">
      <div className="bg-blue-200 p-2 rounded-t">
        <h1 className="text-xl font-bold">当初予算データ作成</h1>
      </div>
      <div className="flex justify-between items-center mt-4">
        <label htmlFor="year" className="mr-2">{yearLabel}</label>
        <select id="year" className="border rounded p-1">
          <option>平成29</option>
          <option>平成30</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="border mt-4 p-4">
        <h2 className="font-bold text-lg">処理概要</h2>
        <p className="mt-2">{description}</p>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onConfirm}>OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default BudgetDataComponent;
```