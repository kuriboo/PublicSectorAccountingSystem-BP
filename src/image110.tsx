// Import required libraries
import React from 'react';

// Define the prop types for the component
type AccountingFormProps = {
  minAssetCode?: string;
  maxAssetCode?: string;
  minAssetNumber?: number;
  maxAssetNumber?: number;
  departmentOptions?: string[];
  accountDivisionOptions?: string[];
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Define the AccountingForm component
const AccountingForm: React.FC<AccountingFormProps> = ({
  minAssetCode = '',
  maxAssetCode = '',
  minAssetNumber = 0,
  maxAssetNumber = 0,
  departmentOptions = [],
  accountDivisionOptions = [],
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">会計区分一括変換</h1>
      
      <div className="border p-4 mb-6">
        <h2 className="font-bold mb-2">範囲指定</h2>
        
        <div className="mb-4">
          <label className="block">固定資産科目</label>
          <input
            type="text"
            defaultValue={minAssetCode}
            className="border w-32 mr-2 px-2 py-1"
          />
          <span>~</span>
          <input
            type="text"
            defaultValue={maxAssetCode}
            className="border ml-2 w-32 px-2 py-1"
          />
        </div>
        
        <div className="mb-4">
          <label className="block">資産番号</label>
          <input
            type="number"
            defaultValue={minAssetNumber}
            className="border w-32 mr-2 px-2 py-1"
          />
          <span>~</span>
          <input
            type="number"
            defaultValue={maxAssetNumber}
            className="border ml-2 w-32 px-2 py-1"
          />
        </div>
        
        <div>
          <label className="block">部門</label>
          <select className="border w-48 px-2 py-1">
            {departmentOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">会計区分</h2>
        
        <div>
          <select className="border w-48 px-2 py-1 mr-2">
            {accountDivisionOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>→</span>
          <select className="border ml-2 w-48 px-2 py-1">
            {accountDivisionOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
```