```tsx
import React from 'react';

// 型定義
interface DropdownProps {
  options: string[]; // ドロップダウンの選択肢
  selectedOption: string; // 現在選択されている選択肢
  onChange: (option: string) => void; // 選択が変更されたときに呼び出される関数
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onChange }) => {
  return (
    <div className="flex items-center">
      <label htmlFor="contract-method" className="mr-2 text-blue-800">契約方法</label>
      <select
        id="contract-method"
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-1"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

// 利用例
// <Dropdown 
//   options={['見積合せ', '指名競争入札', '随意契約', '単価契約', '一般競争入札']} 
//   selectedOption={'一般競争入札'} 
//   onChange={(newOption) => console.log(newOption)} 
// />
```