import React from 'react';

// TypeScriptの型定義
interface AnalysisFormProps {
  yearCode: string;
  analysisCode: string;
  itemNameTop: string;
  itemNameBottom: string;
  unit: string;
  formulaName: string;
  formulaDetail: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const AnalysisForm: React.FC<AnalysisFormProps> = ({
  yearCode,
  analysisCode,
  itemNameTop,
  itemNameBottom,
  unit,
  formulaName,
  formulaDetail,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* 年度選択 */}
      <div className="flex mb-4">
        <label className="mr-2">年度:</label>
        <input type="text" value={yearCode} className="border p-1" readOnly />
      </div>

      {/* 分析コード */}
      <div className="flex mb-4">
        <label className="mr-2">分析コード:</label>
        <input type="text" value={analysisCode} className="border p-1" readOnly />
      </div>

      {/* 分析項目名 */}
      <div className="flex mb-4">
        <label className="mr-2">分析項目名 上:</label>
        <input type="text" value={itemNameTop} className="border p-1 flex-grow" readOnly />
      </div>

      {/* 分析項目名 下 */}
      <div className="flex mb-4">
        <label className="mr-2">分析項目名 下:</label>
        <input type="text" value={itemNameBottom} className="border p-1 flex-grow" readOnly />
      </div>

      {/* 単位 */}
      <div className="flex mb-4">
        <label className="mr-2">単位:</label>
        <input type="text" value={unit} className="border p-1" readOnly />
      </div>

      {/* 算式名 */}
      <div className="flex mb-4">
        <label className="mr-2">算式名:</label>
        <input type="text" value={formulaName} className="border p-1 flex-grow" readOnly />
      </div>

      {/* 算式詳細 */}
      <div className="flex mb-4">
        <label className="mr-2">算式:</label>
        <textarea value={formulaDetail} className="border p-1 flex-grow" readOnly />
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 mr-2">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 mr-2">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2">終了</button>
      </div>
    </div>
  );
};

export default AnalysisForm;
