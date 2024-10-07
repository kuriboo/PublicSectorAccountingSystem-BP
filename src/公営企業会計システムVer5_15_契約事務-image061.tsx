import React from 'react';

type DocumentProps = {
  id: string;
  documentName: string;
  outputPosition: number;
  selectedText: number;
  onEdit: () => void;
  onDelete: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  text: string;
};

const DocumentComponent: React.FC<DocumentProps> = ({
  id,
  documentName,
  outputPosition,
  selectedText,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
  text,
}) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center bg-purple-200 p-2 rounded">
        <h1 className="text-lg font-bold">文章マスタ保守</h1>
        <p>{documentName}システム</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">画面ID</label>
          <input
            type="text"
            value={id}
            readOnly
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">契約執行個</label>
          <input
            type="text"
            value={outputPosition}
            readOnly
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">出力位置</label>
          <input
            type="text"
            value={outputPosition}
            readOnly
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">選択文章</label>
          <input
            type="text"
            value={selectedText}
            readOnly
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onEdit}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          明細編集
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-700"
        >
          行削除
        </button>
      </div>
      <div className="bg-blue-600 text-white p-2 rounded mt-4">
        <p>{text}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onConfirm}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-700"
        >
          行確定
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default DocumentComponent;
