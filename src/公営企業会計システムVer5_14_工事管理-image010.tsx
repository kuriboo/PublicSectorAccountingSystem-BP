import React from 'react';

// Define types for the component props
interface ProjectSearchProps {
  project: string;
  policy: string;
  policyDescription: string;
  onShowClick: () => void;
  onClearClick: () => void;
  onCancelClick: () => void;
}

const ProjectSearch: React.FC<ProjectSearchProps> = ({
  project,
  policy,
  policyDescription,
  onShowClick,
  onClearClick,
  onCancelClick,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded shadow-md p-4">
      <h1 className="text-lg font-bold mb-4">工区番号検索</h1>
      <div className="mb-4">
        <div className="flex mb-2">
          <span className="font-bold mr-2">事業:</span>
          <span>{project}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-bold mr-2">施策:</span>
          <span>{policy}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-bold mr-2">施策内訳:</span>
          <span>{policyDescription}</span>
        </div>
      </div>
      <button
        onClick={onShowClick}
        className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded mb-2"
      >
        表示
      </button>
      <div className="overflow-x-auto mb-4">
        <table className="table-auto w-full border-collapse border border-blue-800">
          <thead>
            <tr>
              <th className="border border-blue-800 bg-blue-800 text-white py-2 px-4">工区番号</th>
              <th className="border border-blue-800 bg-blue-800 text-white py-2 px-4">工事種目分類名称</th>
              <th className="border border-blue-800 bg-blue-800 text-white py-2 px-4">予定番号</th>
              <th className="border border-blue-800 bg-blue-800 text-white py-2 px-4">負担番号</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for dynamic table rows */}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClearClick}
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded mr-2"
        >
          クリア
        </button>
        <button
          onClick={onCancelClick}
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ProjectSearch;
```