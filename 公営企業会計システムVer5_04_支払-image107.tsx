```tsx
import React from 'react';

// Define types for the component props
interface ControlMasterProps {
  title: string;
  controlId: string;
  controlValue: string;
  tableData: {
    id: string;
    content: string;
    value: string;
    setting: string;
  }[];
}

// ControlMaster component using Tailwind CSS for styling
const ControlMaster: React.FC<ControlMasterProps> = ({
  title,
  controlId,
  controlValue,
  tableData
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="flex justify-between items-center bg-blue-200 p-2 rounded-md">
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="text-sm text-right">
          <p>予算権限 予算権限 行政 太郎</p>
          <p>令和03年11月09日</p>
        </div>
      </div>
      <div className="flex mt-4 space-x-4">
        <div className="text-sm">
          <p className="font-bold">制御区分番号</p>
          <p className="mt-2 font-bold">制御値</p>
        </div>
        <div className="text-sm">
          <p>{controlId}</p>
          <input 
            type="text" 
            value={controlValue} 
            className="border mt-2 p-1 rounded-md" 
          />
        </div>
      </div>
      <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        編集
      </button>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead className="bg-blue-200">
          <tr className="text-left">
            <th className="p-2 border border-gray-300">区分</th>
            <th className="p-2 border border-gray-300">制御内容</th>
            <th className="p-2 border border-gray-300">制御値</th>
            <th className="p-2 border border-gray-300">設定</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="border border-gray-300">
              <td className="p-2 border border-gray-300">{row.id}</td>
              <td className="p-2 border border-gray-300">{row.content}</td>
              <td className="p-2 border border-gray-300">{row.value}</td>
              <td className="p-2 border border-gray-300">{row.setting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlMaster;
```