```tsx
import React from 'react';

// 型定義
type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

// 再利用可能なInputコンポーネント
const CustomInput: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border border-black w-12 p-1 text-center"
  />
);

// 親コンポーネント
const NextFiscalYearCode: React.FC = () => {
  const [suu, setSuu] = React.useState('002');
  const [kou, setKou] = React.useState('01');
  const [moku, setMoku] = React.useState('01');
  const [setsu, setSetsu] = React.useState('13');
  const [naisedivSetsu, setNaiseSetsu] = React.useState('0001');
  const [meisai, setMeisai] = React.useState('0001');

  return (
    <div className="flex items-center space-x-2">
      {/* ラベル */}
      <label className="font-bold">次年度 仕訳科目</label>
      {/* CustomInputコンポーネントのインスタンス */}
      <CustomInput value={suu} onChange={(e) => setSuu(e.target.value)} placeholder="巣" />
      <CustomInput value={kou} onChange={(e) => setKou(e.target.value)} placeholder="項" />
      <CustomInput value={moku} onChange={(e) => setMoku(e.target.value)} placeholder="目" />
      <CustomInput value={setsu} onChange={(e) => setSetsu(e.target.value)} placeholder="節" />
      <CustomInput value={naisedivSetsu} onChange={(e) => setNaiseSetsu(e.target.value)} placeholder="細節" />
      <CustomInput value={meisai} onChange={(e) => setMeisai(e.target.value)} placeholder="明細" />
    </div>
  );
};

export default NextFiscalYearCode;
```