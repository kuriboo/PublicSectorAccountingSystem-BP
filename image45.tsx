```tsx
import React from 'react';

// Propsの型定義
type AlertDialogProps = {
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
};

// 再利用可能なコンポーネント
const AlertDialog: React.FC<AlertDialogProps> = ({ title, message, buttonText, onButtonClick }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
      <div className="bg-white rounded shadow-md w-1/3">
        <div className="bg-blue-500 text-white text-center py-2 rounded-t">
          {title}
        </div>
        <div className="flex items-center justify-center p-4">
          <span className="text-yellow-600 mr-3">&#9888;</span> {/* アラートアイコン */}
          <span>{message}</span>
        </div>
        <div className="flex justify-end p-2">
          <button 
            onClick={onButtonClick}
            className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;

// このコンポーネントの使用例
/*
<AlertDialog 
  title="公益企業会計パッケージ"
  message="正常に処理されました。"
  buttonText="OK"
  onButtonClick={() => alert('OK clicked')}
/>
*/
```