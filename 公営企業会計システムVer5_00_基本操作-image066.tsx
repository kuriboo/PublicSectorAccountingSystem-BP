```tsx
// components/MainMenu.tsx

import React from 'react';
import 'tailwindcss/tailwind.css';

// 型定義
type ButtonProps = {
  label: string;
  onClick: () => void;
};

type SectionProps = {
  title: string;
  buttons: ButtonProps[];
};

type MainMenuProps = {
  headerText: string;
  noticeText: string;
  sections: SectionProps[];
};

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button className="m-2 p-2 bg-gray-300 rounded hover:bg-gray-400" onClick={onClick}>
    {label}
  </button>
);

// セクションコンポーネント
const Section: React.FC<SectionProps> = ({ title, buttons }) => (
  <div className="border rounded-lg m-4 p-4">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <div className="flex flex-wrap">
      {buttons.map((button, index) => (
        <Button key={index} label={button.label} onClick={button.onClick} />
      ))}
    </div>
  </div>
);

// メインメニューコンポーネント
const MainMenu: React.FC<MainMenuProps> = ({ headerText, noticeText, sections }) => (
  <div className="p-4 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-6">{headerText}</h1>
    <p className="text-center mb-6">{noticeText}</p>
    {sections.map((section, index) => (
      <Section key={index} title={section.title} buttons={section.buttons} />
    ))}
  </div>
);

export default MainMenu;
```

```tsx
// pages/index.tsx

import MainMenu from '../components/MainMenu';

const HomePage = () => {
  const sections = [
    {
      title: 'base',
      buttons: [
        { label: '支払', onClick: () => alert('支払 clicked') },
        { label: '調定・収納', onClick: () => alert('調定・収納 clicked') },
        { label: '月例', onClick: () => alert('月例 clicked') },
      ],
    },
    {
      title: 'options',
      buttons: [
        { label: '固定資産', onClick: () => alert('固定資産 clicked') },
        { label: '貯蔵品', onClick: () => alert('貯蔵品 clicked') },
        { label: '契約事務', onClick: () => alert('契約事務 clicked') },
      ],
    },
  ];

  return (
    <MainMenu
      headerText="メインメニュー"
      noticeText="会計担当からお知らせ...管理課からのお知らせ..."
      sections={sections}
    />
  );
};

export default HomePage;
```