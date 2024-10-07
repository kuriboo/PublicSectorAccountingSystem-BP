import React from 'react';

// Propsの型定義
type LoginFormProps = {
  destinations: string[];
  years: string[];
  roles: string[];
  onLogin: (userCode: string, password: string) => void;
  onExit: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  destinations,
  years,
  roles,
  onLogin,
  onExit,
}) => {
  const [destination, setDestination] = React.useState(destinations[0]);
  const [year, setYear] = React.useState(years[0]);
  const [userCode, setUserCode] = React.useState('');
  const [role, setRole] = React.useState(roles[0]);
  const [password, setPassword] = React.useState('');

  return (
    <div className="flex flex-col items-center p-8 bg-blue-200 rounded-lg">
      <h1 className="text-4xl font-bold text-blue-800 mb-2">
        公営企業会計システム
      </h1>
      <h2 className="text-lg text-yellow-300 mb-8">
        PUBLIC ENTERPRISE ACCOUNTING SYSTEM
      </h2>
      
      <div className="mb-4">
        <label className="mr-2">接続先:</label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border p-1"
        >
          {destinations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="mr-2">年度:</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border p-1"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="mr-2">職員コード:</label>
        <input
          type="text"
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          className="border p-1"
        />
      </div>
      
      <div className="mb-4">
        <label className="mr-2">所属担当:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-1"
        >
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-8">
        <label className="mr-2">パスワード:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-1"
        />
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={() => onLogin(userCode, password)}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          ログイン
        </button>
        <button
          onClick={onExit}
          className="bg-gray-500 text-white py-1 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
```