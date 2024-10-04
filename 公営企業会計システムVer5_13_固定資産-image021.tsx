```tsx
// components/LandAssetForm.tsx

import React from 'react';

// TypeScript types for props
interface LandAssetFormProps {
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const LandAssetForm: React.FC<LandAssetFormProps> = ({ onSubmit, onClear, onCancel }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h1 className="text-xl font-bold text-purple-800">土地資産台帳作成</h1>
      <div className="mt-4">
        <label className="text-gray-700">作表年月日:</label>
        <div className="ml-4">平成29年08月11日</div>
      </div>
      <div className="mt-4 border-t pt-2">
        <h2 className="text-lg font-bold text-blue-800">範囲指定</h2>
        <div className="mt-2">
          <label className="text-gray-700">固定資産科目:</label>
          <input type="text" defaultValue="0000000" className="ml-2 border rounded-md p-1" />
          <span className="mx-2">~</span>
          <input type="text" defaultValue="9999999" className="border rounded-md p-1" />
        </div>
        <div className="mt-2">
          <label className="text-gray-700">資産番号:</label>
          <input type="text" defaultValue="0" className="ml-2 border rounded-md p-1" />
          <span className="mx-2">~</span>
          <input type="text" defaultValue="9999999999" className="border rounded-md p-1" />
        </div>
        <div className="mt-2">
          <label className="text-gray-700">取得年月日:</label>
          <input type="text" defaultValue="平成29年04月01日" className="ml-2 border rounded-md p-1" />
          <span className="mx-2">~</span>
          <input type="text" defaultValue="平成30年03月31日" className="border rounded-md p-1" />
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded shadow">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black py-1 px-4 rounded shadow">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white py-1 px-4 rounded shadow">
          終了
        </button>
      </div>
    </div>
  );
};

export default LandAssetForm;
```