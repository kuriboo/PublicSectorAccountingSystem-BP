// 支出決定入力コンポーネント
import React from 'react';

type ExpenseInputProps = {
  decisionDate: string;
  decisionType: string;
  meetingType: string;
  paymentDate: string;
  summary: string;
  contractor: string;
  paymentDestination: string;
  paymentMethod: string;
  bankName: string;
  branchName: string;
  accountNumber: string;
  appropriationInfo: string;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const ExpenseInput: React.FC<ExpenseInputProps> = ({
  decisionDate,
  decisionType,
  meetingType,
  paymentDate,
  summary,
  contractor,
  paymentDestination,
  paymentMethod,
  bankName,
  branchName,
  accountNumber,
  appropriationInfo,
  onOk,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="text-xl font-bold mb-4">支出決定入力（通常工事 負担有）</div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold mb-1">決定処理日:</label>
          <input 
            type="text" 
            value={decisionDate} 
            className="w-full p-2 border rounded" 
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">決裁区分:</label>
          <input 
            type="text" 
            value={decisionType} 
            className="w-full p-2 border rounded" 
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">会議区分:</label>
          <input 
            type="text" 
            value={meetingType} 
            className="w-full p-2 border rounded" 
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">支払日:</label>
          <input 
            type="text" 
            value={paymentDate} 
            className="w-full p-2 border rounded" 
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">摘要:</label>
          <input 
            type="text" 
            value={summary} 
            className="w-full p-2 border rounded" 
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">契約先:</label>
          <input 
            type="text" 
            value={contractor} 
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">支払先:</label>
          <input 
            type="text" 
            value={paymentDestination} 
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">支払方法:</label>
          <input 
            type="text" 
            value={paymentMethod} 
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">銀行名:</label>
          <input 
            type="text" 
            value={bankName} 
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">支店名:</label>
          <input 
            type="text" 
            value={branchName} 
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">口座番号:</label>
          <input 
            type="text" 
            value={accountNumber} 
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">適徴請求:</label>
          <input 
            type="text" 
            value={appropriationInfo} 
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex mt-6 space-x-4">
        <button 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" 
          onClick={onOk}
        >
          OK
        </button>
        <button 
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600" 
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600" 
          onClick={onEnd}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ExpenseInput;
