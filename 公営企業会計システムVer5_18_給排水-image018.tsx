```tsx
// components/ReceptionTable.tsx

import React from 'react';

type Reception = {
  receptionNo: string;
  receptionDate: string;
  applicant: string;
  workLocation: string;
  contractor: string;
  contractDate: string;
  importDate: string;
  executionDate: string;
  receiptDate: string;
  note: string;
};

type ReceptionTableProps = {
  receptions: Reception[];
};

const ReceptionTable: React.FC<ReceptionTableProps> = ({ receptions }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-200 px-4 py-2">受付No</th>
          <th className="border border-gray-200 px-4 py-2">受付日</th>
          <th className="border border-gray-200 px-4 py-2">申請者名</th>
          <th className="border border-gray-200 px-4 py-2">工事場所</th>
          <th className="border border-gray-200 px-4 py-2">業者名</th>
          <th className="border border-gray-200 px-4 py-2">発行日</th>
          <th className="border border-gray-200 px-4 py-2">納入日</th>
          <th className="border border-gray-200 px-4 py-2">受付日</th>
          <th className="border border-gray-200 px-4 py-2">取下日</th>
          <th className="border border-gray-200 px-4 py-2">備考</th>
        </tr>
      </thead>
      <tbody>
        {receptions.map((reception, index) => (
          <tr key={index}>
            <td className="border border-gray-200 px-4 py-2">{reception.receptionNo}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.receptionDate}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.applicant}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.workLocation}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.contractor}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.contractDate}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.importDate}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.executionDate}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.receiptDate}</td>
            <td className="border border-gray-200 px-4 py-2">{reception.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReceptionTable;
```

```tsx
// pages/index.tsx

import React from 'react';
import ReceptionTable from '../components/ReceptionTable';

const receptions = [
  {
    receptionNo: '1',
    receptionDate: '26.4.1',
    applicant: 'ぎょうせい次郎',
    workLocation: 'ぎょうせい市水道区2の−1',
    contractor: 'ぎょうせいポンプ株式会社',
    contractDate: '26.4.1',
    importDate: '',
    executionDate: '26.4.8',
    receiptDate: '',
    note: ''
  },
  // More reception data...
];

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">受付簿</h1>
      <ReceptionTable receptions={receptions} />
    </div>
  );
};

export default Home;
```

```css
// styles/globals.css (if Tailwind CSS is set up)

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles if needed */
```