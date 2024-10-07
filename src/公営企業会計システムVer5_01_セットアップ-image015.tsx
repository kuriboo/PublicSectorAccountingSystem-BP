import React from 'react';
import 'tailwindcss/tailwind.css';

// 型定義
interface Entry {
  id: string;
  content: string;
}

interface Props {
  headerTitle: string;
  entries: Entry[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}

// コンポーネント定義
const MasterEntryComponent: React.FC<Props> = ({ headerTitle, entries, onEdit, onDelete, onAdd }) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-indigo-100 p-2 mb-4">
        <h1 className="text-lg font-bold">{headerTitle}</h1>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onAdd}>
            登録
          </button>
        </div>
        {/* Placeholder for editing/deleting options */}
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">訂正</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">削除</button>
        </div>
      </div>
      
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              欄外番号
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              欄外内容
            </th>
          </tr>
        </thead>
        
        <tbody className="bg-white divide-y divide-gray-200">
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.content}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                  onClick={() => onEdit(entry.id)}
                >
                  編集
                </button>
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => onDelete(entry.id)}
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Bottom buttons */}
      <div className="flex justify-end space-x-3 mt-4">
        <button className="px-6 py-2 bg-gray-200 text-black rounded">OK</button>
        <button className="px-6 py-2 bg-gray-200 text-black rounded">クリア</button>
        <button className="px-6 py-2 bg-gray-200 text-black rounded">終了</button>
      </div>
    </div>
  );
};

export default MasterEntryComponent;
```