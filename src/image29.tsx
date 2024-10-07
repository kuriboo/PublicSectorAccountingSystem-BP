import React from 'react';

// TypeScriptの型定義
interface MenuButtonProps {
  label: string;
  onClick: () => void;
}

// ボタンコンポーネント
const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 mb-2 text-sm text-left bg-white border border-gray-300 rounded hover:bg-blue-200"
    >
      {label}
    </button>
  );
};

// TypeScriptの型定義
interface SideMenuProps {
  menuItems: { label: string; onClick: () => void }[];
}

// サイドメニューコンポーネント
const SideMenu: React.FC<SideMenuProps> = ({ menuItems }) => {
  return (
    <div className="w-48 p-4 bg-gray-100 border-r border-gray-300">
      {menuItems.map((item, index) => (
        <MenuButton key={index} label={item.label} onClick={item.onClick} />
      ))}
    </div>
  );
};

// TypeScriptの型定義
interface MainPageProps {
  contentTitle: string;
  menuItems: { label: string; onClick: () => void }[];
}

// メインページコンポーネント
const MainPage: React.FC<MainPageProps> = ({ contentTitle, menuItems }) => {
  return (
    <div className="flex">
      <SideMenu menuItems={menuItems} />
      <div className="flex-1 p-8">
        <h1 className="mb-8 text-xl font-bold">{contentTitle}</h1>
        <div className="p-4 bg-gray-50 border border-gray-300 rounded">
          {/* メインコンテンツをここに追加します */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;