// Import necessary modules from React and Next.js
import React from 'react';

// Define types for the component props
type AssetManagementProps = {
  title?: string;
  rangeTitle?: string;
  buttonLabels?: {
    display: string;
    remove: string;
    ok: string;
    clear: string;
    finish: string;
  };
};

const AssetManagement: React.FC<AssetManagementProps> = ({
  title = "アセットマネジメント様式一括変換",
  rangeTitle = "範囲指定",
  buttonLabels = {
    display: "表示",
    remove: "対象外",
    ok: "OK",
    clear: "クリア",
    finish: "終了",
  },
}) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-md">
      {/* Title Section */}
      <div className="text-center p-4 bg-blue-200">
        <h1 className="text-lg">{title}</h1>
      </div>

      {/* Range Specification Section */}
      <div className="mt-4 border p-4">
        <h2 className="text-left font-bold mb-2">{rangeTitle}</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block">固定資産管理</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block">資産番号</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block">管理名称</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block">取得年月日</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
          </div>
        </form>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-around">
        <button className="bg-red-300 py-2 px-4 rounded">{buttonLabels.remove}</button>
        <button className="bg-gray-300 py-2 px-4 rounded">{buttonLabels.ok}</button>
        <button className="bg-gray-300 py-2 px-4 rounded">{buttonLabels.clear}</button>
        <button className="bg-gray-300 py-2 px-4 rounded">{buttonLabels.finish}</button>
      </div>

      {/* Table Section */}
      <div className="mt-6">
        <table className="min-w-full border">
          <thead className="bg-blue-200">
            <tr>
              <th className="border px-2 py-1">資産番号</th>
              <th className="border px-2 py-1">名称</th>
              <th className="border px-2 py-1">管理名称</th>
              <th className="border px-2 py-1">取得年月日</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">8026300</td>
              <td className="border px-2 py-1">リース資産</td>
              <td className="border px-2 py-1">その他</td>
              <td className="border px-2 py-1">平成29年08月12日</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">8002700</td>
              <td className="border px-2 py-1">行政中リース資産</td>
              <td className="border px-2 py-1">IP(A1)鋳鉄管</td>
              <td className="border px-2 py-1">平成30年08月31日</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetManagement;
```