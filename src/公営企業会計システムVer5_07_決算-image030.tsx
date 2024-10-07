import React from 'react';

type ElementMasterProps = {
  elementCode: string;
  elementName: string;
  unit: string;
  year: string;
  onEdit: () => void;
  onDelete: () => void;
  onRegister: () => void;
};

const ElementMaster: React.FC<ElementMasterProps> = ({
  elementCode,
  elementName,
  unit,
  year,
  onEdit,
  onDelete,
  onRegister,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      {/* Title */}
      <h1 className="text-xl font-bold">要素マスタ保守</h1>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">要素コード</label>
          <input
            type="text"
            value={elementCode}
            className="mt-1 p-2 block w-full shadow-sm border border-gray-300 rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">要素名</label>
          <input
            type="text"
            value={elementName}
            className="mt-1 p-2 block w-full shadow-sm border border-gray-300 rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">単位</label>
          <input
            type="text"
            value={unit}
            className="mt-1 p-2 block w-full shadow-sm border border-gray-300 rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">年度</label>
          <input
            type="text"
            value={year}
            className="mt-1 p-2 block w-full shadow-sm border border-gray-300 rounded"
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={onRegister}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          登録
        </button>
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          訂正
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          削除
        </button>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">演算子</th>
              <th className="border p-2">コード</th>
              <th className="border p-2">集計科目</th>
              <th className="border p-2">期区分コード</th>
              <th className="border p-2">期区分名称</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">&nbsp;</td>
              <td className="border p-2">002010843</td>
              <td className="border p-2">固定資産除却費</td>
              <td className="border p-2">1</td>
              <td className="border p-2">緑越</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Buttons */}
      <div className="flex space-x-2 mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ElementMaster;
