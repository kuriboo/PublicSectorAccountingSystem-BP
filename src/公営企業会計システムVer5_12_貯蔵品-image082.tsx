import React from 'react';

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="flex items-center mb-4">
    <span className="font-bold mr-2">{label}</span>
    <input
      className="border border-gray-300 px-2 py-1 text-center"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

type RangeInputProps = {
  label: string;
  startValue: string;
  endValue: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
};

const RangeInput: React.FC<RangeInputProps> = ({
  label,
  startValue,
  endValue,
  onStartChange,
  onEndChange,
}) => (
  <div className="flex items-center mb-4">
    <span className="font-bold mr-2">{label}</span>
    <input
      className="border border-gray-300 px-2 py-1 text-center mr-2"
      type="text"
      value={startValue}
      onChange={(e) => onStartChange(e.target.value)}
    />
    <span className="mx-2">~</span>
    <input
      className="border border-gray-300 px-2 py-1 text-center"
      type="text"
      value={endValue}
      onChange={(e) => onEndChange(e.target.value)}
    />
  </div>
);

type FormProps = {
  date: string;
  onDateChange: (value: string) => void;
  belongStart: string;
  belongEnd: string;
  onBelongStartChange: (value: string) => void;
  onBelongEndChange: (value: string) => void;
  codeStart: string;
  codeEnd: string;
  onCodeStartChange: (value: string) => void;
  onCodeEndChange: (value: string) => void;
};

const DetailForm: React.FC<FormProps> = ({
  date,
  onDateChange,
  belongStart,
  belongEnd,
  onBelongStartChange,
  onBelongEndChange,
  codeStart,
  codeEnd,
  onCodeStartChange,
  onCodeEndChange,
}) => (
  <div className="p-4 border rounded-md shadow-md max-w-md mx-auto">
    <h2 className="text-lg font-bold mb-4">範囲指定</h2>
    <Input label="棚卸年月日" value={date} onChange={onDateChange} />
    <RangeInput
      label="所属"
      startValue={belongStart}
      endValue={belongEnd}
      onStartChange={onBelongStartChange}
      onEndChange={onBelongEndChange}
    />
    <RangeInput
      label="仕訳コード"
      startValue={codeStart}
      endValue={codeEnd}
      onStartChange={onCodeStartChange}
      onEndChange={onCodeEndChange}
    />
    <div className="flex justify-end mt-4">
      <button className="bg-gray-300 px-4 py-2 mr-2 rounded">OK</button>
      <button className="bg-gray-300 px-4 py-2 mr-2 rounded">クリア</button>
      <button className="bg-gray-300 px-4 py-2 rounded">終了</button>
    </div>
  </div>
);

export default DetailForm;
```