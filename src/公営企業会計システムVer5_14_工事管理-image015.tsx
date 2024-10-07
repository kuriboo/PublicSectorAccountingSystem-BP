import React from 'react';

// TypeScriptの型定義
type HeaderProps = {
  systemName: string;
  department: string;
  responsibility: string;
  date: string;
};

type ContentProps = {
  yearLabel: string;
  currentYear: string;
};

type ButtonProps = {
  okText: string;
  cancelText: string;
  onOk: () => void;
  onCancel: () => void;
};

// Headerコンポーネント
const Header: React.FC<HeaderProps> = ({ systemName, department, responsibility, date }) => {
  return (
    <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
      <span>{systemName}</span>
      <div className="text-sm text-right">
        <div>{department}</div>
        <div>{responsibility}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

// Contentコンポーネント
const Content: React.FC<ContentProps> = ({ yearLabel, currentYear }) => {
  return (
    <div className="p-4">
      <h1 className="text-blue-800 text-2xl font-semibold mb-4">科目別事務費按分計算</h1>
      <p className="text-blue-800">
        {yearLabel} 平成{currentYear} 年度
      </p>
    </div>
  );
};

// Buttonコンポーネント
const ButtonGroup: React.FC<ButtonProps> = ({ okText, cancelText, onOk, onCancel }) => {
  return (
    <div className="flex justify-end space-x-2 p-4">
      <button
        className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded"
        onClick={onOk}
      >
        {okText}
      </button>
      <button
        className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded"
        onClick={onCancel}
      >
        {cancelText}
      </button>
    </div>
  );
};

// メインコンポーネント
const App: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <div className="border border-gray-300 shadow-lg max-w-md mx-auto mt-10">
      <Header
        systemName="公営企業会計システム"
        department="行政市水道事業会計"
        responsibility="総務課 予算・会計担当 ぎょうせい太郎"
        date="平成29年08月19日"
      />
      <Content yearLabel="按分年度" currentYear="29" />
      <ButtonGroup okText="OK" cancelText="終了" onOk={handleOk} onCancel={handleCancel} />
    </div>
  );
};

export default App;
```