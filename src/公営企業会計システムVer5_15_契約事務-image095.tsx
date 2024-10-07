import React from 'react';

// Propsの型定義
interface InputFormProps {
  yearLabel?: string;
  contentOptions?: string[];
  onYearChange?: (year: string) => void;
  onContentChange?: (content: string) => void;
  onDisplayClick?: () => void;
  onAddRowClick?: () => void;
  onDeleteRowClick?: () => void;
  onDataUpdateClick?: () => void;
  onClearClick?: () => void;
  onExitClick?: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  yearLabel = "令和04",
  contentOptions = [],
  onYearChange,
  onContentChange,
  onDisplayClick,
  onAddRowClick,
  onDeleteRowClick,
  onDataUpdateClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="p-4">
      <div className="border-b-2 border-gray-200 pb-4 mb-4 flex items-center">
        <label className="mr-2">{yearLabel}</label>
        <input
          type="text"
          className="border px-2 py-1 mr-4"
          onChange={(e) => onYearChange?.(e.target.value)}
        />
        <select
          className="border px-2 py-1 mr-4"
          onChange={(e) => onContentChange?.(e.target.value)}
        >
          {contentOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          className="bg-gray-300 px-4 py-1 rounded"
          onClick={onDisplayClick}
        >
          表示
        </button>
      </div>
      <div className="flex space-x-2 mb-4">
        <button
          className="bg-gray-200 px-4 py-1 rounded"
          onClick={onAddRowClick}
        >
          行追加
        </button>
        <button
          className="bg-gray-200 px-4 py-1 rounded"
          onClick={onDeleteRowClick}
        >
          行削除
        </button>
      </div>
      <div className="mb-4 text-gray-600">※一覧に直接書き込んで下さい。</div>
      <div className="flex space-x-2">
        <button
          className="bg-gray-200 px-4 py-1 rounded"
          onClick={onDataUpdateClick}
        >
          データ更新
        </button>
        <button
          className="bg-gray-200 px-4 py-1 rounded"
          onClick={onClearClick}
        >
          クリア
        </button>
        <button
          className="bg-gray-200 px-4 py-1 rounded"
          onClick={onExitClick}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default InputForm;
