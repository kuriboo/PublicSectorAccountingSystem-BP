import { FC, useState } from "react";

type TreeNode = {
  id: number;
  name: string;
  children?: TreeNode[];
};

type TreeProps = {
  data: TreeNode[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};

const Tree: FC<TreeProps> = ({ data, onEdit, onDelete }) => {
  const renderTree = (nodes: TreeNode[]) => {
    return nodes.map((node) => (
      <li key={node.id} className="ml-4">
        <div className="flex items-center">
          <span className="mr-2">{node.name}</span>
          {onEdit && (
            <button
              onClick={() => onEdit(node.id)}
              className="text-blue-500 mx-1"
            >
              編集
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(node.id)}
              className="text-red-500 mx-1"
            >
              削除
            </button>
          )}
        </div>
        {node.children && (
          <ul className="ml-4 border-l border-gray-400 pl-4">
            {renderTree(node.children)}
          </ul>
        )}
      </li>
    ));
  };

  return <ul className="list-none">{renderTree(data)}</ul>;
};

const TreeComponent: FC = () => {
  const [data, setData] = useState<TreeNode[]>([
    {
      id: 1,
      name: "支払",
      children: [
        { id: 2, name: "202008負担データ" },
        { id: 3, name: "202009負担データ" },
      ],
    },
    { id: 4, name: "月例" },
  ]);

  const handleEdit = (id: number) => {
    console.log("Edit", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete", id);
  };

  return (
    <div className="border p-4">
      <div className="text-lg font-bold mb-4">お気に入りの編集</div>
      <Tree data={data} onEdit={handleEdit} onDelete={handleDelete} />
      <div className="mt-4 flex justify-end">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2">
          フォルダ追加
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
          OK
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TreeComponent;