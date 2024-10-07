import React from 'react';

// TypeScriptの型定義
type DataRow = {
  dateTime: string;
  employeeCode: string;
  employeeName: string;
  computerName: string;
  waterSupply: string;
  setting: string;
  settingYear: string;
};

type DataTableProps = {
  data: DataRow[];
};

// DataTableコンポーネント
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">出力日時</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">職員CD</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">コンピュータ名</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">上下水CD</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">調定CD</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">調定年月</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.dateTime}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.employeeCode} : {row.employeeName}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.computerName}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.waterSupply}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.setting}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.settingYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 使用例データ
const sampleData: DataRow[] = [
  { dateTime: '2017/09/19 23:24:59', employeeCode: '00000001', employeeName: '水道課職員1', computerName: 'SYS-003-220', waterSupply: 'すべて', setting: '通常', settingYear: 'H29.06' },
  // 他のデータ...
];

// コンポーネントの使用例
const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">出力履歴</h1>
      <DataTable data={sampleData} />
    </div>
  );
};

export default App;
```