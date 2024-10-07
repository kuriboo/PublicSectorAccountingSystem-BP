// components/MenuButton.tsx

import React from 'react';

// プロパティの型定義
type MenuButtonProps = {
  label: string;
  onClick: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 hover:bg-blue-300 text-black py-2 px-4 rounded shadow-md mb-2 w-full"
    >
      {label}
    </button>
  );
};

export default MenuButton;

```tsx
// components/Menu.tsx

import React from 'react';
import MenuButton from './MenuButton';

// プロパティの型定義
type MenuProps = {
  menuItems: { label: string; action: () => void }[];
};

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded shadow-lg">
      {menuItems.map((item, index) => (
        <MenuButton key={index} label={item.label} onClick={item.action} />
      ))}
    </div>
  );
};

export default Menu;

```tsx
// pages/index.tsx

import React from 'react';
import Menu from '../components/Menu';

const HomePage: React.FC = () => {
  // ダミーのアクション関数
  const handleMenuClick = (label: string) => {
    alert(`${label} clicked`);
  };

  // メニューアイテムの定義
  const menuItems = [
    { label: '調定確定処理', action: () => handleMenuClick('調定確定処理') },
    { label: '納入通知書兼領収書', action: () => handleMenuClick('納入通知書兼領収書') },
    { label: '口座振替FD初期処理', action: () => handleMenuClick('口座振替FD初期処理') },
    { label: '口座振替データ作成', action: () => handleMenuClick('口座振替データ作成') },
    { label: '口座振替中止依頼票', action: () => handleMenuClick('口座振替中止依頼票') },
    { label: '口座振替データリスト', action: () => handleMenuClick('口座振替データリスト') },
    { label: '通知状況別一覧表', action: () => handleMenuClick('通知状況別一覧表') },
    { label: '会計連携データ出力', action: () => handleMenuClick('会計連携データ出力') },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default HomePage;

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
