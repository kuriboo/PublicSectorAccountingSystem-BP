import React from 'react';

// 型定義
type AssetRegistrationProps = {
  assetNumber: string;
  date: string;
  description: string;
  section: string;
  subsection: string;
  detail: string;
  assetName: string;
  location: string;
  summary: string;
  acquisitionDate: string;
  lifespanYears: number;
  facility: string;
  depreciationRate: number;
  storageRate: number;
  remainingValue: number;
  annualDepreciation: number;
  limitRate: number;
  allowableLimit: number;
};

// コンポーネント
const AssetRegistration: React.FC<AssetRegistrationProps> = ({
  assetNumber,
  date,
  description,
  section,
  subsection,
  detail,
  assetName,
  location,
  summary,
  acquisitionDate,
  lifespanYears,
  facility,
  depreciationRate,
  storageRate,
  remainingValue,
  annualDepreciation,
  limitRate,
  allowableLimit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-lg font-bold">減損資産対象登録</h1>
      <div className="mt-2">
        <label className="font-semibold">資産番号:</label> {assetNumber}
      </div>
      <div>
        <label className="font-semibold">減損年月日:</label> {date}
      </div>
      <div>
        <label className="font-semibold">異動摘要:</label> {description}
      </div>
      <div>
        <label className="font-semibold">節:</label> {section}
      </div>
      <div>
        <label className="font-semibold">細節:</label> {subsection}
      </div>
      <div>
        <label className="font-semibold">明細:</label> {detail}
      </div>
      <div>
        <label className="font-semibold">資産名称:</label> {assetName}
      </div>
      <div>
        <label className="font-semibold">所在地:</label> {location}
      </div>
      <div className="mt-2">
        <label className="font-semibold">摘要:</label> {summary}
      </div>
      <div>
        <label className="font-semibold">取得年月日:</label> {acquisitionDate}
      </div>
      <div>
        <label className="font-semibold">耐用年数:</label> {lifespanYears} 年
      </div>
      <div>
        <label className="font-semibold">施設:</label> {facility}
      </div>
      <div className="mt-2">
        <label className="font-semibold">償却率:</label> {depreciationRate}%
      </div>
      <div>
        <label className="font-semibold">保存率:</label> {storageRate}%
      </div>
      <div>
        <label className="font-semibold">残存価額:</label> {remainingValue}
      </div>
      <div>
        <label className="font-semibold">年間償却額:</label> {annualDepreciation}
      </div>
      <div>
        <label className="font-semibold">限度率:</label> {limitRate}%
      </div>
      <div>
        <label className="font-semibold">償却限度額:</label> {allowableLimit}
      </div>
    </div>
  );
};

export default AssetRegistration;