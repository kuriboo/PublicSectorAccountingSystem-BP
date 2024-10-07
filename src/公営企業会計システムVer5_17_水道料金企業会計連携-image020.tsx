// Import necessary modules and libraries
import React from 'react';

// Define the type for the component props
type MenuButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

// Button component
const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-gray-300 rounded shadow ${className}`}
  >
    {label}
  </button>
);

// Define the type for the main component props
type DashboardProps = {
  onMenuItemClick: (label: string) => void;
};

// Main component
const Dashboard: React.FC<DashboardProps> = ({ onMenuItemClick }) => {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl font-bold">月次処理メニュー</h1>
      <div className="flex flex-col mt-4">
        <MenuButton
          label="バーコード読取"
          onClick={() => onMenuItemClick('バーコード読取')}
          className="mb-2"
        />
        <MenuButton
          label="入金データ更新"
          onClick={() => onMenuItemClick('入金データ更新')}
          className="mb-2"
        />
        <MenuButton
          label="コンビニデータ入金処理"
          onClick={() => onMenuItemClick('コンビニデータ入金処理')}
          className="mb-2"
        />
        <MenuButton
          label="コンビニ収納データリスト"
          onClick={() => onMenuItemClick('コンビニ収納データリスト')}
          className="mb-2"
        />
        <MenuButton
          label="仮収納一括入力"
          onClick={() => onMenuItemClick('仮収納一括入力')}
          className="mb-2"
        />
        <MenuButton
          label="前受金振替充当一覧表"
          onClick={() => onMenuItemClick('前受金振替充当一覧表')}
          className="mb-2"
        />
        <MenuButton
          label="書促手数料削除"
          onClick={() => onMenuItemClick('書促手数料削除')}
          className="mb-2"
        />
        <MenuButton
          label="会計連携データ出力"
          onClick={() => onMenuItemClick('会計連携データ出力')}
          className="mb-2"
        />
      </div>
      <div className="flex mt-4">
        <MenuButton
          label="ポータル"
          onClick={() => onMenuItemClick('ポータル')}
          className="mr-4"
        />
        <MenuButton
          label="ログアウト"
          onClick={() => onMenuItemClick('ログアウト')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
```