import React from 'react';

// プロパティの型定義
type ShiwakeFormProps = {
  startDate: string;
  endDate: string;
  summaryTarget: '全体' | 'ブロック' | 'セグメント';
  segmentOptions: { value: string; label: string }[];
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ShiwakeForm: React.FC<ShiwakeFormProps> = ({
  startDate,
  endDate,
  summaryTarget,
  segmentOptions,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">範囲指定</h1>
      <div className="mb-4">
        <label className="mr-4">
          <input type="checkbox" defaultChecked />
          振替分
        </label>
        <label className="mr-4">
          <input type="checkbox" defaultChecked />
          調定分
        </label>
        <label>
          <input type="checkbox" defaultChecked />
          支払分
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">日付</label>
        <input
          type="text"
          value={startDate}
          className="border p-2 mr-2 rounded"
        />
        ～
        <input
          type="text"
          value={endDate}
          className="border p-2 ml-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">集計対象</label>
        <div className="flex items-center mb-2">
          <label className="mr-4">
            <input
              type="radio"
              value="全体"
              checked={summaryTarget === '全体'}
              className="mr-1"
            />
            全体
          </label>
          <label className="mr-4">
            <input
              type="radio"
              value="ブロック"
              checked={summaryTarget === 'ブロック'}
              className="mr-1"
            />
            ブロック
          </label>
          <label>
            <input
              type="radio"
              value="セグメント"
              checked={summaryTarget === 'セグメント'}
              className="mr-1"
            />
            セグメント
          </label>
        </div>
        <select className="border p-2 rounded">
          {segmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-4">
        <button onClick={onConfirm} className="bg-blue-500 text-white p-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 p-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-gray-300 p-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ShiwakeForm;
