```tsx
import React from 'react';

type DecisionMakerProps = {
  fiscalYear: string;
  code: string;
  name1: string;
  name2: string;
  onCodeChange: (value: string) => void;
  onName1Change: (value: string) => void;
  onName2Change: (value: string) => void;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const DecisionMaker: React.FC<DecisionMakerProps> = ({
  fiscalYear,
  code,
  name1,
  name2,
  onCodeChange,
  onName1Change,
  onName2Change,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">決裁合議者マスタ</h2>
      
      <form className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">会計年度</label>
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="w-full border rounded px-2 py-1"
          />
        </div>
        
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">決裁合議者コード</label>
          <input
            type="text"
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">名称1</label>
          <input
            type="text"
            value={name1}
            onChange={(e) => onName1Change(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">名称2</label>
          <input
            type="text"
            value={name2}
            onChange={(e) => onName2Change(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>
      </form>
      
      <div className="flex space-x-2 mb-4">
        <button
          onClick={onRegister}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        >
          登録
        </button>
        <button
          onClick={onEdit}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded"
        >
          編集
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default DecisionMaker;
```