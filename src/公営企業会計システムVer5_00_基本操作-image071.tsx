import React from 'react';

// TypeScript types for props
interface FileSaveDialogProps {
  initialFolderPath: string;
  fileName: string;
  fileType: string;
  onSave: (path: string) => void;
  onCancel: () => void;
}

// Reusable component for File Save Dialog
const FileSaveDialog: React.FC<FileSaveDialogProps> = ({
  initialFolderPath,
  fileName,
  fileType,
  onSave,
  onCancel,
}) => {
  return (
    <div className="flex flex-col w-1/2 border shadow-lg rounded-lg overflow-hidden bg-white">
      <div className="flex items-center justify-between bg-blue-500 p-2">
        <span className="text-white">Export</span>
        <button onClick={onCancel} className="text-white">
          ✕
        </button>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex mb-2 text-sm">
          <span>{initialFolderPath}</span>
        </div>
        <div className="mb-2 flex-grow border border-gray-300 rounded-md p-2">
          {/* Placeholder for file list */}
          <span className="text-gray-500">検索条件に一致する項目はありません。</span>
        </div>
        <div className="flex justify-between mb-2">
          <label className="flex flex-col">
            <span className="text-sm">ファイル名(N):</span>
            <input 
              type="text" 
              value={fileName} 
              className="border border-gray-300 rounded-md p-1" 
              readOnly
            />
          </label>
          <label className="flex flex-col ml-4">
            <span className="text-sm">ファイルの種類(T):</span>
            <input 
              type="text" 
              value={fileType} 
              className="border border-gray-300 rounded-md p-1" 
              readOnly
            />
          </label>
        </div>
        <div className="flex justify-end space-x-2">
          <button 
            onClick={() => onSave(initialFolderPath)} 
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            保存(S)
          </button>
          <button 
            onClick={onCancel} 
            className="px-4 py-2 bg-gray-300 text-black rounded-md"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileSaveDialog;
