import React from 'react';

type InputFormProps = {
  集計番号: number;
  項目名称1: string;
  金額印字区分: number;
  改行区分: number;
  インデント: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// コンポーネント定義
const InputForm: React.FC<InputFormProps> = ({
  集計番号,
  項目名称1,
  金額印字区分,
  改行区分,
  インデント,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg max-w-lg mx-auto">
      {/* 集計番号 */}
      <div className="mb-4">
        <label className="block text-gray-700">集計番号</label>
        <span className="text-black">{集計番号}</span>
      </div>
      
      {/* 項目名称1 */}
      <div className="mb-4">
        <label className="block text-gray-700">項目名称1</label>
        <input
          type="text"
          value={項目名称1}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      {/* 金額印字区分 */}
      <div className="mb-4">
        <label className="block text-gray-700">金額印字区分</label>
        <select className="mt-1 p-2 border rounded w-full">
          <option value={1}>名称印字・金額0印字</option>
        </select>
      </div>

      {/* 改行区分 */}
      <div className="mb-4">
        <label className="block text-gray-700">改行区分</label>
        <select className="mt-1 p-2 border rounded w-full">
          <option value={1}>1行改行</option>
        </select>
      </div>

      {/* インデント */}
      <div className="mb-4">
        <label className="block text-gray-700">インデント</label>
        <input
          type="number"
          value={インデント}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      {/* 帳票出力無し */}
      <div className="mb-4">
        <label className="block text-gray-700">
          <input type="checkbox" className="mr-2" />
          帳票出力無し
        </label>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-200 text-black rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InputForm;