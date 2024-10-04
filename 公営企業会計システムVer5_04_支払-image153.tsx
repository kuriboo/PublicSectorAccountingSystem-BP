```tsx
// components/PrintReportForm.tsx
import React from 'react';

// 型定義
type PrintReportFormProps = {
  currentDate: string;
  startDate: string;
  endDate: string;
  division: 'all' | 'unsettled' | 'partial';
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const PrintReportForm: React.FC<PrintReportFormProps> = ({
  currentDate,
  startDate,
  endDate,
  division,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-8 rounded-lg border shadow-md space-y-8">
      <h1 className="bg-purple-200 text-purple-800 p-4 rounded-md text-xl">
        工事前払 未振替一覧表作成
      </h1>
      
      <div className="border p-4 rounded-md space-y-4">
        <h2 className="text-blue-800">範囲指定</h2>
        <div className="flex flex-col space-y-4 ml-4">
          <div>
            <label className="text-blue-800">作表現在日:</label>
            <span className="ml-2">{currentDate}</span>
          </div>

          <div>
            <label className="text-blue-800">支出決定日:</label>
            <span className="ml-2">{startDate} ~ {endDate}</span>
          </div>

          <div>
            <label className="text-blue-800">区分:</label>
            <div className="ml-4">
              <label>
                <input
                  type="radio"
                  name="division"
                  checked={division === 'all'}
                  readOnly
                /> 全て
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="division"
                  checked={division === 'unsettled'}
                  readOnly
                /> 未振替
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="division"
                  checked={division === 'partial'}
                  readOnly
                /> 一部振替
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="bg-gray-200 p-2 rounded" onClick={onClose}>終了</button>
        <button className="bg-blue-200 p-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={onSubmit}>OK</button>
      </div>
    </div>
  );
};

export default PrintReportForm;
```