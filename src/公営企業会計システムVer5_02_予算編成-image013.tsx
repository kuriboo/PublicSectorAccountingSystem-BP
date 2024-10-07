import React from 'react';

type AccountingSystemProps = {
  year: number;
  accountType: 'project' | 'budget' | 'belonging';
  range: {
    belongingStart: number;
    belongingEnd: number;
    budgetStart: number;
    budgetEnd: number;
    projectStart: number;
    projectEnd: number;
  };
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingSystem: React.FC<AccountingSystemProps> = ({
  year,
  accountType,
  range,
  onOk,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg">
      <h1 className="text-center text-xl font-bold mb-4">枠配分総括表</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-1">年度</label>
        <input 
          type="number" 
          value={year} 
          className="border border-gray-300 rounded px-2 w-full" 
          readOnly 
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">帳票種別</label>
        <div className="flex space-x-4">
          <label>
            <input type="radio" checked={accountType === 'project'} readOnly />
            事業科目
          </label>
          <label>
            <input type="radio" checked={accountType === 'budget'} readOnly />
            予算科目
          </label>
          <label>
            <input type="radio" checked={accountType === 'belonging'} readOnly />
            所属別
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">範囲指定</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-20 inline-block">所属</span>
            <input 
              type="number" 
              className="border border-gray-300 rounded px-2 w-24 mx-2" 
              value={range.belongingStart} 
              readOnly 
            />
            ～
            <input 
              type="number" 
              className="border border-gray-300 rounded px-2 w-24 mx-2" 
              value={range.belongingEnd} 
              readOnly 
            />
          </div>
          <div className="flex items-center">
            <span className="w-20 inline-block">予算科目</span>
            <input 
              type="number" 
              className="border border-gray-300 rounded px-2 w-24 mx-2" 
              value={range.budgetStart} 
              readOnly 
            />
            ～
            <input 
              type="number" 
              className="border border-gray-300 rounded px-2 w-24 mx-2" 
              value={range.budgetEnd} 
              readOnly 
            />
          </div>
          <div className="flex items-center">
            <span className="w-20 inline-block">事業科目</span>
            <input 
              type="number" 
              className="border border-gray-300 rounded px-2 w-24 mx-2" 
              value={range.projectStart} 
              readOnly 
            />
            ～
            <input 
              type="number" 
              className="border border-gray-300 rounded px-2 w-24 mx-2" 
              value={range.projectEnd} 
              readOnly 
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button 
          className="px-4 py-2 bg-gray-200 rounded" 
          onClick={onOk}
        >OK</button>
        <button 
          className="px-4 py-2 bg-gray-200 rounded" 
          onClick={onClear}
        >クリア</button>
        <button 
          className="px-4 py-2 bg-gray-200 rounded" 
          onClick={onClose}
        >終了</button>
      </div>
    </div>
  );
};

export default AccountingSystem;
