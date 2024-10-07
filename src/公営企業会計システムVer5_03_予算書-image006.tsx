import React from 'react';

// Define the type for the component's props
type BudgetFormProps = {
  year: string;
  budgetType: string;
  iteration: string;
  amountType: string;
  rangeStart: string;
  rangeEnd: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetType,
  iteration,
  amountType,
  rangeStart,
  rangeEnd,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* 自動仕訳情報 */}
      <div className="border p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">自動仕訳情報</h3>
        <div className="mb-2">
          <label className="block mb-1">年度:</label>
          <input type="text" value={year} className="border px-2 py-1 w-full" />
        </div>
        <div className="mb-2">
          <label className="block mb-1">予算編成区分:</label>
          <input type="text" value={budgetType} className="border px-2 py-1 w-full" />
        </div>
        <div className="mb-2">
          <label className="block mb-1">回数:</label>
          <input type="text" value={iteration} className="border px-2 py-1 w-full" />
        </div>
        <div className="mb-2">
          <label className="block mb-1">金額種別:</label>
          <input type="text" value={amountType} className="border px-2 py-1 w-full" />
        </div>
      </div>
      
      {/* 範囲指定 */}
      <div className="border p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">範囲指定</h3>
        <div className="flex mb-2">
          <label className="block mb-1 mr-2">予算科目:</label>
          <input type="text" value={rangeStart} className="border px-2 py-1 w-1/2 mr-2" />
          <span>~</span>
          <input type="text" value={rangeEnd} className="border px-2 py-1 w-1/2 ml-2" />
        </div>
        <div className="mb-2">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            調整入力分のみ出力
          </label>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;