import React from 'react';

type DenshiShokaiProps = {
  startDate: string;
  endDate: string;
  minAmount: number;
  maxAmount: number;
  showDetails: () => void;
  showHistory: () => void;
  executeReissue: () => void;
};

const DenshiShokai: React.FC<DenshiShokaiProps> = ({
  startDate,
  endDate,
  minAmount,
  maxAmount,
  showDetails,
  showHistory,
  executeReissue,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">伝票照会</h2>
      
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <label className="block font-medium">
            起案日:
            <input type="date" value={startDate} className="ml-2 px-2 py-1 border" />
          </label>
          <span>〜</span>
          <input type="date" value={endDate} className="px-2 py-1 border" />
        </div>
      </div>

      <div className="mb-4 flex items-center space-x-4">
        <label className="block font-medium">
          税込金額:
          <input type="number" value={minAmount} className="ml-2 px-2 py-1 border" placeholder="0" />
        </label>
        <span>〜</span>
        <input type="number" value={maxAmount} className="px-2 py-1 border" placeholder="9,999,999" />
      </div>

      <div className="flex space-x-4 mb-4">
        <button onClick={showDetails} className="bg-blue-500 text-white px-4 py-2 rounded-lg">詳細</button>
        <button onClick={showHistory} className="bg-gray-500 text-white px-4 py-2 rounded-lg">履歴</button>
        <button onClick={executeReissue} className="bg-green-500 text-white px-4 py-2 rounded-lg">再発行</button>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">起案日</th>
            <th className="px-4 py-2">区分</th>
            <th className="px-4 py-2">種別</th>
            <th className="px-4 py-2">伝票</th>
            <th className="px-4 py-2">金額</th>
            <th className="px-4 py-2">相手先</th>
            <th className="px-4 py-2">予算科目 (代表)</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data row */}
          <tr>
            <td className="border px-4 py-2">05/04</td>
            <td className="border px-4 py-2">個別調定</td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">129,700</td>
            <td className="border px-4 py-2">土岐鉄</td>
            <td className="border px-4 py-2">賃貸料</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-4">
        <p>件数: 191 割合金額: 13,791,770円</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">クリア</button>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">終了</button>
      </div>
    </div>
  );
};

export default DenshiShokai;
