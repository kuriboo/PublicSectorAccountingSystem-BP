```tsx
// PartnerMasterForm.tsx
import React from 'react';

type PartnerMasterFormProps = {
  // Property types for customization
  title?: string;
  registrationNumber?: string;
  registrationDate?: string;
  referenceNumber?: string;
  bankAccountDetails?: Array<{ bank: string; branch: string; accountType: string; accountNumber: string; accountHolder: string }>;
  onSubmit?: () => void;
  onClear?: () => void;
  onClose?: () => void;
};

const PartnerMasterForm: React.FC<PartnerMasterFormProps> = ({
  title = "相手先・相手先別振込先マスタ",
  registrationNumber = "90000000040",
  registrationDate = "令和05年10月01日",
  referenceNumber = "1401234567890",
  bankAccountDetails = [],
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      
      {/* Registration Number */}
      <div className="mb-2">
        <label className="block font-medium">名称(1):</label>
        <input type="text" defaultValue={registrationNumber} className="border p-1 w-full" readOnly />
      </div>
      
      {/* Registration Date */}
      <div className="mb-2">
        <label className="block font-medium">登録年月日:</label>
        <input type="text" defaultValue={registrationDate} className="border p-1 w-full" readOnly />
      </div>

      {/* Reference Number */}
      <div className="mb-4">
        <label className="block font-medium">適格請求書登録番号:</label>
        <input type="text" defaultValue={referenceNumber} className="border p-1 w-full" readOnly />
      </div>

      {/* Bank Account Table */}
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">明細番号</th>
            <th className="p-2">銀行</th>
            <th className="p-2">支店</th>
            <th className="p-2">預金種別</th>
            <th className="p-2">FPD用口座番号</th>
            <th className="p-2">口座名義人</th>
          </tr>
        </thead>
        <tbody>
          {bankAccountDetails.map((detail, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{detail.bank}</td>
              <td className="border p-2">{detail.branch}</td>
              <td className="border p-2">{detail.accountType}</td>
              <td className="border p-2">{detail.accountNumber}</td>
              <td className="border p-2">{detail.accountHolder}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default PartnerMasterForm;
```