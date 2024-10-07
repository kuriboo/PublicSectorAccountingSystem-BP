import React from 'react';

// 型定義
type FilterFormProps = {
  startDate: string;
  endDate: string;
  onChangeStartDate: (date: string) => void;
  onChangeEndDate: (date: string) => void;
  startCounterparty: string;
  endCounterparty: string;
  onChangeStartCounterparty: (value: string) => void;
  onChangeEndCounterparty: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FilterForm: React.FC<FilterFormProps> = ({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  startCounterparty,
  endCounterparty,
  onChangeStartCounterparty,
  onChangeEndCounterparty,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block font-medium">支払年月日</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => onChangeStartDate(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
          placeholder="開始日付"
        />
        <input
          type="text"
          value={endDate}
          onChange={(e) => onChangeEndDate(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="終了日付"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">相手先</label>
        <input
          type="text"
          value={startCounterparty}
          onChange={(e) => onChangeStartCounterparty(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
          placeholder="開始相手先"
        />
        <input
          type="text"
          value={endCounterparty}
          onChange={(e) => onChangeEndCounterparty(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="終了相手先"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white p-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white p-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
