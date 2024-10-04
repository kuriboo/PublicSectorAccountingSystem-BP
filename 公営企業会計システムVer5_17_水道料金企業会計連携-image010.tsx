```tsx
import React from 'react';

type ZoneData = {
  districtCode: string;
  districtName: string;
  businessZoneCode: string;
  businessZoneName: string;
};

type ZoneTableProps = {
  data: ZoneData[];
  onAddClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
  onOkClick: () => void;
  onCancelClick: () => void;
};

const ZoneTable: React.FC<ZoneTableProps> = ({
  data,
  onAddClick,
  onEditClick,
  onDeleteClick,
  onOkClick,
  onCancelClick,
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={onEditClick}
          className="bg-gray-300 rounded px-4 py-2"
        >
          編集
        </button>
        <button
          onClick={onAddClick}
          className="bg-gray-300 rounded px-4 py-2"
        >
          追加
        </button>
        <button
          onClick={onDeleteClick}
          className="bg-gray-300 rounded px-4 py-2"
        >
          削除
        </button>
      </div>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">地区CD</th>
            <th className="border px-4 py-2">地区名称</th>
            <th className="border px-4 py-2">事業区分CD</th>
            <th className="border px-4 py-2">事業区分名称</th>
          </tr>
        </thead>
        <tbody>
          {data.map((zone, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{zone.districtCode}</td>
              <td className="border px-4 py-2">{zone.districtName}</td>
              <td className="border px-4 py-2">{zone.businessZoneCode}</td>
              <td className="border px-4 py-2">{zone.businessZoneName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex space-x-4">
        <button
          onClick={onOkClick}
          className="bg-gray-300 rounded px-4 py-2"
        >
          OK
        </button>
        <button
          onClick={onCancelClick}
          className="bg-gray-300 rounded px-4 py-2"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ZoneTable;
```