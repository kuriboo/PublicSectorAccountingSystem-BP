```tsx
import React from 'react';

// TypeScriptの型定義
interface DownloadDialogProps {
  fileName: string;
  onOpen: () => void;
  onSave: () => void;
  onCancel: () => void;
}

const DownloadDialog: React.FC<DownloadDialogProps> = ({
  fileName,
  onOpen,
  onSave,
  onCancel,
}) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded shadow-md w-80">
      <div className="mb-4">
        <span className="font-bold">{`"${fileName}"で行う操作を選んでください。`}</span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onOpen}
          className="bg-white text-black py-1 px-3 rounded hover:bg-gray-100"
        >
          ファイルを開く
        </button>
        <button
          onClick={onSave}
          className="bg-white text-black py-1 px-3 rounded hover:bg-gray-100"
        >
          保存
        </button>
        <button
          onClick={onCancel}
          className="bg-white text-black py-1 px-3 rounded hover:bg-gray-100"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DownloadDialog;
```