```tsx
import React from 'react';

// Props type definition
interface CustomContentMasterProps {
  assetNumber?: string;
  freeCode?: string;
  content?: string;
  tableData?: Array<{ code: string; name: string; content: string }>;
  onRegister?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onPrevData?: () => void;
  onNextData?: () => void;
  onClear?: () => void;
  onOk?: () => void;
  onEnd?: () => void;
}

const CustomContentMaster: React.FC<CustomContentMasterProps> = ({
  assetNumber = '',
  freeCode = '',
  content = '',
  tableData = [],
  onRegister,
  onEdit,
  onDelete,
  onPrevData,
  onNextData,
  onClear,
  onOk,
  onEnd,
}) => {
  return (
    <div className="p-4 shadow-md bg-white">
      {/* Header */}
      <div className="text-lg font-bold p-2 text-blue-700">自由設定内容マスタメンテ</div>

      {/* Form Inputs */}
      <div className="flex flex-col space-y-4 mb-4">
        <div>
          <label className="text-gray-700">資産番号</label>
          <input type="text" value={assetNumber} readOnly className="ml-2 px-2 py-1 border rounded-md"/>
        </div>
        <div>
          <label className="text-gray-700">自由設定項目コード</label>
          <input type="text" value={freeCode} className="ml-2 px-2 py-1 border rounded-md"/>
        </div>
        <div>
          <label className="text-gray-700">内容</label>
          <input type="text" value={content} className="ml-2 px-2 py-1 border rounded-md w-full"/>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 mb-4">
        <button onClick={onRegister} className="px-4 py-1 bg-blue-500 text-white rounded-md">登録</button>
        <button onClick={onEdit} className="px-4 py-1 bg-blue-500 text-white rounded-md">訂正</button>
        <button onClick={onDelete} className="px-4 py-1 bg-blue-500 text-white rounded-md">削除</button>
        <button onClick={onPrevData} className="px-4 py-1 bg-gray-300 rounded-md">前データ</button>
        <button onClick={onNextData} className="px-4 py-1 bg-gray-300 rounded-md">次データ</button>
      </div>

      {/* Table */}
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left bg-blue-700 text-white">
            <th className="px-4 py-2">自由設定項目コード</th>
            <th className="px-4 py-2">名称</th>
            <th className="px-4 py-2">内容</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="px-4 py-2 border">{row.code}</td>
              <td className="px-4 py-2 border">{row.name}</td>
              <td className="px-4 py-2 border">{row.content}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Buttons */}
      <div className="mt-4 flex space-x-2">
        <button onClick={onClear} className="px-4 py-1 bg-gray-300 rounded-md">クリア</button>
        <button onClick={onOk} className="px-4 py-1 bg-blue-500 text-white rounded-md">OK</button>
        <button onClick={onEnd} className="px-4 py-1 bg-red-500 text-white rounded-md">終了</button>
      </div>
    </div>
  );
};

export default CustomContentMaster;
```