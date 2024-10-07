import React from 'react';

// TypeScript interface for component props
interface FormProps {
  fiscalYear?: string;
  budgetSection?: string;
  currencyType?: string;
  startDate?: string;
  endDate?: string;
  size?: 'A4横' | 'A4縦';
  title?: string;
  subTitle?: string;
  pageNum?: number;
  handleExcelExport?: () => void;
  handleSubmit?: () => void;
  handleClear?: () => void;
  handleExit?: () => void;
  middleCharUsed?: boolean;
}

const CustomForm: React.FC<FormProps> = ({
  fiscalYear = '令和02',
  budgetSection = '当初予算',
  currencyType = '見積要求',
  startDate = '令和02年04月01日',
  endDate = '令和02年03月31日',
  size = 'A4横',
  title = '',
  subTitle = '',
  pageNum = 1,
  handleExcelExport,
  handleSubmit,
  handleClear,
  handleExit,
  middleCharUsed = false,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-xl mx-auto">
      <h1 className="text-lg font-bold mb-4">予定損益計算書作成</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">年度</label>
        <input
          type="text"
          value={fiscalYear}
          className="border-2 border-gray-300 p-2 rounded w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">予算種成区分</label>
        <input
          type="text"
          value={budgetSection}
          className="border-2 border-gray-300 p-2 rounded w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">金額種別</label>
        <input
          type="text"
          value={currencyType}
          className="border-2 border-gray-300 p-2 rounded w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">会計期間</label>
        <div className="flex justify-between">
          <input
            type="text"
            value={startDate}
            className="border-2 border-gray-300 p-2 rounded w-full mr-2"
            readOnly
          />
          <span className="mx-2 self-center">〜</span>
          <input
            type="text"
            value={endDate}
            className="border-2 border-gray-300 p-2 rounded w-full"
            readOnly
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">サイズ</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="size"
            checked={size === 'A4横'}
            readOnly
            className="mr-2"
          />
          <span className="mr-4">A4 横</span>
          <input
            type="radio"
            name="size"
            checked={size === 'A4縦'}
            readOnly
            className="mr-2"
          />
          <span>A4 縦</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">タイトル</label>
        <input
          type="text"
          value={title}
          className="border-2 border-gray-300 p-2 rounded w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">開始頁</label>
        <input
          type="number"
          value={pageNum}
          className="border-2 border-gray-300 p-2 rounded w-16"
          readOnly
        />
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={middleCharUsed}
            readOnly
            className="mr-2"
          />
          <span>百円字</span>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleExcelExport}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Excel出力
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={handleClear}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={handleExit}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CustomForm;