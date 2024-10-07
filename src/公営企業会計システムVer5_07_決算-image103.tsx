import React from 'react';

interface RevenueInputProps {
  title: string;
  revenueName: string;
  totalRevenue: number;
  breakdown: {
    clause3: number;
    clause4: number;
    other: number;
  };
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const RevenueInput: React.FC<RevenueInputProps> = ({
  title,
  revenueName,
  totalRevenue,
  breakdown,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border border-gray-200">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="mt-4">
        <div>特定収入項目名称: {revenueName}</div>
        <div>特定収入額: {totalRevenue.toLocaleString()} 円</div>
        <div className="mt-2">
          <div>内訳</div>
          <div>3条: {breakdown.clause3.toLocaleString()} 円</div>
          <div>4条: {breakdown.clause4.toLocaleString()} 円</div>
          <div>その他: {breakdown.other.toLocaleString()} 円</div>
        </div>
      </div>

      {/* Example for budget classification */}
      <div className="mt-4">
        <label className="mr-2">
          <input type="radio" name="budget" id="clause3" /> 3条
        </label>
        <label className="mr-2">
          <input type="radio" name="budget" id="clause4" /> 4条
        </label>
        <label>
          <input type="radio" name="budget" id="other" /> その他
        </label>
      </div>

      {/* Example for input fields */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <div>10.00%(2.20%)</div>
          <input type="number" className="w-full border border-gray-300 p-1" />
        </div>
        <div>
          <div>8.00%(1.76%)</div>
          <input type="number" className="w-full border border-gray-300 p-1" />
        </div>
        <div>
          <div>8.00%(1.70%)</div>
          <input type="number" className="w-full border border-gray-300 p-1" />
        </div>
        <div>
          <div>5.00%(1.00%)</div>
          <input type="number" className="w-full border border-gray-300 p-1" />
        </div>
        <div>
          <div>3.00%(0.00%)</div>
          <input type="number" className="w-full border border-gray-300 p-1" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white mr-2">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black mr-2">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 text-black">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default RevenueInput;
```