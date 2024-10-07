// Import necessary modules
import React from 'react';

// Define the properties for the component
type AppFormProps = {
  startCode: string;
  endCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Define the main functional component
const AppForm: React.FC<AppFormProps> = ({ startCode, endCode, onSubmit, onClear, onExit }) => {
  return (
    <div className="max-w-md mx-auto my-10 p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">アプリケーションマスタリスト作成</h2>
      <div className="mb-4 border-b pb-2">
        <div className="flex items-center justify-between">
          <label className="font-bold">範囲指定</label>
        </div>
        <div className="flex items-center justify-between mt-2">
          <label className="mr-2">APグループコード</label>
          <input 
            type="text" 
            value={startCode} 
            className="border p-1 text-center" 
            readOnly 
          />
          <span className="mx-2">~</span>
          <input 
            type="text" 
            value={endCode} 
            className="border p-1 text-center"
            readOnly 
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onSubmit} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button 
          onClick={onExit} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AppForm;
