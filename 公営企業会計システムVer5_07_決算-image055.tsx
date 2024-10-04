```tsx
import React from 'react';

type Props = {
  title: string;
  userInfo: string;
  dateLabel: string;
  taxPeriodFrom: string;
  taxPeriodTo: string;
  calculationMethod: string;
};

// 再利用可能なコンポーネント
const ReportComponent: React.FC<Props> = ({
  title,
  userInfo,
  dateLabel,
  taxPeriodFrom,
  taxPeriodTo,
  calculationMethod,
}) => {
  return (
    <div className="border border-gray-300 shadow-lg max-w-3xl m-auto p-4">
      {/* ヘッダー部分 */}
      <div className="bg-blue-300 rounded-md p-2 flex justify-between">
        <h1 className="font-bold text-white">{title}</h1>
        <div className="text-right">
          <p>{userInfo}</p>
          <p>{dateLabel}</p>
        </div>
      </div>
      {/* 範囲指定部分 */}
      <div className="border-t border-gray-400 pt-4 mt-4">
        <h2 className="text-blue-600 font-bold">範囲指定</h2>
        <div className="flex justify-between border p-2 mt-2">
          <span className="font-bold">課税期間</span>
          <span>{taxPeriodFrom} ~ {taxPeriodTo}</span>
        </div>
      </div>
      {/* 計算方法部分 */}
      <div className="border-t border-gray-400 pt-4 mt-4">
        <h2 className="text-blue-600 font-bold">計算方法</h2>
        <div className="border p-2 mt-2">
          <p className="font-bold">税額計算方法(売上)</p>
          <p>{calculationMethod}</p>
        </div>
      </div>
      {/* ボタン部分 */}
      <div className="flex justify-end mt-4">
        <button className="border bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded mr-2">OK</button>
        <button className="border bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportComponent;

```