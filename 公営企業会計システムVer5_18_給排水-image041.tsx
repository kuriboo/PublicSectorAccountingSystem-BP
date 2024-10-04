// components/ConstructionAgentMaster.tsx
import React from 'react';

interface ConstructionAgentMasterProps {
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
  fields: {
    constructionNumber: string;
    startDate: string;
    representative1: string;
    representative2: string;
    abbreviation: string;
    postalCode: string;
    address1: string;
    address2: string;
    phoneNumber: string;
    faxNumber: string;
    storageEquipment: string;
    chiefTechnician: string;
    contactNumber: string;
    qualifications: string;
  };
  onFieldChange: (fieldName: keyof ConstructionAgentMasterProps['fields'], value: string) => void;
}

const ConstructionAgentMaster: React.FC<ConstructionAgentMasterProps> = ({
  onSubmit,
  onClear,
  onEnd,
  fields,
  onFieldChange
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">工事代理店マスタ</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        {Object.entries(fields).map(([key, value]) => (
          <div key={key} className="flex space-x-2">
            <label className="w-32 text-right">{key}:</label>
            <input
              type="text"
              value={value}
              onChange={(e) => onFieldChange(key as keyof ConstructionAgentMasterProps['fields'], e.target.value)}
              className="border p-1 rounded-md"
            />
          </div>
        ))}
        <div className="flex space-x-2 justify-center mt-4">
          <button type="button" onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded-md">登録</button>
          <button type="button" onClick={onClear} className="bg-gray-500 text-white py-1 px-4 rounded-md">クリア</button>
          <button type="button" onClick={onEnd} className="bg-red-500 text-white py-1 px-4 rounded-md">終了</button>
        </div>
      </form>
    </div>
  );
};

export default ConstructionAgentMaster;