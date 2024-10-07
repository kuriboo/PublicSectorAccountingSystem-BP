// components/FinancialGroupMaster.tsx
import React from 'react';

type Department = {
  code: string;
  name: string;
};

type FinancialGroupProps = {
  groups: Department[];
  unassignedDepartments: Department[];
  year: string;
  onPreviousData: () => void;
  onNextData: () => void;
  onEdit: () => void;
  onDeleteRow: () => void;
};

const FinancialGroupMaster: React.FC<FinancialGroupProps> = ({
  groups,
  unassignedDepartments,
  year,
  onPreviousData,
  onNextData,
  onEdit,
  onDeleteRow
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <header className="pb-4">
        <h1 className="text-xl font-bold">指定金融機関グループマスタ</h1>
        <p>年度: {year}</p>
      </header>
      
      <section className="mb-4 p-4 bg-white shadow-md">
        <h2 className="text-lg font-bold">指定金融機関グループ</h2>
        <div className="flex gap-2 my-2">
          <button className="bg-blue-500 text-white px-4 py-1" onClick={onPreviousData}>前データ</button>
          <button className="bg-blue-500 text-white px-4 py-1" onClick={onNextData}>次データ</button>
          <button className="bg-gray-300 text-black px-4 py-1" onClick={onEdit}>編集</button>
          <button className="bg-red-500 text-white px-4 py-1" onClick={onDeleteRow}>行削除</button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">所属コード</th>
              <th className="border p-2">名称</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group.code}>
                <td className="border p-2">{group.code}</td>
                <td className="border p-2">{group.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-4 p-4 bg-white shadow-md">
        <h2 className="text-lg font-bold">参考: どのグループにも含まれていない所属</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">所属コード</th>
              <th className="border p-2">名称</th>
            </tr>
          </thead>
          <tbody>
            {unassignedDepartments.map((dept) => (
              <tr key={dept.code}>
                <td className="border p-2">{dept.code}</td>
                <td className="border p-2">{dept.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="flex justify-end gap-2">
        <button className="bg-green-500 text-white px-4 py-1">OK</button>
        <button className="bg-yellow-500 text-white px-4 py-1">クリア</button>
        <button className="bg-gray-500 text-white px-4 py-1">終了</button>
      </footer>
    </div>
  );
};

export default FinancialGroupMaster;
