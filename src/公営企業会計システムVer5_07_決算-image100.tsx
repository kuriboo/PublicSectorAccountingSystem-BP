import React from 'react';

// 型定義
interface CalculationFormProps {
  fiscalYear: string;
  taxStartDate: string;
  taxEndDate: string;
  calculationMethod: string;
  buttonText: {
    ok: string;
    clear: string;
    exit: string;
  };
}

// コンポーネントの定義
const CalculationForm: React.FC<CalculationFormProps> = ({
  fiscalYear,
  taxStartDate,
  taxEndDate,
  calculationMethod,
  buttonText,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded">
      {/* タイトル */}
      <h2 className="text-lg font-bold text-blue-700 mb-4">
        特定収入金額及び内訳書(計算表2)
      </h2>

      {/* 範囲指定セクション */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">範囲指定</h3>
        <div className="flex items-center">
          <label className="mr-2 text-gray-700">会計年度:</label>
          <span className="border border-gray-300 p-2 bg-gray-100">{fiscalYear}</span>
        </div>
        <div className="flex items-center mt-2">
          <label className="mr-2 text-gray-700">課税期間:</label>
          <span className="border border-gray-300 p-2 bg-gray-100">{taxStartDate}</span>
          <span className="mx-2">~</span>
          <span className="border border-gray-300 p-2 bg-gray-100">{taxEndDate}</span>
        </div>
      </div>

      {/* 計算方法セクション */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">計算方法</h3>
        <div className="border border-gray-300 p-2 bg-gray-100">
          {calculationMethod}
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded">
          {buttonText.ok}
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded">
          {buttonText.clear}
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded">
          {buttonText.exit}
        </button>
      </div>
    </div>
  );
};

export default CalculationForm;
```