import React, { FC } from 'react';

// 型定義
type LogEntry = {
  date: string;
  year: string;
  department: string;
  person: string;
  screen: string;
  action: string;
};

type Props = {
  title: string;
  entries: LogEntry[];
  onSearch: () => void;
  onExportCSV: () => void;
};

// コンポーネント
const AccessLogViewer: FC<Props> = ({ title, entries, onSearch, onExportCSV }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      
      <div className="flex space-x-4 mb-4">
        <input type="text" placeholder="処理日" className="border p-2 rounded" />
        <input type="text" placeholder="職員" className="border p-2 rounded" />
        <button onClick={onSearch} className="bg-blue-500 text-white py-2 px-4 rounded">
          表示
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-200">
            <th className="p-2 border-b">処理日</th>
            <th className="p-2 border-b">年度</th>
            <th className="p-2 border-b">所属</th>
            <th className="p-2 border-b">職員</th>
            <th className="p-2 border-b">処理画面</th>
            <th className="p-2 border-b">処理内容</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2 border-b">{entry.date}</td>
              <td className="p-2 border-b">{entry.year}</td>
              <td className="p-2 border-b">{entry.department}</td>
              <td className="p-2 border-b">{entry.person}</td>
              <td className="p-2 border-b">{entry.screen}</td>
              <td className="p-2 border-b">{entry.action}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button onClick={onExportCSV} className="bg-gray-500 text-white py-2 px-4 rounded">
          CSV出力
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AccessLogViewer;
```