import React from 'react';

// TypeScriptの型定義
interface IncomeInputProps {
  aggregationNumber: number;
  itemName: string;
  cfDivision: string;
  amountCurrency: string;
  amendmentDivision: string;
  intent: string;
  noOutputCheck: boolean;
  onEditClick: () => void;
  onDeleteClick: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const IncomeInput: React.FC<IncomeInputProps> = ({
  aggregationNumber,
  itemName,
  cfDivision,
  amountCurrency,
  amendmentDivision,
  intent,
  noOutputCheck,
  onEditClick,
  onDeleteClick,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md max-w-xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {/* 集計番号 */}
        <div>
          <label className="block text-gray-700">集計番号</label>
          <p className="mt-1 text-blue-500">{aggregationNumber}</p>
        </div>

        {/* 項目名称1 */}
        <div>
          <label className="block text-gray-700">項目名称1</label>
          <input 
            type="text" 
            value={itemName} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded" 
            readOnly 
          />
        </div>

        {/* CF区分 */}
        <div>
          <label className="block text-gray-700">CF区分</label>
          <input 
            type="text" 
            value={cfDivision} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded" 
            readOnly 
          />
        </div>

        {/* 金額/円区分 */}
        <div>
          <label className="block text-gray-700">金額/円区分</label>
          <input 
            type="text" 
            value={amountCurrency} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded" 
            readOnly 
          />
        </div>

        {/* 改行区分 */}
        <div>
          <label className="block text-gray-700">改行区分</label>
          <input 
            type="text" 
            value={amendmentDivision} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded" 
            readOnly 
          />
        </div>

        {/* インテント */}
        <div>
          <label className="block text-gray-700">インテント</label>
          <input 
            type="text" 
            value={intent} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded" 
            readOnly 
          />
        </div>

        {/* 帳票出力無し */}
        <div>
          <input 
            type="checkbox" 
            checked={noOutputCheck} 
            className="mr-2 leading-tight" 
            readOnly 
          />
          <span className="text-gray-700">帳票出力無し</span>
        </div>
      </div>
      
      {/* ボタン群 */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onEditClick}>編集</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onDeleteClick}>行削除</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onSubmit}>OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default IncomeInput;