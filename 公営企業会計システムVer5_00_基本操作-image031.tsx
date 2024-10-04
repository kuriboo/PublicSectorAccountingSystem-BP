```tsx
// 支出決定入力.tsx
import React from 'react';

type PaymentFormProps = {
  title: string;
  description: string;
  date: string;
  onSubmit: (data: FormData) => void;
};

type FormData = {
  decisionMethod: string;
  amount: number;
  comments: string;
};

const PaymentForm: React.FC<PaymentFormProps> = ({
  title,
  description,
  date,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    decisionMethod: '',
    amount: 0,
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">決定方法</label>
          <input
            type="text"
            name="decisionMethod"
            value={formData.decisionMethod}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">金額</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">摘要内容</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          送信
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-2">{date}</p>
    </div>
  );
};

export default PaymentForm;
```