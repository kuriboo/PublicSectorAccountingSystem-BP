// components/TransactionInputForm.tsx
import React from 'react';

// 型定義
type TransactionInputFormProps = {
  onSubmit: (data: FormData) => void;
  initialData?: FormData;
};

type FormData = {
  decisionDate: string;
  decisionKind: string;
  contractMethod: string;
  deliveryDate: string;
  paymentCount: number;
  periodStart: string;
  periodEnd: string;
  summary: string;
};

// コンポーネント
const TransactionInputForm: React.FC<TransactionInputFormProps> = ({
  onSubmit,
  initialData = {
    decisionDate: '',
    decisionKind: '',
    contractMethod: '',
    deliveryDate: '',
    paymentCount: 0,
    periodStart: '',
    periodEnd: '',
    summary: '',
  }
}) => {
  const [formData, setFormData] = React.useState<FormData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-50 rounded shadow">
      <div className="mb-4">
        <label className="block font-bold mb-1">予定処理日</label>
        <input type="text" name="decisionDate" value={formData.decisionDate} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">決裁区分</label>
        <input type="text" name="decisionKind" value={formData.decisionKind} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">契約方法</label>
        <input type="text" name="contractMethod" value={formData.contractMethod} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">納期年月日</label>
        <input type="text" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">支払回数</label>
        <input type="number" name="paymentCount" value={formData.paymentCount} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">期間</label>
        <div className="flex space-x-2">
          <input type="text" name="periodStart" value={formData.periodStart} onChange={handleChange} className="w-1/2 p-2 border rounded" />
          <input type="text" name="periodEnd" value={formData.periodEnd} onChange={handleChange} className="w-1/2 p-2 border rounded" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">摘要</label>
        <textarea name="summary" value={formData.summary} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
      </div>

      <div className="flex justify-end space-x-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
      </div>
    </form>
  );
};

export default TransactionInputForm;
