```tsx
import React, { useState } from 'react';

// Define the props type
type ReportFormProps = {
  title: string;
  date: string;
  includePageNumber: boolean;
  startPage: number;
  onSubmit: (data: { title: string; date: string; includePageNumber: boolean; startPage: number }) => void;
  onClear: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({ title, date, includePageNumber, startPage, onSubmit, onClear }) => {
  // State hooks for the form inputs
  const [formTitle, setFormTitle] = useState(title);
  const [formDate, setFormDate] = useState(date);
  const [formIncludePageNumber, setFormIncludePageNumber] = useState(includePageNumber);
  const [formStartPage, setFormStartPage] = useState(startPage);

  // Handle form submission
  const handleSubmit = () => {
    onSubmit({
      title: formTitle,
      date: formDate,
      includePageNumber: formIncludePageNumber,
      startPage: formStartPage,
    });
  };

  return (
    <div className="p-8 bg-white rounded shadow-md w-96">
      <h2 className="text-lg font-semibold mb-4">決算統計貸借対照表</h2>
      
      {/* Date Input */}
      <div className="mb-4">
        <label className="block text-gray-700">作表日</label>
        <input 
          type="text"
          value={formDate}
          onChange={(e) => setFormDate(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      
      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700">タイトル</label>
        <input 
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      
      {/* Include Page Number Option */}
      <div className="mb-4">
        <label className="block text-gray-700">頁印字</label>
        <div>
          <label>
            <input
              type="radio"
              checked={formIncludePageNumber === true}
              onChange={() => setFormIncludePageNumber(true)}
            /> する
          </label>
          <label className="ml-4">
            <input
              type="radio"
              checked={formIncludePageNumber === false}
              onChange={() => setFormIncludePageNumber(false)}
            /> しない
          </label>
        </div>
      </div>

      {/* Start Page Input */}
      <div className="mb-4">
        <label className="block text-gray-700">開始頁</label>
        <input 
          type="number"
          value={formStartPage}
          min={1}
          onChange={(e) => setFormStartPage(parseInt(e.target.value))}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
      </div>
      
      {/* Process Summary */}
      <div className="mt-8 bg-gray-100 p-4 rounded">
        <h3 className="font-semibold">処理概要</h3>
        <p>決算統計貸借対照表を作成します。</p>
      </div>
    </div>
  );
};

export default ReportForm;
```