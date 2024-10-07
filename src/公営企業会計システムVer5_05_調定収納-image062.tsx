import React from 'react';

// TypeScript型定義
type DepositInputProps = {
  fiscalYear: string;
  calculationDate: string;
  amount: number;
  description: string;
  onChangeYear: (year: string) => void;
  onChangeDate: (date: string) => void;
  onChangeAmount: (amount: number) => void;
  onChangeDescription: (description: string) => void;
  onSubmit: () => void;
  onReset: () => void;
  onExit: () => void;
};

// Next.js + TypeScriptコンポーネント
const DepositInput: React.FC<DepositInputProps> = ({
  fiscalYear,
  calculationDate,
  amount,
  description,
  onChangeYear,
  onChangeDate,
  onChangeAmount,
  onChangeDescription,
  onSubmit,
  onReset,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">前受金振替入力</h2>

      <div className="mb-2">
        <label className="block mb-1">年度</label>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e) => onChangeYear(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">精算日</label>
        <input
          type="text"
          value={calculationDate}
          onChange={(e) => onChangeDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">精算残額</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onChangeAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">摘要</label>
        <input
          type="text"
          value={description}
          onChange={(e) => onChangeDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="flex space-x-2 mt-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DepositInput;
