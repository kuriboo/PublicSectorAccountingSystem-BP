import React from 'react';

type MasterType = {
  code: string;
  name: string;
};

type AssetMasterProps = {
  items: MasterType[];
  onSelect: (code: string) => void;
};

const AssetMaster: React.FC<AssetMasterProps> = ({ items, onSelect }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">システム固定資産名称マスタ</h2>
      
      {/* Master Type Selection */}
      <div className="border-b border-gray-300 mb-4 pb-4">
        <h3 className="font-semibold mb-2">マスタ種別</h3>
        <div className="flex space-x-4">
          {['異動区分マスタ', '減価償却区分マスタ', '予測入力区分マスタ'].map((type) => (
            <label className="inline-flex items-center" key={type}>
              <input type="radio" name="masterType" className="form-radio" />
              <span className="ml-2">{type}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Input Section */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="w-32">異動区分コード</label>
          <input type="text" className="form-input w-full" />
        </div>
        <div className="flex items-center">
          <label className="w-32">名称</label>
          <input type="text" className="form-input w-full" />
        </div>
      </div>
      
      {/* Data Table */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-300 p-2">異動区分コード</th>
            <th className="border border-gray-300 p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr 
              key={item.code} 
              className="hover:bg-gray-200 cursor-pointer" 
              onClick={() => onSelect(item.code)}
            >
              <td className="border border-gray-300 p-2 text-center">{item.code}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetMaster;
```