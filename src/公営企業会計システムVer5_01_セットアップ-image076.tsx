import React from 'react';

// 定義するプロパティの型
type EditorFormProps = {
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
  areaCode: string;
  areaNumber: string;
  operationType: 'add' | 'subtract';
  setAreaCode: (value: string) => void;
  setAreaNumber: (value: string) => void;
  setOperationType: (value: 'add' | 'subtract') => void;
}

const EditorForm: React.FC<EditorFormProps> = ({
  onOk,
  onClear,
  onCancel,
  areaCode,
  areaNumber,
  operationType,
  setAreaCode,
  setAreaNumber,
  setOperationType,
}) => {
  return (
    <div className="bg-blue-200 p-4 w-80">
      <h2 className="text-lg font-bold mb-2">対照編集</h2>
      <div>
        <label className="block text-blue-800 mb-1">集計先区分</label>
        <input 
          type="text" 
          value={areaCode} 
          onChange={(e) => setAreaCode(e.target.value)}
          className="border border-gray-300 p-1 mb-2 w-full"
        />
      </div>
      <div>
        <label className="block text-blue-800 mb-1">集計先番号</label>
        <input 
          type="text" 
          value={areaNumber} 
          onChange={(e) => setAreaNumber(e.target.value)}
          className="border border-gray-300 p-1 mb-2 w-full"
        />
      </div>
      <div>
        <label className="block text-blue-800 mb-1">加減区分</label>
        <div className="flex items-center mb-3">
          <label className="mr-2 flex items-center">
            <input 
              type="radio" 
              checked={operationType === 'add'} 
              onChange={() => setOperationType('add')}
              className="mr-1"
            />
            +
          </label>
          <label className="flex items-center">
            <input 
              type="radio" 
              checked={operationType === 'subtract'} 
              onChange={() => setOperationType('subtract')}
              className="mr-1"
            />
            -
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <button 
          onClick={onOk} 
          className="bg-gray-400 text-white px-4 py-2 hover:bg-gray-500">
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-400 text-white px-4 py-2 hover:bg-gray-500">
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="bg-gray-400 text-white px-4 py-2 hover:bg-gray-500">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default EditorForm;
