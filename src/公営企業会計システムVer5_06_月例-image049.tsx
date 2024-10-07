import React from 'react';

// Props type definition
type HeaderProps = {
  title: string;
  subTitle: string;
  subText: string;
  headerDate: string;
};

// Header component
const Header: React.FC<HeaderProps> = ({ title, subTitle, subText, headerDate }) => {
  return (
    <div className="flex justify-between p-4 bg-blue-100">
      <h1 className="text-lg">{title}</h1>
      <div>
        <p>{subTitle}</p>
        <p>{subText}</p>
        <p>{headerDate}</p>
      </div>
    </div>
  );
};

// Props type definition
type InputBoxProps = {
  leftLabel: string;
  rightLabel: string;
};

// InputBox component
const InputBox: React.FC<InputBoxProps> = ({ leftLabel, rightLabel }) => {
  return (
    <div className="border p-4 m-4">
      <p className="text-blue-800">{leftLabel}</p>
      <input type="text" className="border-b-2 border-black focus:outline-none mx-2" />
      <span>{rightLabel}</span>
    </div>
  );
};

// Props type definition
type ButtonProps = {
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

// ButtonGroup component
const ButtonGroup: React.FC<ButtonProps> = ({ onOk, onClear, onExit }) => {
  return (
    <div className="flex justify-center space-x-4 p-4">
      <button onClick={onOk} className="bg-gray-300 px-4 py-2 rounded shadow">
        OK
      </button>
      <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded shadow">
        クリア
      </button>
      <button onClick={onExit} className="bg-gray-300 px-4 py-2 rounded shadow">
        終了
      </button>
    </div>
  );
};

// Main component
const MainComponent: React.FC = () => {
  return (
    <div className="font-sans">
      <Header 
        title="月次貸借対照表集計" 
        subTitle="行政市水道事業会計" 
        subText="管理者　予算科目登録権限者 ぎょうせい 太郎" 
        headerDate="平成30年04月06日" 
      />
      <InputBox leftLabel="集計年月" rightLabel="まで" />
      <ButtonGroup 
        onOk={() => alert('OK clicked')} 
        onClear={() => alert('クリア clicked')}
        onExit={() => alert('終了 clicked')}
      />
    </div>
  );
};

export default MainComponent;
```