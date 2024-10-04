```tsx
import React, { useState } from 'react';

// TypeScriptの型定義
type FormProps = {
  fiscalYearOptions: string[];
  divisionOptions: string[];
  contractOptions: string[];
  onSubmit: (data: FormData) => void;
};

type FormData = {
  fiscalYear: string;
  dateFrom: string;
  dateTo: string;
  division: string;
  contract: string;
};

// コンポーネント実装
const ContactForm: React.FC<FormProps> = ({
  fiscalYearOptions,
  divisionOptions,
  contractOptions,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fiscalYear: fiscalYearOptions[0],
    dateFrom: '',
    dateTo: '',
    division: divisionOptions[0],
    contract: contractOptions[0],
  });

  // 入力変更時のハンドラー
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // フォーム送信時のハンドラー
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">
          年度:
          <select
            name="fiscalYear"
            value={formData.fiscalYear}
            onChange={handleChange}
            className="block w-full mt-1"
          >
            {fiscalYearOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-gray-700">
            日付開始:
            <input
              type="date"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
              className="block w-full mt-1"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700">
            日付終了:
            <input
              type="date"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleChange}
              className="block w-full mt-1"
            />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">
          受付区分:
          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="block w-full mt-1"
          >
            {divisionOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">
          契約区分:
          <select
            name="contract"
            value={formData.contract}
            onChange={handleChange}
            className="block w-full mt-1"
          >
            {contractOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        OK
      </button>
    </form>
  );
};

export default ContactForm;
```