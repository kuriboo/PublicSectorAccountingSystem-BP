// EmployeeForm.tsx
import React from 'react';

// 定義: EmployeeFormProps
interface EmployeeFormProps {
  employeeCode: string;
  employeeName: string;
  password: string;
  expirationDate: string;
  passwordManagerPermission: boolean;
  initialEmployeeCode: string;
  onEdit: () => void;
  onDelete: () => void;
  onSubmit: () => void;
  onClear: () => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  employeeCode,
  employeeName,
  password,
  expirationDate,
  passwordManagerPermission,
  initialEmployeeCode,
  onEdit,
  onDelete,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-4">職員マスタ</h2>
      <form className="space-y-3">
        <div className="flex items-center">
          <label className="w-32">職員コード</label>
          <input
            className="border rounded-md p-2 flex-grow"
            type="text"
            value={employeeCode}
            readOnly
          />
        </div>
        <div className="flex items-center">
          <label className="w-32">職員名称</label>
          <input
            className="border rounded-md p-2 flex-grow"
            type="text"
            value={employeeName}
            readOnly
          />
        </div>
        <div className="flex items-center">
          <label className="w-32">パスワード</label>
          <input
            className="border rounded-md p-2 flex-grow"
            type="password"
            value={password}
            readOnly
          />
        </div>
        <div className="flex items-center">
          <label className="w-32">有効期限</label>
          <input
            className="border rounded-md p-2 flex-grow"
            type="text"
            value={expirationDate}
            readOnly
          />
        </div>
        <div className="flex items-center">
          <label className="w-32">パスワード管理権限</label>
          <input
            type="checkbox"
            checked={passwordManagerPermission}
            readOnly
          />
        </div>
        <div className="flex items-center">
          <label className="w-32">起信職員コード</label>
          <input
            className="border rounded-md p-2 flex-grow"
            type="text"
            value={initialEmployeeCode}
            readOnly
          />
        </div>
        <div className="flex space-x-4 mt-4">
          <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onEdit}>編集</button>
          <button type="button" className="px-4 py-2 bg-red-500 text-white rounded" onClick={onDelete}>行削除</button>
          <button type="button" className="px-4 py-2 bg-green-500 text-white rounded" onClick={onSubmit}>OK</button>
          <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onClear}>クリア</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
