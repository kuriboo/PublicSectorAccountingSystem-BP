import React from 'react';

// TypeScript型定義
interface CheckboxItem {
  label: string;
  checked: boolean;
}

interface CheckboxListProps {
  items: CheckboxItem[];
  onChange: (index: number, checked: boolean) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items, onChange }) => {
  return (
    <div className="flex space-x-4">
      {items.map((item, index) => (
        <label key={index} className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={(e) => onChange(index, e.target.checked)}
            className="form-checkbox h-4 w-4 text-indigo-600"
          />
          <span className="text-sm text-gray-700">{item.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;

// 利用例
/*
<CheckboxList
  items={[
    { label: '完了', checked: true },
    { label: '決裁中', checked: true },
    { label: '伝票削除', checked: true },
    { label: '未連携', checked: true },
    { label: '連携対象外', checked: true }
  ]}
  onChange={(index, checked) => {
    console.log(`Item at index ${index} was changed to ${checked}`);
  }}
/>
*/