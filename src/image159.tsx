import React from 'react';

// プロパティの型定義
interface DepartmentProps {
  departmentCode: string;
  departmentName: string;
  personInChargeCode: string;
  personInChargeName: string;
  employeeName: string;
  initialValue: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const DepartmentComponent: React.FC<DepartmentProps> = ({
  departmentCode,
  departmentName,
  personInChargeCode,
  personInChargeName,
  employeeName,
  initialValue,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded shadow-md space-y-4">
      <div>
        <div className="flex space-x-2">
          <label>所属:</label>
          <span>{departmentCode}</span>
          <span>{departmentName}</span>
        </div>
        <div className="flex space-x-2">
          <label>担当:</label>
          <span>{personInChargeCode}</span>
          <span>{personInChargeName}</span>
        </div>
        <div className="flex space-x-2">
          <label>職員:</label>
          <span>{employeeName}</span>
        </div>
        <div className="flex space-x-2">
          <label>初期値:</label>
          <span>{initialValue}</span>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-700"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default DepartmentComponent;
```