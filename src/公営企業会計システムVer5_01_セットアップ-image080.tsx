import React from 'react';

type BudgetItemProps = {
  title: string;
  code: string;
  description: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetItemEditor: React.FC<BudgetItemProps> = ({ title, code, description, onOk, onClear, onCancel }) => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded border">
      <div className="bg-blue-500 text-white p-2 rounded-t">
        {title}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <button className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-l">
            予算科目
          </button>
          <input
            type="text"
            value={code}
            readOnly
            className="border border-gray-300 rounded-r px-2 py-1 outline-none"
          />
          <span className="ml-3">{description}</span>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onOk}
          >
            OK
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onClear}
          >
            クリア
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onCancel}
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetItemEditor;
