import React from 'react';

// TypeScriptの型定義
interface FormProps {
  fiscalYear: string;
  budgetCode: string;
  alias: string;
  name1: string;
  name2: string;
  name3: string;
  name4: string;
  documentNumber: string;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const BudgetForm: React.FC<FormProps> = ({
  fiscalYear,
  budgetCode,
  alias,
  name1,
  name2,
  name3,
  name4,
  documentNumber,
  onChange,
  onSubmit,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">予算書編集</h2>
      <div className="flex justify-between">
        <div>平成{fiscalYear}年度</div>
        <div className="flex-1">
          <div>
            予算科目コード
            <span className="ml-2">{budgetCode}</span>
          </div>
          <div>
            略名
            <span className="ml-2">{alias}</span>
          </div>
        </div>
      </div>
      <div className="border p-4 mt-4">
        <div className="mb-2">
          <label className="block text-blue-700">
            科目編集名称1
            <input
              type="text"
              value={name1}
              onChange={(e) => onChange('name1', e.target.value)}
              className="border ml-2"
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="block text-blue-700">
            科目編集名称2
            <input
              type="text"
              value={name2}
              onChange={(e) => onChange('name2', e.target.value)}
              className="border ml-2"
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="block text-blue-700">
            科目編集名称3
            <input
              type="text"
              value={name3}
              onChange={(e) => onChange('name3', e.target.value)}
              className="border ml-2"
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="block text-blue-700">
            科目編集名称4
            <input
              type="text"
              value={name4}
              onChange={(e) => onChange('name4', e.target.value)}
              className="border ml-2"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            予算書番号
            <input
              type="text"
              value={documentNumber}
              onChange={(e) => onChange('documentNumber', e.target.value)}
              className="border ml-2"
            />
          </label>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-3 mr-2">OK</button>
        <button onClick={onClear} className="bg-gray-200 py-1 px-3 mr-2">クリア</button>
        <button onClick={onCancel} className="bg-gray-200 py-1 px-3">キャンセル</button>
      </div>
    </div>
  );
}

export default BudgetForm;