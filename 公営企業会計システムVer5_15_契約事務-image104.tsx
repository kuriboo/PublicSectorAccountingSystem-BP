```tsx
import React from 'react';

// TypeScriptの型定義
interface FormProps {
  year: string;
  category: string;
  items: string[];
  onSelectAll: (selectAll: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const CustomForm: React.FC<FormProps> = ({ year, category, items, onSelectAll, onSubmit, onClear, onClose }) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      {/* ヘッダー */}
      <h1 className="text-xl font-bold mb-4">入札結果取込更新処理</h1>
      
      {/* フォーム部分 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <input 
          type="text" 
          value={year} 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          readOnly 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">受付区分</label>
        <input 
          type="text" 
          value={category} 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          readOnly 
        />
      </div>

      {/* アイテムリスト */}
      <div className="border border-gray-300 rounded-md p-2 mb-4 overflow-auto">
        <div className="flex items-center mb-2">
          <input 
            type="checkbox" 
            onChange={(e) => onSelectAll(e.target.checked)} 
            className="mr-2"
          />
          <span>全選択</span>
        </div>
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded" 
          onClick={onSubmit}
        >
          OK
        </button>
        <button 
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded" 
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded" 
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
```