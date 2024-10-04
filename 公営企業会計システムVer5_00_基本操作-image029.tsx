```tsx
import React from 'react';

// Define types for the component props
type HeaderProps = {
  systemTitle: string;
  pageTitle: string;
  userName: string;
  date: string;
  onRegister?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  systemTitle,
  pageTitle,
  userName,
  date,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white border p-4 shadow-md">
      {/* System Title and User Info */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-lg font-bold">{systemTitle}</div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{userName}</span>
          <span className="text-sm">{date}</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-blue-200 p-2 rounded-md mb-3">
        <span className="text-md">{pageTitle}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onRegister}
        >
          登録
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={onEdit}
        >
          訂正
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onDelete}
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default Header;
```