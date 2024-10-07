import React from 'react';

// Define the props type for the MainMenu component
type MainMenuProps = {
  title: string;
  notice: string;
  onLogout: () => void;
  onEnd: () => void;
  onPwChange: () => void;
  onSharedClick: () => void;
  onToolClick: () => void;
  onSetupClick: () => void;
};

const MainMenu: React.FC<MainMenuProps> = ({
  title,
  notice,
  onLogout,
  onEnd,
  onPwChange,
  onSharedClick,
  onToolClick,
  onSetupClick,
}) => {
  return (
    <div className="p-4">
      {/* Main menu title */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="space-x-2">
          {/* Buttons for user actions */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onLogout}>
            ログアウト
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onEnd}>
            終了
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onPwChange}>
            PW変更
          </button>
        </div>
      </header>

      {/* Notice section */}
      <section className="mb-4 p-2 border border-gray-300">
        <p>{notice}</p>
      </section>

      {/* Buttons for managing features */}
      <div className="flex space-x-4 mb-4">
        <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={onSharedClick}>
          共有
        </button>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded" onClick={onToolClick}>
          ツール
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onSetupClick}>
          セットアップ
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
```