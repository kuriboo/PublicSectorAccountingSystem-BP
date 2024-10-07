import React from 'react';

type SearchFormProps = {
  initialYear?: number;
  onSubmit: (data: FormData) => void;
};

type FormData = {
  year: number;
  voucherNumber: string;
  startDate: string;
  endDate: string;
  amountFrom: number;
  amountTo: number;
  description: string;
};

const SearchForm: React.FC<SearchFormProps> = ({ initialYear = 27, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    year: initialYear,
    voucherNumber: '',
    startDate: '',
    endDate: '',
    amountFrom: 0,
    amountTo: 0,
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <div className="mb-4">
        <label className="block mb-1">年度</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">伝票番号</label>
        <input
          type="text"
          name="voucherNumber"
          value={formData.voucherNumber}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block mb-1">振替日</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">〜</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">振替金額</label>
        <div className="flex">
          <input
            type="number"
            name="amountFrom"
            value={formData.amountFrom}
            onChange={handleChange}
            className="border rounded p-2 flex-1 mr-2"
          />
          <span className="flex items-center">〜</span>
          <input
            type="number"
            name="amountTo"
            value={formData.amountTo}
            onChange={handleChange}
            className="border rounded p-2 flex-1 ml-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">摘要</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">表示</button>
      </div>
    </form>
  );
};

export default SearchForm;
