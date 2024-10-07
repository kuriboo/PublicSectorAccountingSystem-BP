import React from 'react';

// TypeScriptの型定義
type PermissionTableProps = {
  year: number;
  departmentCode: string;
  handlerCode: string;
  apGroupCode: string;
  permissions: {
    action: string;
    none: boolean;
    allData: boolean;
    largeCategoryData: boolean;
    middleCategoryData: boolean;
    smallCategoryData: boolean;
    individualSetting: boolean;
  }[];
};

// 再利用可能なコンポーネント
const PermissionTable: React.FC<PermissionTableProps> = ({
  year,
  departmentCode,
  handlerCode,
  apGroupCode,
  permissions,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">アプリケーション権限マスタ</h1>
      <div className="mb-4">
        <span className="mr-2">年度:</span>
        <span>{year}</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block">所属コード</label>
          <input
            type="text"
            value={departmentCode}
            readOnly
            className="border p-1 w-full"
          />
        </div>
        <div>
          <label className="block">担当コード</label>
          <input
            type="text"
            value={handlerCode}
            readOnly
            className="border p-1 w-full"
          />
        </div>
        <div>
          <label className="block">APグループコード</label>
          <input
            type="text"
            value={apGroupCode}
            readOnly
            className="border p-1 w-full"
          />
        </div>
      </div>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">権限区分</th>
            <th className="border px-4 py-2">なし</th>
            <th className="border px-4 py-2">全データ</th>
            <th className="border px-4 py-2">所属大分類データ</th>
            <th className="border px-4 py-2">所属中分類データ</th>
            <th className="border px-4 py-2">所属小分類データ</th>
            <th className="border px-4 py-2">個別設定</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((perm, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{perm.action}</td>
              <td className="border px-4 py-2">{perm.none ? '◯' : ''}</td>
              <td className="border px-4 py-2">{perm.allData ? '◯' : ''}</td>
              <td className="border px-4 py-2">{perm.largeCategoryData ? '◯' : ''}</td>
              <td className="border px-4 py-2">{perm.middleCategoryData ? '◯' : ''}</td>
              <td className="border px-4 py-2">{perm.smallCategoryData ? '◯' : ''}</td>
              <td className="border px-4 py-2">{perm.individualSetting ? '◯' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;
