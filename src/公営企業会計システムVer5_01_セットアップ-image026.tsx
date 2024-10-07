import React from 'react';

// 型定義
type BudgetMasterProps = {
  fiscalYear: string;
  compositionDivision: string;
  compositionSections: {
    section: string;
    subsection: string;
    detail: string;
  };
  items: Array<{
    code: string;
    content: string;
    ratio: string;
  }>;
  onSearch: () => void;
  onEdit: () => void;
  onPrev: () => void;
  onNext: () => void;
  onClear: () => void;
  onFinish: () => void;
};

// コンポーネント
const BudgetMaster: React.FC<BudgetMasterProps> = ({
  fiscalYear,
  compositionDivision,
  compositionSections,
  items,
  onSearch,
  onEdit,
  onPrev,
  onNext,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="text-lg font-bold text-indigo-600 mb-4">予算仕訳マスタ</div>
      <div className="flex mb-4 items-center">
        <label className="mr-2">年度:</label>
        <input type="text" value={fiscalYear} readOnly className="mr-4 p-2 border" />
        <label className="mr-2">予算編成区分:</label>
        <input type="text" value={compositionDivision} readOnly className="p-2 border" />
      </div>
      <div className="flex mb-4 items-center">
        <label className="mr-2">節:</label>
        <input type="text" value={compositionSections.section} readOnly className="mr-4 p-2 border" />
        <label className="mr-2">細節:</label>
        <input type="text" value={compositionSections.subsection} readOnly className="mr-4 p-2 border" />
        <label className="mr-2">明細:</label>
        <input type="text" value={compositionSections.detail} readOnly className="p-2 border" />
      </div>
      <button onClick={onSearch} className="mb-4 bg-blue-500 text-white p-2 rounded">科目検索</button>
      <div className="bg-gray-200 p-2 rounded mb-4">
        <button onClick={onEdit} className="bg-gray-300 text-black p-2 rounded mb-2">編集</button>
        <span className="ml-2">※構成比合計が100%の場合、「残り全て」の仕訳コードを1件設定して下さい。</span>
      </div>
      <table className="w-full mb-4 border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2">仕訳コード</th>
            <th className="p-2">仕訳内容</th>
            <th className="p-2">構成比</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              <td className="p-2">{item.code}</td>
              <td className="p-2">{item.content}</td>
              <td className="p-2">{item.ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <button onClick={onPrev} className="bg-gray-300 text-black py-2 px-4 rounded">前データ</button>
        <button onClick={onNext} className="bg-gray-300 text-black py-2 px-4 rounded">次データ</button>
        <button onClick={onClear} className="bg-yellow-500 text-white py-2 px-4 rounded">クリア</button>
        <button onClick={onFinish} className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetMaster;