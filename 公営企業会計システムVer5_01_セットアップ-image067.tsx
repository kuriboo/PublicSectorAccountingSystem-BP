```tsx
import React from 'react';

type DataEntry = {
  code: string;
  name: string;
};

type Props = {
  year: string;
  mainCode: string;
  mainName: string;
  budgetSection: string;
  budgetCategory: string;
  budgetDetail: string;
  dataEntries: DataEntry[];
  onMainCodeSearch: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ContractListComponent: React.FC<Props> = ({
  year,
  mainCode,
  mainName,
  budgetSection,
  budgetCategory,
  budgetDetail,
  dataEntries,
  onMainCodeSearch,
  onEdit,
  onDelete,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <div className="mb-4 text-lg font-bold">重要契約一覧表出力用マスタ</div>
      <div className="flex items-center mb-4">
        <div className="mr-4">年度: {year}</div>
        <div className="mr-4">
          <input
            type="text"
            value={mainCode}
            className="border rounded mr-2 p-1"
            readOnly
          />
          <input
            type="text"
            value={mainName}
            className="border rounded p-1"
            readOnly
          />
        </div>
        <button className="mr-2 bg-blue-500 text-white p-2 rounded" onClick={onMainCodeSearch}>
          科目検索
        </button>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <div>予算部門: {budgetSection}</div>
          <div>予算細目: {budgetCategory}</div>
          <div>予算明細: {budgetDetail}</div>
        </div>
      </div>
      <div className="mb-4">
        <button className="bg-green-500 text-white p-2 rounded mr-2" onClick={onEdit}>
          編集
        </button>
        <button className="bg-red-500 text-white p-2 rounded" onClick={onDelete}>
          行削除
        </button>
      </div>
      <table className="w-full mb-4 border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2">科目コード</th>
            <th className="p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {dataEntries.map((entry, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{entry.code}</td>
              <td className="p-2">{entry.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="bg-gray-500 text-white p-2 rounded mr-2" onClick={onSubmit}>
          確定
        </button>
        <button className="bg-gray-500 text-white p-2 rounded mr-2" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-500 text-white p-2 rounded" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default ContractListComponent;
```