import React from 'react';

// TypeScript型定義
type BusinessAreaProps = {
  areas: { code: string; name: string }[];
  onEdit: (code: string) => void;
  onAdd: () => void;
  onDelete: (code: string) => void;
};

const BusinessAreaComponent: React.FC<BusinessAreaProps> = ({
  areas,
  onEdit,
  onAdd,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">事業区分マスタ</h2>
      <div className="mb-2 space-x-2">
        {/* ボタン */}
        <button
          onClick={onAdd}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          追加
        </button>
        <button
          onClick={() => {
            const selectedCode = prompt('編集するコードを入力してください:');
            if (selectedCode) onEdit(selectedCode);
          }}
          className="bg-yellow-500 text-white p-2 rounded-md"
        >
          編集
        </button>
        <button
          onClick={() => {
            const selectedCode = prompt('削除するコードを入力してください:');
            if (selectedCode) onDelete(selectedCode);
          }}
          className="bg-red-500 text-white p-2 rounded-md"
        >
          削除
        </button>
      </div>
      <table className="w-full bg-yellow-100 rounded-md">
        <thead>
          <tr>
            <th className="text-left p-2">事業区分CD</th>
            <th className="text-left p-2">事業区分名称</th>
          </tr>
        </thead>
        <tbody>
          {areas.map((area) => (
            <tr key={area.code}>
              <td className="border-t p-2">{area.code}</td>
              <td className="border-t p-2">{area.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessAreaComponent;