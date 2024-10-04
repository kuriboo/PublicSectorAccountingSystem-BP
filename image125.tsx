```tsx
import React from 'react';

// データの型定義
interface RowData {
  number: number;
  date: string;
  transferType: string;
  fileName: string;
}

// プロパティの型定義
interface AssetListProps {
  data: RowData[];
  onConfirm: () => void;
  onClear: () => void;
}

const AssetList: React.FC<AssetListProps> = ({ data, onConfirm, onClear }) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold text-center mb-4">固定資産コンパート取消</h2>
      <table className="w-full mb-4 border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">No.</th>
            <th className="border px-2 py-1 text-left">コンパート日時</th>
            <th className="border px-2 py-1 text-left">異動区分</th>
            <th className="border px-2 py-1 text-left">取込ファイル名</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.number}>
              <td className="border px-2 py-1">{row.number}</td>
              <td className="border px-2 py-1">{row.date}</td>
              <td className="border px-2 py-1">{row.transferType}</td>
              <td className="border px-2 py-1">{row.fileName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-4 p-2 bg-gray-100 border">
        <p className="text-sm">
          ・固定資産コンパート機能で登録した固定資産情報を削除します。
        </p>
        <p className="text-sm">
          ・コンパートを行った日時を指定して取消を行います。指定した日時にコンパートしたすべての固定資産情報が削除されます。
        </p>
      </div>
      <div className="flex justify-end">
        <button onClick={onClear} className="mx-2 px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
      </div>
    </div>
  );
};

// 使用例
const data = [
  { number: 1, date: '平成30年06月25日 10:54:55', transferType: '電算移行', fileName: '固定資産情報_20180625105431.zip' },
  { number: 2, date: '平成30年06月18日 16:57:28', transferType: '電算移行', fileName: '固定資産情報_20180619142707.zip' },
];

const Example = () => {
  const handleConfirm = () => {
    alert('確認しました');
  };

  const handleClear = () => {
    alert('クリアしました');
  };

  return <AssetList data={data} onConfirm={handleConfirm} onClear={handleClear} />;
};

export default Example;
```