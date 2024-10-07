import React from 'react';

// 定義するPropsの型
interface InputFormProps {
  year: string;
  onYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  codes: string[];
  onCodeChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  names: string[];
  onNameChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

// コンポーネントの定義
const InputForm: React.FC<InputFormProps> = ({
  year,
  onYearChange,
  codes,
  onCodeChange,
  names,
  onNameChange
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="flex items-center mb-4">
        <span className="mr-2">年度</span>
        <select value={year} onChange={onYearChange} className="border px-2 py-1">
          {/* 年度のオプション */}
          <option value="平成30">平成30</option>
          {/* 他の年度をここに追加 */}
        </select>
      </div>
      <div className="space-y-2">
        {codes.map((code, index) => (
          <div key={index} className="flex items-center">
            <span className="w-32">{`予算${index + 1}コード`}</span>
            <input
              type="text"
              value={code}
              onChange={(e) => onCodeChange(index, e)}
              className="border px-2 py-1 mr-4"
            />
            <span className="w-16">{`名称${index + 1}`}</span>
            <input
              type="text"
              value={names[index]}
              onChange={(e) => onNameChange(index, e)}
              className="border px-2 py-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputForm;