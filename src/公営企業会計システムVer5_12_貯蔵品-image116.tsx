// Import necessary modules
import React from 'react';

type ProductSearchProps = {
  categoryCode?: string;
  subCategoryCode?: string;
  minorCategoryCode?: string;
  level: '大分類レベル' | '中分類レベル' | '小分類レベル';
  onSubmit: () => void;
  onDisplay: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ProductSearch: React.FC<ProductSearchProps> = ({
  categoryCode = '',
  subCategoryCode = '',
  minorCategoryCode = '',
  level,
  onSubmit,
  onDisplay,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 border rounded shadow-lg">
      {/* Product Category Search Form */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <label className="w-24">品番大分類</label>
          <input type="text" defaultValue={categoryCode} className="flex-1 border p-1" />
          <span className="ml-2">大分類テスト1</span>
        </div>
        <div className="flex items-center">
          <label className="w-24">品番中分類</label>
          <input type="text" defaultValue={subCategoryCode} className="flex-1 border p-1" />
          <span className="ml-2">中分類テスト1</span>
        </div>
        <div className="flex items-center">
          <label className="w-24">品番小分類</label>
          <input type="text" defaultValue={minorCategoryCode} className="flex-1 border p-1" />
          <span className="ml-2">小分類テスト1</span>
        </div>
        <div className="flex items-center">
          <label className="w-24">品番分類名称</label>
          <input type="text" className="flex-1 border p-1" />
        </div>
      </div>

      {/* Level Selection */}
      <div className="mt-4 flex items-center space-x-2">
        {['大分類レベル', '中分類レベル', '小分類レベル'].map((lvl) => (
          <label key={lvl} className="flex items-center">
            <input type="radio" name="level" checked={level === lvl} readOnly />
            <span className="ml-1">{lvl}</span>
          </label>
        ))}
        <button className="ml-auto bg-gray-200 px-4 py-1 rounded" onClick={onDisplay}>表示</button>
      </div>

      {/* Result Table */}
      <div className="mt-4 border rounded overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600">
            <tr>
              <th className="text-left p-2 text-white">分類コード</th>
              <th className="text-left p-2 text-white">分類名称</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="p-2">001 001 001</td>
              <td className="p-2">小分類テスト1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-between">
        <button className="bg-gray-200 px-4 py-1 rounded" onClick={onSubmit}>確定</button>
        <div>
          <button className="bg-gray-200 px-4 py-1 mx-1 rounded" onClick={onClear}>クリア</button>
          <button className="bg-gray-200 px-4 py-1 rounded" onClick={onExit}>終了</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
