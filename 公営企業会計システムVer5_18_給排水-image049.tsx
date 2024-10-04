```tsx
import React from 'react';

type KessaiTableProps = {
  records: {
    ku: string;
    code: number;
    creditor: string;
    amount: number;
    determinationDate: string;
    dueDate: string;
    receiptDate: string;
    determinationDepartment: string;
    summary: string;
  }[];
  searchTerm: string;
  handleSearch: (term: string) => void;
};

const KessaiTable: React.FC<KessaiTableProps> = ({ records, searchTerm, handleSearch }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="サーチ..."
          className="border p-2 rounded w-full"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">区分</th>
            <th className="py-2 px-4 border-b">番号</th>
            <th className="py-2 px-4 border-b">債務者</th>
            <th className="py-2 px-4 border-b">調定金額</th>
            <th className="py-2 px-4 border-b">調定日</th>
            <th className="py-2 px-4 border-b">納期</th>
            <th className="py-2 px-4 border-b">収納日</th>
            <th className="py-2 px-4 border-b">調定科目</th>
            <th className="py-2 px-4 border-b">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{record.ku}</td>
              <td className="py-2 px-4 border-b">{record.code}</td>
              <td className="py-2 px-4 border-b">{record.creditor}</td>
              <td className="py-2 px-4 border-b">{record.amount.toLocaleString()}</td>
              <td className="py-2 px-4 border-b">{record.determinationDate}</td>
              <td className="py-2 px-4 border-b">{record.dueDate}</td>
              <td className="py-2 px-4 border-b">{record.receiptDate}</td>
              <td className="py-2 px-4 border-b">{record.determinationDepartment}</td>
              <td className="py-2 px-4 border-b">{record.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KessaiTable;
```