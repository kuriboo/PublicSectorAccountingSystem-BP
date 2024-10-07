// components/FacilityInfoSettings.tsx
import React, { FC } from 'react';

// 型定義
interface FacilityInfoSettingsProps {
  year: string;
  onRemoveClick: () => void;
  onRegisterChange: (value: string) => void;
  onIndustryChange: (value: string) => void;
  industryOptions: { code: string; name: string }[];
}

const FacilityInfoSettings: FC<FacilityInfoSettingsProps> = ({
  year,
  onRemoveClick,
  onRegisterChange,
  onIndustryChange,
  industryOptions
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold text-blue-800 mb-4">決算統計施設情報設定</h2>
      <div className="mb-4">
        <span className="mr-2">決算統計処理年度</span>
        <select className="border rounded p-1 mr-4">
          <option>{year}</option>
        </select>
        <select className="border rounded p-1">
          <option value="令和02">令和02</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="mr-4">業種・事業</label>
        <select className="border rounded p-1" onChange={e => onIndustryChange(e.target.value)}>
          {industryOptions.map(option => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="radio"
          name="register"
          value="登録"
          id="register"
          className="mr-2"
          onChange={e => onRegisterChange(e.target.value)}
        />
        <label htmlFor="register" className="mr-4">登録</label>
        <input
          type="radio"
          name="register"
          value="訂正"
          id="modify"
          className="mr-2"
          onChange={e => onRegisterChange(e.target.value)}
        />
        <label htmlFor="modify" className="mr-4">訂正</label>
        <input
          type="radio"
          name="register"
          value="削除"
          id="delete"
          className="mr-2"
          onChange={e => onRegisterChange(e.target.value)}
        />
        <label htmlFor="delete">削除</label>
      </div>
      <button onClick={onRemoveClick} className="px-4 py-2 bg-gray-400 text-white rounded">
        解除
      </button>
      <div className="mt-4 border-t">
        <table className="min-w-full divide-y divide-gray-200 mt-2">
          <thead className="bg-blue-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">施設コード</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">名称</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">略名</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">001</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">上水道</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">上水道</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacilityInfoSettings;