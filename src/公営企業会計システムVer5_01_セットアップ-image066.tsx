import React from 'react';

// Props interface for the component
interface FinancialFormProps {
  yearTitle: string;
  sectionCode: string;
  sectionDetail: string;
  detailDescription: string;
  institutionCode: string;
  depositTypeCode: string;
  onSearch: () => void;
  onPrevData: () => void;
  onNextData: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const FinancialForm: React.FC<FinancialFormProps> = ({
  yearTitle,
  sectionCode,
  sectionDetail,
  detailDescription,
  institutionCode,
  depositTypeCode,
  onSearch,
  onPrevData,
  onNextData,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">{yearTitle} 年度</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>仕訳節:</label>
          <input
            type="text"
            className="border w-full p-1"
            value={sectionCode}
            readOnly
          />
        </div>
        <div>
          <label>仕訳細節:</label>
          <input
            type="text"
            className="border w-full p-1"
            value={sectionDetail}
            readOnly
          />
        </div>
        <div>
          <label>仕訳明細:</label>
          <input
            type="text"
            className="border w-full p-1"
            value={detailDescription}
            readOnly
          />
        </div>
        <button
          className="col-span-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onSearch}
        >
          検索
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>資金残高金融機関コード:</label>
          <input
            type="text"
            className="border w-full p-1"
            value={institutionCode}
            readOnly
          />
        </div>
        <div>
          <label>資金残高預金種別コード:</label>
          <input
            type="text"
            className="border w-full p-1"
            value={depositTypeCode}
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-between space-x-2">
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={onPrevData}
        >
          前データ
        </button>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={onExit}
        >
          終了
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={onNextData}
        >
          次データ
        </button>
      </div>
    </div>
  );
};

export default FinancialForm;
