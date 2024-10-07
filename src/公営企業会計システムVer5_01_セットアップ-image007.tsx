import React, { useState } from 'react';

// プロパティの型定義
interface ProjectFormProps {
  initialCode?: string;
  initialName?: string;
  initialLocation?: string;
  onSubmit: (data: { code: string; name: string; location: string }) => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  initialCode = '',
  initialName = '',
  initialLocation = '',
  onSubmit,
  onCancel,
}) => {
  // ローカルステートでフォームのデータを管理
  const [code, setCode] = useState(initialCode);
  const [name, setName] = useState(initialName);
  const [location, setLocation] = useState(initialLocation);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
          工事名場所コード
        </label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
        />
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          工事名称
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
        />
      </div>
      
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          工事場所
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={() => onCancel()}
          className="px-4 py-2 font-semibold text-sm bg-gray-200 text-gray-700 rounded-md"
        >
          終了
        </button>
        <button
          type="submit"
          onClick={() => onSubmit({ code, name, location })}
          className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;
```