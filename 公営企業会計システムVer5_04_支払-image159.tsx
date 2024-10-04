import React from 'react';

// Propsの型定義
type KaikeiComponentProps = {
  workDate: string;
  decisionDateStart: string;
  decisionDateEnd: string;
  affiliationStart: string;
  affiliationEnd: string;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
};

// 再利用可能なNext.js + TypeScriptコンポーネント
const KaikeiComponent: React.FC<KaikeiComponentProps> = ({
  workDate,
  decisionDateStart,
  decisionDateEnd,
  affiliationStart,
  affiliationEnd,
  onOk,
  onClear,
  onFinish
}) => {
  return (
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">資金 前渡末振替 一覧表作成</h2>
      <div className="border p-4 bg-gray-100 rounded">
        <h3 className="text-lg font-semibold mb-2">範囲指定</h3>
        <div className="mb-4">
          <label className="block font-bold">作表現在日</label>
          <input
            type="text"
            value={workDate}
            readOnly
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">支出決定日</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={decisionDateStart}
              readOnly
              className="w-1/2 p-2 border rounded"
            />
            <span className="my-auto">~</span>
            <input
              type="text"
              value={decisionDateEnd}
              readOnly
              className="w-1/2 p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-bold">所属</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={affiliationStart}
              readOnly
              className="w-1/2 p-2 border rounded"
            />
            <span className="my-auto">~</span>
            <input
              type="text"
              value={affiliationEnd}
              readOnly
              className="w-1/2 p-2 border rounded"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default KaikeiComponent;