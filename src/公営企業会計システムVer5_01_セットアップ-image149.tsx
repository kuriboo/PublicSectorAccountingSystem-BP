import React from 'react';

type EmployeeRecord = {
  code: string;
  name: string;
};

type Props = {
  fiscalYear: string;
  sectionCode: string;
  sectionName: string;
  roleCode: string;
  roleName: string;
  records: EmployeeRecord[];
  onRegister: () => void;
  onDelete: () => void;
};

const EmployeeMaster: React.FC<Props> = ({
  fiscalYear,
  sectionCode,
  sectionName,
  roleCode,
  roleName,
  records,
  onRegister,
  onDelete,
}) => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">所属担当マスタ</h1>
      <div className="flex items-center mb-4">
        <label className="w-24">年度</label>
        <span className="border px-2 py-1 w-24 text-center">{fiscalYear}</span>
      </div>
      <div className="flex items-center mb-4">
        <label className="w-24">所属</label>
        <span className="border px-2 py-1 w-24">{sectionCode}</span>
        <span className="ml-2">{sectionName}</span>
      </div>
      <div className="flex items-center mb-4">
        <label className="w-24">担当</label>
        <span className="border px-2 py-1 w-24">{roleCode}</span>
        <span className="ml-2">{roleName}</span>
      </div>
      <div className="flex justify-between mb-4">
        <button 
          onClick={onRegister} 
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          登録
        </button>
        <button 
          onClick={onDelete} 
          className="bg-red-500 text-white px-4 py-2 rounded shadow"
        >
          行削除
        </button>
      </div>
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">職員コード</th>
            <th className="border p-2">氏名</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.code}>
              <td className="border p-2">{record.code}</td>
              <td className="border p-2">{record.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeMaster;
