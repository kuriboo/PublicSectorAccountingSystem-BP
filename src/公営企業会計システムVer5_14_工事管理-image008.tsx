import React from 'react';

// TypeScriptの型定義
interface TableProps {
  data: Array<{
    工事会帳番号: number;
    工事名称: string;
    工事場所: string;
    フラグ: string;
  }>;
}

// 再利用可能なTableコンポーネント
const AssetTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">資産非計上確定入力</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="border px-4 py-2">工事会帳番号</th>
            <th className="border px-4 py-2">工事名称</th>
            <th className="border px-4 py-2">工事場所</th>
            <th className="border px-4 py-2">フラグ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{row.工事会帳番号}</td>
              <td className="border px-4 py-2">{row.工事名称}</td>
              <td className="border px-4 py-2">{row.工事場所}</td>
              <td className="border px-4 py-2">{row.フラグ}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 mr-2 rounded">OK</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default AssetTable;

// 使用例
// <AssetTable data={[
//   { 工事会帳番号: 1, 工事名称: '○○地区配水管改良工事', 工事場所: '○○', フラグ: '建仮' },
//   { 工事会帳番号: 2, 工事名称: '工事台帳登録', 工事場所: '', フラグ: '計上' },
//   // ...more data
// ]} />
```