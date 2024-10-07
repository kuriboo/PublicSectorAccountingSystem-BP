import React from 'react';

// TypeScriptの型定義
type AgentFormProps = {
  postalCode: string;
  area: string;
  address: string;
  phoneNumber: string;
  fax: string;
  email: string;
  representativePosition: string;
  representativeName: string;
  personInChargePosition: string;
  personInChargeName: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const AgentForm: React.FC<AgentFormProps> = ({
  postalCode,
  area,
  address,
  phoneNumber,
  fax,
  email,
  representativePosition,
  representativeName,
  personInChargePosition,
  personInChargeName,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md space-y-4">
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">郵便番号</label>
          <input type="text" value={postalCode} className="mt-1 border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">地区</label>
          <select value={area} className="mt-1 border-gray-300 rounded-md shadow-sm">
            <option value="002:準市内">002:準市内</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">住所</label>
        <input type="text" value={address} className="mt-1 border-gray-300 rounded-md shadow-sm w-full" />
      </div>
      
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">電話番号</label>
          <input type="text" value={phoneNumber} className="mt-1 border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">FAX</label>
          <input type="text" value={fax} className="mt-1 border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Eメール</label>
          <input type="email" value={email} className="mt-1 border-gray-300 rounded-md shadow-sm" />
        </div>
      </div>
      
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">代表者役職</label>
          <input type="text" value={representativePosition} className="mt-1 border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">代表者</label>
          <input type="text" value={representativeName} className="mt-1 border-gray-300 rounded-md shadow-sm" />
        </div>
      </div>
      
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">担当者役職</label>
          <input type="text" value={personInChargePosition} className="mt-1 border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">担当者</label>
          <input type="text" value={personInChargeName} className="mt-1 border-gray-300 rounded-md shadow-sm" />
        </div>
      </div>
      
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded-md shadow-md">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded-md shadow-md">キャンセル</button>
      </div>
    </div>
  );
};

export default AgentForm;
```