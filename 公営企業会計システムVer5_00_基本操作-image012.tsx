```tsx
import React from 'react';

// TypeScriptの型定義
interface MainMenuProps {
  systemName: string;
  userName: string;
  role: string;
  onLogout: () => void;
  onEnd: () => void;
  onConnectToggle: () => void;
  onChangePassword: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({
  systemName,
  userName,
  role,
  onLogout,
  onEnd,
  onConnectToggle,
  onChangePassword,
}) => {
  return (
    <div className="p-4 border-b-2">
      {/* ヘッダー */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">{systemName}</div>
        <div className="flex space-x-2">
          {/* 各ボタン */}
          <button onClick={onLogout} className="px-4 py-2 bg-gray-200 rounded-md shadow">
            ログアウト
          </button>
          <button onClick={onEnd} className="px-4 py-2 bg-gray-200 rounded-md shadow">
            終了
          </button>
        </div>
      </div>

      {/* サブヘッダー */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex space-x-1 items-center">
          <span className="font-bold">{userName}</span>
          <span>{role}</span>
        </div>
        <div className="flex space-x-2">
          <button onClick={onConnectToggle} className="px-4 py-2 bg-gray-200 rounded-md shadow">
            接続切替
          </button>
          <button onClick={onChangePassword} className="px-4 py-2 bg-gray-200 rounded-md shadow">
            PW変更
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
```