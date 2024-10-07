// Import necessary libraries
import React from 'react';

// Define TypeScript types
type ReceiptFormProps = {
  date: string;
  ownerStart: string;
  ownerEnd: string;
  transmissionType: 'individual' | 'pre-receipt' | 'collective';
  specifyNumber: boolean;
  numberStart?: number;
  numberEnd?: number;
  electronicDecision: boolean;
  linkageStatus: {
    unlinked: boolean;
    linked: boolean;
    inJudgement: boolean;
    completed: boolean;
  };
  section: 'section' | 'detailed';
  accountingMethod: 'bySection' | 'byYear';
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Define the functional component
const ReceiptForm: React.FC<ReceiptFormProps> = ({
  date,
  ownerStart,
  ownerEnd,
  transmissionType,
  specifyNumber,
  numberStart,
  numberEnd,
  electronicDecision,
  linkageStatus,
  section,
  accountingMethod,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">収入伝票 (一覧)作成</h1>
      <div className="space-y-4">
        {/* Date Range Inputs */}
        <div>
          <label className="block font-semibold">収納日</label>
          <input type="text" value={date} readOnly className="border p-2 rounded w-full" />
        </div>

        {/* Owner Inputs */}
        <div className="flex space-x-2">
          <input type="text" value={ownerStart} readOnly className="border p-2 rounded flex-1" />
          <input type="text" value={ownerEnd} readOnly className="border p-2 rounded flex-1" />
        </div>

        {/* Transmission Type Select */}
        <div>
          <label className="block font-semibold">伝票種類</label>
          <div className="space-x-2">
            <label>
              <input type="radio" checked={transmissionType === 'individual'} readOnly />
              個別
            </label>
            <label>
              <input type="radio" checked={transmissionType === 'pre-receipt'} readOnly />
              前受
            </label>
            <label>
              <input type="radio" checked={transmissionType === 'collective'} readOnly />
              集合
            </label>
          </div>
        </div>

        {/* Number Range Inputs */}
        <div>
          <label className="block font-semibold">伝票番号</label>
          <input type="checkbox" checked={!specifyNumber} readOnly /> 指定しない
          <input type="checkbox" checked={specifyNumber} readOnly /> 指定する
          <div className="flex space-x-2 mt-2">
            <input type="number" value={numberStart} readOnly className="border p-2 rounded flex-1" />
            <input type="number" value={numberEnd} readOnly className="border p-2 rounded flex-1" />
          </div>
        </div>

        {/* Electronic Decision Checkbox */}
        <div>
          <label className="block font-semibold">電子決裁</label>
          <input type="checkbox" checked={electronicDecision} readOnly /> 連携する
          <input type="checkbox" checked={!electronicDecision} readOnly /> 連携しない
        </div>

        {/* Linkage Status Checkboxes */}
        <div>
          <label className="block font-semibold">リンク状態</label>
          <div className="space-x-2">
            <input type="checkbox" checked={linkageStatus.unlinked} readOnly /> 未連携
            <input type="checkbox" checked={linkageStatus.linked} readOnly /> 連携済み(決裁中)
            <input type="checkbox" checked={linkageStatus.inJudgement} readOnly /> 決裁完了
          </div>
        </div>

        {/* Section Method Selection */}
        <div>
          <label className="block font-semibold">改頁</label>
          <div className="space-x-2">
            <input type="radio" checked={section === 'section'} readOnly /> 節
            <input type="radio" checked={section === 'detailed'} readOnly /> 細節
          </div>
        </div>

        {/* Accounting Method Selection */}
        <div>
          <label className="block font-semibold">節計印字</label>
          <div className="space-x-2">
            <input type="radio" checked={accountingMethod === 'bySection'} readOnly /> 節別年度別計
            <input type="radio" checked={accountingMethod === 'byYear'} readOnly /> 年度別計
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">
            OK
          </button>
          <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">
            クリア
          </button>
          <button onClick={onExit} className="bg-red-500 text-white p-2 rounded">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptForm;
```