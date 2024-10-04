import React from 'react';

interface DataEntryProps {
  date: string;
  year: string;
  storageNumber: number;
  management: string;
  location: string;
  department: string;
  budgetAmount: number;
  burdenTotal: number;
  estimatedTotal: number;
  description: string;
  totalAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const DataEntryComponent: React.FC<DataEntryProps> = ({
  date,
  year,
  storageNumber,
  management,
  location,
  department,
  budgetAmount,
  burdenTotal,
  estimatedTotal,
  description,
  totalAmount,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold">新規出庫入力（移動平均）</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        <div>
          <label className="block">出庫年月日</label>
          <input className="border p-1" type="text" value={date} readOnly />
        </div>
        <div>
          <label className="block">年度</label>
          <input className="border p-1" type="text" value={year} readOnly />
        </div>
        <div>
          <label className="block">出庫番号</label>
          <input className="border p-1 w-12" type="number" value={storageNumber} readOnly />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <div>
            <label className="block">保管場所</label>
            <input className="border p-1" type="text" value={management} readOnly />
          </div>
          <div>
            <label className="block">予算現額</label>
            <input className="border p-1 w-24" type="number" value={budgetAmount} readOnly />
          </div>
          <div>
            <label className="block">負担累計</label>
            <input className="border p-1 w-24" type="number" value={burdenTotal} readOnly />
          </div>
          <div>
            <label className="block">予定累計</label>
            <input className="border p-1 w-24" type="number" value={estimatedTotal} readOnly />
          </div>
        </div>

        <div className="mt-2">
          <label className="block">所管節</label>
          <input className="border p-1 w-full" type="text" value={department} readOnly />
        </div>
        <div className="mt-2">
          <label className="block">工事名場所</label>
          <input className="border p-1 w-full" type="text" value={location} readOnly />
        </div>
        <div className="mt-2">
          <label className="block">摘要</label>
          <input className="border p-1 w-full" type="text" value={description} readOnly />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <div>
          <label className="block font-bold">金額合計</label>
          <input className="border p-1 w-32" type="number" value={totalAmount} readOnly />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white p-2 rounded" onClick={onSubmit}>OK</button>
        <button className="bg-gray-200 text-black p-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white p-2 rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default DataEntryComponent;