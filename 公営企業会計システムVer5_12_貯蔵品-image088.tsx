```tsx
import React from 'react';

type DataReplicationComponentProps = {
  currentYear: string;
  newYear: string;
  currentEra: string;
  newEra: string;
  lastUpdate: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const DataReplicationComponent: React.FC<DataReplicationComponentProps> = ({
  currentYear,
  newYear,
  currentEra,
  newEra,
  lastUpdate,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-6 bg-purple-100 rounded-lg shadow-md">
      <h1 className="text-xl mb-4">当年度単価分類データ複写</h1>
      <div className="flex mb-4">
        <span className="mr-4">本年度</span>
        <span className="font-semibold">{currentEra} {currentYear}</span>
        <span className="mx-4">年度</span>
        <span className="mr-4">新年度</span>
        <span className="font-semibold">{newEra} {newYear}</span>
        <span className="mx-4">年度</span>
      </div>
      <div className="border p-4 mb-4">
        <h2 className="font-bold mb-2">処理概要</h2>
        <p className="mb-2">
          本年度の貯蔵品単価分類データ内容を新年度に複写します。
        </p>
        <ul className="list-disc pl-5">
          <li>貯蔵品単価分類マスタ</li>
          <li>単価コード貯蔵品番号対応表</li>
        </ul>
        <p className="mt-2 text-sm">
          ※最終更新日時: {lastUpdate}
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DataReplicationComponent;
```