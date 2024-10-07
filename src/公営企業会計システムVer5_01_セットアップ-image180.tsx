import React from 'react';

type ManagementMastaProps = {
  fiscalYear: string;
  reviewYearMonth: string;
  paymentDays: number;
  deliveryDays: number;
  fixedDepositAmount: number;
  onApply?: () => void;
  onClear?: () => void;
  onExit?: () => void;
};

const ManagementMasta: React.FC<ManagementMastaProps> = ({
  fiscalYear,
  reviewYearMonth,
  paymentDays,
  deliveryDays,
  fixedDepositAmount,
  onApply,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h1 className="text-lg font-bold mb-4">管理マスタ</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">
            当期会計年度:
            <input 
              type="text" 
              value={fiscalYear} 
              readOnly 
              className="ml-2 p-1 border rounded w-full" 
            />
          </label>
          <label className="block mt-2">
            監査終了年月:
            <input 
              type="text" 
              value={reviewYearMonth} 
              readOnly 
              className="ml-2 p-1 border rounded w-full" 
            />
          </label>
          
          <div className="mt-4">
            <span className="block font-bold">準備期間</span>
            <div className="flex justify-between mt-1">
              <label>
                支払:
                <input 
                  type="number" 
                  value={paymentDays} 
                  readOnly 
                  className="ml-2 p-1 border rounded w-16" 
                /> 日
              </label>
              <label>
                納入:
                <input 
                  type="number" 
                  value={deliveryDays} 
                  readOnly 
                  className="ml-2 p-1 border rounded w-16" 
                /> 日
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="block">
            奨励料金:
            <input 
              type="number" 
              value={fixedDepositAmount} 
              readOnly 
              className="ml-2 p-1 border rounded w-20" 
            /> 円
          </label>
        </div>
      </div>

      <div className="flex mt-6 space-x-2">
        <button 
          onClick={onApply} 
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
          onClick={onExit} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ManagementMasta;
