import React from 'react';

// プロパティの型定義
type ExpenseReportFormProps = {
  reportDate: string;
  onChangeReportDate: (date: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

const ExpenseReportForm: React.FC<ExpenseReportFormProps> = ({
  reportDate,
  onChangeReportDate,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4">
      {/* ヘッダー部分 */}
      <div className="bg-blue-200 text-blue-900 rounded p-2 mb-4">
        <h1 className="text-xl">費用構成表作成</h1>
      </div>
      
      {/* フォーム部分 */}
      <div className="border rounded p-4">
        <fieldset className="mb-4">
          <legend className="px-2 text-sm">範囲指定</legend>
          <div className="flex items-center mb-2">
            <input type="radio" id="summary" name="displayType" defaultChecked className="mr-1" />
            <label htmlFor="summary" className="mr-4">合計表</label>
            <input type="radio" id="detailed" name="displayType" className="mr-1" />
            <label htmlFor="detailed">明細表</label>
          </div>
        </fieldset>

        <div className="mb-4">
          <label htmlFor="reportDate" className="block mb-1">作表日付</label>
          <input
            type="text"
            id="reportDate"
            value={reportDate}
            onChange={(e) => onChangeReportDate(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        
        {/* ボタン部分 */}
        <div className="flex space-x-2">
          <button onClick={onSubmit} className="bg-gray-300 rounded px-4 py-2">OK</button>
          <button onClick={onClear} className="bg-gray-300 rounded px-4 py-2">クリア</button>
          <button className="bg-gray-300 rounded px-4 py-2">終了</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseReportForm;
