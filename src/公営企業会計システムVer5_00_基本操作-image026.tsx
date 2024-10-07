// components/ExpandableList.tsx

import React, { useState } from 'react';

// 定義するプロパティの型
interface ExpandableListProps {
  title: string;
  items: string[];
}

// コンポーネントの定義
const ExpandableList: React.FC<ExpandableListProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // リストの開閉を切り替える関数
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      {/* タイトル部分の表示 */}
      <div 
        className="cursor-pointer font-bold mb-2" 
        onClick={toggleOpen}
      >
        {isOpen ? '▼' : '▶'} {title}
      </div>
      {/* リストの表示 */}
      {isOpen && (
        <ul className="list-disc pl-6">
          {items.map((item, index) => (
            <li key={index} className="text-blue-600 hover:underline">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpandableList;

```tsx
// pages/index.tsx

import React from 'react';
import ExpandableList from '../components/ExpandableList';

// ツールダウンロードの情報
const toolItems = [
  'セットアップ',
  '予算編成',
  '決算',
  '決算統計',
  '固定資産',
  '契約事務',
];

// 操作マニュアルの情報
const manualItems = [
  '予算編成',
  '予算書',
  '予算消費税_01全般',
  '予算消費税_02機能',
  '支払',
  '調定収納',
  '日副',
  '決算',
  '決算・消費税_01全般',
  '決算・消費税_02機能',
  '決算・消費税_03計算整理',
  '決算統計_01全般',
  '決算統計_02機能',
  '固定資産',
];

const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <ExpandableList title="公営企業会計システム ツールダウンロード" items={toolItems} />
      <ExpandableList title="公営企業会計システム 操作マニュアルダウンロード" items={manualItems} />
    </div>
  );
};

export default HomePage;
