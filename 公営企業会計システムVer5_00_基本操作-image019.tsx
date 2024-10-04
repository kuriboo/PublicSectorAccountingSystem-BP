import React from 'react';

// Props type definition for the MainMenu component
interface MainMenuProps {
  title: string; // Title of the menu
  notice: string; // Notice to be displayed
  onLogout: () => void; // Logout button handler
  onExit: () => void; // Exit button handler
  onNoticeRegister: () => void; // Notice registration handler
  onPwChange: () => void; // Password change handler
  onShare: () => void; // Share button handler
  currentUser: string; // Current user's name
  department: string; // Department or section
  role: string; // User's role or position
}

// MainMenu component
const MainMenu: React.FC<MainMenuProps> = ({
  title,
  notice,
  onLogout,
  onExit,
  onNoticeRegister,
  onPwChange,
  onShare,
  currentUser,
  department,
  role,
}) => {
  return (
    <div className="flex flex-col w-full max-w-4xl p-4 bg-white border shadow-lg">
      {/* Title */}
      <h1 className="mb-4 text-3xl font-bold text-blue-800">{title}</h1>
      
      {/* User Info */}
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <span>{department}</span>
          <span className="font-bold">{role}</span>
          <span>{currentUser}</span>
        </div>
        <div className="flex flex-col space-y-2">
          <button onClick={onLogout} className="px-4 py-2 text-white bg-blue-600 rounded">ログアウト</button>
          <button onClick={onExit} className="px-4 py-2 text-white bg-blue-600 rounded">終了</button>
          <button onClick={onPwChange} className="px-4 py-2 text-blue-600 border rounded">PW変更</button>
          <button onClick={onNoticeRegister} className="px-4 py-2 text-blue-600 border rounded">お知らせ登録</button>
        </div>
      </div>

      {/* Notice */}
      <div className="p-4 mb-4 border">
        <p className="text-gray-800">{notice}</p>
      </div>

      {/* Share Button */}
      <button onClick={onShare} className="self-start px-4 py-2 text-blue-600 border rounded">
        共有
      </button>
    </div>
  );
};

export default MainMenu;