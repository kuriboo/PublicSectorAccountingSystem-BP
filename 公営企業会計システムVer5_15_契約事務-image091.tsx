```tsx
import React from 'react';

// Propsの型定義
type ProcessingComponentProps = {
  title: string;
  subTitle: string;
  date: string;
  onConfirm: () => void;
  onClear: () => void;
  onEnd: () => void;
};

// コンポーネント定義
const ProcessingComponent: React.FC<ProcessingComponentProps> = ({
  title,
  subTitle,
  date,
  onConfirm,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* ヘッダー部 */}
      <header className="bg-blue-200 p-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{subTitle}</p>
        <p className="text-sm text-right">{date}</p>
      </header>

      {/* メッセージ部 */}
      <div className="bg-white p-4 mt-4 rounded shadow">
        <p>本処理はデータ件数によって時間を要します。</p>
        <p>処理中はシステムを停止せずにお待ちください。</p>
      </div>

      {/* 操作部 */}
      <div className="flex flex-col items-start mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded mt-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded mt-2"
          onClick={onEnd}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ProcessingComponent;
```