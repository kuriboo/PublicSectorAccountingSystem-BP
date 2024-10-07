import React from 'react';

type DatePeriodProps = {
  startDate: string;
  endDate: string;
};

type InfoSectionProps = {
  accountingYear: string;
  previousPeriod: DatePeriodProps;
  currentPeriod: DatePeriodProps;
  description: string;
  onOk: () => void;
  onCancel: () => void;
};

const InfoSection: React.FC<InfoSectionProps> = ({
  accountingYear,
  previousPeriod,
  currentPeriod,
  description,
  onOk,
  onCancel,
}) => {
  return (
    <div className="border p-4">
      <h1 className="bg-blue-200 p-2 text-lg font-semibold">特定収入充当表収入項目設定コピー</h1>
      <div className="p-4">
        <div className="py-2">
          <span className="font-bold">課税期間</span>: {currentPeriod.startDate} ～ {currentPeriod.endDate}
        </div>
        <div className="mt-4 border p-3">
          <h2 className="font-bold">前年度</h2>
          <div className="pl-4">
            <div className="py-2">
              <span className="font-bold">会計年度</span>: {accountingYear}
            </div>
            <div className="py-2">
              <span className="font-bold">課税期間</span>: {previousPeriod.startDate} ～ {previousPeriod.endDate}
            </div>
          </div>
        </div>
        <div className="mt-4 border p-3">
          <h2 className="font-bold">処理内容</h2>
          <div className="pl-4">
            {description}
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={onOk} className="bg-gray-300 p-2 px-4 rounded hover:bg-gray-400">OK</button>
          <button onClick={onCancel} className="bg-gray-300 p-2 px-4 rounded hover:bg-gray-400">終了</button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;