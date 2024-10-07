import React from 'react';

// TypeScript interface for component props
interface FormComponentProps {
  year: string;
  classificationNumber: number;
  classificationName: string;
  receiptDivision: string;
  accountOutputDivision: string;
  accountOutputPosition: number;
  journalCode: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  year,
  classificationNumber,
  classificationName,
  receiptDivision,
  accountOutputDivision,
  accountOutputPosition,
  journalCode,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">納付分類マスタ</h2>

      {/* Year Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">受付年度</label>
        <select value={year} className="mt-1 block w-full border-gray-300 rounded-md">
          {/* Options should be dynamically generated */}
          <option>平成29</option>
          <option>平成30</option>
        </select>
      </div>

      {/* Classification Number Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">納付分類区分</label>
        <input
          type="number"
          value={classificationNumber}
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>

      {/* Classification Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">納付分類区分名</label>
        <input
          type="text"
          value={classificationName}
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>

      {/* Receipt Division Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">納付書区分</label>
        <select value={receiptDivision} className="mt-1 block w-full border-gray-300 rounded-md">
          {/* Options should be dynamically generated */}
          <option>受益者負担金</option>
        </select>
      </div>

      {/* Account Output Division Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">帳票出力区分</label>
        <select value={accountOutputDivision} className="mt-1 block w-full border-gray-300 rounded-md">
          {/* Options should be dynamically generated */}
          <option>3条予算</option>
          <option>4条予算</option>
        </select>
      </div>

      {/* Account Output Position Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">帳票出力位置</label>
        <select value={accountOutputPosition.toString()} className="mt-1 block w-full border-gray-300 rounded-md">
          {/* Options should be dynamically generated */}
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      {/* Journal Code Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">仕訳コード</label>
        <input
          type="text"
          value={journalCode}
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onRegister}>登録</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={onEdit}>訂正</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onDelete}>削除</button>
      </div>
    </div>
  );
};

export default FormComponent;