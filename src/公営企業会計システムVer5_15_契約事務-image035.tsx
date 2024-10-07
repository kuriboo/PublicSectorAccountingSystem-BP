// components/DateTimeForm.tsx
import React from 'react';

// タイプ定義
type DateTimeFormProps = {
  dateTimes: {
    指名選定日時: string;
    現場説明日時: string;
    閲覧日時開始: string;
    閲覧日時終了: string;
    入札日時: string;
  };
  会場名Options: string[];
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const DateTimeForm: React.FC<DateTimeFormProps> = ({
  dateTimes,
  会場名Options,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {Object.entries(dateTimes).map(([label, value], index) => (
        <div key={index} className="mb-4 flex items-center">
          <label className="w-1/3 text-gray-700">{label}</label>
          <input
            type="text"
            className="w-2/3 p-2 border border-gray-300 rounded"
            value={value}
            readOnly
          />
          <select className="ml-2 p-2 border border-gray-300 rounded">
            {会場名Options.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </select>
        </div>
      ))}
      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DateTimeForm;
