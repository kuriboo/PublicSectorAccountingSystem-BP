import React from 'react';

// TypeScript interface for component props
interface ReleaseConfirmationProps {
  year: string;
  budgetSection: string;
  count: number;
  confirmedDate: string;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReleaseConfirmation: React.FC<ReleaseConfirmationProps> = ({
  year,
  budgetSection,
  count,
  confirmedDate,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">予算確定解除</h1>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">解除情報</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">年度</label>
            <input 
              type="text" 
              value={year} 
              disabled 
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">予算編成区分</label>
            <select 
              value={budgetSection} 
              disabled 
              className="border rounded p-2 w-full"
            >
              <option value="3">補正</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">回数</label>
            <input 
              type="number" 
              value={count} 
              disabled 
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">確定日</label>
            <input 
              type="text" 
              value={confirmedDate} 
              disabled 
              className="border p-2 w-full rounded"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">処理概要</h2>
        <p>指定した予算確定情報を解除します。</p>
        <p>これにより、予算現額に該当予算額が含まれなくなります。</p>
        <p>再度登録をする場合は「予算確定登録」にて行います。</p>
      </div>
      <div className="flex justify-end gap-2">
        <button 
          onClick={onConfirm} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-300 px-4 py-2 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onClose} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReleaseConfirmation;
