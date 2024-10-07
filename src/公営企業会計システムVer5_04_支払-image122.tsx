import React from 'react';

// TypeScriptの型定義
type PaymentConfirmationProps = {
  startDate: string; // 開始日
  endDate: string; // 終了日
  departmentCodeStart: string; // 部署コード開始
  departmentCodeEnd: string; // 部署コード終了
  onSubmit: () => void; // OKボタン押下時のコールバック
  onClear: () => void; // クリアボタン押下時のコールバック
  onExit: () => void; // 終了ボタン押下時のコールバック
};

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  startDate,
  endDate,
  departmentCodeStart,
  departmentCodeEnd,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">支払確定</h1>
      <div className="border p-4">
        <h2 className="text-lg mb-2">範囲指定</h2>
        <div className="flex items-center mb-2">
          <label className="w-32">支払年月日</label>
          <input 
            type="text" 
            value={startDate} 
            readOnly 
            className="border p-1 mx-1" 
          />
          <span>〜</span>
          <input 
            type="text" 
            value={endDate} 
            readOnly 
            className="border p-1 mx-1" 
          />
        </div>
        <div className="flex items-center mb-2">
          <button className="bg-gray-300 hover:bg-gray-400 p-2 mx-1">所属</button>
          <input 
            type="text" 
            value={departmentCodeStart} 
            readOnly 
            className="border p-1 mx-1" 
          />
          <span>〜</span>
          <input 
            type="text" 
            value={departmentCodeEnd} 
            readOnly 
            className="border p-1 mx-1" 
          />
          <button className="bg-gray-300 hover:bg-gray-400 p-2 mx-1">所属</button>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button 
          onClick={onSubmit} 
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 mx-1"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-200 hover:bg-gray-300 p-2 mx-1"
        >
          クリア
        </button>
        <button 
          onClick={onExit} 
          className="bg-gray-200 hover:bg-gray-300 p-2 mx-1"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
