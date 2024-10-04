import React from 'react';

type AccountingFormProps = {
  workDate: string;
  aggregationStartDate: string;
  aggregationEndDate: string;
  collectionTarget: 'all' | 'block' | 'segment';
  segmentOptions: { id: number; name: string }[];
  selectedSegmentId: number;
  onSegmentChange: (segmentId: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  workDate,
  aggregationStartDate,
  aggregationEndDate,
  collectionTarget,
  segmentOptions,
  selectedSegmentId,
  onSegmentChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-4">会計日計・月計表作成</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">作業日</label>
        <input
          type="text"
          value={workDate}
          readOnly
          className="border p-2 w-full text-gray-600"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">集計日</label>
        <input
          type="text"
          value={`${aggregationStartDate} ~ ${aggregationEndDate}`}
          readOnly
          className="border p-2 w-full text-gray-600"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">集計対象</label>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="collectionTarget"
            value="all"
            checked={collectionTarget === 'all'}
            readOnly
          />
          <span>全体</span>
          <input
            type="radio"
            name="collectionTarget"
            value="block"
            checked={collectionTarget === 'block'}
            readOnly
          />
          <span>ブロック</span>
          <input
            type="radio"
            name="collectionTarget"
            value="segment"
            checked={collectionTarget === 'segment'}
            readOnly
          />
          <span>セグメント</span>
          <select
            className="border p-2 ml-2"
            value={selectedSegmentId}
            onChange={(e) => onSegmentChange(Number(e.target.value))}
          >
            {segmentOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;