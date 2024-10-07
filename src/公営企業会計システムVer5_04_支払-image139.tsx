import React from 'react';

// Props interface for the PaymentForm component
interface PaymentFormProps {
  startDate: string;
  endDate: string;
  issuanceType: 'New' | 'Reissue';
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  startDate,
  endDate,
  issuanceType,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-xl font-bold text-purple-800">支払伝票 (単票)</h1>
      
      <div className="my-4">
        <div className="border rounded p-4 bg-white">
          <div className="text-blue-800 mb-2">範囲指定</div>
          <div className="flex items-center mb-4">
            <input 
              type="text" 
              value={startDate} 
              readOnly 
              className="border-b p-1 mx-2 bg-blue-100 text-center" 
            />
            ～
            <input 
              type="text" 
              value={endDate} 
              readOnly 
              className="border-b p-1 mx-2 bg-blue-100 text-center" 
            />
          </div>
          
          <div className="flex items-center">
            <span className="mr-2">発行区分</span>
            <label className="mr-4">
              <input 
                type="radio" 
                name="issuanceType" 
                checked={issuanceType === 'New'} 
                readOnly 
              /> 新規
            </label>
            <label>
              <input 
                type="radio" 
                name="issuanceType" 
                checked={issuanceType === 'Reissue'} 
                readOnly 
              /> 再発行
            </label>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button 
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded" 
          onClick={onSubmit}
        >
          OK
        </button>
        <button 
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded" 
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded" 
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;