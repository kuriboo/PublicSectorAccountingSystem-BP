// Import necessary modules from React, Next, and Tailwind CSS.
import React from 'react';

// Define the type for the component props.
type DocumentProps = {
  fiscalYear: string;
  documentTitle: string;
  accountingSubject: string;
  burdenNumber: string;
  transactionDate: string;
};

// Define the functional component with the specified props.
const FinancialDocument: React.FC<DocumentProps> = ({
  fiscalYear,
  documentTitle,
  accountingSubject,
  burdenNumber,
  transactionDate,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md">
      <h1 className="text-xl font-bold text-center mb-4">{documentTitle}</h1>
      <div className="text-center mb-2">
        <span className="text-lg">{fiscalYear}</span>
      </div>
      <div className="text-center mb-2">
        <span className="text-md">{accountingSubject}</span>
      </div>
      <div className="flex justify-end mb-4">
        <div className="border border-black p-2">
          <span className="font-bold">負担No.</span> {burdenNumber}
        </div>
      </div>
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-2 py-1">決裁</th>
            <th className="border border-gray-400 px-2 py-1">所 属</th>
            <th className="border border-gray-400 px-2 py-1" colSpan={2}>保存年限</th>
            <th className="border border-gray-400 px-2 py-1">負担処理日</th>
            <th className="border border-gray-400 px-2 py-1">{transactionDate}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">総務課</td>
            <td className="border border-gray-400 px-2 py-1">上水管理者</td>
            <td className="border border-gray-400 px-2 py-1">上水部</td>
            <td className="border border-gray-400 px-2 py-1">上水長</td>
            <td className="border border-gray-400 px-2 py-1">上水課長補佐</td>
            <td className="border border-gray-400 px-2 py-1">上水係</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">裁</td>
            <td className="border border-gray-400 px-2 py-1">※</td>
            <td className="border border-gray-400 px-2 py-1"></td>
            <td className="border border-gray-400 px-2 py-1"></td>
            <td className="border border-gray-400 px-2 py-1"></td>
            <td className="border border-gray-400 px-2 py-1"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinancialDocument;
```