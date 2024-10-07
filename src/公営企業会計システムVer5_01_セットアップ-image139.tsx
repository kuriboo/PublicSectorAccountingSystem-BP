// components/BankBranchList.tsx

import React, { useState } from 'react';

type BankBranchListProps = {
  onSubmit: (startCode: string, endCode: string, output: boolean) => void;
};

const BankBranchList: React.FC<BankBranchListProps> = ({ onSubmit }) => {
  const [startCode, setStartCode] = useState<string>('0000');
  const [endCode, setEndCode] = useState<string>('9999');
  const [output, setOutput] = useState<boolean>(true);

  const handleSubmit = () => {
    onSubmit(startCode, endCode, output);
  };

  return (
    <div className="p-4 border rounded shadow-lg">
      <h1 className="text-xl font-bold mb-4">銀行／支店マスタリスト作成</h1>
      <div className="border p-4 mb-4">
        <h2 className="text-lg mb-2">範囲指定</h2>
        <div className="flex mb-4">
          <label className="mr-2">銀行</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 mr-2"
            value={startCode}
            onChange={(e) => setStartCode(e.target.value)}
          />
          <span className="mr-2">~</span>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1"
            value={endCode}
            onChange={(e) => setEndCode(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <span className="mr-2">支店コード</span>
          <label className="mr-4">
            <input
              type="radio"
              name="output"
              checked={output}
              onChange={() => setOutput(true)}
              className="mr-1"
            />
            出力する
          </label>
          <label>
            <input
              type="radio"
              name="output"
              checked={!output}
              onChange={() => setOutput(false)}
              className="mr-1"
            />
            出力しない
          </label>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={() => {
            setStartCode('0000');
            setEndCode('9999');
            setOutput(true);
          }}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={() => {
            console.log('終了');
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BankBranchList;
```