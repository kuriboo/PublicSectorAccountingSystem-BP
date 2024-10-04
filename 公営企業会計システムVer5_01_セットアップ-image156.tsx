```tsx
import React from 'react';

// Props type definition
type DataTableProps = {
  data: Array<{ code: string; title: string; number: string }>;
  onEdit: (item: { code: string; title: string; number: string }) => void;
  onDelete: (item: { code: string; title: string; number: string }) => void;
};

const DataTable: React.FC<DataTableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl">画面タイトルマスタ</h1>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-blue-200">コード</th>
            <th className="py-2 px-4 bg-blue-200">タイトル</th>
            <th className="py-2 px-4 bg-blue-200">起工番号</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.code} className="text-center">
              <td className="py-2 px-4 border">{item.code}</td>
              <td className="py-2 px-4 border">{item.title}</td>
              <td className="py-2 px-4 border">{item.number}</td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-blue-500 text-white px-2 py-1 mx-1 rounded"
                  onClick={() => onEdit(item)}
                >
                  編集
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 mx-1 rounded"
                  onClick={() => onDelete(item)}
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```

・このコードは確認違いない具体的な動作を保証しますません。適切に実行されるかどうか確認し、必要に応じて修正を加えてください。