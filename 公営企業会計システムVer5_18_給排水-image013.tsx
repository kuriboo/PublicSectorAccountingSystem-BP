import React from 'react';

type TableRow = {
  code: string;
  category: string;
  accountCode: string;
  subAccountCode: string;
  name: string;
  subName: string;
};

type DetailedAccountComponentProps = {
  year?: string;
  category: string;
  division: string;
  account: string;
  subAccount: string;
  subName: string;
  rows: TableRow[];
  onSearch: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const DetailedAccountComponent: React.FC<DetailedAccountComponentProps> = ({
  year = "平成30",
  category,
  division,
  account,
  subAccount,
  subName,
  rows,
  onSearch,
  onEdit,
  onDelete,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">仕訳明細性質</h1>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="mr-2">会計年度:</span>
          <span className="mr-2">{year}年度</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">仕訳性質区分:</span>
          <span className="mr-2">{category}</span>
        </div>
        <div className="mb-2">
          <label>仕訳節:</label>
          <input type="text" value={division} readOnly className="ml-2 p-1 border" />
        </div>
        <div className="mb-2">
          <label>仕訳細節:</label>
          <input type="text" value={account} readOnly className="ml-2 p-1 border" />
        </div>
        <div className="mb-2">
          <label>仕訳明細:</label>
          <input type="text" value={subAccount} readOnly className="ml-2 p-1 border" />
          <input type="text" value={subName} readOnly className="ml-2 p-1 border" />
        </div>
        <button onClick={onSearch} className="px-4 py-2 bg-blue-500 text-white">科目検索</button>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">コード</th>
            <th className="border p-2">仕訳性質区分</th>
            <th className="border p-2">仕訳節コード</th>
            <th className="border p-2">仕訳細節略名</th>
            <th className="border p-2">仕訳明細コード</th>
            <th className="border p-2">仕訳明細略名</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border p-2">{row.code}</td>
              <td className="border p-2">{row.category}</td>
              <td className="border p-2">{row.accountCode}</td>
              <td className="border p-2">{row.subAccountCode}</td>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2">{row.subName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex space-x-2">
        <button onClick={onEdit} className="px-4 py-2 bg-green-500 text-white">編集</button>
        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white">行削除</button>
      </div>

      <div className="mt-4 flex justify-between">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white">終了</button>
      </div>
    </div>
  );
};

export default DetailedAccountComponent;