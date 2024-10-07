import React from 'react';

type PropTypes = {
  title: string;
  collectionNumber: string;
  paymentDate: string;
  summary: string;
  adjustments: {
    section: string;
    subsection: string;
    detail: string;
  }[];
  entries: {
    section: string;
    subsection: string;
    detail: string;
  }[];
  years: {
    year: string;
    count: number;
    paymentAmount: string;
    taxIncluded: string;
    specialIncome: string;
  }[];
};

const CollectionInputComponent: React.FC<PropTypes> = ({
  title,
  collectionNumber,
  paymentDate,
  summary,
  adjustments,
  entries,
  years,
}) => {
  return (
    <div className="p-6 bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      
      <div className="mb-4">
        <label className="block font-bold mb-2">集合収納番号</label>
        <p>{collectionNumber}</p>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">収納日</label>
        <p>{paymentDate}</p>
      </div>
      
      <div className="mb-4">
        <label className="block font-bold mb-2">摘要</label>
        <p>{summary}</p>
      </div>

      <div className="flex space-x-8 mb-4">
        <div>
          <h2 className="font-bold mb-2">調定科目</h2>
          <table className="w-full table-fixed border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">節</th>
                <th className="border border-gray-300 p-2">細節</th>
                <th className="border border-gray-300 p-2">明細</th>
              </tr>
            </thead>
            <tbody>
              {adjustments.map((adj, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{adj.section}</td>
                  <td className="border border-gray-300 p-2">{adj.subsection}</td>
                  <td className="border border-gray-300 p-2">{adj.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="font-bold mb-2">入金科目</h2>
          <table className="w-full table-fixed border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">節</th>
                <th className="border border-gray-300 p-2">細節</th>
                <th className="border border-gray-300 p-2">明細</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{entry.section}</td>
                  <td className="border border-gray-300 p-2">{entry.subsection}</td>
                  <td className="border border-gray-300 p-2">{entry.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">年度</h2>
        <table className="w-full table-fixed border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">年度</th>
              <th className="border border-gray-300 p-2">件数</th>
              <th className="border border-gray-300 p-2">収納金額</th>
              <th className="border border-gray-300 p-2">内:消費税額</th>
              <th className="border border-gray-300 p-2">特定收入入</th>
            </tr>
          </thead>
          <tbody>
            {years.map((year, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{year.year}</td>
                <td className="border border-gray-300 p-2">{year.count}</td>
                <td className="border border-gray-300 p-2">{year.paymentAmount}</td>
                <td className="border border-gray-300 p-2">{year.taxIncluded}</td>
                <td className="border border-gray-300 p-2">{year.specialIncome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded">OK</button>
        <button className="bg-gray-200 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-200 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default CollectionInputComponent;
```