import React from 'react';

type PaymentMethod = {
  code: string;
  name: string;
};

interface PaymentMethodMasterProps {
  paymentMethods: PaymentMethod[];
  onAdd: (code: string, name: string) => void;
  onEdit: (code: string, name: string) => void;
  onDelete: (code: string) => void;
}

const PaymentMethodMaster: React.FC<PaymentMethodMasterProps> = ({
  paymentMethods,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const [selectedCode, setSelectedCode] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    <div className="p-4 space-y-4">
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <label className="font-medium">支払方法コード</label>
          <input
            type="text"
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
            className="border px-2"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="font-medium">名称</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-2"
          />
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onAdd(selectedCode, name)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          登録
        </button>
        <button
          onClick={() => onEdit(selectedCode, name)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          編集
        </button>
        <button
          onClick={() => onDelete(selectedCode)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          削除
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="border px-4 py-2">コード</th>
            <th className="border px-4 py-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((method) => (
            <tr key={method.code} className="text-center">
              <td className="border px-4 py-2">{method.code}</td>
              <td className="border px-4 py-2">{method.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentMethodMaster;
```