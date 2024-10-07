import React from "react";

type BudgetItem = {
  code: string;
  name: string;
  specification: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
  otherTaxAmount: number;
};

type BudgetTableProps = {
  title: string;
  items: BudgetItem[];
};

const BudgetTable: React.FC<BudgetTableProps> = ({ title, items }) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">単価コード</th>
            <th className="border border-gray-300 px-4 py-2">単価名称</th>
            <th className="border border-gray-300 px-4 py-2">規格名称</th>
            <th className="border border-gray-300 px-4 py-2">数量</th>
            <th className="border border-gray-300 px-4 py-2">単位</th>
            <th className="border border-gray-300 px-4 py-2">単価</th>
            <th className="border border-gray-300 px-4 py-2">金額</th>
            <th className="border border-gray-300 px-4 py-2">他税額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code}>
              <td className="border border-gray-300 px-4 py-2">{item.code}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.specification}</td>
              <td className="border border-gray-300 px-4 py-2">{item.quantity.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{item.unit}</td>
              <td className="border border-gray-300 px-4 py-2">{item.unitPrice.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{item.amount.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{item.otherTaxAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;

// 使用例（propsに適したデータを渡すことを想定）
// <BudgetTable 
//   title="支出負担科目内訳書" 
//   items={[
//     {
//       code: "811020",
//       name: "洋紙",
//       specification: "A4縦型",
//       quantity: 10000,
//       unit: "冊",
//       unitPrice: 213.84,
//       amount: 21384,
//       otherTaxAmount: 0,
//     },
//     {
//       code: "811312",
//       name: "起案用紙",
//       specification: "(パソコン用)",
//       quantity: 10000,
//       unit: "冊",
//       unitPrice: 248.40,
//       amount: 2484,
//       otherTaxAmount: 0,
//     },
//   ]}
// />
