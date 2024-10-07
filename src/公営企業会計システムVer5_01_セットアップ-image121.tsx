import React from "react";

// TypeScript types for the properties
interface UnitMasterProps {
  unitCode: string;
  unitName: string;
  abbreviation: string;
  onRegister: () => void;
  onUpdate: () => void;
  onDelete: () => void;
  unitList: Array<{ code: string; name: string; abbreviation: string }>;
}

const UnitMaster: React.FC<UnitMasterProps> = ({
  unitCode,
  unitName,
  abbreviation,
  onRegister,
  onUpdate,
  onDelete,
  unitList,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">単価名称マスタ</h1>
      <div className="mb-4">
        <div>
          <label className="block">単価名称コード</label>
          <input
            className="border p-2 w-full"
            type="text"
            value={unitCode}
            readOnly
          />
        </div>
        <div>
          <label className="block">単価名称</label>
          <input className="border p-2 w-full" type="text" value={unitName} />
        </div>
        <div>
          <label className="block">略名</label>
          <input className="border p-2 w-full" type="text" value={abbreviation} />
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-blue-500 text-white py-2 px-4" onClick={onRegister}>
            登録
          </button>
          <button className="bg-yellow-500 text-white py-2 px-4" onClick={onUpdate}>
            訂正
          </button>
          <button className="bg-red-500 text-white py-2 px-4" onClick={onDelete}>
            削除
          </button>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2">単価名称コード</th>
              <th className="w-1/2 py-2">名称</th>
              <th className="w-1/4 py-2">略称</th>
            </tr>
          </thead>
          <tbody>
            {unitList.map((unit, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{unit.code}</td>
                <td className="px-4 py-2">{unit.name}</td>
                <td className="px-4 py-2">{unit.abbreviation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnitMaster;
```