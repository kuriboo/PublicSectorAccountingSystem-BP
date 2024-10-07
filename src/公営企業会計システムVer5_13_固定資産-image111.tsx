import { FC } from 'react';

type RangeInputProps = {
  label: string;
  startValue?: string;
  endValue?: string;
  onChangeStart: (value: string) => void;
  onChangeEnd: (value: string) => void;
};

const RangeInput: FC<RangeInputProps> = ({ label, startValue, endValue, onChangeStart, onChangeEnd }) => (
  <div className="flex items-center mb-2">
    <label className="w-32">{label}</label>
    <input
      type="text"
      value={startValue}
      onChange={(e) => onChangeStart(e.target.value)}
      className="border p-1 mr-2"
    />
    <span>~</span>
    <input
      type="text"
      value={endValue}
      onChange={(e) => onChangeEnd(e.target.value)}
      className="border p-1 ml-2"
    />
  </div>
);

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({ text, onClick, className }) => (
  <button onClick={onClick} className={`p-2 ${className}`}>
    {text}
  </button>
);

type AssetManagementProps = {
  onSearch: () => void;
  onExclude: () => void;
};

const AssetManagement: FC<AssetManagementProps> = ({ onSearch, onExclude }) => {
  return (
    <div className="p-4">
      {/* 範囲指定 */}
      <div className="mb-4">
        <RangeInput
          label="固定資産番号"
          onChangeStart={(val) => console.log('Start:', val)}
          onChangeEnd={(val) => console.log('End:', val)}
        />
        <RangeInput
          label="資産番号"
          onChangeStart={(val) => console.log('Start:', val)}
          onChangeEnd={(val) => console.log('End:', val)}
        />
        {/* Add other necessary RangeInputs here */}
      </div>

      {/* Controls */}
      <div className="flex mb-4">
        <Button text="対象外" onClick={onExclude} className="bg-red-500 text-white mr-4" />
        <Button text="表示" onClick={onSearch} className="bg-blue-500 text-white" />
      </div>

      {/* Data Table (Mockup) */}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">資産番号</th>
            <th className="border p-2">名称</th>
            <th className="border p-2">取得年月日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">8026200</td>
            <td className="border p-2">リース資産</td>
            <td className="border p-2">平成29年08月12日</td>
          </tr>
          {/* Add other rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default AssetManagement;
```