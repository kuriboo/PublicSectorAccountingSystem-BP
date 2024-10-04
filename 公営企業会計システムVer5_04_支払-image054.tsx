```tsx
import React from 'react';

type ProjectRegistrationFormProps = {
  projectLocation?: string;
  contractDate?: string;
  startDate?: string;
  endDate?: string;
  contractNumber?: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ProjectRegistrationForm: React.FC<ProjectRegistrationFormProps> = ({
  projectLocation = '',
  contractDate = '',
  startDate = '',
  endDate = '',
  contractNumber = '',
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white space-y-4">
      <div className="flex items-center space-x-2">
        <label className="w-24 font-bold">工事名場所</label>
        <input
          type="text"
          value={projectLocation}
          className="flex-1 border border-gray-400 rounded px-2 py-1"
          readOnly
        />
      </div>
      <div className="flex items-center space-x-2">
        <label className="w-24 font-bold">着手年月日</label>
        <input
          type="text"
          value={startDate}
          className="border border-gray-400 rounded px-2 py-1"
          readOnly
        />
      </div>
      <div className="flex items-center space-x-2">
        <label className="w-24 font-bold">完了年月日</label>
        <input
          type="text"
          value={endDate}
          className="border border-gray-400 rounded px-2 py-1"
          readOnly
        />
      </div>
      <div className="flex items-center space-x-2">
        <label className="w-24 font-bold">契約年月日</label>
        <input
          type="text"
          value={contractDate}
          className="border border-gray-400 rounded px-2 py-1"
          readOnly
        />
      </div>
      <div className="flex items-center space-x-2">
        <label className="w-24 font-bold">契約番号</label>
        <input
          type="text"
          value={contractNumber}
          className="border border-gray-400 rounded px-2 py-1"
          readOnly
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ProjectRegistrationForm;
```