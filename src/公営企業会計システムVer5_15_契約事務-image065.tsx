import React from 'react'

// TypeScriptの型定義
type DocumentEditorProps = {
  screenId: string;
  screenTitle: string;
  outputPosition: number;
  selectedText: number;
  mainText: string;
  onDetailEdit: () => void;
  onDeleteRow: () => void;
  onConfirmRow: () => void;
  onCancelRow: () => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const DocumentEditor: React.FC<DocumentEditorProps> = ({
  screenId,
  screenTitle,
  outputPosition,
  selectedText,
  mainText,
  onDetailEdit,
  onDeleteRow,
  onConfirmRow,
  onCancelRow,
  onOk,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center bg-purple-200 p-2 rounded">
        <h2 className="text-lg font-bold">{screenTitle}</h2>
        <span className="text-gray-500">画面ID: {screenId}</span>
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">出力位置</label>
          <input type="number" value={outputPosition} readOnly className="border p-1" />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">選択文字</label>
          <input type="number" value={selectedText} readOnly className="border p-1" />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={onDetailEdit} className="bg-gray-300 p-2 rounded">明細編集</button>
        <button onClick={onDeleteRow} className="bg-gray-300 p-2 rounded">行削除</button>
      </div>
      <div className="mt-4 bg-blue-100 p-2 rounded">
        <p>{mainText}</p>
      </div>
      <div className="mt-4">
        <label>文章</label>
        <div className="flex items-center mt-2">
          <input type="text" readOnly className="flex-1 border p-2" />
          <button onClick={onConfirmRow} className="bg-gray-300 p-1 ml-2 rounded">行確定</button>
          <button onClick={onCancelRow} className="bg-gray-300 p-1 ml-2 rounded">行キャンセル</button>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onOk} className="bg-gray-300 p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 p-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-gray-300 p-2 rounded">終了</button>
      </div>
    </div>
  );
}

export default DocumentEditor;
```