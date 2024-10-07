import React from 'react';

// Define a type for the table data
type Record = {
  date: string;
  type: string;
  voucherNo: number;
  settledAmount: string;
  collectedAmount: string;
  unpaidAmount: string;
  returnedAmount: string;
  description: string;
};

// Define a type for the component props
type TableProps = {
  records: Record[];
};

const RecordTable: React.FC<TableProps> = ({ records }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 bg-gray-200">起案日</th>
          <th className="py-2 px-4 bg-gray-200">種別</th>
          <th className="py-2 px-4 bg-gray-200">伝票No</th>
          <th className="py-2 px-4 bg-gray-200">調定金額</th>
          <th className="py-2 px-4 bg-gray-200">収納金額</th>
          <th className="py-2 px-4 bg-gray-200">未収金額</th>
          <th className="py-2 px-4 bg-gray-200">戻出金額</th>
          <th className="py-2 px-4 bg-gray-200">摘要</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
            <td className="py-2 px-4">{record.date}</td>
            <td className="py-2 px-4">{record.type}</td>
            <td className="py-2 px-4">{record.voucherNo}</td>
            <td className="py-2 px-4">{record.settledAmount}</td>
            <td className="py-2 px-4">{record.collectedAmount}</td>
            <td className="py-2 px-4">{record.unpaidAmount}</td>
            <td className="py-2 px-4">{record.returnedAmount}</td>
            <td className="py-2 px-4">{record.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecordTable;
```