// Import React and necessary libraries
import React from 'react';

// Define prop types for the component
interface WaterMasterProps {
  defaultCode?: string;
  defaultName?: string;
  data: { code: string; name: string }[];
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onClear: () => void;
}

// WaterMasterComponent definition
const WaterMasterComponent: React.FC<WaterMasterProps> = ({
  defaultCode = '',
  defaultName = '',
  data,
  onRegister,
  onEdit,
  onDelete,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-100 min-w-full">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">給排水マスタ</h1>
      
      {/* Radio buttons */}
      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" name="option" className="mr-1" /> 登録
        </label>
        <label className="mr-4">
          <input type="radio" name="option" className="mr-1" /> 訂正
        </label>
        <label>
          <input type="radio" name="option" className="mr-1" /> 削除
        </label>
      </div>
      
      {/* Input fields */}
      <div className="mb-4">
        <div className="mb-2">
          <label className="block">コード</label>
          <input type="text" value={defaultCode} className="border border-gray-300 p-2" />
        </div>
        <div>
          <label className="block">名称</label>
          <input type="text" value={defaultName} className="border border-gray-300 p-2" />
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex space-x-4 mb-4">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded">明細編集</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">行削除</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
      </div>
      
      {/* Data Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">コード</th>
            <th className="border-b p-2 text-left">名称</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.code}>
              <td className="border-b p-2">{item.code}</td>
              <td className="border-b p-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Footer buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onRegister} className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
      </div>
    </div>
  );
};

export default WaterMasterComponent;
```