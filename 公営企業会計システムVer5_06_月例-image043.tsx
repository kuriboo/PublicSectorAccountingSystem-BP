import React from 'react';

type ReportFormProps = {
  startDate: string;
  endDate: string;
  collectionDate: string;
  collectionTarget: string;
  collectionGroup: string;
  onOkay: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  startDate,
  endDate,
  collectionDate,
  collectionTarget,
  collectionGroup,
  onOkay,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">月次損益計算書作成</h2>
      <div className="mb-4">
        <h3 className="font-semibold">範囲指定</h3>
        <div className="border p-4 rounded-md">
          <div className="mb-2">
            <label className="mr-2 font-medium">作表日</label>
            <span>{startDate}</span> ～ <span>{endDate}</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div>
          <span className="font-medium">集計日時</span> <span>{collectionDate}</span>
        </div>
        <div>
          <span className="font-medium">集計対象</span> <span>{collectionTarget}</span>
        </div>
        <div>
          <span className="font-medium">集計対象団体</span> <span>{collectionGroup}</span>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={onOkay}>OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={onClose}>終了</button>
      </div>
    </div>
  );
};

export default ReportForm;