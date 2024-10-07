import React from 'react';

// TypeScriptの型定義
interface EmployeeCodeFormProps {
  minCode?: string;
  maxCode?: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const EmployeeCodeForm: React.FC<EmployeeCodeFormProps> = ({
  minCode = "00000",
  maxCode = "99999",
  onOk,
  onClear,
  onClose
}) => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="bg-purple-200 rounded-t p-2 text-center">
        <h1 className="text-xl font-bold">職員マスタリスト作成</h1>
      </div>
      <div className="border p-4">
        <div className="mb-4">
          <label className="block text-blue-900 font-medium mb-2">範囲指定</label>
          <div className="flex items-center">
            <span className="text-blue-900 mx-2">職員コード</span>
            <input 
              type="text" 
              defaultValue={minCode} 
              className="border rounded px-2 py-1 text-center mx-1 w-20"
            />
            <span className="mx-2">~</span>
            <input 
              type="text" 
              defaultValue={maxCode} 
              className="border rounded px-2 py-1 text-center mx-1 w-20"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button 
            onClick={onOk} 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 rounded"
          >
            OK
          </button>
          <button 
            onClick={onClear} 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 rounded"
          >
            クリア
          </button>
          <button 
            onClick={onClose} 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 rounded"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCodeForm;
```