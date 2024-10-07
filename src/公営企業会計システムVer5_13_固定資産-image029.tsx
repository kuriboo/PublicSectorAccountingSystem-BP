// Import necessary libraries
import React from 'react';

// Define TypeScript types for the component props
type FixedAssetFormProps = {
  startDate: string;
  endDate: string;
  onFormSubmit: () => void;
  onFormClear: () => void;
  onFormExit: () => void;
  fixedAssetCodeRange: { start: string; end: string };
  assetNumberRange: { start: string; end: string };
  selectedResourceCode: string;
  onResourceCodeChange: (code: string) => void;
};

// Define the FixedAssetForm component
const FixedAssetForm: React.FC<FixedAssetFormProps> = ({
  startDate,
  endDate,
  onFormSubmit,
  onFormClear,
  onFormExit,
  fixedAssetCodeRange,
  assetNumberRange,
  selectedResourceCode,
  onResourceCodeChange,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">固定資産除却一覧表作成</h1>
      <div className="mb-4">
        <label className="block font-bold">作表年月日</label>
        <span>{startDate} ~ {endDate}</span>
      </div>
      <div className="border p-4 rounded">
        <h2 className="font-bold text-lg mb-2">範囲指定</h2>
        
        <div className="mb-2">
          <label className="block">固定資産科目</label>
          <input
            type="text"
            className="border px-2 py-1"
            value={fixedAssetCodeRange.start}
            placeholder="開始"
          /> 
          <span> ~ </span>
          <input
            type="text"
            className="border px-2 py-1"
            value={fixedAssetCodeRange.end}
            placeholder="終了"
          />
        </div>

        <div className="mb-2">
          <label className="block">資産番号</label>
          <input
            type="text"
            className="border px-2 py-1"
            value={assetNumberRange.start}
            placeholder="開始"
          /> 
          <span> ~ </span>
          <input
            type="text"
            className="border px-2 py-1"
            value={assetNumberRange.end}
            placeholder="終了"
          />
        </div>

        <div className="mb-4">
          <label className="block">財源コード</label>
          <select
            className="border px-2 py-1"
            value={selectedResourceCode}
            onChange={(e) => onResourceCodeChange(e.target.value)}
          >
            <option value="01">01</option>
            <option value="06">06</option>
            {/* Add more options if needed */}
          </select>
        </div>
      </div>
      
      <div className="flex justify-end mt-4">
        <button onClick={onFormExit} className="bg-gray-300 px-4 py-2 rounded mr-2">終了</button>
        <button onClick={onFormClear} className="bg-yellow-300 px-4 py-2 rounded mr-2">クリア</button>
        <button onClick={onFormSubmit} className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
      </div>
    </div>
  );
};

export default FixedAssetForm;
```