```tsx
import React from 'react';
import 'tailwindcss/tailwind.css';

type TaxCalculationFormProps = {
  yearOptions: string[];
  defaultYear: string;
  budgetTypes: string[];
  defaultBudgetType: string;
  onSubmit: (data: FormData) => void;
};

type FormData = {
  year: string;
  budgetType: string;
  confirmationOnly: boolean;
  amountType: string;
  level: string;
  roundDown: boolean;
  taxRate: number;
  reducedTax: boolean;
};

const TaxCalculationForm: React.FC<TaxCalculationFormProps> = ({
  yearOptions,
  defaultYear,
  budgetTypes,
  defaultBudgetType,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    year: defaultYear,
    budgetType: defaultBudgetType,
    confirmationOnly: false,
    amountType: 'estimate',
    level: 'item',
    roundDown: false,
    taxRate: 8,
    reducedTax: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded">
      <h1 className="text-lg font-bold mb-4">消費税額計算書作成</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* 年度選択 */}
        <div>
          <label className="block mb-1">年度</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            {yearOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        {/* 予算編成区分選択 */}
        <div>
          <label className="block mb-1">予算編成区分</label>
          <select
            name="budgetType"
            value={formData.budgetType}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            {budgetTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        {/* 確定額のみチェックボックス */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="confirmationOnly"
            checked={formData.confirmationOnly}
            onChange={handleChange}
            className="mr-2"
          />
          <label>今回補正額のみ</label>
        </div>

        {/* 金額種別選択 */}
        <div>
          <label className="block mb-1">金額種別</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="amountType"
                value="estimate"
                checked={formData.amountType === 'estimate'}
                onChange={handleChange}
              />
              見積要求額
            </label>
            <label>
              <input
                type="radio"
                name="amountType"
                value="confirmed"
                checked={formData.amountType === 'confirmed'}
                onChange={handleChange}
              />
              確定額
            </label>
          </div>
        </div>

        {/* 科目レベル選択 */}
        <div>
          <label className="block mb-1">科目レベル</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="level"
                value="item"
                checked={formData.level === 'item'}
                onChange={handleChange}
              />
              目
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="level"
                value="section"
                checked={formData.level === 'section'}
                onChange={handleChange}
              />
              節
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="level"
                value="subsection"
                checked={formData.level === 'subsection'}
                onChange={handleChange}
              />
              細節
            </label>
            <label>
              <input
                type="radio"
                name="level"
                value="detail"
                checked={formData.level === 'detail'}
                onChange={handleChange}
              />
              明細
            </label>
          </div>
        </div>

        {/* 丸め選択 */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="roundDown"
            checked={formData.roundDown}
            onChange={handleChange}
            className="mr-2"
          />
          <label>決算見込消費税額の千円丸め</label>
        </div>

        {/* 税率 */}
        <div>
          <label className="block mb-1">税率</label>
          <div className="flex items-center">
            <input
              type="number"
              name="taxRate"
              value={formData.taxRate}
              onChange={handleChange}
              className="w-16 border p-2 mr-2 rounded"
            />
            <span>%</span>
          </div>
        </div>

        {/* 軽減税率チェックボックス */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="reducedTax"
            checked={formData.reducedTax}
            onChange={handleChange}
            className="mr-2"
          />
          <label>軽減税率</label>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          OK
        </button>
        <button type="button" className="bg-gray-500 text-white p-2 rounded">
          クリア
        </button>
        <button type="button" className="bg-red-500 text-white p-2 rounded">
          終了
        </button>
      </div>
    </form>
  );
};

export default TaxCalculationForm;
```