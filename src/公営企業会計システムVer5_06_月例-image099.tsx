import React from 'react';

// Propsの型定義
interface CashFlowTableProps {
  data: {
    categoryNumber: string;
    itemName: string;
    nextMonthAmount: number;
  }[];
  onEdit: (categoryNumber: string) => void;
}

// CashFlowTableコンポーネントの定義
const CashFlowTable: React.FC<CashFlowTableProps> = ({ data, onEdit }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">キャッシュ・フロー集計項目指定</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">集計番号</th>
            <th className="border px-4 py-2">項目名称</th>
            <th className="border px-4 py-2">翌々月金額</th>
            <th className="border px-4 py-2">編集</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.categoryNumber} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{item.categoryNumber}</td>
              <td className="border px-4 py-2">{item.itemName}</td>
              <td className="border px-4 py-2">{item.nextMonthAmount} 円</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => onEdit(item.categoryNumber)}
                >
                  編集
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CashFlowTable;