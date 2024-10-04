```tsx
import React from 'react';

// TypeScript interface for component props
interface FormData {
  companyName: string;
  abbreviation: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
}

// TypeScript interface for the form component props
interface FormProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const CustomerForm: React.FC<FormProps> = ({ data, onChange, onSubmit, onClear, onCancel }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold border-b pb-2 mb-4">相手先情報</h2>
      <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-gray-700">名称</label>
          <input
            className="w-full border border-gray-300 p-2"
            type="text"
            value={data.companyName}
            onChange={e => onChange('companyName', e.target.value)}
          />
        </div>

        {/* Abbreviation */}
        <div className="mb-4">
          <label className="block text-gray-700">略名</label>
          <input
            className="w-full border border-gray-300 p-2"
            type="text"
            value={data.abbreviation}
            onChange={e => onChange('abbreviation', e.target.value)}
          />
        </div>

        {/* Postal Code */}
        <div className="mb-4">
          <label className="block text-gray-700">郵便番号</label>
          <input
            className="w-full border border-gray-300 p-2"
            type="text"
            value={data.postalCode}
            onChange={e => onChange('postalCode', e.target.value)}
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700">住所</label>
          <input
            className="w-full border border-gray-300 p-2"
            type="text"
            value={data.address}
            onChange={e => onChange('address', e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700">電話番号</label>
          <input
            className="w-full border border-gray-300 p-2"
            type="text"
            value={data.phoneNumber}
            onChange={e => onChange('phoneNumber', e.target.value)}
          />
        </div>

        {/* Fax Number */}
        <div className="mb-4">
          <label className="block text-gray-700">FAX番号</label>
          <input
            className="w-full border border-gray-300 p-2"
            type="text"
            value={data.faxNumber}
            onChange={e => onChange('faxNumber', e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onSubmit}
          >
            OK
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-black rounded"
            onClick={onClear}
          >
            クリア
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onCancel}
          >
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
```