```tsx
import React, { useState } from 'react';

// 型定義
type CollectionFormProps = {
  initialCode?: string;
  onOk: (code: string) => void;
  onClear: () => void;
  onCancel: () => void;
};

// コンポーネント定義
const CollectionForm: React.FC<CollectionFormProps> = ({ initialCode = '', onOk, onClear, onCancel }) => {
  const [code, setCode] = useState(initialCode);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="code" className="block text-gray-700 text-sm font-bold mb-1">
          集計先番号
        </label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => onOk(code)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={() => { setCode(''); onClear(); }}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CollectionForm;
```