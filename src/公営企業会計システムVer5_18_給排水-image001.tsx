// components/WorkListTable.tsx
import React from 'react';

type WorkListItem = {
  id: number;
  status: string;
  year: number;
  acceptNumber: number;
  accountType: number;
  acceptDate: string;
  inspectionDate: string;
  location1: string;
  location2: string;
  applicantZip: string;
  applicantAddress1: string;
  applicantAddress2: string;
};

type WorkListTableProps = {
  items: WorkListItem[];
};

const WorkListTable: React.FC<WorkListTableProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">行番号</th>
            <th className="py-2 px-4 border">ステータス</th>
            <th className="py-2 px-4 border">受付年度</th>
            <th className="py-2 px-4 border">受付番号</th>
            <th className="py-2 px-4 border">会計区分</th>
            <th className="py-2 px-4 border">受付日</th>
            <th className="py-2 px-4 border">受付審査日</th>
            <th className="py-2 px-4 border">施工場所1</th>
            <th className="py-2 px-4 border">施工場所2</th>
            <th className="py-2 px-4 border">申請者郵便番号</th>
            <th className="py-2 px-4 border">申請者住所1</th>
            <th className="py-2 px-4 border">申請者住所2</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border">{item.id}</td>
              <td className="py-2 px-4 border">{item.status}</td>
              <td className="py-2 px-4 border">{item.year}</td>
              <td className="py-2 px-4 border">{item.acceptNumber}</td>
              <td className="py-2 px-4 border">{item.accountType}</td>
              <td className="py-2 px-4 border">{item.acceptDate}</td>
              <td className="py-2 px-4 border">{item.inspectionDate}</td>
              <td className="py-2 px-4 border">{item.location1}</td>
              <td className="py-2 px-4 border">{item.location2}</td>
              <td className="py-2 px-4 border">{item.applicantZip}</td>
              <td className="py-2 px-4 border">{item.applicantAddress1}</td>
              <td className="py-2 px-4 border">{item.applicantAddress2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkListTable;
```