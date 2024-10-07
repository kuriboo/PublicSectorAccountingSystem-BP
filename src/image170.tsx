// Import necessary libraries
import React from 'react';

type PermissionComponentProps = {
  year: string;
  departmentCode: string;
  staffCode: string;
  groupCode: string;
  permissions: Record<string, string[]>;
};

const PermissionComponent: React.FC<PermissionComponentProps> = ({
  year,
  departmentCode,
  staffCode,
  groupCode,
  permissions
}) => {
  return (
    <div className="p-6 bg-white rounded shadow">
      <header className="text-xl font-bold mb-4">アプリケーション権限マスタ</header>
      <div className="mb-4">
        <span className="mr-4">年度: {year}</span>
        <span className="mr-4">所属コード: {departmentCode}</span>
        <span className="mr-4">担当コード: {staffCode}</span>
        <span>APグループコード: {groupCode}</span>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-2 py-1">権限区分</th>
            <th className="border px-2 py-1">なし</th>
            <th className="border px-2 py-1">全データ</th>
            <th className="border px-2 py-1">所属大分類データ</th>
            <th className="border px-2 py-1">所属中分類データ</th>
            <th className="border px-2 py-1">所属小分類データ</th>
            <th className="border px-2 py-1">個別設定</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(permissions).map(([permissionType, values]) => (
            <tr key={permissionType}>
              <td className="border px-2 py-1">{permissionType}</td>
              {values.map((value, index) => (
                <td key={index} className="border px-2 py-1 text-center">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionComponent;
