import React, { useState } from 'react';

type StatementFormProps = {
  onSubmit: (data: StatementData) => void;
};

type StatementData = {
  startDate: string;
  endDate: string;
  accountCode: string;
  size: 'A4横' | 'A4縦';
  revenueSubtitle: string;
  expenseSubtitle: string;
  includePageNumber: boolean;
  startPage: number;
  includeTotal: boolean;
};

const StatementForm: React.FC<StatementFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<StatementData>({
    startDate: '',
    endDate: '',
    accountCode: '',
    size: 'A4横',
    revenueSubtitle: '',
    expenseSubtitle: '',
    includePageNumber: true,
    startPage: 1,
    includeTotal: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100">
      <div className="mb-4">
        <label>会計期間:</label>
        <input
          type="text"
          name="startDate"
          placeholder="開始日"
          value={formData.startDate}
          onChange={handleChange}
          className="ml-2 p-1 border border-gray-300"
        />
        <span> ~ </span>
        <input
          type="text"
          name="endDate"
          placeholder="終了日"
          value={formData.endDate}
          onChange={handleChange}
          className="p-1 border border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label>仕訳科目:</label>
        <input
          type="text"
          name="accountCode"
          value={formData.accountCode}
          onChange={handleChange}
          className="ml-2 p-1 border border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label>サイズ:</label>
        <select
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="ml-2 p-1 border border-gray-300"
        >
          <option value="A4横">A4 横</option>
          <option value="A4縦">A4 縦</option>
        </select>
      </div>
      <div className="mb-4">
        <label>収益サブタイトル:</label>
        <input
          type="text"
          name="revenueSubtitle"
          value={formData.revenueSubtitle}
          onChange={handleChange}
          className="ml-2 p-1 border border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label>費用サブタイトル:</label>
        <input
          type="text"
          name="expenseSubtitle"
          value={formData.expenseSubtitle}
          onChange={handleChange}
          className="ml-2 p-1 border border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label>頁印字:</label>
        <input
          type="checkbox"
          name="includePageNumber"
          checked={formData.includePageNumber}
          onChange={handleChange}
          className="ml-2"
        />
        <label className="ml-2">する / しない</label>
      </div>
      <div className="mb-4">
        <label>開始頁:</label>
        <input
          type="number"
          name="startPage"
          min="1"
          value={formData.startPage}
          onChange={handleChange}
          className="ml-2 p-1 border border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label>合計印字:</label>
        <input
          type="checkbox"
          name="includeTotal"
          checked={formData.includeTotal}
          onChange={handleChange}
          className="ml-2"
        />
        <label className="ml-2">する / しない</label>
      </div>
      <div className="flex justify-end space-x-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
          OK
        </button>
        <button type="button" className="px-4 py-2 bg-gray-300">
          クリア
        </button>
        <button type="button" className="px-4 py-2 bg-red-500 text-white">
          終了
        </button>
      </div>
    </form>
  );
};

export default StatementForm;
```