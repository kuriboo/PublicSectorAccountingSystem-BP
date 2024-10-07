import React from 'react';

type YearProcessingFormProps = {
  updateDate: string;
  startDurabilityYear: number;
  endDurabilityYear: number;
  assetCode: string;
  assetName: string;
  startAssetNumber: number;
  endAssetNumber: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const YearProcessingForm: React.FC<YearProcessingFormProps> = ({
  updateDate,
  startDurabilityYear,
  endDurabilityYear,
  assetCode,
  assetName,
  startAssetNumber,
  endAssetNumber,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white border rounded shadow">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">法改正対応耐用年数一括処理</h2>
        <div className="flex justify-between mb-4">
          <span className="font-semibold">更新年月日:</span>
          <span>{updateDate}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="font-semibold mr-2">耐用年数:</span>
          <span>{startDurabilityYear} ～ {endDurabilityYear}</span>
        </div>
      </div>
      <div className="border-t pt-4">
        <h3 className="font-semibold mb-2">範囲指定</h3>
        <div className="mb-4">
          <label className="block font-semibold">固定資産科目:</label>
          <div className="flex items-center">
            <span className="mr-2">{assetCode}</span>
            <span>{assetName}</span>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <label className="font-semibold">資産番号:</label>
            <input type="text" value={startAssetNumber} className="border p-1 rounded ml-2" disabled />
          </div>
          <div>
            <label className="font-semibold">～</label>
            <input type="text" value={endAssetNumber} className="border p-1 rounded ml-2" disabled />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-1 rounded">OK</button>
          <button onClick={onClear} className="bg-gray-500 text-white px-4 py-1 rounded">クリア</button>
          <button onClick={onCancel} className="bg-red-500 text-white px-4 py-1 rounded">終了</button>
        </div>
      </div>
    </div>
  );
};

export default YearProcessingForm;
