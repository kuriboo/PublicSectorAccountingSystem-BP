import React from 'react';

// Define the props for the component
interface TaskRegistrationProps {
  fiscalYear: string;
  acceptanceType: string;
  companyName: string;
  tasks: Array<{
    code: string;
    name: string;
    order: number;
    permission: number;
    allocation: string;
    completionPoints: number;
    APoints: number;
    BPoints: number;
    qualifiedPersonPoints: number;
    mainScore: number;
    guestScore: number;
  }>;
}

const TaskRegistration: React.FC<TaskRegistrationProps> = ({
  fiscalYear,
  acceptanceType,
  companyName,
  tasks,
}) => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="bg-blue-200 p-2 rounded-md mb-4">
        <h2 className="text-xl font-bold">委託業種登録</h2>
        <div className="flex items-center space-x-4">
          <span>{fiscalYear} 年度</span>
          <span>受付区分: {acceptanceType}</span>
          <span>業者: {companyName}</span>
        </div>
      </div>
      
      {/* Tasks Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">業種コード</th>
            <th className="border border-gray-300 p-2">業種名称</th>
            <th className="border border-gray-300 p-2">順位</th>
            <th className="border border-gray-300 p-2">許可</th>
            <th className="border border-gray-300 p-2">格付</th>
            <th className="border border-gray-300 p-2">完成高評点</th>
            <th className="border border-gray-300 p-2">A欄</th>
            <th className="border border-gray-300 p-2">B欄</th>
            <th className="border border-gray-300 p-2">有資格者数評点</th>
            <th className="border border-gray-300 p-2">主観</th>
            <th className="border border-gray-300 p-2">客観</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="border border-gray-300 p-2">{task.code}</td>
              <td className="border border-gray-300 p-2">{task.name}</td>
              <td className="border border-gray-300 p-2">{task.order}</td>
              <td className="border border-gray-300 p-2">{task.permission}</td>
              <td className="border border-gray-300 p-2">{task.allocation}</td>
              <td className="border border-gray-300 p-2">{task.completionPoints}</td>
              <td className="border border-gray-300 p-2">{task.APoints}</td>
              <td className="border border-gray-300 p-2">{task.BPoints}</td>
              <td className="border border-gray-300 p-2">{task.qualifiedPersonPoints}</td>
              <td className="border border-gray-300 p-2">{task.mainScore}</td>
              <td className="border border-gray-300 p-2">{task.guestScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskRegistration;