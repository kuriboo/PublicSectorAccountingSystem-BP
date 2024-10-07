import React from 'react';

// TypeScript type definition for component props
interface FileDialogProps {
  ipAddress: string;
  fileName: string;
  onOpenFile: () => void;
  onSaveFile: () => void;
  onCancel: () => void;
}

// Reusable FileDialog component
const FileDialog: React.FC<FileDialogProps> = ({
  ipAddress,
  fileName,
  onOpenFile,
  onSaveFile,
  onCancel
}) => {
  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <p className="text-sm mb-3">{`${ipAddress} から ${fileName} を開くか、または保存しますか?`}</p>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onOpenFile}
        >
          ファイルを開く(O)
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={onSaveFile}
        >
          保存(S)
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          キャンセル(C)
        </button>
      </div>
    </div>
  );
};

export default FileDialog;
```