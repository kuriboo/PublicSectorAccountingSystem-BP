// Import necessary libraries
import React from 'react';

// TypeScript type definition for props
type IncomeSettingProps = {
  startDate: string;
  endDate: string;
  budgetType: string;
  segment: string;
  budgetCode: string;
  subjectName: string;
  revenueAmount: number;
  noTaxRevenueAmount: number;
  onSearch: () => void;
  onEdit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Creating a functional component using React
const IncomeSetting: React.FC<IncomeSettingProps> = ({
  startDate,
  endDate,
  budgetType,
  segment,
  budgetCode,
  subjectName,
  revenueAmount,
  noTaxRevenueAmount,
  onSearch,
  onEdit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-center text-lg font-bold mb-4">特定収入充当表収入項目設定</h1>
      
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">課税期間</label>
          <input type="text" value={startDate} readOnly className="mr-2 p-1 border rounded"/>
          <span>~</span>
          <input type="text" value={endDate} readOnly className="ml-2 p-1 border rounded"/>
        </div>

        <div className="flex items-center mb-2">
          <label className="mr-2">予算区分</label>
          <input type="text" value={budgetType} readOnly className="mr-4 p-1 border rounded"/>
          <label className="mr-2">セグメント</label>
          <input type="text" value={segment} readOnly className="p-1 border rounded"/>
        </div>

        <button onClick={onSearch} className="py-1 px-4 bg-blue-500 text-white rounded">表示</button>
      </div>

      <div className="border-t border-b py-2 mb-4">
        <div className="flex justify-between">
          <span>予算区分: {budgetType}</span>
          <span>セグメント: {segment}</span>
        </div>
        <div className="flex justify-between">
          <span>予算科目: {budgetCode}</span>
          <span>科目名: {subjectName}</span>
        </div>
        <div className="flex justify-between">
          <span>不課税収入額: {revenueAmount.toLocaleString()}</span>
          <span>充当表記載額: {noTaxRevenueAmount.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onEdit} className="py-1 px-4 bg-gray-500 text-white rounded">編集</button>
        <button onClick={onClear} className="py-1 px-4 bg-yellow-500 text-white rounded">クリア</button>
        <button onClick={onClose} className="py-1 px-4 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default IncomeSetting;