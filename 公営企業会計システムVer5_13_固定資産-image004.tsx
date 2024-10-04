```tsx
import React from 'react';

// TypeScriptの型定義
type CustomItemEditorProps = {
  titleOptions: { id: string; name: string }[]; // タイトルの選択肢
  content: string; // 初期内容
  onTitleChange: (selectedTitleId: string) => void; // タイトル変更時のハンドラ
  onContentChange: (newContent: string) => void; // 内容変更時のハンドラ
  onConfirm: () => void; // 確定ボタン押下時のハンドラ
  onCancel: () => void; // キャンセルボタン押下時のハンドラ
};

const CustomItemEditor: React.FC<CustomItemEditorProps> = ({
  titleOptions,
  content,
  onTitleChange,
  onContentChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">タイトル</label>
        <select
          className="mt-1 w-full border border-gray-300 rounded px-2 py-1"
          onChange={(e) => onTitleChange(e.target.value)}
        >
          {titleOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">内容</label>
        <input
          type="text"
          value={content}
          className="mt-1 w-full border border-gray-300 rounded px-2 py-1"
          onChange={(e) => onContentChange(e.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          確定
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CustomItemEditor;
```