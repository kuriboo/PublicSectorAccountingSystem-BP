import React, { useState, useCallback } from 'react';

type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[];
  checked: boolean;
};

type TreeViewProps = {
  nodes: TreeNode[];
  onCheck: (id: string, checked: boolean) => void;
};

const TreeView: React.FC<TreeViewProps> = ({ nodes, onCheck }) => {
  const renderTree = (nodes: TreeNode[]) => (
    <ul className="ml-4">
      {nodes.map((node) => (
        <li key={node.id} className="flex flex-col">
          <div>
            <input
              type="checkbox"
              checked={node.checked}
              onChange={(e) => onCheck(node.id, e.target.checked)}
              className="mr-2"
            />
            {node.label}
          </div>
          {node.children && renderTree(node.children)}
        </li>
      ))}
    </ul>
  );

  return <div className="treeview">{renderTree(nodes)}</div>;
};

const initialNodes: TreeNode[] = [
  {
    id: '0',
    label: '執行機能',
    checked: false,
    children: [
      {
        id: '1',
        label: '月例',
        checked: false,
        children: [
          { id: '2', label: '03_総勘定合計表前年同月比較(目)', checked: false },
          { id: '3', label: '04_総勘定合計表前年同月比較(節)', checked: false },
        ],
      },
      {
        id: '4',
        label: '支出',
        checked: false,
        children: [
          { id: '5', label: '32_負担明細データ抽出', checked: false },
        ],
      },
    ],
  },
];

const TreeComponent: React.FC = () => {
  const [stateNodes, setStateNodes] = useState<TreeNode[]>(initialNodes);

  const updateNodes = useCallback((nodes: TreeNode[], id: string, checked: boolean): TreeNode[] => {
    return nodes.map(node => {
      if (node.id === id) {
        return { ...node, checked };
      }
      if (node.children) {
        return { ...node, children: updateNodes(node.children, id, checked) };
      }
      return node;
    });
  }, []);

  const handleCheck = useCallback((id: string, checked: boolean) => {
    setStateNodes(prevNodes => updateNodes(prevNodes, id, checked));
  }, [updateNodes]);

  return <TreeView nodes={stateNodes} onCheck={handleCheck} />;
};

export default TreeComponent;
