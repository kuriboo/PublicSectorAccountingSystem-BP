```tsx
// components/ChangeScheduleForm.tsx
import React from 'react';

interface ChangeScheduleFormProps {
  scheduledDate: string;
  fiscalYear: string;
  decisionNumber: number;
  changeSummary: string;
  previousAmount: number;
  settlementAmount: number;
  contractor: string;
  projectLocation: string;
  onFormSubmit: () => void;
  onFormClear: () => void;
  onFormClose: () => void;
}

const ChangeScheduleForm: React.FC<ChangeScheduleFormProps> = ({
  scheduledDate,
  fiscalYear,
  decisionNumber,
  changeSummary,
  previousAmount,
  settlementAmount,
  contractor,
  projectLocation,
  onFormSubmit,
  onFormClear,
  onFormClose,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <div className="flex flex-col mb-4">
        <label className="font-semibold">予定処理日</label>
        <input
          type="text"
          value={scheduledDate}
          className="border p-2"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold">予定年度</label>
        <input
          type="text"
          value={fiscalYear}
          className="border p-2"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold">決裁番号</label>
        <input
          type="number"
          value={decisionNumber}
          className="border p-2"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold">変更摘要</label>
        <input
          type="text"
          value={changeSummary}
          className="border p-2"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold">前払金額</label>
        <input
          type="number"
          value={previousAmount}
          className="border p-2"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold">支払済額</label>
        <input
          type="number"
          value={settlementAmount}
          className="border p-2"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold">相手先</label>
        <input
          type="text"
          value={contractor}
          className="border p-2"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold">工事名場所</label>
        <input
          type="text"
          value={projectLocation}
          className="border p-2"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onFormSubmit}
        >
          OK
        </button>
        <button 
          className="bg-gray-300 py-2 px-4 rounded"
          onClick={onFormClear}
        >
          クリア
        </button>
        <button 
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={onFormClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ChangeScheduleForm;
```