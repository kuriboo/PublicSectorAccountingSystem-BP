// components/MasterSettingForm.tsx
import React from 'react';

type MasterSettingFormProps = {
  managementCode: string;
  meterType: string;
  ticketType: string;
  districtCode: string;
  onManagementCodeChange: (value: string) => void;
  onMeterTypeChange: (value: string) => void;
  onTicketTypeChange: (value: string) => void;
  onDistrictCodeChange: (value: string) => void;
};

const MasterSettingForm: React.FC<MasterSettingFormProps> = ({
  managementCode,
  meterType,
  ticketType,
  districtCode,
  onManagementCodeChange,
  onMeterTypeChange,
  onTicketTypeChange,
  onDistrictCodeChange,
}) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded shadow-md">
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">編集</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">追加</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">削除</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="managementCode" className="block text-sm font-medium text-gray-700">
            管理CD
          </label>
          <input
            id="managementCode"
            type="text"
            value={managementCode}
            onChange={(e) => onManagementCodeChange(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="meterType" className="block text-sm font-medium text-gray-700">
            メータ区分
          </label>
          <input
            id="meterType"
            type="text"
            value={meterType}
            onChange={(e) => onMeterTypeChange(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="ticketType" className="block text-sm font-medium text-gray-700">
            収納起票日区分
          </label>
          <input
            id="ticketType"
            type="text"
            value={ticketType}
            onChange={(e) => onTicketTypeChange(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="districtCode" className="block text-sm font-medium text-gray-700">
            地区区分CD
          </label>
          <input
            id="districtCode"
            type="text"
            value={districtCode}
            onChange={(e) => onDistrictCodeChange(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 mt-4 bg-blue-600 text-white rounded">登録</button>
        <button className="px-4 py-2 mt-4 ml-2 bg-gray-500 text-white rounded">取消</button>
      </div>
    </div>
  );
};

export default MasterSettingForm;
```