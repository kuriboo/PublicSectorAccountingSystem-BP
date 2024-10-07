import React from 'react';

type ControlData = {
  section: string;
  content: string;
  value: string;
  setting: string;
};

interface ControlTableProps {
  data: ControlData[];
  title?: string;
  onEdit?: () => void;
  onClear?: () => void;
  onOk?: () => void;
  onExit?: () => void;
}

const ControlTable: React.FC<ControlTableProps> = ({
  data,
  title = "制御マスタ保守",
  onEdit,
  onClear,
  onOk,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <button
        className="mb-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        onClick={onEdit}
      >
        編集
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4">区分</th>
            <th className="py-2 px-4">制御内容</th>
            <th className="py-2 px-4">制御値</th>
            <th className="py-2 px-4">設定</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4">{item.section}</td>
              <td className="py-2 px-4">{item.content}</td>
              <td className="py-2 px-4">{item.value}</td>
              <td className="py-2 px-4">{item.setting}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ControlTable;
```