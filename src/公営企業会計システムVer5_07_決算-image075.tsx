import React from 'react';

// TypeScript interfaces for component props
interface Item {
  code: string;
  name: string;
}

interface Props {
  title: string;
  items: Item[];
  onEdit: (code: string) => void;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const SpecialIncomeMaster: React.FC<Props> = ({
  title,
  items,
  onEdit,
  onOk,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-center bg-blue-200 p-2 rounded-md">{title}</h1>
      <div className="mt-4 flex justify-between">
        <div className="flex items-center">
          <span className="mr-4">特定収入項目コード</span>
          <input type="text" className="border border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex items-center">
          <span className="mr-4">特定収入項目名称</span>
          <input type="text" className="border border-gray-300 rounded-md p-2" />
        </div>
      </div>
      <div className="mt-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full border-b">
              <th className="text-left p-2 bg-blue-200">特定収入項目コード</th>
              <th className="text-left p-2 bg-blue-200">特定収入項目名称</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.code} className="border-b hover:bg-gray-100">
                <td className="p-2">{item.code}</td>
                <td className="p-2">{item.name}</td>
                <td>
                  <button
                    onClick={() => onEdit(item.code)}
                    className="bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-400"
                  >
                    編集
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default SpecialIncomeMaster;
