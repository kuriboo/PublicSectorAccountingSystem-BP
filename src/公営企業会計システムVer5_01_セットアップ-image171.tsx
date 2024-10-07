import React from 'react';

// Propsの型定義
interface PermissionTableProps {
  fiscalYear: string;
  departmentCode: string;
  handlerCode: string;
  apGroupCode: string;
  permissions: {
    category: string;
    levels: {
      全データ: boolean;
      所属大分類データ: boolean;
      所属中分類データ: boolean;
      所属小分類データ: boolean;
      個別設定: boolean;
    };
  }[];
}

const PermissionTable: React.FC<PermissionTableProps> = ({
  fiscalYear,
  departmentCode,
  handlerCode,
  apGroupCode,
  permissions,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4">アプリケーション権限マスタ</h1>
      <div className="mb-4">
        <label className="block mb-2 font-bold">年度</label>
        <input
          type="text"
          value={`平成${fiscalYear}年度`}
          className="border px-2 py-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">所属コード</label>
        <input
          type="text"
          value={departmentCode}
          className="border px-2 py-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">担当コード</label>
        <input
          type="text"
          value={handlerCode}
          className="border px-2 py-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">APグループコード</label>
        <input
          type="text"
          value={apGroupCode}
          className="border px-2 py-1 w-full"
          readOnly
        />
      </div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border p-2">権限区分</th>
            <th className="border p-2">全データ</th>
            <th className="border p-2">所属大分類データ</th>
            <th className="border p-2">所属中分類データ</th>
            <th className="border p-2">所属小分類データ</th>
            <th className="border p-2">個別設定</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission, index) => (
            <tr key={index}>
              <td className="border p-2">{permission.category}</td>
              <td className="border p-2">{permission.levels.全データ ? '○' : '×'}</td>
              <td className="border p-2">{permission.levels.所属大分類データ ? '○' : '×'}</td>
              <td className="border p-2">{permission.levels.所属中分類データ ? '○' : '×'}</td>
              <td className="border p-2">{permission.levels.所属小分類データ ? '○' : '×'}</td>
              <td className="border p-2">{permission.levels.個別設定 ? '○' : '×'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;

