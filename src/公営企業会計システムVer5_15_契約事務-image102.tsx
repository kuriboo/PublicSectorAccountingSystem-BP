import React from 'react';

interface FormProps {
  contractorName?: string;
  contractType?: string;
  projectName?: string;
  client?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  completionBudget?: number;
  mainInspectors?: number;
  onConfirm?: () => void;
  onCancel?: () => void;
  onFinish?: () => void;
  onClear?: () => void;
}

const ProjectForm: React.FC<FormProps> = ({
  contractorName = '大規模な地域開発（JV案件）：特定工事企業体',
  contractType = '建築一式工事',
  projectName = 'アスファルト舗装工事',
  client = '自官公庁',
  location = '町内',
  startDate = '平成29年08月06日',
  endDate = '平成29年09月29日',
  completionBudget = 1234000,
  mainInspectors = 70,
  onConfirm,
  onCancel,
  onFinish,
  onClear,
}) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-4 rounded shadow">
      <div className="mb-4">
        <label className="block font-medium mb-1">業者名</label>
        <input
          type="text"
          value={contractorName}
          className="w-full border rounded p-2"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">業種</label>
        <input
          type="text"
          value={contractType}
          className="w-full border rounded p-2"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">案件名</label>
        <input
          type="text"
          value={projectName}
          className="w-full border rounded p-2"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">発注者</label>
        <input
          type="text"
          value={client}
          className="w-full border rounded p-2"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">場所</label>
        <input
          type="text"
          value={location}
          className="w-full border rounded p-2"
          disabled
        />
      </div>
      <div className="mb-4 flex space-x-2">
        <div>
          <label className="block font-medium mb-1">開始日</label>
          <input
            type="text"
            value={startDate}
            className="w-full border rounded p-2"
            disabled
          />
        </div>
        <div>
          <label className="block font-medium mb-1">終了日</label>
          <input
            type="text"
            value={endDate}
            className="w-full border rounded p-2"
            disabled
          />
        </div>
      </div>
      <div className="mb-4 flex space-x-2">
        <div>
          <label className="block font-medium mb-1">完成高</label>
          <input
            type="text"
            value={completionBudget.toLocaleString()}
            className="w-full border rounded p-2"
            disabled
          />
        </div>
        <div>
          <label className="block font-medium mb-1">主観点数</label>
          <input
            type="text"
            value={mainInspectors}
            className="w-full border rounded p-2"
            disabled
          />
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onConfirm}
          className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          行確定
        </button>
        <button
          onClick={onCancel}
          className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          行キャンセル
        </button>
        <button
          onClick={onFinish}
          className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;
```