```tsx
import React from 'react';

// Props type definition for the component
type DateChangeFormProps = {
  startDate: string;
  duration: number;
  endDate: string;
  onStartDateChange: (value: string) => void;
  onDurationChange: (value: number) => void;
  onEndDateChange: (value: string) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const DateChangeForm: React.FC<DateChangeFormProps> = ({
  startDate,
  duration,
  endDate,
  onStartDateChange,
  onDurationChange,
  onEndDateChange,
  onOk,
  onClear,
  onCancel,
}) => {
  // Tailwind CSS classes for styling
  const inputClass = 'border p-1';
  const buttonClass = 'bg-gray-200 p-1 mx-1';

  return (
    <div className="p-4 border shadow-lg">
      {/* Start Date Input */}
      <div className="mb-2">
        <label className="mr-2">着手年月日</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className={`${inputClass}`}
        />
      </div>
      
      {/* Duration Input */}
      <div className="mb-2">
        <label className="mr-2">期間</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => onDurationChange(parseInt(e.target.value))}
          className={`${inputClass}`}
        />
      </div>
      
      {/* End Date Input */}
      <div className="mb-2">
        <label className="mr-2">完了年月日</label>
        <input
          type="text"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className={`${inputClass}`}
        />
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-between">
        <button onClick={onOk} className={`${buttonClass}`}>OK</button>
        <button onClick={onClear} className={`${buttonClass}`}>クリア</button>
        <button onClick={onCancel} className={`${buttonClass}`}>キャンセル</button>
      </div>
    </div>
  );
};

export default DateChangeForm;
```