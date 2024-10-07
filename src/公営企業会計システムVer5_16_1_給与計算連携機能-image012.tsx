// Import necessary libraries
import React from 'react';

type ConversionTableProps = {
  fiscalYear: string;
  accountingDivision: string;
  accountCode: string;
  managementCode: string;
  controlItemCode: string;
  translationCode: string;
  unpaidTargetFlag: boolean;
  exclusionFlag: boolean;
  previousUnpaidTargetFlag: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ConversionTable: React.FC<ConversionTableProps> = ({
  fiscalYear,
  accountingDivision,
  accountCode,
  managementCode,
  controlItemCode,
  translationCode,
  unpaidTargetFlag,
  exclusionFlag,
  previousUnpaidTargetFlag,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">科目変換テーブル保守</h2>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">会計年度:</label>
        <input type="text" readOnly value={fiscalYear} className="mt-1 px-2 py-1 border rounded" />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">会計区分:</label>
        <input type="text" readOnly value={accountingDivision} className="mt-1 px-2 py-1 border rounded" />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">目コード:</label>
        <input type="text" readOnly value={accountCode} className="mt-1 px-2 py-1 border rounded" />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">管理コード:</label>
        <input type="text" readOnly value={managementCode} className="mt-1 px-2 py-1 border rounded" />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">控除項目コード:</label>
        <input type="text" readOnly value={controlItemCode} className="mt-1 px-2 py-1 border rounded" />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">仕訳コード:</label>
        <input type="text" readOnly value={translationCode} className="mt-1 px-2 py-1 border rounded" />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">未払対象フラグ:</label>
        <input type="checkbox" checked={unpaidTargetFlag} readOnly className="mt-1" />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">預り金支払除外フラグ:</label>
        <input type="checkbox" checked={exclusionFlag} readOnly className="mt-1" />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">前年未払対象フラグ:</label>
        <input type="checkbox" checked={previousUnpaidTargetFlag} readOnly className="mt-1" />
      </div>
      
      <div className="flex space-x-4 mt-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded">クリア</button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default ConversionTable;
