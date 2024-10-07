import React from 'react';

// TypeScriptの型定義
type DesignatedContractorListProps = {
  fiscalYear: string; // 年度
  section: string; // 受付区分
  startNumber: string; // 開始の受付番号
  endNumber: string; // 終了の受付番号
  startDate: string; // 開始日の登録年月日
  endDate: string; // 終了日の登録年月日
  onSubmit: () => void; // OKボタンのイベントハンドラ
  onClear: () => void; // クリアボタンのイベントハンドラ
};

const DesignatedContractorList: React.FC<DesignatedContractorListProps> = ({
  fiscalYear,
  section,
  startNumber,
  endNumber,
  startDate,
  endDate,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-purple-800">指名業者一覧表</h1>
      
      <div className="mt-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={fiscalYear}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">受付区分</label>
        <input
          type="text"
          value={section}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">受付番号</label>
        <div className="flex">
          <input
            type="text"
            value={startNumber}
            readOnly
            className="mr-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endNumber}
            readOnly
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">登録年月日</label>
        <div className="flex">
          <input
            type="text"
            value={startDate}
            readOnly
            className="mr-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endDate}
            readOnly
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded-md text-black"
        >
          クリア
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 rounded-md text-white"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default DesignatedContractorList;
