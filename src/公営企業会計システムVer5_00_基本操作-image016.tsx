import React from 'react';

// Props interface for MainMenu component
interface MainMenuProps {
  systemName: string;
  mainTitle: string;
  accountingNotice: string;
  adminNotice: string;
  userName: string;
  onLogout: () => void;
}

// MainMenu component
const MainMenu: React.FC<MainMenuProps> = ({
  systemName,
  mainTitle,
  accountingNotice,
  adminNotice,
  userName,
  onLogout,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg">
      {/* System Name */}
      <div className="text-sm text-blue-800 mb-2">{systemName}</div>

      {/* Main Title */}
      <h1 className="text-3xl font-bold text-gray-300 mb-6">{mainTitle}</h1>

      {/* Top Menu Options */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300"
          onClick={onLogout}
        >
          ログアウト
        </button>
        <div className="text-right">
          <div>{userName}</div>
          <button className="bg-blue-200 text-blue-800 py-1 px-3 rounded hover:bg-blue-300 mt-2">
            接続切替
          </button>
        </div>
      </div>

      {/* Notices Section */}
      <div className="text-sm">
        <div className="border p-2 mb-2">
          <div>会計担当からお知らせ</div>
          <div>{accountingNotice}</div>
        </div>
        <div className="border p-2 mb-2">
          <div>管財課からのお知らせ</div>
          <div>{adminNotice}</div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-right mt-4">
        <button className="text-blue-600 hover:underline mr-2">さらに</button>
        <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300">
          共有
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
```