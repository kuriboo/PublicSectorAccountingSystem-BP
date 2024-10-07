import React from 'react';

// 型定義
interface ConfirmationProps {
  fiscalYear: string;
  confirmationType: string;
  summary: string;
  onConfirm: () => void;
  onErrorCheck: () => void;
  onComplete: () => void;
}

// コンポーネント定義
const ConfirmationComponent: React.FC<ConfirmationProps> = ({
  fiscalYear,
  confirmationType,
  summary,
  onConfirm,
  onErrorCheck,
  onComplete,
}) => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-blue-500 text-white font-bold text-xl p-2 rounded-t-md">
        決算確定処理
      </header>
      <div className="bg-white p-4 shadow-md rounded-md space-y-4">
        <div className="flex justify-between">
          <div>
            <div>当期会計年度</div>
            <div className="font-bold">{fiscalYear}</div>
          </div>
          <div>
            <div>決算確定利用値区分</div>
            <div className="font-bold">{confirmationType}</div>
          </div>
        </div>
        <div className="border-t mt-4 pt-4">
          <div className="font-bold">処理概要</div>
          <div className="mt-2">{summary}</div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded-md" 
          onClick={onErrorCheck}
        >
          エラー確認
        </button>
        <div className="space-x-2">
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-md" 
            onClick={onConfirm}
          >
            OK
          </button>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded-md" 
            onClick={onComplete}
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationComponent;
