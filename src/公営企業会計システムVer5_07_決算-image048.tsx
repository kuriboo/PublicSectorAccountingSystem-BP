import React from 'react';

// Define the props for the component
interface MasterListProps {
  date: string; // Date string, e.g., "平成29年08月04日"
  minCode: number; // Minimum code
  maxCode: number; // Maximum code
  onOk: () => void; // OK button click handler
  onClear: () => void; // Clear button click handler
  onClose: () => void; // Close button click handler
}

const MasterList: React.FC<MasterListProps> = ({ 
  date, 
  minCode, 
  maxCode, 
  onOk, 
  onClear, 
  onClose 
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white border rounded-lg">
      {/* Title Section */}
      <div className="text-lg font-bold bg-purple-200 p-2 rounded-t-lg">
        要素マスタリスト作成
      </div>

      {/* Date and Code Range Inputs Section */}
      <div className="border p-4 mt-2">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">作表日</label>
          <span className="block bg-blue-100 p-2 rounded">{date}</span>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">要素コード</label>
          <div className="flex space-x-2">
            <span className="block bg-blue-100 p-2 rounded">{minCode}</span>
            <span className="text-lg">~</span>
            <span className="block bg-blue-100 p-2 rounded">{maxCode}</span>
          </div>
        </div>
      </div>

      {/* Process Summary Section */}
      <div className="border p-4 mt-2">
        <div className="text-sm">
          要素マスタ入力内容チェックリストを作成します。
        </div>
      </div>

      {/* Button Section */}
      <div className="flex mt-4 justify-end space-x-2">
        <button 
          onClick={onOk} 
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onClose} 
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterList;