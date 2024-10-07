import React from 'react';

// 型定義
type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type SelectProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

// 再利用可能な入力フィールドコンポーネント
const InputField: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="mb-2">{label}</label>
    <input
      type="text"
      className="border-2 border-gray-300 p-2"
      value={value}
      onChange={onChange}
    />
  </div>
);

// 再利用可能なセレクトコンポーネント
const SelectField: React.FC<SelectProps> = ({ label, options, value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="mb-2">{label}</label>
    <select
      className="border-2 border-gray-300 p-2"
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

// メインコンポーネント
const FormComponent: React.FC = () => {
  const [nenDo, setNenDo] = React.useState("平成29");
  const [shuseiCode, setShuseiCode] = React.useState("01");
  const [plusName, setPlusName] = React.useState("");
  const [minusName, setMinusName] = React.useState("");

  return (
    <div className="p-4">
      <div className="border-b-2 pb-4 mb-4">
        <SelectField
          label="集計年度"
          options={["平成29", "平成30"]}
          value={nenDo}
          onChange={(e) => setNenDo(e.target.value)}
        />
        <SelectField
          label="集計表区分コード"
          options={["01", "02", "03"]}
          value={shuseiCode}
          onChange={(e) => setShuseiCode(e.target.value)}
        />
        <InputField
          label="プラス金額項目名称"
          value={plusName}
          onChange={(e) => setPlusName(e.target.value)}
        />
        <InputField
          label="マイナス金額項目名称"
          value={minusName}
          onChange={(e) => setMinusName(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded ml-2">クリア</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">終了</button>
    </div>
  );
};

export default FormComponent;
