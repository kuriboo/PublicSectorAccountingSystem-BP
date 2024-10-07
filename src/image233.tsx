import React from 'react';

// 型定義
type TableRow = {
  code: string;
  name: string;
};

type Props = {
  rows: TableRow[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const DecisionTable: React.FC<Props> = ({ rows, onOk, onClear, onCancel }) => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg">
      {/* ヘッダー */}
      <div className="bg-blue-500 text-white px-4 py-2 flex justify-between">
        <span>決裁区分検索</span>
        <span>会計年度 平成29 年度</span>
      </div>
      {/* テーブル */}
      <div className="overflow-y-auto h-64">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">決裁区分コード</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">決裁区分名称</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{row.code}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ボタン */}
      <div className="bg-gray-50 px-4 py-2 flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">OK</button>
        <button onClick={onClear} className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">クリア</button>
        <button onClick={onCancel} className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">キャンセル</button>
      </div>
    </div>
  );
};

export default DecisionTable;
```