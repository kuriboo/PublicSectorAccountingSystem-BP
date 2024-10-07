import React from 'react';

// 型定義
interface SearchComponentProps {
  fiscalYear: string;
  searchType: '予算' | '仕訳';
  categorySearchHandler: () => void;
  items: Array<{ code: string; content: string; summary1: string; summary2: string }>;
}

// コンポーネント定義
const SearchComponent: React.FC<SearchComponentProps> = ({
  fiscalYear,
  searchType,
  categorySearchHandler,
  items,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* 年度と予算/仕訳選択 */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="mr-2">平成{fiscalYear} 年度</span>
          <label className="inline-flex items-center">
            <input type="radio" checked={searchType === '予算'} readOnly className="form-radio" />
            <span className="ml-2">予算</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input type="radio" checked={searchType === '仕訳'} readOnly className="form-radio" />
            <span className="ml-2">仕訳</span>
          </label>
        </div>
      </div>

      {/* 项目検索ボタン */}
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={categorySearchHandler}
        >
          科目検索
        </button>
      </div>

      {/* テーブル */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2">仕訳コード</th>
              <th className="py-2">内容</th>
              <th className="py-2">摘要1</th>
              <th className="py-2">摘要2</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="text-center border-b">
                <td className="py-2">{item.code}</td>
                <td className="py-2">{item.content}</td>
                <td className="py-2">{item.summary1}</td>
                <td className="py-2">{item.summary2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-4">
        <button className="bg-gray-300 text-black px-4 py-2 rounded mr-2">
          OK
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
```