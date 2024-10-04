```tsx
import React from 'react';

type ManagementMasterProps = {
  fiscalYear: string;
  auditYear: string;
  accountName: string;
  prepareDays: {
    payment: number;
    delivery: number;
  };
  encourageFunds: number;
  onApplyRules: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ManagementMaster: React.FC<ManagementMasterProps> = ({
  fiscalYear,
  auditYear,
  accountName,
  prepareDays,
  encourageFunds,
  onApplyRules,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-2xl p-4 bg-white border rounded shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">管理マスタ</h2>
        <div className="flex justify-between">
          <div>
            <p>当期会計年度: {fiscalYear}</p>
            <p>監査終了年月: {auditYear}</p>
          </div>
          <div>
            <p>画面事業会計名: {accountName}</p>
          </div>
        </div>
      </div>

      <form className="space-y-4">
        <fieldset className="border p-2">
          <legend>予算残管理</legend>
          <label>
            <input type="radio" name="department" className="mr-2" />
            所属管理
          </label>
          <label>
            <input type="radio" name="department" className="mr-2" />
            節
          </label>
          {/* Other radio buttons as necessary */}
        </fieldset>

        <fieldset className="border p-2">
          <legend>準備期間</legend>
          <div className="flex space-x-4">
            <label>
              支払:
              <input type="number" value={prepareDays.payment} className="ml-2 w-16 border" /> 日
            </label>
            <label>
              納入:
              <input type="number" value={prepareDays.delivery} className="ml-2 w-16 border" /> 日
            </label>
          </div>
        </fieldset>

        <div>
          <label>
            各促計金:
            <input type="number" value={encourageFunds} className="ml-2 w-16 border" /> 円
          </label>
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          <button type="button" onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded">
            OK
          </button>
          <button type="button" onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">
            クリア
          </button>
          <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManagementMaster;
```