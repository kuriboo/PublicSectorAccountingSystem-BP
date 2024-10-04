```tsx
// components/MainMenu.tsx
import React from 'react';

type MainMenuProps = {
  title: string;
  notice: string;
  onLogout: () => void;
  onEnd: () => void;
  onPwChange: () => void;
  onNoticeRegister: () => void;
  userName: string;
  companyName: string;
  position: string;
};

const MainMenu: React.FC<MainMenuProps> = ({
  title,
  notice,
  onLogout,
  onEnd,
  onPwChange,
  onNoticeRegister,
  userName,
  companyName,
  position,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">{companyName}</div>
        <div className="flex space-x-2">
          <button onClick={onLogout} className="p-2 bg-gray-300 rounded">ログアウト</button>
          <button onClick={onEnd} className="p-2 bg-gray-300 rounded">終了</button>
        </div>
      </div>
      
      <h1 className="text-4xl font-extrabold mt-4 mb-2 text-blue-700">{title}</h1>
      
      <div className="border-t border-gray-400 pt-2 mt-4">
        <p className="text-sm text-gray-800">{notice}</p>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm">{position}</span>
          <span className="font-bold">{userName}</span>
        </div>
        <button onClick={onPwChange} className="p-2 bg-gray-300 rounded">PW変更</button>
      </div>

      <button onClick={onNoticeRegister} className="mt-4 p-2 bg-blue-500 text-white rounded">お知らせ登録</button>
    </div>
  );
};

export default MainMenu;
```