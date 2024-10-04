```tsx
import React from 'react';

interface CalculationFormProps {
  collectionNumber: string;
  reservationNumber: string;
  calculationDivision: string;
  divisionOptions: string[];
  provisionDivision: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

export const CalculationForm: React.FC<CalculationFormProps> = ({
  collectionNumber,
  reservationNumber,
  calculationDivision,
  divisionOptions,
  provisionDivision,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-96">
      <div className="mb-2">
        <label className="block text-blue-600 font-bold mb-1">集計先行番号</label>
        <input
          type="text"
          value={collectionNumber}
          className="border p-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="block text-blue-600 font-bold mb-1">予備行番号</label>
        <input
          type="text"
          value={reservationNumber}
          className="border p-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="block text-blue-600 font-bold mb-1">計算区分</label>
        <div className="flex">
          <input
            type="text"
            value={calculationDivision}
            className="border p-1 w-12 mr-2"
            readOnly
          />
          <select className="border p-1 flex-1">
            {divisionOptions.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-blue-600 font-bold mb-1">予備区分</label>
        <input
          type="text"
          value={provisionDivision}
          className="border p-1 w-full"
          readOnly
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={onConfirm}
          className="bg-gray-400 text-white py-1 px-4 rounded">
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-400 text-white py-1 px-4 rounded">
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-400 text-white py-1 px-4 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};
```