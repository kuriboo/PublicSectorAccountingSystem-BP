```tsx
// components/OfficeMaster.tsx

import React, { ChangeEvent, FC } from 'react';

// TypeScript type definitions for component props
interface OfficeMasterProps {
  fiscalYear: string;
  acceptanceDivision: string;
  businessCodes: string[];
  phoneNumbers: string[];
  faxNumbers: string[];
  emails: string[];
  representativeTitles: string[];
  representativeNames: string[];
  responsibleTitles: string[];
  responsibleNames: string[];
  onFieldChange: (field: string, value: string) => void;
}

// Tailwind CSS styles used for styling components
const inputStyle = "border rounded px-2 py-1 mb-2 w-full";
const labelStyle = "block font-bold mb-1";

const OfficeMaster: FC<OfficeMasterProps> = ({
  fiscalYear,
  acceptanceDivision,
  businessCodes,
  phoneNumbers,
  faxNumbers,
  emails,
  representativeTitles,
  representativeNames,
  responsibleTitles,
  responsibleNames,
  onFieldChange
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">業者別営業所マスタ</h2>
      <div className="mb-4">
        <label className={labelStyle}>年度</label>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onFieldChange('fiscalYear', e.target.value)}
          className={inputStyle}
        />

        <label className={labelStyle}>受付区分</label>
        <input
          type="text"
          value={acceptanceDivision}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onFieldChange('acceptanceDivision', e.target.value)}
          className={inputStyle}
        />
      </div>

      {/* Business Information Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">電話番号</th>
              <th className="px-4 py-2">FAX番号</th>
              <th className="px-4 py-2">Eメール</th>
              <th className="px-4 py-2">代表者役職名</th>
              <th className="px-4 py-2">代表者名</th>
              <th className="px-4 py-2">担当者役職名</th>
              <th className="px-4 py-2">担当者名</th>
            </tr>
          </thead>
          <tbody>
            {businessCodes.map((code, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{phoneNumbers[index]}</td>
                <td className="border px-4 py-2">{faxNumbers[index]}</td>
                <td className="border px-4 py-2">{emails[index]}</td>
                <td className="border px-4 py-2">{representativeTitles[index]}</td>
                <td className="border px-4 py-2">{representativeNames[index]}</td>
                <td className="border px-4 py-2">{responsibleTitles[index]}</td>
                <td className="border px-4 py-2">{responsibleNames[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Form Section */}
      <div className="mt-4 p-4 bg-white rounded-lg">
        <label className={labelStyle}>営業所名</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onFieldChange('officeName', e.target.value)}
          className={inputStyle}
        />

        <label className={labelStyle}>住所</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onFieldChange('address', e.target.value)}
          className={inputStyle}
        />

        {/* More fields as needed */}
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">OK</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded ml-2 hover:bg-gray-400">クリア</button>
      </div>
    </div>
  );
};

export default OfficeMaster;
```