import React from 'react';
import 'tailwindcss/tailwind.css';

type Entry = {
  account: string;
  name: string;
  amount: string;
};

type Props = {
  entries: Entry[];
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetComponent: React.FC<Props> = ({ entries, onOk, onClear, onClose }) => {
  return (
    <div className="p-4 border rounded-lg bg-white">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4">予算特定収入額修正入力</h1>

      {/* Info Section */}
      <div className="mb-4">
        <p>会計年度: 令和03年度</p>
        <p>予算編成区分: 当初予算</p>
        <p>最終査定値: 査定額</p>
        <p>課税仕入財務割合: <input type="text" className="border-b w-16 text-center" />%</p>
      </div>

      {/* Entries Table */}
      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">予算科目</th>
            <th className="px-4 py-2">科目名</th>
            <th className="px-4 py-2">予算編成額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{entry.account}</td>
              <td className="px-4 py-2">{entry.name}</td>
              <td className="px-4 py-2">{entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onOk}>OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>終了</button>
      </div>
    </div>
  );
};

export default BudgetComponent;
