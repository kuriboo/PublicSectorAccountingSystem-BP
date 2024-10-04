import React from 'react';

type TaxCalculationProps = {
  termStart: string;
  termEnd: string;
  previousTax: number;
  intermediatePayment: number;
  concessionalAmount: number;
  onCalculate: () => void;
};

const TaxCalculation: React.FC<TaxCalculationProps> = ({
  termStart,
  termEnd,
  previousTax,
  intermediatePayment,
  concessionalAmount,
  onCalculate,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Date Range */}
      <div className="mb-4">
        <h2 className="font-bold text-lg">範囲指定</h2>
        <p>課税期間: {termStart} ~ {termEnd}</p>
      </div>

      {/* Tax Calculation Method */}
      <div className="mb-4">
        <h2 className="font-bold text-lg">消費税計算方法</h2>
        <ul>
          <li>税額計算(仕入): 割戻計算</li>
          <li>税額計算(売上): 割戻計算</li>
          <li>仕入控除税額計算: 個別対応方式</li>
          <li>特定収入による仕入控除税額の調整: 必要</li>
        </ul>
      </div>

      {/* Intermediate Tax Amount */}
      <div className="mb-4">
        <h2 className="font-bold text-lg">中間納付額</h2>
        <div className="flex justify-between items-center mb-2">
          <span>前払消費税額</span>
          <span>{previousTax.toLocaleString()} 円</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>中間納付額</span>
          <input
            type="text"
            value={intermediatePayment.toLocaleString()}
            readOnly
            className="border p-1 w-40 text-right"
          /> 円
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>中間納付譲渡割額</span>
          <input
            type="text"
            value={concessionalAmount.toLocaleString()}
            readOnly
            className="border p-1 w-40 text-right"
          /> 円
        </div>
        <button
          onClick={onCalculate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          集計
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">終了</button>
      </div>
    </div>
  );
};

export default TaxCalculation;