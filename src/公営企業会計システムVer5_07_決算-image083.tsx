// components/IncomeEntryForm.tsx
import React from 'react';

interface IncomeEntryFormProps {
  incomeName: string;
  totalAmount: number;
  breakdown: {
    clause3: number;
    clause4: number;
    others: number;
  };
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const IncomeEntryForm: React.FC<IncomeEntryFormProps> = ({
  incomeName,
  totalAmount,
  breakdown,
  onSubmit,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-lg">
      <h3 className="text-xl mb-4 font-semibold">{incomeName}</h3>
      <div className="mb-4">
        <div className="flex justify-between">
          <span>特定収入額:</span>
          <span>{totalAmount.toLocaleString()} 円</span>
        </div>
        <div className="ml-4">
          <div className="flex justify-between">
            <span>3条:</span>
            <span>{breakdown.clause3.toLocaleString()} 円</span>
          </div>
          <div className="flex justify-between">
            <span>4条:</span>
            <span>{breakdown.clause4.toLocaleString()} 円</span>
          </div>
          <div className="flex justify-between">
            <span>その他:</span>
            <span>{breakdown.others.toLocaleString()} 円</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 mb-4">
        <label htmlFor="budget-category" className="font-medium">予算区分</label>
        <select id="budget-category" className="border rounded p-1">
          <option value="3条">3条</option>
          <option value="4条">4条</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold">消費税率及び地方消費税率</h4>
          {[10, 8, 8, 5, 3].map((rate, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{rate}%</span>
              <input type="text" className="border rounded p-1" defaultValue="0" />
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold">課税仕入れ等に係る特定収入額</h4>
          {[10, 8, 8, 5, 3].map((rate, idx) => (
            <div key={idx} className="flex justify-between">
              <input type="text" className="border rounded p-1" defaultValue="0" />
              <span>円</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <span>合計</span>
        <span>0 円</span>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSubmit}>OK</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default IncomeEntryForm;
