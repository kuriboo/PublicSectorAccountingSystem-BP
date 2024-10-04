```tsx
import React from 'react';

// TypeScriptの型定義
interface MenuItem {
  name: string;
  onClick: () => void;
}

interface SideMenuProps {
  items: MenuItem[];
}

interface ContentProps {
  title: string;
  children: React.ReactNode;
}

// サイドメニューコンポーネント
const SideMenu: React.FC<SideMenuProps> = ({ items }) => {
  return (
    <div className="bg-white border-r-2 border-gray-200 w-48">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button
              className="w-full text-left py-2 px-4 hover:bg-blue-100"
              onClick={item.onClick}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// コンテンツ表示コンポーネント
const Content: React.FC<ContentProps> = ({ title, children }) => {
  return (
    <div className="flex-grow p-8">
      <h2 className="text-xl mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

// メインコンポーネント
const MainPage: React.FC = () => {
  const menuItems = [
    { name: '総括処理', onClick: () => alert('総括処理') },
    { name: '予算修正処理', onClick: () => alert('予算修正処理') },
    { name: '消費税関連', onClick: () => alert('消費税関連') },
    // 他のアイテムを追加可能
  ];

  return (
    <div className="flex">
      <SideMenu items={menuItems} />
      <Content title="消費税関連業務作成処理">
        <div className="flex space-x-4">
          <div className="bg-blue-200 p-4">法定税計算税額</div>
          <div className="bg-purple-200 p-4">月次・年次消費税計算書</div>
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          <div className="bg-pink-200 p-4">法定税控除データ入力</div>
          <div className="bg-pink-200 p-4">賃料整理税額実績入力</div>
          <div className="bg-pink-200 p-4">将監事業入力伝票入力</div>
        </div>
      </Content>
    </div>
  );
};

export default MainPage;
```