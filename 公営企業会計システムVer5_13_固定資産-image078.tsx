```tsx
import React from 'react';

type DateRange = {
  start: string;
  end: string;
};

type AssetFormProps = {
  titleDate: string;
  departmentInfo: string;
  assetCategoryRange: DateRange;
  assetNumberRange: DateRange;
  acquisitionDateRange: DateRange;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AssetForm: React.FC<AssetFormProps> = ({
  titleDate,
  departmentInfo,
  assetCategoryRange,
  assetNumberRange,
  acquisitionDateRange,
  onOk,
  onClear,
  onClose,
}) => (
  <div className="p-4 bg-white shadow-md rounded-md">
    <div className="text-center">
      <h1 className="text-xl font-bold">固定資産償却履歴一覧表作成</h1>
      <p>{`作表年月日 ${titleDate}`}</p>
      <p>{departmentInfo}</p>
    </div>

    <div className="mt-4 border p-4">
      <h2 className="font-bold text-blue-800">範囲指定</h2>
      
      <div className="mt-2">
        <label>固定資産科目</label>
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            value={assetCategoryRange.start} 
            className="border rounded p-1 w-1/2" 
            readOnly
          />
          <span>~</span>
          <input 
            type="text" 
            value={assetCategoryRange.end} 
            className="border rounded p-1 w-1/2" 
            readOnly
          />
        </div>
      </div>

      <div className="mt-2">
        <label>資産番号</label>
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            value={assetNumberRange.start} 
            className="border rounded p-1 w-1/2" 
            readOnly
          />
          <span>~</span>
          <input 
            type="text" 
            value={assetNumberRange.end} 
            className="border rounded p-1 w-1/2"
            readOnly 
          />
        </div>
      </div>

      <div className="mt-2">
        <label>取得年月日</label>
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            value={acquisitionDateRange.start} 
            className="border rounded p-1 w-1/2" 
            readOnly
          />
          <span>~</span>
          <input 
            type="text" 
            value={acquisitionDateRange.end} 
            className="border rounded p-1 w-1/2"
            readOnly 
          />
        </div>
      </div>
    </div>

    <div className="mt-4 flex justify-end space-x-4">
      <button 
        onClick={onOk} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        OK
      </button>
      <button 
        onClick={onClear} 
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        クリア
      </button>
      <button 
        onClick={onClose} 
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        終了
      </button>
    </div>
  </div>
);

export default AssetForm;
```