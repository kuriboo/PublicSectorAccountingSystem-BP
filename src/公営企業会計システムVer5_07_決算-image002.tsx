import React from 'react';

interface FormProps {
  year: string;
  budgetCategory: string;
  noteTypeOptions: string[];
  selectedNoteType: string;
  noteName: string;
  noteAmount: number;
  processingOverview: string;
  onYearChange: (year: string) => void;
  onBudgetCategoryChange: (category: string) => void;
  onNoteTypeChange: (noteType: string) => void;
  onNoteNameChange: (name: string) => void;
  onNoteAmountChange: (amount: number) => void;
  onProcessingOverviewChange: (overview: string) => void;
}

const InputForm: React.FC<FormProps> = ({
  year,
  budgetCategory,
  noteTypeOptions,
  selectedNoteType,
  noteName,
  noteAmount,
  processingOverview,
  onYearChange,
  onBudgetCategoryChange,
  onNoteTypeChange,
  onNoteNameChange,
  onNoteAmountChange,
  onProcessingOverviewChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">予算科目略称</label>
        <input
          type="text"
          value={budgetCategory}
          onChange={(e) => onBudgetCategoryChange(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">備考印字区分</label>
        <select
          value={selectedNoteType}
          onChange={(e) => onNoteTypeChange(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        >
          {noteTypeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">備考印字名称</label>
        <input
          type="text"
          value={noteName}
          onChange={(e) => onNoteNameChange(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">備考印字金額</label>
        <input
          type="text"
          value={noteAmount.toLocaleString()}
          onChange={(e) => onNoteAmountChange(Number(e.target.value.replace(/,/g, '')))}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">処理概要</label>
        <textarea
          value={processingOverview}
          onChange={(e) => onProcessingOverviewChange(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default InputForm;