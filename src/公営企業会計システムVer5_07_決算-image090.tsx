// AccountingInputForm.tsx
import React from 'react';

// TypeScriptの型定義
interface Item {
  id: number;
  name: string;
  amount: number;
}

interface AccountingInputFormProps {
  items: Item[];
  onShow: () => void;
  onEdit: () => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AccountingInputForm: React.FC<AccountingInputFormProps> = ({
  items,
  onShow,
  onEdit,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg font-bold mb-4">決算繰越入力</h1>
      <div className="flex items-center mb-4">
        <label className="mr-4">収益的収入</label>
        <input type="radio" name="type" />
        <label className="mr-4 ml-4">収益的支出</label>
        <input type="radio" name="type" />
        <label className="mr-4 ml-4">資本的収入</label>
        <input type="radio" name="type" />
        <label className="mr-4 ml-4">資本的支出</label>
        <input type="radio" name="type" />
      </div>
      <button className="mb-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onEdit}>
        編集
      </button>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">項目名称</th>
            <th className="px-4 py-2 border">公企法24条3項の額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded mr-2" onClick={onShow}>
          表示
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded mr-2" onClick={onOk}>
          OK
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded mr-2" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded" onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingInputForm;