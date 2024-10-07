import React from 'react';

interface CustomFormProps {
  assetNumber?: string;
  onSave?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const CustomForm: React.FC<CustomFormProps> = ({
  assetNumber = '8002200',
  onSave,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg font-semibold mb-4">自由設定内容マスタメンテ</h1>
      <div className="flex justify-start space-x-4 mb-6">
        <button onClick={onSave} className="px-4 py-2 bg-blue-500 text-white rounded">登録</button>
        <button onClick={onEdit} className="px-4 py-2 bg-blue-500 text-white rounded">訂正</button>
        <button onClick={onDelete} className="px-4 py-2 bg-blue-500 text-white rounded">削除</button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">資産番号:</label>
        <input type="text" value={assetNumber} className="w-full px-2 py-1 border rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block mb-2">自由設定項目コード:</label>
        <input type="text" className="w-full px-2 py-1 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">内容:</label>
        <input type="text" className="w-full px-2 py-1 border rounded" />
      </div>
      <button className="px-4 py-2 bg-gray-300 rounded">編集</button>
      <table className="min-w-full mt-4 border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1">自由設定項目コード</th>
            <th className="border border-gray-300 px-2 py-1">名称</th>
            <th className="border border-gray-300 px-2 py-1">内容</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="border border-gray-300 px-2 py-1">001 001</td>
            <td className="border border-gray-300 px-2 py-1">路線番号</td>
            <td className="border border-gray-300 px-2 py-1">路線番号1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CustomForm;