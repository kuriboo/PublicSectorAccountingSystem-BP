import React from 'react';

// Propsの型定義
interface RangeInputProps {
  label: string;
  startValue: string;
  endValue: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
}

// RangeInputコンポーネント
const RangeInput: React.FC<RangeInputProps> = ({ label, startValue, endValue, onStartChange, onEndChange }) => {
  return (
    <div className="flex items-center mb-4">
      <span className="mr-2 text-blue-900">{label}</span>
      <input
        type="text"
        value={startValue}
        onChange={(e) => onStartChange(e.target.value)}
        className="border border-gray-300 rounded-md p-1 w-24 mr-2"
      />
      <span className="mx-2">~</span>
      <input
        type="text"
        value={endValue}
        onChange={(e) => onEndChange(e.target.value)}
        className="border border-gray-300 rounded-md p-1 w-24"
      />
    </div>
  );
};

// 全体のコンポーネント
const MasterListForm: React.FC = () => {
  const [locationStart, setLocationStart] = React.useState('000000');
  const [locationEnd, setLocationEnd] = React.useState('999999');
  const [unitStart, setUnitStart] = React.useState('000000000');
  const [unitEnd, setUnitEnd] = React.useState('999999999');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">範囲指定</h1>
      <RangeInput
        label="保管場所"
        startValue={locationStart}
        endValue={locationEnd}
        onStartChange={setLocationStart}
        onEndChange={setLocationEnd}
      />
      <RangeInput
        label="単位コード"
        startValue={unitStart}
        endValue={unitEnd}
        onStartChange={setUnitStart}
        onEndChange={setUnitEnd}
      />
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">OK</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default MasterListForm;
```