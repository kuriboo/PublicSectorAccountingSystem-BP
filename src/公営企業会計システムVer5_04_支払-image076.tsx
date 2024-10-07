import React from 'react';

// Type definitions for the props
interface ChangeInputFormProps {
  defaultYear: string;
  defaultNumber: number;
  onSubmit: (data: FormData) => void;
}

// Type definitions for the form data
interface FormData {
  year: string;
  number: number;
  paymentRound: number;
  paymentDate: string;
  details: string;
}

const ChangeInputForm: React.FC<ChangeInputFormProps> = ({
  defaultYear,
  defaultNumber,
  onSubmit,
}) => {
  // Form state
  const [formData, setFormData] = React.useState<FormData>({
    year: defaultYear,
    number: defaultNumber,
    paymentRound: 1,
    paymentDate: '',
    details: '',
  });

  // Handle form change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="year" className="block font-bold mb-2">
          年度:
        </label>
        <input
          type="text"
          name="year"
          id="year"
          value={formData.year}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="number" className="block font-bold mb-2">
          予定番号:
        </label>
        <input
          type="number"
          name="number"
          id="number"
          value={formData.number}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="paymentRound" className="block font-bold mb-2">
          支払回数:
        </label>
        <input
          type="number"
          name="paymentRound"
          id="paymentRound"
          value={formData.paymentRound}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="paymentDate" className="block font-bold mb-2">
          納期年月日:
        </label>
        <input
          type="text"
          name="paymentDate"
          id="paymentDate"
          value={formData.paymentDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="details" className="block font-bold mb-2">
          変更摘要:
        </label>
        <textarea
          name="details"
          id="details"
          value={formData.details}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        登録
      </button>
    </form>
  );
};

export default ChangeInputForm;
