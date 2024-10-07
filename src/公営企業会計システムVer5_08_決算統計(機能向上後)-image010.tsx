import React from 'react';

type BusinessDetailsProps = {
  year: string;
  type: string;
  code: string;
  businessName: string;
  location: string;
  managerName: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  year,
  type,
  code,
  businessName,
  location,
  managerName,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4">
      {/* Business Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">事業情報</h2>
        <div className="flex space-x-4">
          <span>年度: {year}</span>
          <span>業種・事業: {type} {code} {businessName}</span>
        </div>
        <div>
          <label className="block mb-2">事業所所在地:</label>
          <input type="text" className="border p-2 w-full" value={location} readOnly />
        </div>
        <div>
          <label className="block mb-2">管理者名:</label>
          <input type="text" className="border p-2 w-full" value={managerName} readOnly />
        </div>
      </div>

      {/* Detail Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">詳細情報</h2>
        <div className="grid grid-cols-3 gap-2">
          {['設定なし', '経営主体', '黒、赤字別', '-', '-', '-', '-'].map((label) => (
            <div key={label} className="flex items-center space-x-2">
              <select className="border p-2 bg-purple-100 w-full">
                <option>{label}</option>
              </select>
              <input type="text" className="border p-2 w-full" defaultValue="0" />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button onClick={onOk} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 p-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default BusinessDetails;
```