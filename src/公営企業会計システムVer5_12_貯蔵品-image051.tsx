// Import necessary modules from React and Next.js
import React from 'react';

// Define props interface for customization
interface DataTableProps {
  data: {
    保管場所: string;
    品番: string;
    整量: string;
    単位: string;
    処理内容: string;
    処理年月日: string;
    目標年度: string;
    置賜番号: string;
    発注予定数量: string;
    発注予定単価: string;
  }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2">保管場所</th>
            <th className="py-2">品番</th>
            <th className="py-2">整量</th>
            <th className="py-2">単位</th>
            <th className="py-2">処理内容</th>
            <th className="py-2">処理年月日</th>
            <th className="py-2">目標年度</th>
            <th className="py-2">置賜番号</th>
            <th className="py-2">発注予定数量</th>
            <th className="py-2">発注予定単価</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center border-b">
              <td className="py-2">{row.保管場所}</td>
              <td className="py-2">{row.品番}</td>
              <td className="py-2">{row.整量}</td>
              <td className="py-2">{row.単位}</td>
              <td className="py-2">{row.処理内容}</td>
              <td className="py-2">{row.処理年月日}</td>
              <td className="py-2">{row.目標年度}</td>
              <td className="py-2">{row.置賜番号}</td>
              <td className="py-2">{row.発注予定数量}</td>
              <td className="py-2">{row.発注予定単価}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```