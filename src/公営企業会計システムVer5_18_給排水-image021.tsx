import React from 'react';

// プロパティの型定義
type TableProps = {
  headers: string[];
  rows: (string | number)[][];
};

const DataTable: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

// 使用例（propsをカスタマイズ可能）
// <DataTable
//   headers={['列CD', '列名', '出力列(画面)', '項目名(画面)']}
//   rows={[
//     [1, '行番号', 1, '行番号'],
//     [2, 'ステータス', 2, 'ステータス'],
//     // ... 他の行データ
//   ]}
// />
