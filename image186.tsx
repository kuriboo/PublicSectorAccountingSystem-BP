```tsx
import React from 'react';

// TypeScriptの型定義
interface LoginMonitorProps {
  accountingYear: string;
  department: string;
  role: string;
  username: string;
  loginTime: string;
}

// Tailwind CSSを使用した再利用可能なコンポーネント
const LoginMonitor: React.FC<LoginMonitorProps> = ({
  accountingYear,
  department,
  role,
  username,
  loginTime,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="text-lg font-bold mb-2">ログインモニター</div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          会計年度
        </label>
        <div className="p-2 border border-gray-300 rounded-md">
          {accountingYear}
        </div>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-blue-500 text-white">所属</th>
            <th className="px-4 py-2 bg-blue-500 text-white">担当</th>
            <th className="px-4 py-2 bg-blue-500 text-white">職員</th>
            <th className="px-4 py-2 bg-blue-500 text-white">ログイン時間</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border-t">
            <td className="px-4 py-2">{department}</td>
            <td className="px-4 py-2">{role}</td>
            <td className="px-4 py-2">{username}</td>
            <td className="px-4 py-2">{loginTime}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 p-2 border border-gray-300 rounded-md">
        <p className="text-sm">
          ログインモニターで管理されている、現在システムにログインをしている職員とそのログイン時間を会計年度別に一覧表示します。
        </p>
      </div>
    </div>
  );
};

export default LoginMonitor;
```