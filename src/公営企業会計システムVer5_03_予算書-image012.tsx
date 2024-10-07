import React from 'react';

type FormComponentProps = {
  year: string;
  budgetDivision: string;
  times: number;
  amountType: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  year,
  budgetDivision,
  times,
  amountType,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-2xl text-center mb-4">予定損益貸借集計処理</h1>
      
      <div className="mb-4">
        <label className="block mb-1">年度</label>
        <input
          type="text"
          defaultValue={year}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-1">予算種成区分</label>
        <select
          defaultValue={budgetDivision}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="決算見込">決算見込</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">回数</label>
        <input
          type="number"
          defaultValue={times}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">金額種別</label>
        <input
          type="text"
          defaultValue={amountType}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex space-x-2 mt-4">
        <button
          onClick={onSubmit}
          className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="flex-1 p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="flex-1 p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
