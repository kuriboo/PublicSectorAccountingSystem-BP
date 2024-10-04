```tsx
import React, { useState } from 'react';

type FormProps = {
  year: string;
  businessCode: string;
  businessNameOptions: { code: string; name: string }[];
  onSubmit: (formData: { year: string; tableNumber: string; facility: string }) => void;
};

const DataMigrationForm: React.FC<FormProps> = ({ year, businessCode, businessNameOptions, onSubmit }) => {
  const [selectedBusinessName, setSelectedBusinessName] = useState(businessNameOptions[0].code);
  const [tableNumber, setTableNumber] = useState('');
  const [facility, setFacility] = useState('');

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">決算統計データ移行</h1>

      <div className="flex items-center mb-4">
        <label className="mr-2">年度:</label>
        <span className="mr-4">{year}</span>

        <label className="mr-2">業種・事業コード:</label>
        <span className="mr-2">{businessCode}</span>

        <select
          className="border rounded p-1"
          value={selectedBusinessName}
          onChange={(e) => setSelectedBusinessName(e.target.value)}
        >
          {businessNameOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="border p-4 mb-4">
        <h2 className="mb-2 text-lg font-semibold">オプション</h2>
        <div className="mb-2">
          <input type="radio" id="option1" name="dataOption" defaultChecked />
          <label className="ml-2" htmlFor="option1">分析した決算統計データを集計する</label>
        </div>
        <div>
          <input type="radio" id="option2" name="dataOption" />
          <label className="ml-2" htmlFor="option2">企業債データを取り込みます</label>
        </div>

        <div className="my-4">
          <label className="block mb-1">表番号</label>
          <input
            className="border rounded p-1 w-full"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          />
        </div>

        <div className="my-4">
          <label className="block mb-1">施設</label>
          <input
            className="border rounded p-1 w-full"
            value={facility}
            onChange={(e) => setFacility(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 text-white rounded p-2"
          onClick={() => onSubmit({ year, tableNumber, facility })}
        >
          取込
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <h3 className="mb-2 text-lg font-semibold">処理概要</h3>
        <p>決算分析処理後の金額集計、企業債データおよび簡易水道データの取り込みを...（続く）</p>
      </div>
    </div>
  );
};

export default DataMigrationForm;
```