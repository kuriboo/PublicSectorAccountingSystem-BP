import React from 'react';

type FormProps = {
  budgetType: 'budget' | 'process';
  subjectCode: string;
  subjectName: string;
  amountCategory: string;
  amountValue: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  budgetType,
  subjectCode,
  subjectName,
  amountCategory,
  amountValue,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">マスタ区分</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="budgetType"
            value="budget"
            checked={budgetType === 'budget'}
            className="mr-2"
          />
          <label className="mr-4">予算</label>
          <input
            type="radio"
            name="budgetType"
            value="process"
            checked={budgetType === 'process'}
            className="mr-2"
          />
          <label>仕訳</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">科目コード</label>
        <input
          type="text"
          value={subjectCode}
          className="w-full p-2 border rounded bg-purple-100"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">科目名称</label>
        <input
          type="text"
          value={subjectName}
          className="w-full p-2 border rounded bg-purple-100"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">金額区分</label>
        <select
          value={amountCategory}
          className="w-full p-2 border rounded bg-blue-100"
        >
          <option value="01">01</option>
          <option value="執行額">執行額</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
