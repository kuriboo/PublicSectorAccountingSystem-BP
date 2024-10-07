import React from 'react';

// TypeScriptインターフェースの定義
interface BusinessInfo {
  code: string;
  name: string;
}

interface FormProps {
  fiscalYear: string;
  code: string;
  name: string;
  business: BusinessInfo[];
  onCodeChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onBusinessSelect: (selected: BusinessInfo) => void;
}

const BusinessForm: React.FC<FormProps> = ({
  fiscalYear,
  code,
  name,
  business,
  onCodeChange,
  onNameChange,
  onBusinessSelect,
}) => (
  <div className="p-4 bg-gray-100">
    {/* 決算統計処理年度 */}
    <div className="mb-4">
      <label className="block text-gray-700">決算統計処理年度</label>
      <select className="border rounded w-full py-2 px-3" value={fiscalYear} disabled>
        <option value={fiscalYear}>{fiscalYear}年度</option>
      </select>
    </div>

    {/* 団体コードと団体名 */}
    <div className="mb-4 grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700">団体コード</label>
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-gray-700">団体名</label>
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
    </div>

    {/* 対象事業情報リスト */}
    <div>
      <label className="block text-gray-700 mb-2">対象事業情報</label>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">選択</th>
            <th className="border px-4 py-2">業種・事業</th>
          </tr>
        </thead>
        <tbody>
          {business.map((biz) => (
            <tr key={biz.code}>
              <td className="border px-4 py-2 text-center">
                <input
                  type="checkbox"
                  onChange={() => onBusinessSelect(biz)}
                />
              </td>
              <td className="border px-4 py-2">{biz.code} - {biz.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default BusinessForm;
```