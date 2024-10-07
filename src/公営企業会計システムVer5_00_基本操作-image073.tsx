import React from 'react';

// Props type definition
type MenuButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'highlight';
};

const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick, variant = 'default' }) => {
  const baseStyle = 'px-4 py-2 rounded shadow-md';
  const variantStyle = variant === 'highlight' ? 'bg-red-500 text-white' : 'bg-gray-200';

  return (
    <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
      {label}
    </button>
  );
};

type MainMenuProps = {
  announcements: string[];
  onButtonClick: (label: string) => void;
};

const MainMenu: React.FC<MainMenuProps> = ({ announcements, onButtonClick }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg">
      <h1 className="text-2xl font-bold mb-4">メインメニュー</h1>
      <div className="mb-4">
        {announcements.map((announcement, index) => (
          <p key={index} className="mb-2 text-gray-700">
            {announcement}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuButton label="支払" onClick={() => onButtonClick('支払')} />
        <MenuButton label="調定・収納" onClick={() => onButtonClick('調定・収納')} />
        <MenuButton label="月例" onClick={() => onButtonClick('月例')} />
        <MenuButton label="予算編成" onClick={() => onButtonClick('予算編成')} />
        <MenuButton label="予算書" onClick={() => onButtonClick('予算書')} />
        <MenuButton label="繰越予算" onClick={() => onButtonClick('繰越予算')} />
        <MenuButton label="決算" onClick={() => onButtonClick('決算')} />
        <MenuButton label="決算統計" onClick={() => onButtonClick('決算統計')} />
        <MenuButton label="セットアップ" onClick={() => onButtonClick('セットアップ')} variant="highlight" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <MenuButton label="固定資産" onClick={() => onButtonClick('固定資産')} />
        <MenuButton label="貯蔵品" onClick={() => onButtonClick('貯蔵品')} />
        <MenuButton label="契約事務" onClick={() => onButtonClick('契約事務')} />
        <MenuButton label="給排水受付" onClick={() => onButtonClick('給排水受付')} />
        <MenuButton label="工事管理" onClick={() => onButtonClick('工事管理')} />
        <MenuButton label="企業債管理" onClick={() => onButtonClick('企業債管理')} />
        <MenuButton label="継続費" onClick={() => onButtonClick('継続費')} />
      </div>
    </div>
  );
};

export default MainMenu;