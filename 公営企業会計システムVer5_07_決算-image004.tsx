import React from 'react';

type NumberInputProps = {
  label: string;
  min: number;
  max: number;
  defaultValue: number;
  onChange: (value: number) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({ label, min, max, defaultValue, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-sm font-semibold">{label}</label>
      <input
        type="number"
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="border rounded px-2 py-1 text-sm"
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

type ControlPanelProps = {
  startYear: number;
  endYear: number;
  budgetStart: number;
  budgetEnd: number;
  detailStart: number;
  detailEnd: number;
  onYearChange: (startYear: number, endYear: number) => void;
  onBudgetChange: (budgetStart: number, budgetEnd: number) => void;
  onDetailChange: (detailStart: number, detailEnd: number) => void;
};

const ControlPanel: React.FC<ControlPanelProps> = ({
  startYear,
  endYear,
  budgetStart,
  budgetEnd,
  detailStart,
  detailEnd,
  onYearChange,
  onBudgetChange,
  onDetailChange,
}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">資本的収支明細書備考内容マスタリスト作成</h2>
      <div className="space-y-4">
        <NumberInput 
          label="年度" 
          min={2000} 
          max={3000} 
          defaultValue={startYear}
          onChange={(value) => onYearChange(value, endYear)}
        />

        <div className="flex justify-between space-x-4">
          <NumberInput 
            label="予算科目" 
            min={0} 
            max={999999999} 
            defaultValue={budgetStart}
            onChange={(value) => onBudgetChange(value, budgetEnd)}
          />
          <NumberInput 
            label="〜" 
            min={0} 
            max={999999999} 
            defaultValue={budgetEnd}
            onChange={(value) => onBudgetChange(budgetStart, value)}
          />
        </div>
        
        <div className="flex justify-between space-x-4">
          <NumberInput 
            label="備考明細番号" 
            min={0} 
            max={99} 
            defaultValue={detailStart}
            onChange={(value) => onDetailChange(value, detailEnd)}
          />
          <NumberInput 
            label="〜" 
            min={0} 
            max={99} 
            defaultValue={detailEnd}
            onChange={(value) => onDetailChange(detailStart, value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;