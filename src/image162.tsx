import React from 'react';

type DocumentEditorProps = {
  imageId: string;
  position: number;
  text: string;
  onEdit: () => void;
  onDelete: () => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const DocumentEditor: React.FC<DocumentEditorProps> = ({
  imageId,
  position,
  text,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">文章マスタ保守</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">画面ID</button>
        <input
          type="text"
          value={imageId}
          readOnly
          className="border-b border-gray-300"
        />
        <label className="col-span-1 flex items-center">
          出力位置
          <input
            type="number"
            value={position}
            readOnly
            className="border-b border-gray-300 ml-2"
          />
        </label>
        <div className="col-span-1 flex justify-end">
          <button onClick={onEdit} className="px-4 py-2 bg-gray-300 rounded mr-2">
            明細編集
          </button>
          <button onClick={onDelete} className="px-4 py-2 bg-pink-500 text-white rounded">
            行削除
          </button>
        </div>
      </div>
      <table className="w-full table-fixed mb-4">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="w-1/12">#</th>
            <th className="w-11/12">文章</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="border border-gray-300 px-2 py-1 text-center">1</td>
            <td className="border border-gray-300 px-2 py-1">{text}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center mb-4">
        <label className="w-1/12">文章</label>
        <input type="text" value={text} readOnly className="w-11/12 ml-2 border-b border-gray-300" />
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onConfirm} className="px-4 py-2 bg-gray-300 rounded">
          行確定
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
          行キャンセル
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded">OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded">終了</button>
      </div>
    </div>
  );
};

export default DocumentEditor;
