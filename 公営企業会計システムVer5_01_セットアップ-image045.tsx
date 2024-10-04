import React from 'react';

// 型定義
interface Block {
  id: number;
  name: string;
}

interface BlockTableProps {
  blocks: Block[];
  onAdd: (block: Block) => void;
  onEdit: (block: Block) => void;
  onDelete: (blockId: number) => void;
}

const BlockTable: React.FC<BlockTableProps> = ({ blocks, onAdd, onEdit, onDelete }) => {
  return (
    <div className="p-4">
      {/* フォーム */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="ブロックID"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="名称"
          className="border p-2"
        />
        <div className="ml-4">
          <button className="bg-blue-500 text-white py-1 px-2 ml-2" onClick={() => { /* onAdd を呼ぶ */ }}>
            登録
          </button>
          <button className="bg-blue-500 text-white py-1 px-2 ml-2" onClick={() => { /* onEdit を呼ぶ */ }}>
            修正
          </button>
          <button className="bg-blue-500 text-white py-1 px-2 ml-2" onClick={() => { /* onDelete を呼ぶ */ }}>
            削除
          </button>
        </div>
      </div>

      {/* テーブル */}
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border-b">ブロック</th>
            <th className="border-b">名称</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map(block => (
            <tr key={block.id}>
              <td className="border-b p-2">{block.id}</td>
              <td className="border-b p-2">{block.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex justify-end mt-4">
        <button className="bg-gray-300 py-1 px-4 mr-2">OK</button>
        <button className="bg-gray-300 py-1 px-4 mr-2">クリア</button>
        <button className="bg-gray-300 py-1 px-4">終了</button>
      </div>
    </div>
  );
}

export default BlockTable;