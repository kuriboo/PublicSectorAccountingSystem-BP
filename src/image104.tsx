import React from 'react';

type ProjectHistoryProps = {
  year: string;
  category: string;
  contractorId: string;
  contractorName: string;
  jobType: string;
  orderDivision: string;
  items: ProjectItem[];
};

type ProjectItem = {
  itemName1: string;
  itemName2: string;
  client: string;
  project: string;
  location: string;
};

const ProjectHistory: React.FC<ProjectHistoryProps> = ({
  year,
  category,
  contractorId,
  contractorName,
  jobType,
  orderDivision,
  items,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-blue-100 text-center p-2 rounded">
        <h1 className="text-xl font-semibold">業者経歴保守</h1>
      </div>
      <div className="bg-gray-100 p-4 mt-4 rounded shadow-md">
        <div className="flex space-x-4">
          <div>年度: {year}</div>
          <div>受付区分: {category}</div>
        </div>
        <div className="mt-2">
          <div>業者: {contractorId} {contractorName}</div>
          <div>業種: {jobType}</div>
          <div>発注区分: {orderDivision}</div>
        </div>
      </div>
      <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-200">件名1</th>
            <th className="border border-gray-300 p-2 bg-gray-200">件名2</th>
            <th className="border border-gray-300 p-2 bg-gray-200">発注者</th>
            <th className="border border-gray-300 p-2 bg-gray-200">工事名</th>
            <th className="border border-gray-300 p-2 bg-gray-200">工事場所</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{item.itemName1}</td>
              <td className="border border-gray-300 p-2">{item.itemName2}</td>
              <td className="border border-gray-300 p-2">{item.client}</td>
              <td className="border border-gray-300 p-2">{item.project}</td>
              <td className="border border-gray-300 p-2">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectHistory;
```