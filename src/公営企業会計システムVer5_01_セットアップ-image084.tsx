import React from 'react';

// TypeScriptの型定義
type Props = {
  serialNumber: number;
  itemName: string;
  lineBreakType: number;
  indent: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const EditModal: React.FC<Props> = ({
  serialNumber,
  itemName,
  lineBreakType,
  indent,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md w-96">
      <div className="mb-4">
        <label className="block text-gray-700">集計番号</label>
        <input
          type="number"
          value={serialNumber}
          disabled
          className="border w-full px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">項目名称</label>
        <input
          type="text"
          value={itemName}
          className="border w-full px-2 py-1"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">改行区分</label>
        <select
          value={lineBreakType}
          className="border w-full px-2 py-1"
        >
          <option value={1}>1行改行</option>
          <option value={2}>2行改行</option>
          {/* 他のオプションも追加可能 */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">インデント</label>
        <input
          type="number"
          value={indent}
          className="border w-full px-2 py-1"
          readOnly
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="py-1 px-3 bg-blue-500 text-white rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="py-1 px-3 bg-gray-500 text-white rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="py-1 px-3 bg-red-500 text-white rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default EditModal;
