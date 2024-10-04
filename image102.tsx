```tsx
import React from 'react';

// TypeScript interface for props
interface ManagementComponentProps {
  fiscalYear: string;
  receptionType: string;
  departmentCode: string;
  department: string;
  receptionNumber: string;
  onEditClick: () => void;
  onDeleteClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onFinishClick: () => void;
}

const ManagementComponent: React.FC<ManagementComponentProps> = ({
  fiscalYear,
  receptionType,
  departmentCode,
  department,
  receptionNumber,
  onEditClick,
  onDeleteClick,
  onOkClick,
  onClearClick,
  onFinishClick,
}) => {
  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="bg-blue-500 text-white p-2 rounded mb-4">
        所属別受付番号付番管理
      </div>
      <div className="mb-4 flex space-x-2">
        <select className="border p-1 rounded">
          <option>{fiscalYear}</option>
        </select>
        <div>年度</div>
        <select className="border p-1 rounded">
          <option>{receptionType}</option>
        </select>
      </div>
      <button className="bg-gray-500 text-white p-1 rounded mr-2" onClick={onEditClick}>
        詳細編集
      </button>
      <button className="bg-gray-500 text-white p-1 rounded" onClick={onDeleteClick}>
        行削除
      </button>
      <table className="w-full border-collapse border border-gray-400 mt-4">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-400 p-2">受付区分</th>
            <th className="border border-gray-400 p-2">所属コード</th>
            <th className="border border-gray-400 p-2">所属</th>
            <th className="border border-gray-400 p-2">受付番号</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">{receptionType}</td>
            <td className="border border-gray-400 p-2">{departmentCode}</td>
            <td className="border border-gray-400 p-2">{department}</td>
            <td className="border border-gray-400 p-2">{receptionNumber}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 flex space-x-2">
        <button className="bg-white border border-gray-500 rounded p-1" onClick={onOkClick}>
          OK
        </button>
        <button className="bg-white border border-gray-500 rounded p-1" onClick={onClearClick}>
          クリア
        </button>
        <button className="bg-white border border-gray-500 rounded p-1" onClick={onFinishClick}>
          終了
        </button>
      </div>
    </div>
  );
};

export default ManagementComponent;
```