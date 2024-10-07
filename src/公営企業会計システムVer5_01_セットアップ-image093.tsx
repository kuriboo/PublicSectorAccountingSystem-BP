import React from 'react';

// Define the types for the component's props
interface CalculationFormProps {
  targetValue: number;
  onTargetValueChange: (value: number) => void;
  adjustmentType: 'add' | 'subtract';
  onAdjustmentTypeChange: (type: 'add' | 'subtract') => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const CalculationForm: React.FC<CalculationFormProps> = ({
  targetValue,
  onTargetValueChange,
  adjustmentType,
  onAdjustmentTypeChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-96">
      <div className="mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">集計先</button>
        <input
          type="number"
          value={targetValue}
          onChange={(e) => onTargetValueChange(Number(e.target.value))}
          className="ml-2 border rounded-md p-1 w-16"
        />
      </div>

      <div className="mb-4">
        <span className="mr-2">加減区分</span>
        <label className="mr-2">
          <input
            type="radio"
            checked={adjustmentType === 'add'}
            onChange={() => onAdjustmentTypeChange('add')}
          />
          <span className="ml-1">+</span>
        </label>
        <label>
          <input
            type="radio"
            checked={adjustmentType === 'subtract'}
            onChange={() => onAdjustmentTypeChange('subtract')}
          />
          <span className="ml-1">−</span>
        </label>
      </div>

      <div className="flex justify-around">
        <button onClick={onSubmit} className="px-4 py-2 bg-gray-200 rounded-md">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-200 rounded-md">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded-md">キャンセル</button>
      </div>
    </div>
  );
};

export default CalculationForm;
```