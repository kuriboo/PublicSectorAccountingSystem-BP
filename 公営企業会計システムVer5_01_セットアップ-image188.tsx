```tsx
import React from 'react';

// Props type definition
interface RecordTableProps {
  records: {
    date: string;
    year: string;
    department: string;
    role: string;
    screen: string;
    content: string;
  }[];
}

// Reusable RecordTable component
const RecordTable: React.FC<RecordTableProps> = ({ records }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">アクセス監視照会</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="py-2 px-4">処理日</th>
            <th className="py-2 px-4">年度</th>
            <th className="py-2 px-4">所属</th>
            <th className="py-2 px-4">担当</th>
            <th className="py-2 px-4">職員</th>
            <th className="py-2 px-4">処理画面</th>
            <th className="py-2 px-4">処理内容</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{record.date}</td>
              <td className="py-2 px-4">{record.year}</td>
              <td className="py-2 px-4">{record.department}</td>
              <td className="py-2 px-4">{record.role}</td>
              <td className="py-2 px-4">{record.screen}</td>
              <td className="py-2 px-4">{record.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 bg-gray-200 text-black px-4 py-2 rounded">CSV出力</button>
    </div>
  );
};

export default RecordTable;
```