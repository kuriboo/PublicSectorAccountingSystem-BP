import React from 'react';

// コンポーネントのプロパティの型定義
type MenuProps = {
  title: string;
  items: string[];
  onSelect: (item: string) => void;
};

// メニューコンポーネント
const Menu: React.FC<MenuProps> = ({ title, items, onSelect }) => {
  return (
    <div className="border p-4">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:bg-blue-100"
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

type WorkflowProps = {
  steps: { label: string; color: string }[];
};

// ワークフローダイアグラムコンポーネント
const WorkflowDiagram: React.FC<WorkflowProps> = ({ steps }) => {
  return (
    <div className="p-4 flex space-x-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`px-4 py-2 ${step.color} text-white rounded-full`}
        >
          {step.label}
        </div>
      ))}
    </div>
  );
};

// メインコンポーネント
const ContractSystem: React.FC = () => {
  const menuItems = [
    "業者情報取込準備処理",
    "業者情報取込更新処理",
    // 他のメニュー項目をここに追加
  ];

  const steps = [
    { label: "CSV連携 データ取得 マスタ保存", color: "bg-green-400" },
    { label: "業者情報取込準備処理", color: "bg-orange-400" },
    { label: "CSV連携 一時格納保守", color: "bg-green-400" },
    { label: "業者情報取込更新処理", color: "bg-purple-400" },
  ];

  const handleSelect = (item: string) => {
    console.log(`Selected menu item: ${item}`);
  };

  return (
    <div className="p-8">
      <div className="mb-4">
        <Menu title="契約事務" items={menuItems} onSelect={handleSelect} />
      </div>
      <WorkflowDiagram steps={steps} />
    </div>
  );
};

export default ContractSystem;
```