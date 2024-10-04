```tsx
// components/ManagementMaster.tsx

import React from 'react';

type ManagementMasterProps = {
  fiscalYear: string;
  inspectionMonth: string;
  budgetSetting: 'belong' | 'detailed' | 'policy';
  decisionType: 'decision' | 'decisionReview';
  changeType: 'beforeChange' | 'afterChange';
  usageType: 'monthly' | 'halfYearly' | 'initial';
  collectionType: 'plus' | 'minus';
  preparationDaysPayment: number;
  preparationDaysReceipt: number;
  screenNameSetting: string;
  requestDateName: string;
  previousDestinationName: string;
  acceptanceDeadline: string;
  promotionAmount: number;
  circulationAmount1: number;
  circulationAmount2: number;
  onApply: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const ManagementMaster: React.FC<ManagementMasterProps> = ({
  fiscalYear,
  inspectionMonth,
  budgetSetting,
  decisionType,
  changeType,
  usageType,
  collectionType,
  preparationDaysPayment,
  preparationDaysReceipt,
  screenNameSetting,
  requestDateName,
  previousDestinationName,
  acceptanceDeadline,
  promotionAmount,
  circulationAmount1,
  circulationAmount2,
  onApply,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md max-w-xl mx-auto bg-gray-50">
      <h1 className="text-lg font-bold mb-4">管理マスタ</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">当期会計年度</label>
        {fiscalYear} 年度
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">監査終了年月</label>
        {inspectionMonth} 月
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">予算残管理</label>
        <div>
          <input type="radio" id="budgetSettingBelong" name="budgetSetting" /> 所属管理
          <input type="radio" id="budgetSettingDetailed" name="budgetSetting" /> 細節
          <input type="radio" id="budgetSettingPolicy" name="budgetSetting" /> 施策
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">準備期間</label>
        <div>
          支払: {preparationDaysPayment} 日, 納入: {preparationDaysReceipt} 日
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">促進料</label>
        <input type="number" value={promotionAmount} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">流用戻し補率1 (初期値)</label>
        <input type="number" value={circulationAmount1} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">流用戻し補率2 (初期値)</label>
        <input type="number" value={circulationAmount2} className="w-full p-2 border" />
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onApply} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onEnd} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ManagementMaster;
```