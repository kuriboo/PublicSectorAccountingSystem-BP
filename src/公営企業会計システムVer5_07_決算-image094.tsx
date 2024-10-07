import React from 'react';

// プロパティの型定義
type Props = {
  title: string;
  itemNumber: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
  amounts: {
    law24: number;
    law26Forecast: number;
    law26Final: number;
  };
};

// コンポーネント定義
const BudgetEditModal: React.FC<Props> = ({
  title,
  itemNumber,
  onOk,
  onClear,
  onCancel,
  amounts,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-blue-600 mb-2">{title}</h2>
      <p className="mb-4">{itemNumber} 営業費用</p>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block mb-1">公企法24条3項の額</label>
          <input 
            type="number" 
            value={amounts.law24} 
            className="p-2 border rounded bg-cyan-100" 
            readOnly 
          />
        </div>
        <div className="mr-4">
          <label className="block mb-1">公企法26条2項の額・予</label>
          <input 
            type="number" 
            value={amounts.law26Forecast} 
            className="p-2 border rounded bg-cyan-100" 
            readOnly 
          />
        </div>
        <div>
          <label className="block mb-1">公企法26条2項の額・決</label>
          <input 
            type="number" 
            value={amounts.law26Final} 
            className="p-2 border rounded bg-purple-100" 
            readOnly 
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onOk} 
          className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetEditModal;