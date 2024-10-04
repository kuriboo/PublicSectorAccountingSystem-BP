```tsx
// MainMenu.tsx
import React from 'react';

// 定義可能なボタンのプロパティ
interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

// 単一のボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => (
  <button
    className={`bg-gray-200 text-black p-2 rounded-sm shadow-md hover:bg-gray-300 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

// 定義可能なセクションのプロパティ
interface SectionProps {
  title: string;
  buttons: ButtonProps[];
}

// セクションコンポーネント
const Section: React.FC<SectionProps> = ({ title, buttons }) => (
  <div className="p-4 border border-gray-300 rounded-md m-2">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <div className="grid grid-cols-3 gap-2">
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  </div>
);

// メインメニューコンポーネント
const MainMenu: React.FC = () => {
  // ボタンアクション例
  const handleButtonClick = (buttonName: string) => {
    alert(`${buttonName} ボタンがクリックされました`);
  };

  // 各セクションとボタンのリスト
  const sections: SectionProps[] = [
    {
      title: 'base',
      buttons: [
        { text: '支払', onClick: () => handleButtonClick('支払') },
        { text: '調定・収納', onClick: () => handleButtonClick('調定・収納') },
        { text: '月例', onClick: () => handleButtonClick('月例') }
      ]
    },
    {
      title: '予算',
      buttons: [
        { text: '予算編成', onClick: () => handleButtonClick('予算編成') },
        { text: '予算書', onClick: () => handleButtonClick('予算書') },
        { text: '繰越予算', onClick: () => handleButtonClick('繰越予算') }
      ]
    },
    {
      title: '決算',
      buttons: [
        { text: '決算', onClick: () => handleButtonClick('決算') },
        { text: '決算統計', onClick: () => handleButtonClick('決算統計') }
      ]
    },
    {
      title: 'maintenance',
      buttons: [
        { text: 'セットアップ', onClick: () => handleButtonClick('セットアップ'), className: 'text-red-500' }
      ]
    },
    {
      title: 'options',
      buttons: [
        { text: '固定資産', onClick: () => handleButtonClick('固定資産') },
        { text: '貯蔵品', onClick: () => handleButtonClick('貯蔵品') },
        { text: '契約事務', onClick: () => handleButtonClick('契約事務') },
        { text: '給排水受付', onClick: () => handleButtonClick('給排水受付') },
        { text: '工事管理', onClick: () => handleButtonClick('工事管理') },
        { text: '企業信管理', onClick: () => handleButtonClick('企業信管理') },
        { text: '維持費', onClick: () => handleButtonClick('維持費') }
      ]
    }
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">メインメニュー</h1>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

export default MainMenu;
```