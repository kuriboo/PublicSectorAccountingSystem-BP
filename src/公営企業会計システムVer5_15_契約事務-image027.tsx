import React from 'react';
import 'tailwindcss/tailwind.css';

type DepartmentAssignmentProps = {
  budgetCode: string;
  budgetName: string;
  budgetPersonId: string;
  budgetPersonName: string;
  taskCode: string;
  taskName: string;
  taskPersonId: string;
  taskPersonName: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const DepartmentAssignment: React.FC<DepartmentAssignmentProps> = ({
  budgetCode,
  budgetName,
  budgetPersonId,
  budgetPersonName,
  taskCode,
  taskName,
  taskPersonId,
  taskPersonName,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="w-full max-w-lg bg-white shadow p-6 rounded-lg">
      <h2 className="text-lg font-bold text-blue-700 mb-4">担当部署</h2>
      <div className="border p-4 mb-4">
        <div className="flex items-center mb-2">
          <label className="w-20 font-bold">予算課</label>
          <span className="font-mono">{budgetCode}</span>
          <span className="flex-grow">{budgetName}</span>
          <button className="bg-blue-300 rounded p-1 mx-2">担当者</button>
          <span className="font-mono">{budgetPersonId}</span>
          <span>{budgetPersonName}</span>
        </div>
        <div className="flex items-center">
          <label className="w-20 font-bold">業務担当課</label>
          <span className="font-mono">{taskCode}</span>
          <span className="flex-grow">{taskName}</span>
          <button className="bg-blue-300 rounded p-1 mx-2">担当者</button>
          <span className="font-mono">{taskPersonId}</span>
          <span>{taskPersonName}</span>
        </div>
      </div>
      <div className="flex justify-end space-x-3">
        <button onClick={onOk} className="px-4 py-2 bg-gray-200 rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-200 rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default DepartmentAssignment;
