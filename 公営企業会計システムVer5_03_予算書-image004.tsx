```tsx
// 千円単位自動丸め処理.tsx
import React from 'react';

type AutoRoundingProps = {
  fiscalYear: string;
  budgetType: string;
  division: string;
  onRound: () => void;
  onAdjust: () => void;
};

export const AutoRounding: React.FC<AutoRoundingProps> = ({
  fiscalYear,
  budgetType,
  division,
  onRound,
  onAdjust,
}) => {
  return (
    <div className="p-4 border rounded-lg max-w-lg mx-auto">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">千円単位自動丸め処理</h1>

      {/* Auto Round Section */}
      <div className="shadow p-4 mb-4">
        <h2 className="font-semibold mb-2">自動丸め</h2>
        <p className="mb-2">
          指定した千円単位自動丸めを行います。年度、予算編成区分、回数（当初/補正）を指定して[自動丸めボタン]を押してください。
        </p>
        <div className="mb-2">
          <label className="mr-2">年度:</label>
          <select className="border p-1" value={fiscalYear}>
            <option>平成29</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-2">
          <label className="mr-2">予算編成区分:</label>
          <select className="border p-1" value={budgetType}>
            <option>当初予算</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-2">
          <label className="mr-2">回数:</label>
          <select className="border p-1" value={division}>
            <option>未選択</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={onRound}>
          自動丸め
        </button>
      </div>

      {/* Adjustment Section */}
      <div className="shadow p-4">
        <h2 className="font-semibold mb-2">仕訳金額調整</h2>
        <p className="mb-2">
          円単位と千円単位の仕訳金額を調整することができます。（省略可）
        </p>
        <div className="flex space-x-4 mb-4">
          <input className="border p-1 flex-1" placeholder="本体仕訳" />
          <input className="border p-1 flex-1" placeholder="消費税" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={onAdjust}>
          調整開始
        </button>
      </div>
    </div>
  );
};

export default AutoRounding;
```