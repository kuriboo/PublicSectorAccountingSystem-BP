```tsx
import React from 'react';

type Props = {
  name?: string;
  alias?: string;
  postalCode?: string;
  address?: string;
  phoneNumber?: string;
  faxNumber?: string;
  businessRegistration?: string;
  bankName?: string;
  branchName?: string;
  accountType?: string;
  accountNumber?: string;
  fpdAccountNumber?: string;
  commissionAccountNumber?: string;
  accountName?: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const RegistrationForm: React.FC<Props> = ({
  name,
  alias,
  postalCode,
  address,
  phoneNumber,
  faxNumber,
  businessRegistration,
  bankName,
  branchName,
  accountType,
  accountNumber,
  fpdAccountNumber,
  commissionAccountNumber,
  accountName,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <form className="p-4">
      <div className="mb-4">
        <h2 className="font-bold">相手先情報</h2>
        <label className="block">
          名称
          <input type="text" value={name} className="border p-1 w-full" />
        </label>
        <label className="block">
          略名
          <input type="text" value={alias} className="border p-1 w-full" />
        </label>
        <label className="block">
          郵便番号
          <input type="text" value={postalCode} className="border p-1 w-full" />
        </label>
        <label className="block">
          住所
          <input type="text" value={address} className="border p-1 w-full" />
        </label>
        <label className="block">
          電話番号
          <input type="text" value={phoneNumber} className="border p-1 w-full" />
        </label>
        <label className="block">
          FAX番号
          <input type="text" value={faxNumber} className="border p-1 w-full" />
        </label>
      </div>

      <div className="mb-4">
        <h2 className="font-bold">課税事業者登録</h2>
        <label className="block">
          適格請求書登録番号
          <input type="text" value={businessRegistration} className="border p-1 w-full" />
        </label>
      </div>

      <div className="mb-4">
        <h2 className="font-bold">振込先銀行情報</h2>
        <label className="block">
          銀行
          <input type="text" value={bankName} className="border p-1 w-full" />
        </label>
        <label className="block">
          支店
          <input type="text" value={branchName} className="border p-1 w-full" />
        </label>
        <label className="block">
          預金種別
          <input type="text" value={accountType} className="border p-1 w-full" />
        </label>
        <label className="block">
          預金口座番号
          <input type="text" value={accountNumber} className="border p-1 w-full" />
        </label>
        <label className="block">
          FPD用口座番号
          <input type="text" value={fpdAccountNumber} className="border p-1 w-full" />
        </label>
        <label className="block">
          依頼者用口座番号
          <input type="text" value={commissionAccountNumber} className="border p-1 w-full" />
        </label>
        <label className="block">
          口座名義人
          <input type="text" value={accountName} className="border p-1 w-full" />
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button type="button" className="bg-gray-300 p-2" onClick={onCancel}>キャンセル</button>
        <button type="button" className="bg-gray-300 p-2" onClick={onClear}>クリア</button>
        <button type="button" className="bg-blue-500 text-white p-2" onClick={onSubmit}>OK</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
```