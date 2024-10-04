```tsx
import React from 'react';

// 型定義
type CheckboxOption = {
  label: string;
  checked: boolean;
};

type CheckBoxListProps = {
  options: CheckboxOption[];
  onOptionChange: (index: number, checked: boolean) => void;
};

const CheckBoxList: React.FC<CheckBoxListProps> = ({ options, onOptionChange }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={(e) => onOptionChange(index, e.target.checked)}
              className="mr-2"
            />
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckBoxList;

// 使用例:
// <CheckBoxList
//   options={[
//     { label: '翌年度への繰越工事資金', checked: true },
//     { label: '前年年度売当財源(未発行企業債)', checked: true },
//     { label: '復活留保前年年度売当資金', checked: true },
//     { label: '前年度からの繰越工事資金', checked: true },
//     { label: '未発行企業債', checked: false },
//     { label: '（繰越）未処分利益剰余金', checked: false },
//     { label: '減債積立金', checked: false },
//     { label: '建設改良積立金', checked: false },
//     { label: '過年度分指令動産留保資金', checked: false },
//     { label: '当年度分指令動産留保資金 繰越財源売当', checked: false },
//     { label: '当年度分指令動産留保資金 当年度財源売当', checked: false },
//     { label: '前年年度からの繰越工事資金', checked: false },
//     { label: '未発行企業債', checked: false },
//     { label: '消費税及び地方消費税資本的収支調整額 過年度分', checked: false },
//     { label: '消費税及び地方消費税資本的収支調整額 当年度分', checked: false },
//   ]}
//   onOptionChange={(index, checked) => console.log(index, checked)}
// />
```