```tsx
import React from 'react';

type BudgetExecutionStatusProps = {
  date: string;
  startBudgetCode: string;
  endBudgetCode: string;
  onCsvExport: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetExecutionStatus: React.FC<BudgetExecutionStatusProps> = ({
  date,
  startBudgetCode,
  endBudgetCode,
  onCsvExport,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Title Section */}
      <h1 className="text-xl font-bold mb-4">予算執行状況表</h1>

      {/* Form Section */}
      <div className="border rounded-md p-4 mb-4 bg-white">
        <fieldset className="mb-4">
          <legend className="font-semibold mb-2">作表種別</legend>
          <div className="flex flex-col space-y-2">
            <label>
              <input type="radio" name="type" defaultChecked />
              予算執行状況表１（予定/負担）
            </label>
            <label>
              <input type="radio" name="type" />
              予算執行状況表２（負担/執行）
            </label>
            <label>
              <input type="radio" name="type" />
              予算執行状況表３（執行/内訳額）
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-2">範囲指定</legend>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <label className="mr-2">作表日</label>
              <input type="text" value={date} readOnly className="border p-1" />
            </div>
            
            <div className="flex items-center">
              <button className="mr-2 py-1 px-3 bg-blue-500 text-white rounded">所属</button>
              <input type="text" className="border p-1 flex-grow" />
            </div>

            <div className="flex items-center">
              <label className="mr-2">予算科目</label>
              <input type="text" value={startBudgetCode} readOnly className="border p-1 flex-grow" />
              <span className="mx-2">~</span>
              <input type="text" value={endBudgetCode} readOnly className="border p-1 flex-grow" />
            </div>

            <div className="flex items-center">
              <label className="mr-2">作表区分</label>
              <div className="space-x-4">
                <label><input type="radio" name="section" defaultChecked />目</label>
                <label><input type="radio" name="section" />節</label>
                <label><input type="radio" name="section" />細節</label>
                <label><input type="radio" name="section" />明細</label>
              </div>
            </div>

            <div className="flex items-center">
              <label className="mr-2">集計対象</label>
              <div className="space-x-4">
                <label><input type="radio" name="aggregate" defaultChecked />全体</label>
                <label><input type="radio" name="aggregate" />ブロック</label>
                <label><input type="radio" name="aggregate" />セグメント</label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onCsvExport}
          className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetExecutionStatus;
```