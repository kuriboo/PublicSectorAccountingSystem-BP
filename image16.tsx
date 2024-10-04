```tsx
import React, { ChangeEvent } from 'react';

// TypeScript types for props
type FormProps = {
  registrationDate: string;
  inspectionDate: string;
  applicantInfo: {
    siteLocation: string;
    address: string;
    name: string;
    phoneNumber: string;
  };
  agentInfo: {
    siteId: string;
    representative1: string;
    representative2: string;
    address: string;
    phoneNumber: string;
  };
  onFormSubmit: (event: React.FormEvent) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

// Stateless functional component
const RegistrationForm: React.FC<FormProps> = ({
  registrationDate,
  inspectionDate,
  applicantInfo,
  agentInfo,
  onFormSubmit,
  onInputChange,
}) => {
  return (
    <form onSubmit={onFormSubmit} className="p-4">
      {/* Section: Application Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">申請者情報</h2>
        <label className="block mt-2">受付日:
          <input type="text" name="registrationDate" value={registrationDate} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
        <label className="block mt-2">受付審査日:
          <input type="text" name="inspectionDate" value={inspectionDate} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
      </div>

      {/* Inputs for applicant information */}
      <div className="mb-4">
        <label className="block">施工場所:
          <input type="text" name="applicantSiteLocation" value={applicantInfo.siteLocation} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
        <label className="block">住所:
          <input type="text" name="applicantAddress" value={applicantInfo.address} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
        <label className="block">氏名:
          <input type="text" name="applicantName" value={applicantInfo.name} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
        <label className="block">電話番号:
          <input type="text" name="applicantPhoneNumber" value={applicantInfo.phoneNumber} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
      </div>

      {/* Section: Agent Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">工事代理人情報</h2>
        <label className="block">工事店ID:
          <input type="text" name="agentSiteId" value={agentInfo.siteId} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
        <label className="block">代表者1:
          <input type="text" name="agentRepresentative1" value={agentInfo.representative1} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
        <label className="block">代表者2:
          <input type="text" name="agentRepresentative2" value={agentInfo.representative2} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
        <label className="block">住所:
          <input type="text" name="agentAddress" value={agentInfo.address} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
        <label className="block">電話番号:
          <input type="text" name="agentPhoneNumber" value={agentInfo.phoneNumber} onChange={onInputChange} className="border p-1 ml-2" />
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">登録</button>
    </form>
  );
};

export default RegistrationForm;
```