import React from 'react';

// TypeScript型定義
type ReportProps = {
  createdDate: string;
  collectedDateTime: string;
  collectedTarget: string;
  collectedTargetGroup: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// 再利用可能なコンポーネント
const ReportComponent: React.FC<ReportProps> = ({
  createdDate,
  collectedDateTime,
  collectedTarget,
  collectedTargetGroup,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 max-w-md mx-auto">
      <h1 className="text-xl font-bold text-center mb-4">月次貸借対照表作成</h1>
      <div className="mb-2">
        <span className="font-bold">作表日付：</span>
        <span>{createdDate}</span>
      </div>
      <div className="mb-2">
        <span className="font-bold">集計日時：</span>
        <span>{collectedDateTime}</span>
      </div>
      <div className="mb-2">
        <span className="font-bold">集計対象：</span>
        <span>{collectedTarget}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">集計対象団体：</span>
        <span>{collectedTargetGroup}</span>
      </div>
      <div className="flex justify-end space-x-2">
        <button 
          className="bg-blue-500 text-white py-1 px-4 rounded shadow"
          onClick={onOk}
        >
          OK
        </button>
        <button 
          className="bg-gray-300 text-black py-1 px-4 rounded shadow"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="bg-red-500 text-white py-1 px-4 rounded shadow"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportComponent;
