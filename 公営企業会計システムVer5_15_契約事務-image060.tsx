```tsx
import React from 'react';

// TypeScriptの型定義
interface TextMasterProps {
  title: string;
  textItems: string[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onConfirm: () => void;
  onCancel: () => void;
  selectedText: string;
}

const TextMaster: React.FC<TextMasterProps> = ({
  title,
  textItems,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
  selectedText,
}) => {
  return (
    <div className="container mx-auto p-4">
      {/* タイトル表示 */}
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      
      {/* テキストアイテム表示 */}
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">テキスト</th>
            <th className="px-4 py-2">アクション</th>
          </tr>
        </thead>
        <tbody>
          {textItems.map((text, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{text}</td>
              <td className="border px-4 py-2">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => onEdit(index)}
                >
                  編集
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => onDelete(index)}
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 選択されたテキストの表示 */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">選択されたテキスト:</label>
        <input 
          type="text" 
          value={selectedText} 
          disabled 
          className="shadow border rounded w-full py-2 px-3 text-gray-700" 
        />
      </div>

      {/* アクションボタン */}
      <div className="flex justify-end">
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={onConfirm}
        >
          確認
        </button>
        <button 
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TextMaster;
```