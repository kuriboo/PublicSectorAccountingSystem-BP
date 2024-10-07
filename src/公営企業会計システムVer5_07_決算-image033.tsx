import React from 'react';

// 定義された型
interface TableProps {
  data: Array<{
    year: string;
    subjectCode: string;
    nextYearSubjectCode: string;
    abbreviation: string;
    content: string;
  }>;
  onDisplay: () => void;
  onCancel: () => void;
}

const DataTable: React.FC<TableProps> = ({ data, onDisplay, onCancel }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="px-4 py-2">年度</th>
            <th className="px-4 py-2">科目コード</th>
            <th className="px-4 py-2">次年度科目コード</th>
            <th className="px-4 py-2">略名</th>
            <th className="px-4 py-2">内容</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border px-4 py-2">{row.year}</td>
              <td className="border px-4 py-2">{row.subjectCode}</td>
              <td className="border px-4 py-2">{row.nextYearSubjectCode}</td>
              <td className="border px-4 py-2">{row.abbreviation}</td>
              <td className="border px-4 py-2">{row.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={onDisplay}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          表示
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DataTable;
```