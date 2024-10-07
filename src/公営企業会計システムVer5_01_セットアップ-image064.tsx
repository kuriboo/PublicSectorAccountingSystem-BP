import React from 'react';

type Props = {
  fiscalYear: number;
  onFiscalYearChange: (year: number) => void;
  startNumber: number;
  endNumber: number;
  onStartNumberChange: (number: number) => void;
  onEndNumberChange: (number: number) => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AccountingFileList: React.FC<Props> = ({
  fiscalYear,
  onFiscalYearChange,
  startNumber,
  endNumber,
  onStartNumberChange,
  onEndNumberChange,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">会計日計表ファイルリスト作成</h1>
      
      <div className="mb-4">
        <label className="mr-2">年度</label>
        <input
          type="number"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(Number(e.target.value))}
          className="border rounded px-2 py-1"
        />
      </div>
      
      <div className="mb-4 border p-2 rounded">
        <h2 className="text-lg font-bold mb-2">範囲指定</h2>
        
        <div className="flex items-center">
          <label className="mr-2">集計番号</label>
          <input
            type="number"
            value={startNumber}
            onChange={(e) => onStartNumberChange(Number(e.target.value))}
            className="border rounded px-2 py-1 mr-2"
          />
          <span className="mx-2">~</span>
          <input
            type="number"
            value={endNumber}
            onChange={(e) => onEndNumberChange(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingFileList;
```