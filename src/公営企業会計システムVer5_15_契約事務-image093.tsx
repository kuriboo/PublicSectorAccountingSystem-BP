import React from 'react';

type Props = {
  year: string;
  acceptanceType: '工事' | '委託' | '物品';
  extractType: '新規' | '再抽出';
  startId: string;
  endId: string;
  onDisplay: () => void;
  onOK: () => void;
  onClear: () => void;
  onExit: () => void;
};

const DataExtractionComponent: React.FC<Props> = ({
  year,
  acceptanceType,
  extractType,
  startId,
  endId,
  onDisplay,
  onOK,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="border-b-2 pb-2 mb-4">
        <h2 className="text-xl font-bold text-blue-600">案件情報抽出処理</h2>
        <div className="mt-2">
          <label className="mr-2">年度:</label>
          <span>{year}</span>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">受付区分</h3>
        <label className="mr-4">{acceptanceType}</label>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">抽出区分</h3>
        <label className="mr-4">{extractType}</label>
      </div>
      <div className="mb-4">
        <label className="mr-2">受付番号</label>
        <input
          type="text"
          className="border rounded px-2 py-1"
          value={startId}
          readOnly
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          className="border rounded px-2 py-1"
          value={endId}
          readOnly
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={onDisplay}
        >
          表示
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          onClick={onOK}
        >
          OK
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DataExtractionComponent;
```