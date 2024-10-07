import React from 'react';

// 型定義
type BudgetInputProps = {
  title?: string;
  date?: string;
  year?: string;
  flowNumber?: string;
  description?: string;
  decreaseItems?: BudgetItem[];
  increaseItems?: BudgetItem[];
};

type BudgetItem = {
  section: string;
  subsection: string;
  detail: string;
  budgetBelonging: string;
  amount: number;
  budgetRemaining: number;
};

// コンポーネント
const BudgetInput: React.FC<BudgetInputProps> = ({
  title = "予算流用戻し入力",
  date = "平成29年08月04日",
  year = "平成29",
  flowNumber = "6",
  description = "新規導入機材稼動の為",
  decreaseItems = [
    {
      section: "原浄・委託料",
      subsection: "分析測定業務委託",
      detail: "分析測定業務委託",
      budgetBelonging: "水運用センター",
      amount: 30000,
      budgetRemaining: 208824544,
    },
  ],
  increaseItems = [
    {
      section: "原浄・委託料",
      subsection: "施設管理業務委託",
      detail: "施設管理業務委託",
      budgetBelonging: "総務課",
      amount: 30000,
      budgetRemaining: -30000,
    },
  ],
}) => {

  // アイテムを表示する関数
  const renderItems = (items: BudgetItem[]) => (
    items.map((item, index) => (
      <tr key={index} className="border-b">
        <td className="px-4 py-2">{item.section}</td>
        <td className="px-4 py-2">{item.subsection}</td>
        <td className="px-4 py-2">{item.detail}</td>
        <td className="px-4 py-2">{item.budgetBelonging}</td>
        <td className="px-4 py-2">{item.amount.toLocaleString()}</td>
        <td className="px-4 py-2">{item.budgetRemaining.toLocaleString()}</td>
      </tr>
    ))
  );

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-2">{title}</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2">流用戻し日:</span>
        <span className="mr-4">{date}</span>
        <span className="mr-2">年度:</span>
        <span className="mr-4">{year}</span>
        <span className="mr-2">流用戻し番号:</span>
        <span>{flowNumber}</span>
      </div>
      <div>
        <span className="mr-2">摘要:</span>
        <input 
          type="text" 
          value={description}
          className="border px-2 py-1 w-full"
          readOnly
        />
      </div>
      <div className="mt-4">
        <h2 className="font-semibold mb-2">減額科目</h2>
        <table className="w-full table-auto mb-4 border">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-2">節</th>
              <th className="px-4 py-2">細節</th>
              <th className="px-4 py-2">明細</th>
              <th className="px-4 py-2">予算所属</th>
              <th className="px-4 py-2">金額</th>
              <th className="px-4 py-2">予算残額</th>
            </tr>
          </thead>
          <tbody>
            {renderItems(decreaseItems)}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="font-semibold mb-2">増額科目</h2>
        <table className="w-full table-auto border">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-2">節</th>
              <th className="px-4 py-2">細節</th>
              <th className="px-4 py-2">明細</th>
              <th className="px-4 py-2">予算所属</th>
              <th className="px-4 py-2">金額</th>
              <th className="px-4 py-2">予算残額</th>
            </tr>
          </thead>
          <tbody>
            {renderItems(increaseItems)}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2">OK</button>
        <button className="bg-gray-300 px-4 py-2 mr-2">クリア</button>
        <button className="bg-gray-300 px-4 py-2">終了</button>
      </div>
    </div>
  );
};

export default BudgetInput;
```