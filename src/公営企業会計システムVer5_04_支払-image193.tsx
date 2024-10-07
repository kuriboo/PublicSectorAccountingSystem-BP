import React from 'react';

// Define a type for the form data
type FormData = {
  decisionStartDate: string;
  decisionEndDate: string;
  paymentStartDate: string;
  paymentEndDate: string;
  department: string;
  type: string;
  documentNumberStart: number;
  documentNumberEnd: number;
  paymentAmountMin: number;
  paymentAmountMax: number;
  issueStatus: string;
};

// Define the props for the component
interface PaymentStatusProps {
  formData: FormData;
  onSubmit: (data: FormData) => void;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({ formData, onSubmit }) => {
  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">決定処理日</label>
          <div className="flex space-x-2">
            <input type="date" className="border rounded p-2" defaultValue={formData.decisionStartDate} />
            <span>〜</span>
            <input type="date" className="border rounded p-2" defaultValue={formData.decisionEndDate} />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">支払日</label>
          <div className="flex space-x-2">
            <input type="date" className="border rounded p-2" defaultValue={formData.paymentStartDate} />
            <span>〜</span>
            <input type="date" className="border rounded p-2" defaultValue={formData.paymentEndDate} />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">所属</label>
          <input type="text" className="border rounded p-2 w-full" defaultValue={formData.department} />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">種別</label>
          <select className="border rounded p-2 w-full" defaultValue={formData.type}>
            <option>全て</option>
            <option>一般(負担金)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">伝票番号</label>
          <div className="flex space-x-2">
            <input type="number" className="border rounded p-2 w-full" defaultValue={formData.documentNumberStart} />
            <span>〜</span>
            <input type="number" className="border rounded p-2 w-full" defaultValue={formData.documentNumberEnd} />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">支払金額</label>
          <div className="flex space-x-2">
            <input type="text" className="border rounded p-2 w-full" defaultValue={formData.paymentAmountMin} />
            <span>〜</span>
            <input type="text" className="border rounded p-2 w-full" defaultValue={formData.paymentAmountMax} />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">伝票発行</label>
          <select className="border rounded p-2 w-full" defaultValue={formData.issueStatus}>
            <option>未発行</option>
            <option>発行済</option>
            <option>すべて</option>
          </select>
        </div>

        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">表示</button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded" type="button">印刷</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded" type="button">CSV</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentStatus;
```