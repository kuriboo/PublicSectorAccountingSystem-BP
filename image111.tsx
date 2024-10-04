```tsx
// components/AssetManagement.tsx
import React from 'react';

// 型定義
interface AssetManagementProps {
  itemNumber: string;
  detailDivisionCode: string;
  items: Array<{
    number: string;
    name: string;
    content1?: string;
    content2?: string;
    content3?: string;
    content4?: string;
    content5?: string;
  }>;
  onConfirm: () => void;
  onCancel: () => void;
}

// コンポーネント定義
const AssetManagement: React.FC<AssetManagementProps> = ({
  itemNumber,
  detailDivisionCode,
  items,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">アセットマネジメント用語マスタ</h1>
        <div className="flex items-center mb-2">
          <label className="mr-2">項目番号:</label>
          <span className="text-gray-700">{itemNumber}</span>
        </div>
        <div className="flex items-center">
          <label className="mr-2">詳細区分コード:</label>
          <span className="text-gray-700">{detailDivisionCode}</span>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 border-b">用語番号</th>
            <th className="py-2 border-b">名称</th>
            <th className="py-2 border-b">内容1</th>
            <th className="py-2 border-b">内容2</th>
            <th className="py-2 border-b">内容3</th>
            <th className="py-2 border-b">内容4</th>
            <th className="py-2 border-b">内容5</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="py-2 border-b text-center">{item.number}</td>
              <td className="py-2 border-b">{item.name}</td>
              <td className="py-2 border-b">{item.content1}</td>
              <td className="py-2 border-b">{item.content2}</td>
              <td className="py-2 border-b">{item.content3}</td>
              <td className="py-2 border-b">{item.content4}</td>
              <td className="py-2 border-b">{item.content5}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          onClick={onConfirm}
          className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md mr-2"
        >
          行確定
        </button>
        <button
          onClick={onCancel}
          className="py-2 px-4 bg-gray-300 text-gray-800 rounded-md shadow-md"
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetManagement;
```