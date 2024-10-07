import React from 'react';

// 型定義
type SlipProps = {
  title: string;
  year: string;
  accountingType: string;
  slipNumber: string;
  date: string;
  details: { description: string; amount: string }[];
};

// 再利用可能なSlipコンポーネント
const Slip: React.FC<SlipProps> = ({
  title,
  year,
  accountingType,
  slipNumber,
  date,
  details,
}) => {
  return (
    <div className="p-4 border rounded-md max-w-2xl mx-auto">
      {/* タイトル */}
      <div className="text-center font-bold text-lg">{title}</div>
      
      {/* 年度と会計 */}
      <div className="flex justify-between my-2">
        <span>{year}</span>
        <span>{accountingType}</span>
      </div>
      
      {/* 伝票番号 */}
      <div className="flex justify-end mb-4">
        <span>伝票No</span>
        <span className="ml-2 border-b w-32 text-center">{slipNumber}</span>
      </div>
      
      {/* 日付 */}
      <div className="text-right mb-4">{date}</div>
      
      {/* 詳細 */}
      <div className="border-t">
        {details.map((detail, index) => (
          <div key={index} className="flex justify-between border-b p-2">
            <span>{detail.description}</span>
            <span>{detail.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slip;

// 使用例
/*
<Slip
  title="支払伝票（単票）"
  year="平成２７年度"
  accountingType="行政市事業会計"
  slipNumber="27-000451"
  date="平成２８年３月２７日"
  details={[
    { description: "事業費用", amount: "1,000,000円" },
    { description: "流動資産", amount: "1,000,000円" },
  ]}
/>
*/
