import React from 'react';

// Propsの型定義
interface ExtractionFormProps {
  year: string;
  isNew: boolean;
  receiptStartNumber: string;
  receiptEndNumber: string;
  items: Array<{ id: string; description: string }>;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
  onSelectAll: () => void;
}

const ExtractionForm: React.FC<ExtractionFormProps> = ({
  year,
  isNew,
  receiptStartNumber,
  receiptEndNumber,
  items,
  onSubmit,
  onClear,
  onClose,
  onSelectAll,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="year" className="block font-bold">年度</label>
        <input
          type="text"
          id="year"
          value={year}
          readOnly
          className="border p-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="font-bold mr-2">抽出区分</label>
        <input
          type="checkbox"
          checked={isNew}
          readOnly
          className="mr-2"
        />
        <span>新規</span>
      </div>
      <div className="mb-4">
        <label htmlFor="receiptStartNumber" className="block font-bold">受付番号</label>
        <input
          type="text"
          id="receiptStartNumber"
          value={receiptStartNumber}
          readOnly
          className="border p-1 rounded w-1/3 mr-2"
        />
        <span>~</span>
        <input
          type="text"
          id="receiptEndNumber"
          value={receiptEndNumber}
          readOnly
          className="border p-1 rounded w-1/3 ml-2"
        />
      </div>
      <button
        onClick={onSubmit}
        className="bg-gray-500 text-white py-1 px-3 rounded mb-4"
      >
        表示
      </button>
      <div className="mb-4">
        <input
          type="checkbox"
          id="selectAll"
          onChange={onSelectAll}
          className="mr-2"
        />
        <label htmlFor="selectAll" className="font-bold">全選択</label>
      </div>
      <div className="border p-2 rounded h-40 overflow-y-auto bg-white mb-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={item.id}
              className="mr-2"
            />
            <label htmlFor={item.id}>{item.description}</label>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-1 px-3 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-yellow-500 text-white py-1 px-3 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-1 px-3 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ExtractionForm;