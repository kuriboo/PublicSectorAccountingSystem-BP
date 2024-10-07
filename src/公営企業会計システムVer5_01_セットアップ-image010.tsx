import React from 'react';

// TypeScriptの型定義
type ContractMethodProps = {
  code: string;
  name: string;
  shortName: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  methods: { code: string; name: string; shortName: string }[];
};

const ContractMethodMaster: React.FC<ContractMethodProps> = ({
  code,
  name,
  shortName,
  onRegister,
  onEdit,
  onDelete,
  methods,
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-300 text-white p-2 rounded-t">契約方法マスタ</div>
      <div className="p-4 bg-gray-100 border rounded-b">
        <div className="mb-4">
          <label className="block mb-2">契約方法コード</label>
          <input className="border rounded p-1 w-full" value={code} readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-2">名称</label>
          <input className="border rounded p-1 w-full" value={name} readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-2">略名</label>
          <input
            className="border rounded p-1 w-full"
            value={shortName}
            readOnly
          />
        </div>
        <div className="flex justify-between mb-4">
          <button
            className="bg-blue-500 text-white py-1 px-3 rounded"
            onClick={onRegister}
          >
            登録
          </button>
          <button
            className="bg-green-500 text-white py-1 px-3 rounded"
            onClick={onEdit}
          >
            訂正
          </button>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded"
            onClick={onDelete}
          >
            削除
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">コード</th>
              <th className="border p-2">名称</th>
              <th className="border p-2">略名</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((method, index) => (
              <tr
                key={index}
                className={`${index % 2 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="border p-2">{method.code}</td>
                <td className="border p-2">{method.name}</td>
                <td className="border p-2">{method.shortName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractMethodMaster;
