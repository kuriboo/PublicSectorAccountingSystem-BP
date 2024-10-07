import React from 'react';

// Props type definition
type ManagementFormProps = {
  publishDate: string;
  department: string;
  facility: string;
  managementName: string;
  managementRegulation: string;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const ManagementForm: React.FC<ManagementFormProps> = ({
  publishDate,
  department,
  facility,
  managementName,
  managementRegulation,
  onOk,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded border border-gray-300">
      {/* Title */}
      <h1 className="text-lg font-bold mb-4">部門別施設別管種延長の調作成</h1>

      {/* Publish Date */}
      <div className="mb-4">
        <span className="text-sm font-medium">作表年月日:</span>
        <span className="ml-2 bg-blue-50 px-2 py-1 rounded">{publishDate}</span>
      </div>

      {/* Range Specification Section */}
      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-md font-semibold mb-2">範囲指定</h2>
        
        {/* Department */}
        <div className="flex items-center mb-2">
          <label className="w-20 font-medium">部門</label>
          <input
            type="text"
            className="border rounded px-2 py-1 mr-2"
            value={department}
            readOnly
          />
          <span className="flex-1 text-gray-600">取水</span>
        </div>

        {/* Facility */}
        <div className="flex items-center mb-2">
          <label className="w-20 font-medium">施設</label>
          <input
            type="text"
            className="border rounded px-2 py-1"
            value={facility}
            readOnly
          />
        </div>

        {/* Management Name */}
        <div className="flex items-center mb-2">
          <label className="w-20 font-medium">管種名称</label>
          <input
            type="text"
            className="border rounded px-2 py-1"
            value={managementName}
            readOnly
          />
        </div>

        {/* Management Regulation */}
        <div className="flex items-center mb-2">
          <label className="w-20 font-medium">管種規格</label>
          <input
            type="text"
            className="border rounded px-2 py-1"
            value={managementRegulation}
            readOnly
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onEnd}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ManagementForm;
```