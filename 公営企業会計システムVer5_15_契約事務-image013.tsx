```tsx
import React from 'react';

type AddressFormProps = {
  postalCode: string;
  district: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  representativeRole: string;
  representativeName: string;
  managerRole: string;
  managerName: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const AddressForm: React.FC<AddressFormProps> = ({
  postalCode,
  district,
  address,
  phone,
  fax,
  email,
  representativeRole,
  representativeName,
  managerRole,
  managerName,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <div className="mb-4 grid grid-cols-2 gap-4">
        {/* Postal Code and District */}
        <div className="flex items-center">
          <label className="mr-2">郵便番号</label>
          <input type="text" value={postalCode} className="border p-1" readOnly />
        </div>
        <div className="flex items-center">
          <label className="mr-2">地区</label>
          <select value={district} className="border p-1" disabled>
            <option value="001">市内</option>
            {/* Add other options as necessary */}
          </select>
        </div>

        {/* Address */}
        <div className="col-span-2">
          <label className="block">住所</label>
          <input type="text" value={address} className="w-full border p-1" readOnly />
        </div>

        {/* Phone, Fax, Email */}
        <div className="flex items-center">
          <label className="mr-2">電話番号</label>
          <input type="text" value={phone} className="border p-1" readOnly />
        </div>
        <div className="flex items-center">
          <label className="mr-2">FAX</label>
          <input type="text" value={fax} className="border p-1" readOnly />
        </div>
        <div className="flex items-center">
          <label className="mr-2">Eメール</label>
          <input type="text" value={email} className="border p-1" readOnly />
        </div>

        {/* Representative Role and Name */}
        <div className="flex items-center">
          <label className="mr-2">代表者役職</label>
          <input type="text" value={representativeRole} className="border p-1" readOnly />
        </div>
        <div className="flex items-center">
          <label className="mr-2">代表者</label>
          <input type="text" value={representativeName} className="border p-1" readOnly />
        </div>

        {/* Manager Role and Name */}
        <div className="flex items-center">
          <label className="mr-2">担当者役職</label>
          <input type="text" value={managerRole} className="border p-1" readOnly />
        </div>
        <div className="flex items-center">
          <label className="mr-2">担当者</label>
          <input type="text" value={managerName} className="border p-1" readOnly />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-gray-200 p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-200 p-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-200 p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default AddressForm;
```