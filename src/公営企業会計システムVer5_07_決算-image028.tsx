import React from 'react';

type FileSaveDialogProps = {
  currentPath: string;
  onSave: (fileName: string) => void;
  onCancel: () => void;
};

const FileSaveDialog: React.FC<FileSaveDialogProps> = ({
  currentPath,
  onSave,
  onCancel,
}) => {
  const [fileName, setFileName] = React.useState('MST_ZKMK.CSV');

  const handleSave = () => {
    onSave(fileName);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md w-full max-w-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          現在のパス:
        </label>
        <p className="text-sm text-gray-900">{currentPath}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="file-name" className="block text-sm font-medium text-gray-700 mb-2">
          ファイル名:
        </label>
        <input
          id="file-name"
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          キャンセル
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          保存
        </button>
      </div>
    </div>
  );
};

export default FileSaveDialog;
