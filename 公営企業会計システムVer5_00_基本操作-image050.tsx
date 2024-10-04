```tsx
import React from 'react';

type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[];
  checked?: boolean;
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
              checked={node.checked || false}
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

export default TreeView;
```

```tsx
import React, { useState } from 'react';
import TreeView from './TreeView';

const nodes = [
  {
    id: '0',
    label: '執行機能',
    children: [
      {
        id: '1',
        label: '月例',
        children: [
          { id: '2', label: '03_総勘定合計表前年同月比較(目)', checked: false },
          { id: '3', label: '04_総勘定合計表前年同月比較(節)', checked: false },
          // 追加のノードはここに記述
        ],
      },
      {
        id: '4',
        label: '支出',
        children: [
          { id: '5', label: '32_負担明細データ抽出', checked: false },
        ],
      },
      // 追加のノードはここに記述
    ],
  },
  // その他のノードも同様に追加可能
];

const TreeComponent = () => {
  const [stateNodes, setStateNodes] = useState(nodes);

  const handleCheck = (id: string, checked: boolean) => {
    const updateNodes = (nodes: TreeNode[]): TreeNode[] => {
      return nodes.map((node) => {
        if (node.id === id) {
          node.checked = checked;
        }
        if (node.children) {
          node.children = updateNodes(node.children);
        }
        return node;
      });
    };

    setStateNodes(updateNodes(stateNodes));
  };

  return <TreeView nodes={stateNodes} onCheck={handleCheck} />;
};

export default TreeComponent;
```