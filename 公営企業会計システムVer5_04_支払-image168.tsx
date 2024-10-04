```tsx
import React from 'react';

type ChecklistFormProps = {
  startDate: string;
  endDate: string;
  responsible: string;
  onDateChange: (startDate: string, endDate: string) => void;
  onResponsibleChange: (responsible: string) => void;
  onClear: () => void;
  onSubmit: () => void;
};

const ChecklistForm: React.FC<ChecklistFormProps> = ({
  startDate,
  endDate,
  responsible,
  onDateChange,
  onResponsibleChange,
  onClear,
  onSubmit,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">未処理予定負担チェックリスト作成</h2>

      <div className="mb-4">
        <label className="flex items-center">
          <input type="radio" name="responsibility" className="mr-2" />
          <span>全て</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="responsibility" className="mr-2" />
          <span>未負担</span>
        </label>
      </div>

      <div className="flex items-center mb-4">
        <span className="mr-2">予定処理日</span>
        <input
          type="text"
          value={startDate}
          onChange={(e) => onDateChange(e.target.value, endDate)}
          className="border px-2 py-1 mr-2"
          placeholder="開始日"
        />
        <span className="mr-2">～</span>
        <input
          type="text"
          value={endDate}
          onChange={(e) => onDateChange(startDate, e.target.value)}
          className="border px-2 py-1"
          placeholder="終了日"
        />
      </div>

      <div className="flex justify-between">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">
          クリア
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ChecklistForm;
```