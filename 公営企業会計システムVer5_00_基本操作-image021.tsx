```tsx
import React from 'react';

interface MainMenuProps {
  title: string;
  accountingNotice: string;
  adminNotice: string;
  onLogout: () => void;
  onEnd: () => void;
  onRegisterNotice: () => void;
  onChangePassword: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({
  title,
  accountingNotice,
  adminNotice,
  onLogout,
  onEnd,
  onRegisterNotice,
  onChangePassword,
}) => {
  return (
    <div className="p-4">
      <div className="text-4xl font-bold text-blue-600 mb-4">{title}</div>
      <div className="mb-4">
        <h2 className="font-bold">会計担当からお知らせ</h2>
        <p>{accountingNotice}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">管財課からのお知らせ</h2>
        <p>{adminNotice}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={onLogout} className="bg-gray-200 px-4 py-2 rounded-md">
          ログアウト
        </button>
        <button onClick={onEnd} className="bg-gray-200 px-4 py-2 rounded-md">
          終了
        </button>
        <button onClick={onRegisterNotice} className="bg-gray-200 px-4 py-2 rounded-md">
          お知らせ登録
        </button>
        <button onClick={onChangePassword} className="bg-gray-200 px-4 py-2 rounded-md">
          PW変更
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
```