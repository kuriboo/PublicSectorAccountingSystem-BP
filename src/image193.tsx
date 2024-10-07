import React from 'react';

// Type definition for props
interface BudgetCodeMasterProps {
  budgetCode: number;
  systemBudgetCode: number;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

// Reusable component
const BudgetCodeMaster: React.FC<BudgetCodeMasterProps> = ({
  budgetCode,
  systemBudgetCode,
  onRegister,
  onEdit,
  onDelete
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg font-bold mb-4">予算編成区分マスタ</h1>
      <div className="mb-4">
        <label className="block mb-2">予算編成区分コード</label>
        <input 
          type="text" 
          value={budgetCode} 
          readOnly 
          className="border rounded p-2 mb-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">システム予算編成区分コード</label>
        <input 
          type="text" 
          value={systemBudgetCode} 
          readOnly 
          className="border rounded p-2 mb-2 w-full"
        />
      </div>
      <div className="mb-4">
        <button onClick={onRegister} className="mr-2 bg-blue-500 text-white py-2 px-4 rounded">
          登録
        </button>
        <button onClick={onEdit} className="mr-2 bg-blue-500 text-white py-2 px-4 rounded">
          訂正
        </button>
        <button onClick={onDelete} className="bg-blue-500 text-white py-2 px-4 rounded">
          削除
        </button>
      </div>
      <table className="w-full border-collapse border-blue-700">
        <thead>
          <tr>
            <th className="border p-2 bg-blue-700 text-white">予算編成区分コード</th>
            <th className="border p-2 bg-blue-700 text-white">システム予算編成区分コード</th>
            <th className="border p-2 bg-blue-700 text-white">名称</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2 text-center">2</td>
            <td className="border p-2">当初予算</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">2</td>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2">暫定予算</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">3</td>
            <td className="border p-2 text-center">3</td>
            <td className="border p-2">補正予算</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">4</td>
            <td className="border p-2 text-center">4</td>
            <td className="border p-2">決算見込</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">5</td>
            <td className="border p-2 text-center">5</td>
            <td className="border p-2">決算・決算統計</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">6</td>
            <td className="border p-2 text-center">6</td>
            <td className="border p-2">月次</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BudgetCodeMaster;
```