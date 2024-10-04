```tsx
import React from 'react';

// TypeScript interface for component props
interface BudgetSectionProps {
  budgetCode: string;
  systemBudgetCode: string;
  nameList: Array<{ budgetCode: string; systemCode: string; name: string }>;
  onRegister: () => void;
  onUpdate: () => void;
  onDelete: () => void;
}

const BudgetSection: React.FC<BudgetSectionProps> = ({
  budgetCode,
  systemBudgetCode,
  nameList,
  onRegister,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">予算編成区分マスタ</h1>
      <div className="flex mb-4">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">登録</button>
        <button onClick={onUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">訂正</button>
        <button onClick={onDelete} className="bg-blue-500 text-white px-4 py-2 rounded">削除</button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">予算編成区分コード</label>
        <input
          type="text"
          value={budgetCode}
          readOnly
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">システム予算編成区分コード</label>
        <input
          type="text"
          value={systemBudgetCode}
          readOnly
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">予算編成区分コード</th>
            <th className="px-4 py-2 border">システム予算編成区分コード</th>
            <th className="px-4 py-2 border">名称</th>
          </tr>
        </thead>
        <tbody>
          {nameList.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="border px-4 py-2">{item.budgetCode}</td>
              <td className="border px-4 py-2">{item.systemCode}</td>
              <td className="border px-4 py-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2">クリア</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetSection;
```