import React, { useState } from 'react';

// 定義: 担当種別
interface TaskType {
  code: string;
  name: string;
}

// プロパティの型定義
interface TaskTypeManagerProps {
  taskTypes: TaskType[];
  year: string;
  onConfirm?: (taskType: TaskType) => void;
  onCancel?: () => void;
}

const TaskTypeManager: React.FC<TaskTypeManagerProps> = ({ taskTypes, year, onConfirm, onCancel }) => {
  const [selectedTaskType, setSelectedTaskType] = useState<TaskType>(taskTypes[0] || { code: '', name: '' });

  // 担当種別の変更処理
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = event.target.value;
    const taskType = taskTypes.find((t) => t.code === selectedCode);
    if (taskType) setSelectedTaskType(taskType);
  };

  // 確定ボタンクリック処理
  const handleConfirm = () => {
    if (onConfirm) onConfirm(selectedTaskType);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <div className="flex mb-4">
        <span className="mr-2">工事台帳年度:</span>
        <span className="font-bold">{year}</span>
      </div>
      <div className="mb-4 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2">担当種別コード</th>
              <th className="text-left px-4 py-2">担当種別名称</th>
            </tr>
          </thead>
          <tbody>
            {taskTypes.map((taskType) => (
              <tr key={taskType.code}>
                <td className="border px-4 py-2">{taskType.code}</td>
                <td className="border px-4 py-2">{taskType.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2">担当種別コード:</label>
        <select
          className="border rounded px-2 py-1"
          value={selectedTaskType.code}
          onChange={handleSelectChange}
        >
          {taskTypes.map((taskType) => (
            <option key={taskType.code} value={taskType.code}>
              {taskType.code}
            </option>
          ))}
        </select>
      </div>
      <div className="flex mb-4">
        <label className="mr-2">担当種別名称:</label>
        <input
          type="text"
          className="border rounded px-2 py-1 flex-grow"
          value={selectedTaskType.name}
          readOnly
        />
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleConfirm}>
          確定
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TaskTypeManager;
```