import React from 'react';

// 型定義
type PermissionFormProps = {
  year: string;
  departmentCode: string;
  handlerCode: string;
  apGroupCode: string;
  operableDepartmentCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const PermissionForm: React.FC<PermissionFormProps> = ({
  year,
  departmentCode,
  handlerCode,
  apGroupCode,
  operableDepartmentCode,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
      <h1 className="text-xl font-bold mb-4">データ権限個別設定マスタ</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input 
          type="text" 
          value={year} 
          className="border rounded-md p-1 mt-1 w-full" 
          readOnly 
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">所属コード</label>
        <input 
          type="text" 
          value={departmentCode} 
          className="border rounded-md p-1 mt-1 w-full" 
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">担当コード</label>
        <input 
          type="text" 
          value={handlerCode} 
          className="border rounded-md p-1 mt-1 w-full" 
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">APグループコード</label>
        <input 
          type="text" 
          value={apGroupCode} 
          className="border rounded-md p-1 mt-1 w-full" 
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">操作可能所属コード</label>
        <input 
          type="text" 
          value={operableDepartmentCode} 
          className="border rounded-md p-1 mt-1 w-full" 
          readOnly
        />
      </div>

      {/* 可能フラグ Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">可能フラグ</h2>
        {['登録', '削除', '参照'].map((item) => (
          <div className="flex items-center mb-2" key={item}>
            <span className="w-20">{item}</span>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name={item} 
                value="不可能" 
                className="form-radio" 
              />
              <span className="ml-2">不可</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input 
                type="radio" 
                name={item} 
                value="可能" 
                className="form-radio" 
              />
              <span className="ml-2">可能</span>
            </label>
          </div>
        ))}
      </div>

      {/* ボタン Section */}
      <div className="flex space-x-4 mt-6">
        <button 
          onClick={onSubmit} 
          className="bg-blue-500 text-white rounded-md px-4 py-2"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-500 text-white rounded-md px-4 py-2"
        >
          クリア
        </button>
        <button 
          onClick={onClose} 
          className="bg-red-500 text-white rounded-md px-4 py-2"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PermissionForm;
