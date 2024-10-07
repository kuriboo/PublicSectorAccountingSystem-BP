import React from 'react';

// TypeScript interface for props
interface ProjectInputProps {
  fiscalYear: string;
  projectNumber: string;
  projectName: string;
  location: string;
  onEditDetails: () => void;
  onDeleteDetails: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const ProjectInput: React.FC<ProjectInputProps> = ({
  fiscalYear,
  projectNumber,
  projectName,
  location,
  onEditDetails,
  onDeleteDetails,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">工事材料入力</h2>

      <div className="mb-2">
        <span className="font-semibold">工事会帳年度:</span> {fiscalYear} 年度
      </div>

      <div className="mb-2">
        <span className="font-semibold">工事会番号:</span> {projectNumber}
      </div>

      <div className="mb-2">
        <span className="font-semibold">工事名称:</span> {projectName}
      </div>

      <div className="mb-4">
        <span className="font-semibold">工事場所:</span> {location}
      </div>

      <div className="flex justify-between mb-4">
        <button
          className="px-3 py-1 bg-gray-300 rounded-full"
          onClick={onEditDetails}
        >
          明細編集
        </button>
        <button
          className="px-3 py-1 bg-red-300 rounded-full"
          onClick={onDeleteDetails}
        >
          明細削除
        </button>
      </div>

      <table className="w-full mb-4 border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2">登録区分</th>
            <th className="border border-gray-200 p-2">変更回数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 p-2">計画</td>
            <td className="border border-gray-200 p-2">0</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ProjectInput;
```