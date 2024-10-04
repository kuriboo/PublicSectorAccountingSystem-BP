```tsx
// BudgetDetailForm.tsx
import React, { useState } from 'react';

// Define types for the component props
interface BudgetDetailFormProps {
  year: string;
  onSubmit: (data: FormData) => void;
}

// Define types for the form data
interface FormData {
  budgetType: string;
  budgetRangeFrom: string;
  budgetRangeTo: string;
  accountLevel: string;
  unit: string;
  pageOrientation: string;
  title: string;
  subtitle: string;
  supTitle: string;
  printPageNumber: boolean;
  startPage: number;
  segment: string;
}

const BudgetDetailForm: React.FC<BudgetDetailFormProps> = ({ year, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    budgetType: '項目明細',
    budgetRangeFrom: '0000000',
    budgetRangeTo: '9999999',
    accountLevel: '細節',
    unit: '千円',
    pageOrientation: 'A4 横',
    title: '',
    subtitle: '',
    supTitle: '',
    printPageNumber: true,
    startPage: 1,
    segment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label>年度</label>
        <input type="text" value={year} disabled className="ml-2" />
      </div>

      <div className="space-y-2">
        <label>帳票種別</label>
        <div>
          <label>
            <input type="radio" name="budgetType" value="項目明細" checked={formData.budgetType === '項目明細'} onChange={handleChange} />
            項目明細
          </label>
          <label className="ml-4">
            <input type="radio" name="budgetType" value="実施計画明細" checked={formData.budgetType === '実施計画明細'} onChange={handleChange} />
            実施計画明細
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label>範囲指定</label>
        <div>
          <input type="text" name="budgetRangeFrom" value={formData.budgetRangeFrom} onChange={handleChange} className="border p-1" />
          <span className="mx-2">~</span>
          <input type="text" name="budgetRangeTo" value={formData.budgetRangeTo} onChange={handleChange} className="border p-1" />
        </div>
      </div>

      <div className="space-y-2">
        <label>説明欄印字</label>
        <div>
          <label>
            <input type="radio" name="accountLevel" value="細節" checked={formData.accountLevel === '細節'} onChange={handleChange} />
            細節
          </label>
          <label className="ml-4">
            <input type="radio" name="accountLevel" value="明細" checked={formData.accountLevel === '明細'} onChange={handleChange} />
            明細
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="printPageNumber" checked={formData.printPageNumber} onChange={handleChange} />
            コード印字
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label>単位</label>
        <div>
          <label>
            <input type="radio" name="unit" value="千円" checked={formData.unit === '千円'} onChange={handleChange} />
            千円
          </label>
          <label className="ml-4">
            <input type="radio" name="unit" value="円" checked={formData.unit === '円'} onChange={handleChange} />
            円
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label>書式</label>
        <div>
          <label>
            <input type="radio" name="pageOrientation" value="A4 横" checked={formData.pageOrientation === 'A4 横'} onChange={handleChange} />
            A4 横
          </label>
          <label className="ml-4">
            <input type="radio" name="pageOrientation" value="A4 縦" checked={formData.pageOrientation === 'A4 縦'} onChange={handleChange} />
            A4 縦
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label>タイトル</label>
        <div>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="border p-1 w-full" placeholder="タイトル" />
        </div>
        <div>
          <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} className="border p-1 w-full" placeholder="サブタイトル" />
        </div>
        <div>
          <input type="text" name="supTitle" value={formData.supTitle} onChange={handleChange} className="border p-1 w-full" placeholder="性タイトル" />
        </div>
        <div>
          <label>
            <input type="checkbox" name="printPageNumber" checked={formData.printPageNumber} onChange={handleChange} />
            刊印字
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label>開始頁</label>
        <div>
          <input type="number" name="startPage" value={formData.startPage} onChange={handleChange} className="border p-1" min={1} />
        </div>
      </div>

      <div className="space-y-2">
        <label>セグメント</label>
        <div>
          <input type="text" name="segment" value={formData.segment} onChange={handleChange} className="border p-1" />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button type="button" className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button type="button" className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </form>
  );
};

export default BudgetDetailForm;
```