// components/VoucherEntry.tsx

import React from 'react';

type VoucherEntryProps = {
  title: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onDisplay: () => void;
};

const VoucherEntry: React.FC<VoucherEntryProps> = ({
  title,
  onRegister,
  onEdit,
  onDelete,
  onDisplay,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {/* Title Section */}
      <div className="text-center text-xl font-bold mb-4">{title}</div>

      {/* Buttons Section */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white py-1 px-4 rounded"
          onClick={onRegister}
        >
          登録
        </button>
        <button
          className="bg-yellow-500 text-white py-1 px-4 rounded"
          onClick={onEdit}
        >
          訂正
        </button>
        <button
          className="bg-red-500 text-white py-1 px-4 rounded"
          onClick={onDelete}
        >
          削除
        </button>
      </div>

      {/* Search Fields */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <label className="flex-none w-20">伝票日付:</label>
          <input type="date" className="flex-grow border p-1 rounded" />
          <span>~</span>
          <input type="date" className="flex-grow border p-1 rounded" />
        </div>
        <div className="flex items-center space-x-2">
          <label className="flex-none w-20">伝票番号:</label>
          <input type="number" className="flex-grow border p-1 rounded" />
        </div>
      </div>

      {/* Display Button */}
      <div className="flex justify-center mb-4">
        <button
          className="bg-green-500 text-white py-1 px-8 rounded"
          onClick={onDisplay}
        >
          表示
        </button>
      </div>

      {/* Table Section */}
      <table className="w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-blue-200">
            <th className="border px-2 py-1">種別</th>
            <th className="border px-2 py-1">発生源</th>
            <th className="border px-2 py-1">伝票日付</th>
            <th className="border px-2 py-1">番号</th>
            <th className="border px-2 py-1">明細</th>
            <th className="border px-2 py-1">借方科目</th>
            <th className="border px-2 py-1">貸方科目</th>
            <th className="border px-2 py-1">本体金額</th>
            <th className="border px-2 py-1">税額</th>
            <th className="border px-2 py-1">摘要1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">支払</td>
            <td className="border px-2 py-1">支出決定</td>
            <td className="border px-2 py-1">2016/03/27</td>
            <td className="border px-2 py-1">451</td>
            <td className="border px-2 py-1">1</td>
            <td className="border px-2 py-1">〇〇事業費</td>
            <td className="border px-2 py-1">現金預金</td>
            <td className="border px-2 py-1">1,000,000</td>
            <td className="border px-2 py-1">0</td>
            <td className="border px-2 py-1">電子書籍購入費</td>
          </tr>
        </tbody>
      </table>

      {/* Footer Buttons */}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-gray-500 text-white py-1 px-4 rounded">OK</button>
        <button className="bg-gray-500 text-white py-1 px-4 rounded">クリア</button>
        <button className="bg-gray-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default VoucherEntry;
