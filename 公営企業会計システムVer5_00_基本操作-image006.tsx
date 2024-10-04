```tsx
import React from 'react';

// 型定義
type MainMenuProps = {
  title: string;
  logoutLabel: string;
  exitLabel: string;
  notifications: string;
  onLogout: () => void;
  onExit: () => void;
};

// コンポーネント
const MainMenu: React.FC<MainMenuProps> = ({
  title,
  logoutLabel,
  exitLabel,
  notifications,
  onLogout,
  onExit,
}) => {
  return (
    <div className="p-4 border bg-gray-200">
      {/* メインメニュータイトル */}
      <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
      <div className="flex space-x-4 my-4">
        {/* ログアウトボタン */}
        <button
          onClick={onLogout}
          className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
        >
          {logoutLabel}
        </button>
        {/* 終了ボタン */}
        <button
          onClick={onExit}
          className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
        >
          {exitLabel}
        </button>
      </div>
      {/* お知らせ */}
      <div className="border-t mt-4 pt-4">
        <h2 className="font-semibold">会計担当からお知らせ</h2>
        <p>{notifications}</p>
      </div>
    </div>
  );
};

export default MainMenu;
```

注意: このコードは使用例を必要としないため、コンポーネントの実装部分のみ提供しています。適切なプロパティを渡す例は別途作成してください。