```tsx
import React from 'react';

// コンポーネントのプロパティの型定義
interface NotificationProps {
  ipAddress: string;
  fileName: string;
  onOpen: () => void;
  onSave: () => void;
  onCancel: () => void;
}

// 再利用可能な通知コンポーネント
const Notification: React.FC<NotificationProps> = ({
  ipAddress,
  fileName,
  onOpen,
  onSave,
  onCancel,
}) => {
  return (
    <div className="border bg-gray-100 p-2 flex justify-between items-center rounded">
      <span>
        {ipAddress} から <strong>{fileName}</strong> を開くか、または保存しますか?
      </span>
      <div className="flex space-x-2">
        <button
          onClick={onOpen}
          className="bg-white border rounded px-2 py-1 hover:bg-gray-200"
        >
          ファイルを開く(O)
        </button>
        <button
          onClick={onSave}
          className="bg-white border rounded px-2 py-1 hover:bg-gray-200"
        >
          保存(S)
        </button>
        <button
          onClick={onCancel}
          className="bg-white border rounded px-2 py-1 hover:bg-gray-200"
        >
          キャンセル(C)
        </button>
      </div>
    </div>
  );
};

export default Notification;
```