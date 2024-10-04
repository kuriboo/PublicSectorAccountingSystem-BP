```tsx
import React from 'react';

type MainMenuProps = {
  title?: string;
  accountingNotice?: string;
  managementNotice?: string;
  onLogout?: () => void;
  onConnectionToggle?: () => void;
  onPwChange?: () => void;
  onShare?: () => void;
  onTools?: () => void;
  onFaq?: () => void;
};

const MainMenu: React.FC<MainMenuProps> = ({
  title = "メインメニュー",
  accountingNotice = "今月の会計締処理は〇日（△）となります。伝票提出漏れがないようよろしくお願いいたします。",
  managementNotice = "電気設備点検を、以下の日程で実施いたします。\n9月2日（土）本庁舎 3日（日）を予備日とします。",
  onLogout,
  onConnectionToggle,
  onPwChange,
  onShare,
  onTools,
  onFaq,
}) => {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="bg-gray-200 p-4 mb-4">
        <h2 className="font-semibold">会計担当からお知らせ</h2>
        <p>{accountingNotice}</p>
      </div>
      <div className="bg-gray-200 p-4 mb-4">
        <h2 className="font-semibold">管財課からのお知らせ</h2>
        <p>{managementNotice}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={onLogout} className="bg-blue-500 text-white py-1 px-3 rounded">
          ログアウト
        </button>
        <button onClick={onConnectionToggle} className="bg-blue-500 text-white py-1 px-3 rounded">
          接続切替
        </button>
        <button onClick={onPwChange} className="bg-blue-500 text-white py-1 px-3 rounded">
          PW変更
        </button>
        <button onClick={onShare} className="bg-blue-500 text-white py-1 px-3 rounded">
          共有
        </button>
        <button onClick={onTools} className="bg-blue-500 text-white py-1 px-3 rounded">
          ツール
        </button>
        <button onClick={onFaq} className="bg-blue-500 text-white py-1 px-3 rounded">
          FAQ
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
```