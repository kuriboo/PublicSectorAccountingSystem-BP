import React from 'react';

// TypeScript types for props
type PriceEstimateFormProps = {
  date: string;
  projects: string[];
  onSelectProject: (project: string) => void;
  notifications: string[];
  notes: string[];
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const PriceEstimateForm: React.FC<PriceEstimateFormProps> = ({
  date,
  projects,
  onSelectProject,
  notifications,
  notes,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700">作表年月日:</label>
        <input
          type="text"
          value={date}
          readOnly
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">物件</label>
        <select
          multiple
          onChange={(e) => onSelectProject(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        >
          {projects.map((project) => (
            <option key={project}>{project}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">通知文</label>
        <select className="w-full p-2 mt-2 border border-gray-300 rounded">
          {notifications.map((notification, index) => (
            <option key={index}>{notification}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">備考</label>
        <select className="w-full p-2 mt-2 border border-gray-300 rounded">
          {notes.map((note, index) => (
            <option key={index}>{note}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PriceEstimateForm;
