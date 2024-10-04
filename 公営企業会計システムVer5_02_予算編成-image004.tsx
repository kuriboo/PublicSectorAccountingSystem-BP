```tsx
import React from 'react';

// Define types for the component props
type RangeInputProps = {
  label: string;
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
};

type AdjustmentRateProps = {
  rate: string;
  onRateChange: (value: string) => void;
};

type ButtonProps = {
  label: string;
  onClick: () => void;
};

// RangeInput component
const RangeInput: React.FC<RangeInputProps> = ({
  label,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}) => (
  <div className="flex items-center mb-4">
    <span className="mr-2">{label}</span>
    <input
      type="text"
      value={minValue}
      onChange={(e) => onMinChange(e.target.value)}
      className="border p-1 mr-2"
    />
    <span className="mr-2">~</span>
    <input
      type="text"
      value={maxValue}
      onChange={(e) => onMaxChange(e.target.value)}
      className="border p-1"
    />
  </div>
);

// AdjustmentRate component
const AdjustmentRate: React.FC<AdjustmentRateProps> = ({ rate, onRateChange }) => (
  <div className="flex items-center mb-4">
    <span className="mr-2">改定率</span>
    <input
      type="text"
      value={rate}
      onChange={(e) => onRateChange(e.target.value)}
      className="border p-1 w-16 mr-2"
    />
    <span>%</span>
  </div>
);

// Button component
const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-2"
    onClick={onClick}
  >
    {label}
  </button>
);

// Main component
const ValuationCalculationComponent: React.FC = () => {
  const [minValue, setMinValue] = React.useState('0000000');
  const [maxValue, setMaxValue] = React.useState('9999999');
  const [rate, setRate] = React.useState('5.00');

  const handleOkClick = () => {
    console.log('OK clicked');
  };

  const handleClearClick = () => {
    setMinValue('0000000');
    setMaxValue('9999999');
    setRate('5.00');
  };

  const handleExitClick = () => {
    console.log('Exit clicked');
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-lg mx-auto">
      <h1 className="text-xl mb-4">単価計算</h1>
      <RangeInput
        label="範囲指定"
        minValue={minValue}
        maxValue={maxValue}
        onMinChange={setMinValue}
        onMaxChange={setMaxValue}
      />
      <AdjustmentRate rate={rate} onRateChange={setRate} />
      <div className="flex justify-end mt-4">
        <Button label="エラー確認" onClick={() => console.log('エラー確認 clicked')} />
        <Button label="OK" onClick={handleOkClick} />
        <Button label="クリア" onClick={handleClearClick} />
        <Button label="終了" onClick={handleExitClick} />
      </div>
    </div>
  );
};

export default ValuationCalculationComponent;
```