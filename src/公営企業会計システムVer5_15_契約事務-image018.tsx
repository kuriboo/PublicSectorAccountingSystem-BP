import React from 'react';

// 型定義
type SalesItemEditorProps = {
  industryType: string;
  industryDescription: string;
  items: string[];
  onItemAdd: (item: string) => void;
  onItemDelete: (index: number) => void;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// コンポーネント定義
const SalesItemEditor: React.FC<SalesItemEditorProps> = ({
  industryType,
  industryDescription,
  items,
  onItemAdd,
  onItemDelete,
  onConfirm,
  onClear,
  onCancel,
}) => {
  const [newItem, setNewItem] = React.useState('');

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="font-bold">業種</span> {industryType}
        </div>
        <div>{industryDescription}</div>
      </div>
      <table className="min-w-full mb-4">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white px-4 py-2">販売品目</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item}</td>
              <td>
                <button
                  onClick={() => onItemDelete(index)}
                  className="text-red-500 hover:underline"
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center mb-4">
        <span className="font-bold mr-2">販売品目</span>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border px-2 py-1 flex-grow"
        />
        <button
          onClick={() => {
            onItemAdd(newItem);
            setNewItem('');
          }}
          className="ml-2 bg-gray-200 hover:bg-gray-300 px-4 py-1"
        >
          行確定
        </button>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default SalesItemEditor;
```