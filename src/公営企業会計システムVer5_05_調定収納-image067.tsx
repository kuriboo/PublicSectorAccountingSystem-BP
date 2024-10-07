import { FC, useState } from 'react';

type AccountingFormProps = {
  onSubmit: (data: FormData) => void;
  initialDate?: string;
  initialDescription?: string;
  taxRateOptions?: number[];
};

type FormData = {
  date: string;
  description: string;
  taxRate: number;
  taxAmount: number;
};

const AccountingForm: FC<AccountingFormProps> = ({
  onSubmit,
  initialDate = '',
  initialDescription = '',
  taxRateOptions = [5, 8, 10],
}) => {
  const [formData, setFormData] = useState<FormData>({
    date: initialDate,
    description: initialDescription,
    taxRate: taxRateOptions[0],
    taxAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'taxRate' ? Number(value) : value,
      taxAmount: name === 'taxRate' ? Number(value) * 100 : prev.taxAmount,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">伝票日付</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">摘要</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">消費税率</label>
        <select
          name="taxRate"
          value={formData.taxRate}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {taxRateOptions.map((rate) => (
            <option key={rate} value={rate}>
              {rate}%
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">消費税額</label>
        <input
          type="number"
          name="taxAmount"
          value={formData.taxAmount}
          readOnly
          className="mt-1 block w-full border border-gray-300 rounded-md bg-gray-200 shadow-sm sm:text-sm"
        />
      </div>

      <div className="flex space-x-2">
        <button
          type="submit"
          className="flex-grow py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          登録
        </button>
        <button
          type="reset"
          className="flex-grow py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          onClick={() => setFormData({ date: '', description: '', taxRate: taxRateOptions[0], taxAmount: 0 })}
        >
          クリア
        </button>
      </div>
    </form>
  );
};

export default AccountingForm;
