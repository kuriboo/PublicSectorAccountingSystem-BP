import React from 'react';

// Prop types for the component
type TaxCalculationProps = {
  startDate: string;
  endDate: string;
  method1: string;
  method2: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const TaxCalculation: React.FC<TaxCalculationProps> = ({
  startDate,
  endDate,
  method1,
  method2,
  onConfirm,
  onCancel
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-purple-200 p-2 rounded mb-4">
        <h1 className="text-xl font-bold">調整前 課税仕入等額算出</h1>
      </div>
      <div className="border p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">範囲指定</h2>
        <div className="flex items-center justify-between">
          <span>課税期間</span>
          <span>{startDate} ～ {endDate}</span>
        </div>
      </div>
      <div className="border p-4">
        <h2 className="text-lg font-semibold mb-2">計算方法</h2>
        <div className="flex items-center justify-between mb-2">
          <span>税額計算(仕入)</span>
          <span>{method1}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>仕入控除税額計算</span>
          <span>{method2}</span>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button 
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default TaxCalculation;
