import React from 'react';

interface PermissionFormProps {
  fiscalYear?: number;
  departmentStart?: string;
  departmentEnd?: string;
  staffCode?: string;
  groupCode?: string;
  onSubmit?: () => void;
  onClear?: () => void;
  onExit?: () => void;
}

const PermissionForm: React.FC<PermissionFormProps> = ({
  fiscalYear = 29,
  departmentStart = '0000000',
  departmentEnd = '9999999',
  staffCode = '000',
  groupCode = '9999999',
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-bold mb-4">アプリケーション権限マスタリスト作成</h2>
      <div className="flex items-center space-x-2 mb-4">
        <label>年度:</label>
        <select defaultValue={fiscalYear} className="border rounded px-2 py-1">
          <option>平成29</option>
          {/* Other options can be added here */}
        </select>
      </div>
      <div className="border-t border-b py-4 mb-4">
        <div className="mb-2">
          <label className="block font-bold">所属</label>
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              defaultValue={departmentStart} 
              className="border rounded px-2 py-1 w-24" 
            />
            <span className="mx-1">~</span>
            <input 
              type="text" 
              defaultValue={departmentEnd} 
              className="border rounded px-2 py-1 w-24" 
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="block font-bold">担当コード</label>
          <input 
            type="text" 
            defaultValue={staffCode} 
            className="border rounded px-2 py-1 w-24" 
          />
        </div>
        <div className="mb-2">
          <label className="block font-bold">APグループコード</label>
          <input 
            type="text" 
            defaultValue={groupCode} 
            className="border rounded px-2 py-1 w-24" 
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md">
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 px-4 py-2 rounded-md">
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default PermissionForm;
```