import React from 'react';

// Type definition for component props
type BankFormData = {
  code: string;
  name: string;
};

type BankFormProps = {
  data: BankFormData[];
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

// React component using Next.js + TypeScript and Tailwind CSS for styling
const BankForm: React.FC<BankFormProps> = ({ data, onEdit, onDelete, onSubmit, onClear }) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">資金残高預金種別マスタ</h2>
      <div className="mb-4">
        <label className="block mb-1">資金残高預金種別コード</label>
        <input type="text" className="w-full p-2 border rounded" placeholder="コードを入力" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">名称</label>
        <input type="text" className="w-full p-2 border rounded" placeholder="名称を入力" />
      </div>
      <div className="flex mb-4">
        <button className="flex-1 p-2 bg-blue-500 text-white rounded mr-2" onClick={onSubmit}>登録</button>
        <button className="flex-1 p-2 bg-green-500 text-white rounded mr-2" onClick={onEdit}>訂正</button>
        <button className="flex-1 p-2 bg-red-500 text-white rounded" onClick={onDelete}>削除</button>
      </div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-100">コード</th>
            <th className="border border-gray-300 p-2 bg-gray-100">名称</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{item.code}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="p-2 bg-gray-300 rounded mr-2" onClick={onClear}>クリア</button>
        <button className="p-2 bg-gray-300 rounded">終了</button>
      </div>
    </div>
  );
};

export default BankForm;
```