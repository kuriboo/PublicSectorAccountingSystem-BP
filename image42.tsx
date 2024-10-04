```tsx
import React from 'react';

// 型定義
type ContractMethodDropdownProps = {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
};

// 契約方法のドロップダウンコンポーネント
const ContractMethodDropdown: React.FC<ContractMethodDropdownProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="flex flex-col items-start">
      {/* ラベル */}
      <label htmlFor="contract-method" className="text-blue-800 font-semibold mb-1">
        契約方法
      </label>
      
      {/* セレクトボックス */}
      <select
        id="contract-method"
        value={selectedOption}
        onChange={(e) => onSelect(e.target.value)}
        className="border rounded py-1 px-3 w-full max-w-xs shadow-md"
      >
        {/* オプションを動的に生成 */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContractMethodDropdown;

// 使用例
/*
<ContractMethodDropdown
  options={['見積合せ', '指名競争入札', '随意契約', '単価契約', '一般競争入札']}
  selectedOption={'一般競争入札'}
  onSelect={(option) => console.log(option)}
/>
*/
```