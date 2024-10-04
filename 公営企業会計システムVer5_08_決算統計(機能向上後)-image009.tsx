```tsx
// Import necessary modules
import React from 'react';

// Define TypeScript types for the props
interface FacilityInfoSettingsProps {
  year: string;
  industryCode: string;
  industryName: string;
  facilityCode: string;
  facilityName: string;
  abbreviation: string;
  mode: 'register' | 'edit' | 'delete';
}

// Tailwind CSS styles for common elements
const buttonStyle = 'bg-blue-500 text-white px-4 py-1 rounded mt-2';
const inputStyle = 'border p-1 rounded';
const containerStyle = 'flex flex-col bg-gray-100 p-4 rounded shadow';

// FacilityInfoSettings component
const FacilityInfoSettings: React.FC<FacilityInfoSettingsProps> = ({
  year,
  industryCode,
  industryName,
  facilityCode,
  facilityName,
  abbreviation,
  mode,
}) => {
  return (
    <div className={containerStyle}>
      {/* Header */}
      <div className="bg-blue-300 p-2 rounded text-white text-center mb-4">
        決算統計施設情報設定
      </div>

      {/* Form section */}
      <div className="flex items-center mb-4">
        <label className="mr-2">決算統計処理年度</label>
        <input type="text" value={year} className={inputStyle} readOnly />

        <div className="ml-4 flex items-center">
          <input
            type="radio"
            name="mode"
            checked={mode === 'register'}
            readOnly
          />
          <label className="ml-1">登録</label>
        </div>

        <div className="ml-2 flex items-center">
          <input
            type="radio"
            name="mode"
            checked={mode === 'edit'}
            readOnly
          />
          <label className="ml-1">訂正</label>
        </div>

        <div className="ml-2 flex items-center">
          <input
            type="radio"
            name="mode"
            checked={mode === 'delete'}
            readOnly
          />
          <label className="ml-1">削除</label>
        </div>
      </div>

      {/* Industry section */}
      <div className="flex items-center mb-4">
        <label className="mr-2">業種・事業</label>
        <input
          type="text"
          value={industryCode}
          className={`${inputStyle} w-16`}
          readOnly
        />
        <input
          type="text"
          value={industryName}
          className={`${inputStyle} flex-grow ml-2`}
          readOnly
        />
      </div>

      {/* Action button */}
      <button className={buttonStyle}>行編集</button>

      {/* Table section */}
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 border">施設コード</th>
            <th className="p-2 border">名称</th>
            <th className="p-2 border">略名</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-2 border text-center">{facilityCode}</td>
            <td className="p-2 border text-center">{facilityName}</td>
            <td className="p-2 border text-center">{abbreviation}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FacilityInfoSettings;
```