import React from 'react';

// プロパティの型定義
interface CustomComponentProps {
  title: string;
  yearLabel: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
}

// コンポーネント定義
const CustomComponent: React.FC<CustomComponentProps> = ({
  title,
  yearLabel,
  inputValue,
  onInputChange,
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* ヘッダー */}
      <div className="bg-blue-900 text-white text-lg p-4 rounded-t-lg">
        {title}
      </div>
      {/* メインコンテンツ */}
      <div className="bg-white px-8 py-16 border rounded-b-lg shadow-lg mt-2">
        <h2 className="text-lg font-bold text-blue-900 mb-4">範囲指定</h2>
        <div className="border p-4">
          {/* 年度入力 */}
          <label className="text-blue-900 font-bold mr-2">
            {yearLabel}
          </label>
          <input
            type="text"
            className="border rounded px-2 py-1"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
          />
        </div>
        <div className="mt-8 flex space-x-4">
          {/* ボタン */}
          <button
            className="bg-blue-900 text-white font-bold py-2 px-4 rounded"
            onClick={onOkClick}
          >
            OK
          </button>
          <button
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
            onClick={onClearClick}
          >
            クリア
          </button>
          <button
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={onExitClick}
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
```