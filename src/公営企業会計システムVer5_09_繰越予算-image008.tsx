import React from 'react';

interface TableData {
  fiscalYear: string;
  idNumber: number;
  liableYear: string;
  budgetSection: string;
  budgetDetail: string;
  unprocessedAmount: string;
  deferredAmount: string;
  deferredType: string;
  contractorName: string;
}

interface RemovalComponentProps {
  title: string;
  summary: string;
  tableData: TableData[];
  onApprove: () => void;
  onClose: () => void;
}

const RemovalComponent: React.FC<RemovalComponentProps> = ({
  title,
  summary,
  tableData,
  onApprove,
  onClose,
}) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4">
      <header className="bg-blue-900 text-white p-4 rounded-t-lg">
        <h1 className="text-lg font-semibold">{title}</h1>
      </header>
      <main className="bg-gray-100 p-4">
        <section className="text-center mb-4">
          <h2 className="font-semibold mb-2">処理概要</h2>
          <p className="text-sm">{summary}</p>
        </section>
        <table className="w-full text-sm">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th>予定年度</th>
              <th>予定番号</th>
              <th>負担年度</th>
              <th>予算節</th>
              <th>予算明細</th>
              <th>未処理額</th>
              <th>繰越額</th>
              <th>繰越区分</th>
              <th>業者名</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="border-b">
                <td>{data.fiscalYear}</td>
                <td>{data.idNumber}</td>
                <td>{data.liableYear}</td>
                <td>{data.budgetSection}</td>
                <td>{data.budgetDetail}</td>
                <td className="text-right">{data.unprocessedAmount}</td>
                <td className="text-right">{data.deferredAmount}</td>
                <td>{data.deferredType}</td>
                <td>{data.contractorName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="flex justify-end space-x-4 p-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          終了
        </button>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded"
          onClick={onApprove}
        >
          OK
        </button>
      </footer>
    </div>
  );
};

export default RemovalComponent;
```