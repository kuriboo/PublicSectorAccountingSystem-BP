import React from 'react'

type ManagementMasterProps = {
  fiscalYear: string;
  inspectionCompleted: string;
  budgetControl: {
    income: string;
    expenditure: string;
  };
  decisionUtilization: string;
  changeAverage: string;
  pastAgingDivision: string;
  collectionDivision: string;
  discount: number;
  paymentPeriod: number;
  receiptPeriod: number;
  settingDate: string;
  requestDateName: string;
  previousOfficeName: string;
  receiptReservationDate: string;
  onApply: () => void;
  onClear: () => void;
  onFinish: () => void;
};

export const ManagementMaster: React.FC<ManagementMasterProps> = ({
  fiscalYear,
  inspectionCompleted,
  budgetControl,
  decisionUtilization,
  changeAverage,
  pastAgingDivision,
  collectionDivision,
  discount,
  paymentPeriod,
  receiptPeriod,
  settingDate,
  requestDateName,
  previousOfficeName,
  receiptReservationDate,
  onApply,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-2">管理マスタ</h1>
      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">当期会計年度</span>
          <input type="text" value={fiscalYear} className="form-input mt-1 block w-full" readOnly />
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">監査終了年月</span>
          <input type="text" value={inspectionCompleted} className="form-input mt-1 block w-full" readOnly />
        </label>
      </div>

      <div className="mb-4">
        <span className="text-gray-700">予算残管理</span>
        <div>
          <span>収入: {budgetControl.income}</span>
          <span className="ml-4">支出: {budgetControl.expenditure}</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-gray-700">決算確定利用値区分</span>
        <div>
          <span>{decisionUtilization}</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-gray-700">変更値検出数量平均区分</span>
        <div>
          <span>{changeAverage}</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-gray-700">過年度収入区分</span>
        <div>
          <span>{pastAgingDivision}</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-gray-700">資金予算表還付入集計区分</span>
        <div>
          <span>{collectionDivision}</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">奨励付金</span>
          <input type="number" value={discount} className="form-input mt-1 block w-full" readOnly />
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">準備期間</span>
          <div>
            支払: <span>{paymentPeriod} 日</span>
          </div>
          <div>
            納入: <span>{receiptPeriod} 日</span>
          </div>
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">画面自由設定日名称</span>
          <input type="text" value={settingDate} className="form-input mt-1 block w-full" readOnly />
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">請求書日印字名称</span>
          <input type="text" value={requestDateName} className="form-input mt-1 block w-full" readOnly />
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">前渡先印字名称</span>
          <input type="text" value={previousOfficeName} className="form-input mt-1 block w-full" readOnly />
        </label>
      </div>

      <div className="mb-8">
        <label className="block">
          <span className="text-gray-700">受付予約日</span>
          <input type="text" value={receiptReservationDate} className="form-input mt-1 block w-full" readOnly />
        </label>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onApply} className="bg-blue-500 text-white px-4 py-2 rounded">適用</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button onClick={onFinish} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};
```