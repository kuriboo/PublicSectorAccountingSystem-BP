import React from 'react';

// Propsの型定義
type CalculationProps = {
  fiscalYear: string;
  startAssetId: string;
  endAssetId: string;
  onErrorCheck: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネントの定義
const CalculationComponent: React.FC<CalculationProps> = ({
  fiscalYear,
  startAssetId,
  endAssetId,
  onErrorCheck,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 space-y-8">
      <div className="text-lg font-semibold">償却計算年度: {fiscalYear}</div>
      
      <div className="border rounded-lg p-4 flex items-center space-x-2">
        <label htmlFor="startAssetId" className="pr-2">固定資産科目</label>
        <input
          type="text"
          id="startAssetId"
          value={startAssetId}
          className="border rounded-md px-2 py-1 text-center"
          readOnly
        />
        <span>~</span>
        <input
          type="text"
          id="endAssetId"
          value={endAssetId}
          className="border rounded-md px-2 py-1 text-center"
          readOnly
        />
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onErrorCheck}
          className="border rounded-md px-4 py-2 bg-gray-300 hover:bg-gray-200"
        >
          エラー確認
        </button>
        <div className="space-x-4">
          <button
            onClick={onOk}
            className="border rounded-md px-4 py-2 bg-blue-500 text-white hover:bg-blue-400"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="border rounded-md px-4 py-2 bg-yellow-500 text-white hover:bg-yellow-400"
          >
            クリア
          </button>
          <button
            onClick={onClose}
            className="border rounded-md px-4 py-2 bg-red-500 text-white hover:bg-red-400"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculationComponent;
