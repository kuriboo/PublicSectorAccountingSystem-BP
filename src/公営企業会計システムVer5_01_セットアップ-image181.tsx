// components/YearCodeForm.tsx

import React from 'react';

// TypeScriptの型定義
type YearCodeFormProps = {
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const YearCodeForm: React.FC<YearCodeFormProps> = ({ onRegister, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* 年号コード入力フォーム */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold">年号コード</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold">和暦号</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold">開始年月日</label>
        <input type="date" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block mb-2 text-sm font-bold">年</label>
        <input type="text" className="w-16 p-2 mx-2 border border-gray-300 rounded" />
        <label className="block mb-2 text-sm font-bold">月</label>
        <input type="text" className="w-16 p-2 mx-2 border border-gray-300 rounded" />
        <label className="block mb-2 text-sm font-bold">日</label>
        <input type="text" className="w-16 p-2 mx-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold">和暦省略年号</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      {/* ボタン */}
      <div className="flex justify-between">
        <button onClick={onRegister} className="p-2 bg-blue-500 text-white rounded">登録</button>
        <button onClick={onEdit} className="p-2 bg-yellow-500 text-white rounded">訂正</button>
        <button onClick={onDelete} className="p-2 bg-red-500 text-white rounded">削除</button>
      </div>
    </div>
  );
};

type YearCode = {
  code: number;
  eraName: string;
  startDate: string;
  abbreviation: string;
};

type YearCodeTableProps = {
  data: YearCode[];
};

const YearCodeTable: React.FC<YearCodeTableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="p-2 border-b">コード</th>
          <th className="p-2 border-b">和暦年号</th>
          <th className="p-2 border-b">開始年月日</th>
          <th className="p-2 border-b">和暦省略年号</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.code} className="even:bg-gray-100">
            <td className="p-2 border-b">{row.code}</td>
            <td className="p-2 border-b">{row.eraName}</td>
            <td className="p-2 border-b">{row.startDate}</td>
            <td className="p-2 border-b">{row.abbreviation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Home: React.FC = () => {
  // Dummy data for table
  const yearCodes = [
    { code: 1, eraName: '明治', startDate: '1868/09/08', abbreviation: 'M' },
    { code: 2, eraName: '大正', startDate: '1912/07/30', abbreviation: 'T' },
    { code: 3, eraName: '昭和', startDate: '1926/12/25', abbreviation: 'S' },
    { code: 4, eraName: '平成', startDate: '1989/01/07', abbreviation: 'H' },
  ];

  // Handlers
  const handleRegister = () => {
    // 登録ボタンの処理
  };

  const handleEdit = () => {
    // 訂正ボタンの処理
  };

  const handleDelete = () => {
    // 削除ボタンの処理
  };

  return (
    <div className="p-6">
      <YearCodeForm onRegister={handleRegister} onEdit={handleEdit} onDelete={handleDelete} />
      <YearCodeTable data={yearCodes} />
    </div>
  );
};

export default Home;

