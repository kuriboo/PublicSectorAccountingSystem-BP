import React from 'react';

interface AccountingFormProps {
  year: string;
  segmentCode: string;
  name: string;
  segmentName: string;
  onYearChange: (value: string) => void;
  onSegmentCodeChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onSegmentNameChange: (value: string) => void;
}

const AccountingForm: React.FC<AccountingFormProps> = ({
  year,
  segmentCode,
  name,
  segmentName,
  onYearChange,
  onSegmentCodeChange,
  onNameChange,
  onSegmentNameChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      {/* Year */}
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="令和06"
        />
      </div>
      
      {/* Segment Code */}
      <div className="mb-4">
        <label className="block text-gray-700">セグメントコード</label>
        <input
          type="text"
          value={segmentCode}
          onChange={(e) => onSegmentCodeChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="参照コード"
        />
      </div>
      
      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-700">名称</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="名称"
        />
      </div>
      
      {/* Segment Name */}
      <div className="mb-4">
        <label className="block text-gray-700">セグメント名</label>
        <input
          type="text"
          value={segmentName}
          onChange={(e) => onSegmentNameChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="セグメント"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default AccountingForm;
```