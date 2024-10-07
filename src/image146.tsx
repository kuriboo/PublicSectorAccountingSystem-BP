import React from 'react';

// Propsの型定義
type AssetSearchProps = {
  onConfirm: () => void;
  onOk: () => void;
  onClear: () => void;
  codeValue?: string;
  nameValue?: string;
};

const AssetSearch: React.FC<AssetSearchProps> = ({
  onConfirm,
  onOk,
  onClear,
  codeValue = '',
  nameValue = '',
}) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center mb-2">
             <label className="w-24">固定款</label>
             <input type="text" className="border p-1 flex-grow" defaultValue="051" />
             <span>固定資産</span>
          </div>  
          <div className="flex items-center mb-2">
            <label className="w-24">固定項</label>
            <input type="text" className="border p-1 flex-grow" defaultValue="01" />
            <span>有形固定資産</span>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-24">固定目</label>
            <input type="text" className="border p-1 flex-grow" defaultValue="01" />
            <span>土地</span>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-24">固定節</label>
            <input type="text" className="border p-1 flex-grow" defaultValue="01" />
            <span>土地</span>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-24">固定細節</label>
            <input type="text" className="border p-1 flex-grow" defaultValue="0001" />
            <span>土地</span>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-24">固定明細</label>
            <input type="text" className="border p-1 flex-grow" defaultValue="0001" />
            <span>土地</span>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-24">検索文字列</label>
            <input type="text" className="border p-1 flex-grow" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="mb-2">
            <span className="block mb-1">検索</span>
            {['款レベル', '項レベル', '目レベル', '節レベル', '細節レベル', '明細レベル'].map((level, index) => (
              <div key={index} className="flex items-center">
                <input type="radio" name="searchLevel" className="mr-2" defaultChecked={index === 5} />
                <span>{level}</span>
              </div>
            ))}
          </div>
          <button className="mt-auto bg-gray-200 p-2 rounded">表示</button>
        </div>
      </div>
      <table className="w-full border mt-4">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-2">コード</th>
            <th className="p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border p-2">{codeValue}</td>
            <td className="border p-2">{nameValue}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button onClick={onConfirm} className="bg-gray-300 px-4 py-2 rounded">
          確定
        </button>
        <div>
          <button onClick={onOk} className="bg-gray-300 px-4 py-2 rounded mr-2">
            OK
          </button>
          <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">
            クリア
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetSearch;
```