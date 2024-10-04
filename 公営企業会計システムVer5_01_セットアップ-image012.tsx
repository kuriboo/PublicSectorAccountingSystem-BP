// Types.ts
export interface BudgetSectionProps {
  fiscalYear: string;
  code: number;
  times: number;
  name: string;
  taxApplicableDate: string;
}

// BudgetMaster.tsx
import React from 'react';
import { BudgetSectionProps } from './Types';

interface BudgetMasterProps {
  sections: BudgetSectionProps[];
}

const BudgetMaster: React.FC<BudgetMasterProps> = ({ sections }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold text-purple-800 mb-4">予算編成マスタ</h1>
      
      <div className="bg-white p-4 rounded shadow mb-6">
        {/* Search Form */}
        <div className="flex space-x-4 mb-4">
          <input type="text" placeholder="年度" className="border p-2" />
          <input type="text" placeholder="予算編成区分コード" className="border p-2" />
          <input type="text" placeholder="名称" className="flex-grow border p-2" />
          <input type="text" placeholder="消費税適用年月日" className="border p-2" />
        </div>

        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">登録</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">訂正</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">削除</button>
        </div>
      </div>

      {/* Table */}
      <table className="table-auto w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-purple-200">
            <th className="px-4 py-2 border">予算編成区分コード</th>
            <th className="px-4 py-2 border">回数</th>
            <th className="px-4 py-2 border">名称</th>
            <th className="px-4 py-2 border">消費税適用年月日</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => (
            <tr key={index} className="even:bg-gray-100 odd:bg-white">
              <td className="px-4 py-2 border">{section.code}</td>
              <td className="px-4 py-2 border">{section.times}</td>
              <td className="px-4 py-2 border">{section.name}</td>
              <td className="px-4 py-2 border">{section.taxApplicableDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Footer Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-gray-500 text-white py-2 px-4 rounded">OK</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded">クリア</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetMaster;