import React from 'react';

type FormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  date: string;
  decisionNumber: string;
  contractDate: string;
  contractMethod: string;
  contractNumber: string;
  deliveryDate: string;
  partner: string;
  summary: string;
  budget: string;
};

const FormComponent: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    date: '',
    decisionNumber: '',
    contractDate: '',
    contractMethod: '',
    contractNumber: '',
    deliveryDate: '',
    partner: '',
    summary: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4">
        <label className="block">
          <span className="text-gray-700">負担処理日</span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">決裁番号</span>
          <input
            type="text"
            name="decisionNumber"
            value={formData.decisionNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>
      <div className="flex space-x-4">
        <label className="block">
          <span className="text-gray-700">契約年月日</span>
          <input
            type="date"
            name="contractDate"
            value={formData.contractDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">契約方法</span>
          <select
            name="contractMethod"
            value={formData.contractMethod}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">選択してください</option>
            <option value="一般競争入札">一般競争入札</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700">契約番号</span>
          <input
            type="text"
            name="contractNumber"
            value={formData.contractNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>
      <div className="flex space-x-4">
        <label className="block">
          <span className="text-gray-700">納期年月日</span>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>
      <div className="flex space-x-4">
        <label className="block">
          <span className="text-gray-700">相手先</span>
          <input
            type="text"
            name="partner"
            value={formData.partner}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">摘要</span>
          <input
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>
      <div className="flex space-x-4">
        <label className="block">
          <span className="text-gray-700">予算額</span>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-700"
      >
        登録
      </button>
    </form>
  );
};

export default FormComponent;
```