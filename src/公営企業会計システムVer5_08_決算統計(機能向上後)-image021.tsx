import React from 'react';

// Type definition for the component props
interface FormProps {
  year: string;
  businessType: string;
  location: string;
  manager: string;
  detailInfo: string[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Functional component with TypeScript and Tailwind CSS
const BusinessForm: React.FC<FormProps> = ({
  year,
  businessType,
  location,
  manager,
  detailInfo,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">
          {year} 年度 業種・事業 {businessType}
        </h2>
        <p className="italic">{businessType}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-base font-semibold">事業情報</h3>
        <div className="grid grid-cols-2 gap-2">
          <label>事業所所在地</label>
          <input
            type="text"
            value={location}
            readOnly
            className="border p-1"
          />
          <label>管理者名</label>
          <input
            type="text"
            value={manager}
            readOnly
            className="border p-1"
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-base font-semibold">詳細情報</h3>
        {detailInfo.map((info, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{info}</span>
            <input type="text" className="border p-1 flex-1 ml-2" />
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BusinessForm;
