import React from 'react';

// 型定義
type AssetMasterProps = {
  constructionCode: string;
  description: string;
  items: Array<{ code: string; description: string }>;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

// コンポーネント定義
const AssetMaster: React.FC<AssetMasterProps> = ({
  constructionCode,
  description,
  items,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-5 bg-gray-100">
      <h2 className="text-lg font-bold">ユーザー固定資産名称マスタ</h2>
      
      {/* マスタ選択 */}
      <div className="my-4">
        <label htmlFor="masterSelect" className="block mb-2">マスタ選択</label>
        <select id="masterSelect" className="border p-2 w-full">
          <option value="構造内容マスタ">構造内容マスタ</option>
        </select>
      </div>
      
      {/* 入力フィールド */}
      <div className="my-4">
        <label htmlFor="constructionCode" className="block mb-2">構造内容コード</label>
        <input type="text" id="constructionCode" value={constructionCode} readOnly className="border p-2 w-full" />

        <label htmlFor="description" className="block mt-4 mb-2">内容</label>
        <input type="text" id="description" value={description} readOnly className="border p-2 w-full" />
      </div>
      
      {/* ボタン */}
      <div className="my-4">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">登録</button>
        <button onClick={onEdit} className="bg-blue-300 text-white px-4 py-2 mr-2 rounded">訂正</button>
        <button onClick={onDelete} className="bg-blue-300 text-white px-4 py-2 rounded">削除</button>
      </div>

      {/* テーブル */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-blue-500 text-white">
              <th className="p-2">構造内容コード</th>
              <th className="p-2">内容</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="text-center border-b">
                <td className="p-2">{item.code}</td>
                <td className="p-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetMaster;
```