import React from 'react';

// Type definition for component props
type FacilityFormProps = {
  date: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FacilityForm: React.FC<FacilityFormProps> = ({ date, onSubmit, onClear, onClose }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold">施設別名称規格一覧表作成</h1>
        <p className="text-sm">作表年月日: {date}</p>
      </div>
      <div className="border p-4 rounded-md">
        <h2 className="mb-2 font-bold">範囲指定</h2>
        <div className="space-y-4">
          {/* Range Specification Fields */}
          {['固定資産科目', '施設', '管理名称', '管理規格'].map((label, index) => (
            <div key={index} className="flex items-center space-x-2">
              <label className="flex-1">{label}</label>
              <input type="text" className="flex-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-300" />
              <span>～</span>
              <input type="text" className="flex-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-300" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400" onClick={onSubmit}>
          OK
        </button>
        <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default FacilityForm;
```