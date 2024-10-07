// components/InspectionTable.tsx

import React, { useState } from 'react'; // useStateをインポート

type InspectionItem = {
  id: string;
  name: string;
  result: string;
};

type InspectionTableProps = {
  items: InspectionItem[];
  onSelectItem: (item: InspectionItem) => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const InspectionTable: React.FC<InspectionTableProps> = ({
  items,
  onSelectItem,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">検査項目</th>
            <th className="border px-4 py-2">検査結果</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} onClick={() => onSelectItem(item)} className="border hover:bg-gray-100 cursor-pointer">
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 space-x-4">
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">確定</button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

const IndexPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = [
    { id: '001', name: '水漏', result: 'なし' },
    { id: '002', name: '悪臭', result: 'なし' },
    { id: '003', name: '腐食', result: 'ややあり' },
    // ...add more items as needed
  ];

  const handleSelectItem = (item: { id: string }) => {
    setSelectedItem(item.id);
  };

  const handleConfirm = () => {
    alert(`Selected item ID: ${selectedItem}`);
  };

  const handleCancel = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <InspectionTable
        items={items}
        onSelectItem={handleSelectItem}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default IndexPage;
