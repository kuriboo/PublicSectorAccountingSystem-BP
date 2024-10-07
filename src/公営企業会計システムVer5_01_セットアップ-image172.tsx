import React from 'react';

// プロパティの型定義
type PermissionFormProps = {
  year: string;
  departmentCode: string;
  departmentName: string;
  managerCode: string;
  managerName: string;
  apGroupCode: string;
  operationDepartmentCode: string;
  registrationPermission: boolean;
  deletionPermission: boolean;
  referencePermission: boolean;
  onYearChange: (value: string) => void;
  onDepartmentCodeChange: (value: string) => void;
  onManagerCodeChange: (value: string) => void;
  onApGroupCodeChange: (value: string) => void;
  onOperationDepartmentCodeChange: (value: string) => void;
  onPermissionChange: (type: 'registration' | 'deletion' | 'reference', value: boolean) => void;
};

const PermissionForm: React.FC<PermissionFormProps> = ({
  year,
  departmentCode,
  departmentName,
  managerCode,
  managerName,
  apGroupCode,
  operationDepartmentCode,
  registrationPermission,
  deletionPermission,
  referencePermission,
  onYearChange,
  onDepartmentCodeChange,
  onManagerCodeChange,
  onApGroupCodeChange,
  onOperationDepartmentCodeChange,
  onPermissionChange,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <div className="mb-4">
        <label className="block font-bold mb-1">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-bold mb-1">所属コード</label>
          <input
            type="text"
            value={departmentCode}
            onChange={(e) => onDepartmentCodeChange(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="flex items-center">
          <span className="ml-4">{departmentName}</span>
        </div>

        <div>
          <label className="block font-bold mb-1">担当コード</label>
          <input
            type="text"
            value={managerCode}
            onChange={(e) => onManagerCodeChange(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="flex items-center">
          <span className="ml-4">{managerName}</span>
        </div>

        <div>
          <label className="block font-bold mb-1">APグループコード</label>
          <input
            type="text"
            value={apGroupCode}
            onChange={(e) => onApGroupCodeChange(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="block font-bold mb-1">操作可能所属コード</label>
          <input
            type="text"
            value={operationDepartmentCode}
            onChange={(e) => onOperationDepartmentCodeChange(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2">可能フラグ</h3>
        <div className="flex space-x-8">
          <div>
            <span>登録</span>
            <input
              type="radio"
              checked={registrationPermission}
              onChange={() => onPermissionChange('registration', true)}
              className="ml-2"
            />
            <span className="ml-2">可能</span>
            <input
              type="radio"
              checked={!registrationPermission}
              onChange={() => onPermissionChange('registration', false)}
              className="ml-2"
            />
            <span className="ml-2">不可</span>
          </div>
          
          <div>
            <span>削除</span>
            <input
              type="radio"
              checked={deletionPermission}
              onChange={() => onPermissionChange('deletion', true)}
              className="ml-2"
            />
            <span className="ml-2">可能</span>
            <input
              type="radio"
              checked={!deletionPermission}
              onChange={() => onPermissionChange('deletion', false)}
              className="ml-2"
            />
            <span className="ml-2">不可</span>
          </div>

          <div>
            <span>参照</span>
            <input
              type="radio"
              checked={referencePermission}
              onChange={() => onPermissionChange('reference', true)}
              className="ml-2"
            />
            <span className="ml-2">可能</span>
            <input
              type="radio"
              checked={!referencePermission}
              onChange={() => onPermissionChange('reference', false)}
              className="ml-2"
            />
            <span className="ml-2">不可</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="py-2 px-4 bg-gray-200 rounded">前データ</button>
        <button className="py-2 px-4 bg-gray-200 rounded">次データ</button>
        <button className="py-2 px-4 bg-blue-500 text-white rounded">OK</button>
        <button className="py-2 px-4 bg-red-500 text-white rounded">クリア</button>
        <button className="py-2 px-4 bg-gray-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default PermissionForm;