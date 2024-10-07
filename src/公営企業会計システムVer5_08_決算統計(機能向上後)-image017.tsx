// FacilitySettings.tsx
import React from 'react';

type FacilitySettingsProps = {
  fiscalYear: string;
  yearOptions: string[];
  industry: string;
  industryOptions: string[];
  facilityData: { code: string; name: string; abbreviation: string }[];
  mode: 'register' | 'edit' | 'delete';
  onModeChange: (mode: 'register' | 'edit' | 'delete') => void;
};

const FacilitySettings: React.FC<FacilitySettingsProps> = ({
  fiscalYear,
  yearOptions,
  industry,
  industryOptions,
  facilityData,
  mode,
  onModeChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="mb-4 p-2 bg-purple-200 rounded">
        <h1 className="text-xl font-bold">決算統計施設情報設定</h1>
      </div>
      <div className="flex mb-4 items-center">
        <label className="mr-2">決算統計処理年度</label>
        <select className="mr-4 p-1 border rounded">
          {yearOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label className="mr-2">業種・事業</label>
        <select className="p-1 border rounded">
          {industryOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="mr-2">登録</label>
        <input
          type="radio"
          name="mode"
          value="register"
          checked={mode === 'register'}
          onChange={() => onModeChange('register')}
          className="mr-4"
        />
        <label className="mr-2">訂正</label>
        <input
          type="radio"
          name="mode"
          value="edit"
          checked={mode === 'edit'}
          onChange={() => onModeChange('edit')}
          className="mr-4"
        />
        <label className="mr-2">削除</label>
        <input
          type="radio"
          name="mode"
          value="delete"
          checked={mode === 'delete'}
          onChange={() => onModeChange('delete')}
          className="mr-4"
        />
      </div>
      <div>
        <button className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded">
          行削除
        </button>
      </div>
      <table className="mt-4 w-full border">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="px-4 py-2 border">施設コード</th>
            <th className="px-4 py-2 border">名称</th>
            <th className="px-4 py-2 border">略名</th>
          </tr>
        </thead>
        <tbody>
          {facilityData.map((facility, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{facility.code}</td>
              <td className="px-4 py-2 border">{facility.name}</td>
              <td className="px-4 py-2 border">{facility.abbreviation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacilitySettings;
```