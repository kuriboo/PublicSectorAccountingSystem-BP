```tsx
import React from 'react';

// プロパティの型定義
type FormProps = {
  year: string;
  budgetDivision: string;
  budgetOptions: string[];
  round: string;
  date: string;
  totalAmountType: string;
  title: string;
  subTitle: string;
  slimTitle: string;
  startPage: string;
  onFormSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetForm: React.FC<FormProps> = ({
  year,
  budgetDivision,
  budgetOptions,
  round,
  date,
  totalAmountType,
  title,
  subTitle,
  slimTitle,
  startPage,
  onFormSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-lg font-bold mb-4">予定貸借対照表作成</h2>
      
      {/* 自動仕訳情報セクション */}
      <div className="mb-4 border border-gray-300 p-2">
        <h3 className="font-semibold">自動仕訳情報</h3>
        <div className="flex items-center mb-2">
          <label className="w-24">年度:</label>
          <span>{year}</span>
        </div>
        <div className="flex items-center mb-2">
          <label className="w-24">予算編成区分:</label>
          <select className="border rounded" value={budgetDivision}>
            {budgetOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label className="w-24">回数:</label>
          <span>{round}</span>
        </div>
        <div className="flex items-center">
          <label className="w-24">金額種別:</label>
          <span>{totalAmountType}</span>
        </div>
      </div>

      {/* 作表日 */}
      <div className="mb-4">
        <label className="block mb-1">作表日:</label>
        <span>{date}</span>
      </div>

      {/* 書式セクション */}
      <div className="border border-gray-300 p-2">
        <h3 className="font-semibold mb-2">書式</h3>
        <div className="mb-2">
          <label className="block mb-1">サイズ:</label>
          <div>
            <label>
              <input type="radio" name="size" value="A4横" />
              A4横
            </label>
            <label className="ml-4">
              <input type="radio" name="size" value="A4縦" />
              A4縦
            </label>
          </div>
        </div>
        <div className="mb-2">
          <label>タイトル:</label>
          <input type="text" className="border rounded w-full" value={title} />
        </div>
        <div className="mb-2">
          <label>サブタイトル:</label>
          <input type="text" className="border rounded w-full" value={subTitle} />
        </div>
        <div className="mb-2">
          <label>査タイトル:</label>
          <input type="text" className="border rounded w-full" value={slimTitle} />
        </div>
        <div className="flex items-center mb-2">
          <label>ページ字:</label>
          <div className="ml-2">
            <label>
              <input type="radio" name="pageNumbering" />
              する
            </label>
            <label className="ml-4">
              <input type="radio" name="pageNumbering" />
              しない
            </label>
          </div>
        </div>
        <div className="flex items-center">
          <label>開始頁:</label>
          <input type="text" className="border rounded ml-2" value={startPage} />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2" onClick={onFormSubmit}>Excel出力</button>
        <button className="bg-green-500 text-white px-4 py-1 rounded mr-2" onClick={onFormSubmit}>OK</button>
        <button className="bg-yellow-500 text-white px-4 py-1 rounded mr-2" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```