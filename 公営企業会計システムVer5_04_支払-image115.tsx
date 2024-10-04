```tsx
import React from 'react';

// TypeScriptの型定義
interface AlertBoxProps {
  title: string; // アラートのタイトル
  message: string; // アラートのメッセージ
  onOk: () => void; // OKボタンがクリックされたときのコールバック
}

// 再利用可能なAlertBoxコンポーネント
const AlertBox: React.FC<AlertBoxProps> = ({ title, message, onOk }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg w-80">
        {/* タイトル表示 */}
        <div className="mb-2 text-lg font-bold">{title}</div>
        {/* メッセージ表示 */}
        <div className="mb-4 text-md">{message}</div>
        {/* OKボタン */}
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
```