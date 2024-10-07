// FileSelector.tsx
import React from 'react';

// TypeScriptの型定義
interface FileSelectorProps {
  directoryPath: string; // ディレクトリパス
  fileName: string; // ファイル名
  onSelect: (filePath: string) => void; // ファイル選択時のコールバック関数
}

const FileSelector: React.FC<FileSelectorProps> = ({ directoryPath, fileName, onSelect }) => {
  const handleSelect = () => {
    // 選択されたファイルパスをコールバック関数を通じて親コンポーネントに渡す
    onSelect(`${directoryPath}\\${fileName}`);
  };

  return (
    <div className="border p-4 rounded-md shadow-sm">
      <div className="text-sm font-bold mb-2">ディレクトリ: {directoryPath}</div>
      <div className="text-sm mb-4">ファイル名: {fileName}</div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleSelect}
      >
        ファイルを開く
      </button>
    </div>
  );
};

export default FileSelector;
```

注意: Tailwind CSSを使用するためには、プロジェクトにTailwind CSSのセットアップが必要です。