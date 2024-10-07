import React from 'react';

interface InvoiceFormProps {
  onSubmit: (data: InvoiceData) => void;
  onCancel: () => void;
  initialData?: InvoiceData;
}

interface InvoiceData {
  date: string;
  projectCode: string;
  paymentDate: string;
  description: string;
  recipient: string;
  paymentRounds: number;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = React.useState<InvoiceData>({
    date: initialData?.date || '',
    projectCode: initialData?.projectCode || '',
    paymentDate: initialData?.paymentDate || '',
    description: initialData?.description || '',
    recipient: initialData?.recipient || '',
    paymentRounds: initialData?.paymentRounds || 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-lg">
      {/* Date Field */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="date">
          請求処理日
        </label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Project Code Field */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="projectCode">
          事業番号
        </label>
        <input
          id="projectCode"
          name="projectCode"
          type="text"
          value={formData.projectCode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Payment Date Field */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="paymentDate">
          支払日
        </label>
        <input
          id="paymentDate"
          name="paymentDate"
          type="date"
          value={formData.paymentDate}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Description Field */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="description">
          摘要
        </label>
        <input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Recipient Field */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="recipient">
          支払先
        </label>
        <input
          id="recipient"
          name="recipient"
          type="text"
          value={formData.recipient}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Payment Rounds Field */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="paymentRounds">
          支払回数
        </label>
        <input
          id="paymentRounds"
          name="paymentRounds"
          type="number"
          min="1"
          value={formData.paymentRounds}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 text-black rounded">
          キャンセル
        </button>
      </div>
    </form>
  );
};

export default InvoiceForm;
