import React from 'react';

// TypeScript interface for component props
interface DepartmentFormProps {
  startDepartmentCode?: string;
  endDepartmentCode?: string;
  startControlName?: string;
  endControlName?: string;
  startControlStandard?: string;
  endControlStandard?: string;
  acquisitionYear?: string;
  onSubmit?: () => void;
  onClear?: () => void;
  onExit?: () => void;
}

const DepartmentForm: React.FC<DepartmentFormProps> = ({
  startDepartmentCode = '',
  endDepartmentCode = '',
  startControlName = '',
  endControlName = '',
  startControlStandard = '',
  endControlStandard = '',
  acquisitionYear = '',
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-lg mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">部門別予測管理種明細表作成</h2>
      <div className="bg-white p-4 rounded-md shadow-inner">
        {/* Date */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">作成年月日</label>
          <div className="border p-2">{acquisitionYear}</div>
        </div>

        {/* Range Section */}
        <div>
          <h3 className="font-bold mb-2">範囲指定</h3>
          <div className="space-y-3">
            {/* Department Codes */}
            <div className="flex items-center">
              <label className="mr-2">部門：</label>
              <input
                type="text"
                defaultValue={startDepartmentCode}
                className="border p-2 w-16"
              />
              <span className="mx-2">~</span>
              <input
                type="text"
                defaultValue={endDepartmentCode}
                className="border p-2 w-16"
              />
            </div>
            {/* Control Names */}
            <div className="flex items-center">
              <label className="mr-2">管理名称：</label>
              <input
                type="text"
                defaultValue={startControlName}
                className="border p-2 w-16"
              />
              <span className="mx-2">~</span>
              <input
                type="text"
                defaultValue={endControlName}
                className="border p-2 w-16"
              />
            </div>
            {/* Control Standards */}
            <div className="flex items-center">
              <label className="mr-2">管理規格：</label>
              <input
                type="text"
                defaultValue={startControlStandard}
                className="border p-2 w-16"
              />
              <span className="mx-2">~</span>
              <input
                type="text"
                defaultValue={endControlStandard}
                className="border p-2 w-16"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={onSubmit}
          >
            OK
          </button>
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded"
            onClick={onClear}
          >
            クリア
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={onExit}
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentForm;
```