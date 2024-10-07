import React from 'react';

// TypeScriptの型定義
interface DecisionTableProps {
  data: {
    sectionCode: string;
    maxAmount: number;
    decisionName: string;
    meetingCategory: string;
    meetingName: string;
  }[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const DecisionTable: React.FC<DecisionTableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2 border">細節決裁区分</th>
              <th className="px-4 py-2 border">決裁上限金額</th>
              <th className="px-4 py-2 border">決裁区分</th>
              <th className="px-4 py-2 border">会議区分</th>
              <th className="px-4 py-2 border">会議名称</th>
              <th className="px-4 py-2 border">操作</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="px-4 py-2 border">{row.sectionCode}</td>
                <td className="px-4 py-2 border">{row.maxAmount.toLocaleString()} 円</td>
                <td className="px-4 py-2 border">{row.decisionName}</td>
                <td className="px-4 py-2 border">{row.meetingCategory}</td>
                <td className="px-4 py-2 border">{row.meetingName}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => onEdit(index)}
                  >
                    編集
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => onDelete(index)}
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DecisionTable;
```