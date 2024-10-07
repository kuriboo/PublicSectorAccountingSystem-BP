import React from 'react';

interface BudgetDataProps {
  startDate: string;
  endDate: string;
  sections: { code: string; description: string }[];
  details: { date: string; process: string; description: string; chargeNumber: number; chargeAmount: number; executionNumber: number; executionAmount: number }[];
}

const BudgetDataComponent: React.FC<BudgetDataProps> = ({ startDate, endDate, sections, details }) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Header */}
      <h2 className="text-xl mb-4 text-purple-700">支出予算差引簿データ照会</h2>

      {/* Date Range */}
      <div className="mb-4">
        <span className="font-bold">期間: </span>
        <span>{startDate}</span> から <span>{endDate}</span>
      </div>

      {/* Sections */}
      <div className="mb-4">
        <h3 className="font-semibold">所属・節情報</h3>
        <ul className="list-disc list-inside">
          {sections.map(section => (
            <li key={section.code} className="ml-4">
              {section.code}: {section.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Details Table */}
      <div>
        <h3 className="font-semibold mb-2">負担情報</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">日</th>
              <th className="py-2 px-4 border-b">処理</th>
              <th className="py-2 px-4 border-b">摘要</th>
              <th className="py-2 px-4 border-b">負担番号</th>
              <th className="py-2 px-4 border-b">負担額</th>
              <th className="py-2 px-4 border-b">執行番号</th>
              <th className="py-2 px-4 border-b">執行額</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="py-2 px-4 border-b">{detail.date}</td>
                <td className="py-2 px-4 border-b">{detail.process}</td>
                <td className="py-2 px-4 border-b">{detail.description}</td>
                <td className="py-2 px-4 border-b">{detail.chargeNumber}</td>
                <td className="py-2 px-4 border-b">{detail.chargeAmount}</td>
                <td className="py-2 px-4 border-b">{detail.executionNumber}</td>
                <td className="py-2 px-4 border-b">{detail.executionAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetDataComponent;
```