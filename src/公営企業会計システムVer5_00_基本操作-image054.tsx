import React from 'react';

// TypeScriptの型定義
type CsvDisplayProps = {
  data: { [key: string]: string }[];
  className?: string;
};

// CSVデータをテーブルとして表示する再利用可能なコンポーネント
const CsvDisplay: React.FC<CsvDisplayProps> = ({ data, className = '' }) => {

  // オブジェクトのキーを取得してテーブルのヘッダーに使用する
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="border-b border-gray-300 px-4 py-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {headers.map((header) => (
                <td key={header} className="border-b border-gray-300 px-4 py-2">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvDisplay;