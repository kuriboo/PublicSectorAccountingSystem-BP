import React from 'react';

type NoticeProps = {
  period?: string;
  year?: string;
  rearrangeNumber?: string;
  limitDate?: string;
  note?: string;
  surveyDate?: string;
  storeName?: string;
  totalSurveyAmount?: number;
  totalTaxAmount?: number;
};

const NoticeComponent: React.FC<NoticeProps> = ({
  period = '平成26年',
  year = '年度',
  rearrangeNumber = '有',
  limitDate = '平成26年06月08日',
  note = '概要',
  surveyDate = '平成26年5月26日',
  storeName = '株式会社せい工務店',
  totalSurveyAmount = 140400,
  totalTaxAmount = 10400,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="border-b pb-2">
        <h2 className="text-lg font-bold">納入通知書作成</h2>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <div>
              <label className="font-bold">範囲指定:</label>
              <span className="ml-2">{period}</span>
            </div>
            <div>
              <label className="font-bold">年度:</label>
              <span className="ml-2">{year}</span>
            </div>
            <div>
              <label className="font-bold">調定番号:</label>
              <span className="ml-2">15</span>
            </div>
            <div>
              <label className="font-bold">納入期限:</label>
              <span className="ml-2">{limitDate}</span>
            </div>
            <div>
              <label className="font-bold">概要:</label>
              <span className="ml-2">{note}</span>
            </div>
          </div>
          <div>
            <div>
              <label className="font-bold">再発行印字:</label>
              <span className="ml-2">{rearrangeNumber}</span>
            </div>
            <div>
              <label className="font-bold">調定日:</label>
              <span className="ml-2">{surveyDate}</span>
            </div>
            <div>
              <label className="font-bold">工事店:</label>
              <span className="ml-2">{storeName}</span>
            </div>
            <div>
              <label className="font-bold">合計調定金額:</label>
              <span className="ml-2">{totalSurveyAmount.toLocaleString()}</span>
            </div>
            <div>
              <label className="font-bold">合計消費税額:</label>
              <span className="ml-2">{totalTaxAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <table className="w-full mt-4 border-t">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2">納付分類名称</th>
            <th className="py-2">税</th>
            <th className="py-2">調定金額</th>
            <th className="py-2">内消費税額</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="py-2">加入負担金</td>
            <td className="py-2">課税</td>
            <td className="py-2">{totalSurveyAmount.toLocaleString()}</td>
            <td className="py-2">{totalTaxAmount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NoticeComponent;
```