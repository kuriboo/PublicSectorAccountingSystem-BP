```tsx
// components/YearCodeMaster.tsx

import React from 'react';

// TypeScriptの型定義
type YearCodeMasterProps = {
  onRegister: () => void;
  onUpdate: () => void;
  onDelete: () => void;
  data: {
    code: number;
    japaneseEra: string;
    startDate: string;
    abbreviation: string;
  }[];
};

const YearCodeMaster: React.FC<YearCodeMasterProps> = ({ onRegister, onUpdate, onDelete, data }) => {
  return (
    <div className="p-4">
      {/* ボタン */}
      <div className="flex mb-4 space-x-2">
        <button className="bg-blue-500 text-white p-2 rounded" onClick={onRegister}>登録</button>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={onUpdate}>訂正</button>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={onDelete}>削除</button>
      </div>

      {/* フォーム */}
      <div className="mb-4 space-y-2">
        <div>
          年号コード: <input type="text" className="border rounded p-1 ml-2" />
        </div>
        <div>
          和暦年号: <input type="text" className="border rounded p-1 ml-2" />
        </div>
        <div>
          開始年月日: 
          <input type="text" className="border rounded p-1 mx-2" placeholder="年" />
          <input type="text" className="border rounded p-1 mx-2" placeholder="月" />
          <input type="text" className="border rounded p-1 mx-2" placeholder="日" />
        </div>
        <div>
          和暦省略年号: <input type="text" className="border rounded p-1 ml-2" />
        </div>
      </div>

      {/* テーブル */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">コード</th>
            <th className="border p-2">和暦年号</th>
            <th className="border p-2">開始年月日</th>
            <th className="border p-2">和暦省略年号</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.code}>
              <td className="border p-2 text-center">{row.code}</td>
              <td className="border p-2 text-center">{row.japaneseEra}</td>
              <td className="border p-2 text-center">{row.startDate}</td>
              <td className="border p-2 text-center">{row.abbreviation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* フッターボタン */}
      <div className="flex mt-4 space-x-2">
        <button className="bg-gray-500 text-white p-2 rounded">OK</button>
        <button className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button className="bg-gray-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default YearCodeMaster;
```