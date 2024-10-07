import React, { useState } from 'react';

// プロパティの型定義
type LoginFormProps = {
  connections: string[];
  departments: string[];
  onSubmit: (employeeCode: string, password: string) => void;
};

// ログインフォームコンポーネント
const LoginForm: React.FC<LoginFormProps> = ({ connections, departments, onSubmit }) => {
  // ステート
  const [connection, setConnection] = useState(connections[0]);
  const [year, setYear] = useState('平成29');
  const [employeeCode, setEmployeeCode] = useState('');
  const [department, setDepartment] = useState(departments[0]);
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
      <h1 className="text-3xl font-bold text-white mb-4">公営企業会計システム</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <label className="block text-gray-700">接続先</label>
          <select
            value={connection}
            onChange={(e) => setConnection(e.target.value)}
            className="border rounded w-full px-3 py-2"
          >
            {connections.map((conn) => (
              <option key={conn} value={conn}>
                {conn}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">年度</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border rounded w-full px-3 py-2"
          >
            <option value="平成29">平成29</option>
            <option value="平成30">平成30</option>
            <option value="平成31">平成31</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">職員コード</label>
          <input
            type="text"
            value={employeeCode}
            onChange={(e) => setEmployeeCode(e.target.value)}
            className="border rounded w-full px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">所属担当</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border rounded w-full px-3 py-2"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full px-3 py-2"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => onSubmit(employeeCode, password)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            ログイン
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;