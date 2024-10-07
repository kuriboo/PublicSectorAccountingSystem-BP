import React, { FC, useState } from 'react';

type TaxType = 'inclusive' | 'exclusive';

interface ReportFormProps {
  initialDate?: string;
  onSubmit: (formData: FormData) => void;
  onClear: () => void;
}

interface FormData {
  date: string;
  departmentStart: string;
  departmentEnd: string;
  taxType: TaxType;
}

const ReportForm: FC<ReportFormProps> = ({ initialDate = '', onSubmit, onClear }) => {
  const [date, setDate] = useState(initialDate);
  const [departmentStart, setDepartmentStart] = useState('');
  const [departmentEnd, setDepartmentEnd] = useState('');
  const [taxType, setTaxType] = useState<TaxType>('inclusive');

  // Handle form submission
  const handleSubmit = () => {
    const formData: FormData = {
      date,
      departmentStart,
      departmentEnd,
      taxType,
    };
    onSubmit(formData);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <div>
        <label className="block mb-2 font-bold">作表日</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">事業科目</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={departmentStart}
            onChange={(e) => setDepartmentStart(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/2"
          />
          <span className="self-center">~</span>
          <input
            type="text"
            value={departmentEnd}
            onChange={(e) => setDepartmentEnd(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/2"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="font-bold mb-2">税区分</div>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="inclusive"
            checked={taxType === 'inclusive'}
            onChange={() => setTaxType('inclusive')}
            className="mr-2"
          />
          税込
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="exclusive"
            checked={taxType === 'exclusive'}
            onChange={() => setTaxType('exclusive')}
            className="mr-2"
          />
          税抜
        </label>
      </div>
      <div className="flex justify-between">
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">
          クリア
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```