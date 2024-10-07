import React from 'react';

type FormProps = {
  year: string;
  budgetClassification: string;
  times: string;
  financialRequestType: string;
  accountingPeriodStart: string;
  accountingPeriodEnd: string;
  size: string;
  title: string;
  subtitle: string;
  columnTitle: string;
  pageNumber: string;
  onSubmit: () => void;
  onClear: () => void;
  onExcelExport: () => void;
  onClose: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  year,
  budgetClassification,
  times,
  financialRequestType,
  accountingPeriodStart,
  accountingPeriodEnd,
  size,
  title,
  subtitle,
  columnTitle,
  pageNumber,
  onSubmit,
  onClear,
  onExcelExport,
  onClose,
}) => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-4">予定損益計算書作成</h2>
      <form className="bg-white shadow-md p-6 rounded-lg space-y-4">
        {/* 自動仕訳情報 */}
        <div className="border-b pb-4 mb-4">
          <label>
            年度:
            <input type="text" value={year} className="border ml-2 p-1" />
          </label>
          <label>
            予算振替区分:
            <input type="text" value={budgetClassification} className="border ml-2 p-1" />
          </label>
          <label>
            回数:
            <input type="text" value={times} className="border ml-2 p-1" />
          </label>
          <label>
            金額種別:
            <input type="text" value={financialRequestType} className="border ml-2 p-1" />
          </label>
        </div>

        {/* 会計期間 */}
        <div className="border-b pb-4 mb-4">
          <label>
            会計期間:
            <input type="text" value={accountingPeriodStart} className="border mx-2 p-1" />
            〜
            <input type="text" value={accountingPeriodEnd} className="border ml-2 p-1" />
          </label>
        </div>

        {/* 書式 */}
        <div className="border-b pb-4 mb-4">
          <label>
            サイズ:
            <input type="text" value={size} className="border ml-2 p-1" />
          </label>
          <label>
            タイトル:
            <input type="text" value={title} className="border ml-2 p-1" />
          </label>
          <label>
            サブタイトル:
            <input type="text" value={subtitle} className="border ml-2 p-1" />
          </label>
          <label>
            柱タイトル:
            <input type="text" value={columnTitle} className="border ml-2 p-1" />
          </label>
          <label>
            開始頁:
            <input type="text" value={pageNumber} className="border ml-2 p-1" />
          </label>
        </div>

        {/* ボタン */}
        <div className="flex space-x-2">
          <button type="button" onClick={onExcelExport} className="bg-blue-500 text-white px-4 py-2 rounded">
            Excel出力
          </button>
          <button type="button" onClick={onSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
            OK
          </button>
          <button type="button" onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">
            クリア
          </button>
          <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
