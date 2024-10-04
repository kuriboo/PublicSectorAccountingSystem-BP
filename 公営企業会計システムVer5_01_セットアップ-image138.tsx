```tsx
import React from 'react';

// 型定義
type BankDetailsFormProps = {
  groupNumber: string;
  groupName: string;
  startDate: string;
  bankCode: string;
  bankName: string;
  branchCode: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
  accountHolder: string;
  fpdType: string;
  requestCode: string;
  requestName: string;
  codeDivision: string;
  dataSetName: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BankDetailsForm: React.FC<BankDetailsFormProps> = ({
  groupNumber,
  groupName,
  startDate,
  bankCode,
  bankName,
  branchCode,
  branchName,
  accountType,
  accountNumber,
  accountHolder,
  fpdType,
  requestCode,
  requestName,
  codeDivision,
  dataSetName,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <form className="p-4 bg-gray-100 rounded-md shadow-md">
      {/* グループ選択 */}
      <div className="mb-2">
        <label className="block text-gray-700">グループ</label>
        <select className="w-full p-2 border rounded" defaultValue={groupNumber}>
          <option value={groupNumber}>{groupName}</option>
        </select>
      </div>

      {/* 適用開始年月日 */}
      <div className="mb-2">
        <label className="block text-gray-700">適用開始年月日</label>
        <input type="text" className="w-full p-2 border rounded" value={startDate} readOnly />
      </div>

      {/* 銀行コードと名前 */}
      <div className="mb-2 flex items-center">
        <label className="block text-gray-700 mr-2">銀行</label>
        <input type="text" className="w-1/5 p-2 border rounded" value={bankCode} readOnly />
        <span className="ml-2">{bankName}</span>
      </div>

      {/* 支店コードと名前 */}
      <div className="mb-2 flex items-center">
        <label className="block text-gray-700 mr-2">支店</label>
        <input type="text" className="w-1/5 p-2 border rounded" value={branchCode} readOnly />
        <span className="ml-2">{branchName}</span>
      </div>

      {/* 預金種別コード */}
      <div className="mb-2">
        <label className="block text-gray-700">預金種別コード</label>
        <select className="w-full p-2 border rounded" defaultValue={accountType}>
          <option value={accountType}>普通預金</option>
        </select>
      </div>

      {/* 口座番号 */}
      <div className="mb-2">
        <label className="block text-gray-700">口座番号</label>
        <input type="text" className="w-full p-2 border rounded" value={accountNumber} readOnly />
      </div>

      {/* 口座名義人 */}
      <div className="mb-2">
        <label className="block text-gray-700">口座名義人</label>
        <input type="text" className="w-full p-2 border rounded" value={accountHolder} readOnly />
      </div>

      {/* FPD種別 */}
      <div className="mb-2">
        <label className="block text-gray-700">FPD種別</label>
        <input type="text" className="w-full p-2 border rounded" value={fpdType} readOnly />
      </div>

      {/* 振込依頼人コード */}
      <div className="mb-2">
        <label className="block text-gray-700">振込依頼人コード</label>
        <input type="text" className="w-full p-2 border rounded" value={requestCode} readOnly />
      </div>

      {/* 振込依頼書印字名称 */}
      <div className="mb-2">
        <label className="block text-gray-700">振込依頼書印字名称</label>
        <input type="text" className="w-full p-2 border rounded" value={requestName} readOnly />
      </div>

      {/* コード区分 */}
      <div className="mb-2">
        <label className="block text-gray-700">コード区分</label>
        <input type="text" className="w-full p-2 border rounded" value={codeDivision} readOnly />
      </div>

      {/* データセット名 */}
      <div className="mb-2">
        <label className="block text-gray-700">データセット名</label>
        <input type="text" className="w-full p-2 border rounded" value={dataSetName} readOnly />
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2 mt-4">
        <button type="button" onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button type="button" onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded">
          クリア
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </form>
  );
};

export default BankDetailsForm;
```