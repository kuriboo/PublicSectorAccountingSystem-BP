import React from 'react';

// プロパティの型定義
type IncomeStatusProps = {
  monthLabel: string;
  taxOptions: { value: string; label: string }[];
  onTaxChange: (value: string) => void;
};

// コンポーネント定義
const IncomeStatus: React.FC<IncomeStatusProps> = ({ monthLabel, taxOptions, onTaxChange }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-lg">
      <div className="text-xl font-bold text-purple-600 mb-2">料金体系別収入状況作成</div>
      <div className="bg-white p-6 rounded-md border border-gray-400">
        <div className="font-semibold text-blue-700">範囲指定</div>
        <div className="mt-4">
          <label className="block mb-2">作表月</label>
          <input
            type="text"
            value={monthLabel}
            readOnly
            className="border p-2 rounded w-full"
          />
        </div>
        <fieldset className="mt-4">
          <legend>税区分</legend>
          {taxOptions.map((option) => (
            <div key={option.value} className="flex items-center mt-2">
              <input
                type="radio"
                id={option.value}
                name="taxOption"
                value={option.value}
                onChange={() => onTaxChange(option.value)}
                className="mr-2"
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </fieldset>
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded">OK</button>
        <button className="bg-gray-200 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-200 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default IncomeStatus;
