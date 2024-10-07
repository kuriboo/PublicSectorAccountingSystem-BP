import React from 'react';

type AccountingComponentProps = {
  fiscalYear: string;
  items: {
    id: string;
    name: string;
    correspondingId: string;
    correspondingName: string;
  }[];
  onRegister: () => void;
  onUpdate: () => void;
  onDelete: () => void;
};

const AccountingComponent: React.FC<AccountingComponentProps> = ({
  fiscalYear,
  items,
  onRegister,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-lg">会計年度: {fiscalYear} 年度</div>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onRegister}>
            登録
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={onUpdate}>
            訂正
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onDelete}>
            削除
          </button>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">債権累計仕訳科目</th>
            <th className="border px-4 py-2">債権累計仕訳科目略名</th>
            <th className="border px-4 py-2">対応資産仕訳科目</th>
            <th className="border px-4 py-2">対応資産仕訳科目略名</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.correspondingId}</td>
              <td className="border px-4 py-2">{item.correspondingName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded">行確定</button>
        <button className="px-4 py-2 bg-gray-200 rounded">キャンセル</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="px-4 py-2 bg-gray-200 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-200 rounded">終了</button>
      </div>
    </div>
  );
};

export default AccountingComponent;
