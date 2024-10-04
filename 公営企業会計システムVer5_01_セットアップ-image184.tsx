import React from 'react';

interface LoginMonitorProps {
  fiscalYear: string;
  department: string;
  role: string;
  employeeName: string;
  loginTime: string;
  onClear: () => void;
  onClose: () => void;
}

const LoginMonitor: React.FC<LoginMonitorProps> = ({
  fiscalYear,
  department,
  role,
  employeeName,
  loginTime,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h1 className="text-xl font-bold text-blue-500">ログインモニター</h1>
      <div className="mt-4">
        <div className="flex items-center space-x-4">
          <label className="text-sm">会計年度:</label>
          <span className="font-semibold">{fiscalYear}</span>
          <label className="ml-6 text-sm">照会</label>
          <input type="radio" name="searchType" className="ml-2" />
          <label className="text-sm ml-2">年度</label>
          <input type="radio" name="searchType" className="ml-2" />
        </div>
      </div>
      <table className="min-w-full mt-4 border-t border-b border-gray-400">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4">所属</th>
            <th className="py-2 px-4">担当</th>
            <th className="py-2 px-4">職員</th>
            <th className="py-2 px-4">ログイン時間</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border px-4 py-2">{department}</td>
            <td className="border px-4 py-2">{role}</td>
            <td className="border px-4 py-2">{employeeName}</td>
            <td className="border px-4 py-2">{loginTime}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <h2 className="font-bold">処理概要</h2>
        <p className="text-sm mt-2">
          ログインモニターで管理されている、現在システムにログインをしている職員とそのログイン時間を会計年度別に一覧表示します。
        </p>
      </div>
      <div className="flex justify-end mt-6">
        <button onClick={onClear} className="bg-gray-200 py-1 px-3 rounded mr-3">
          クリア
        </button>
        <button onClick={onClose} className="bg-gray-200 py-1 px-3 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default LoginMonitor;