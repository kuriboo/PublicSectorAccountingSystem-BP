import React from 'react';

// 振替コードの型定義
type TransferCode = {
  code: string;
  name: string;
  fullName: string;
};

// プロパティの型定義
type TransferCodeSearchProps = {
  year: string;
  projectNumber: number;
  projectType: string;
  category: string;
  subCategory: string;
  smallCategory: string;
  transferCodes: TransferCode[];
  onSearch: () => void;
  onConfirm: () => void;
  onClear: () => void;
};

// コンポーネントの定義
const TransferCodeSearch: React.FC<TransferCodeSearchProps> = ({
  year,
  projectNumber,
  projectType,
  category,
  subCategory,
  smallCategory,
  transferCodes,
  onSearch,
  onConfirm,
  onClear
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg mb-4">振替コード検索</h2>
      <div className="mb-4">
        <label className="block font-semibold">年度</label>
        <span>{year}</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block font-semibold">事業</label>
          <span>{projectNumber}</span>
        </div>
        <div>
          <label className="block font-semibold">事業区分</label>
          <input type="text" value={projectType} readOnly className="border p-1 w-full" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block font-semibold">大分類</label>
          <input type="text" value={category} readOnly className="border p-1 w-full" />
        </div>
        <div>
          <label className="block font-semibold">中分類</label>
          <input type="text" value={subCategory} readOnly className="border p-1 w-full" />
        </div>
        <div>
          <label className="block font-semibold">小分類</label>
          <input type="text" value={smallCategory} readOnly className="border p-1 w-full" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">検索文字列</label>
        <input type="text" className="border p-1 w-full" />
      </div>
      <div className="mb-4">
        <button className="border px-4 py-2 mr-2" onClick={onSearch}>検索</button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">振替コード</th>
            <th className="border px-4 py-2">振替略名</th>
            <th className="border px-4 py-2">振替正式名</th>
          </tr>
        </thead>
        <tbody>
          {transferCodes.map((transferCode) => (
            <tr key={transferCode.code}>
              <td className="border px-4 py-2">{transferCode.code}</td>
              <td className="border px-4 py-2">{transferCode.name}</td>
              <td className="border px-4 py-2">{transferCode.fullName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button className="border px-4 py-2 mr-2" onClick={onConfirm}>OK</button>
        <button className="border px-4 py-2 mr-2" onClick={onClear}>クリア</button>
      </div>
    </div>
  );
};

export default TransferCodeSearch;
