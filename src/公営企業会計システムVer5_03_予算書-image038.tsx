import React, { FC } from 'react';

interface ReportFormProps {
  accountType: '実施計画書' | '事項別明細書';
  year: number;
  viewOrCert: '見積要求額' | '査定額';
  budgetEditSection: string;
  count: number;
  budgetAccountStart: string;
  budgetAccountEnd: string;
  onExportCSV: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReportForm: FC<ReportFormProps> = ({
  accountType,
  year,
  viewOrCert,
  budgetEditSection,
  count,
  budgetAccountStart,
  budgetAccountEnd,
  onExportCSV,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">実施計画書/事項別明細書</h1>

      <div className="mt-4">
        <label>帳票種別</label>
        <div className="mt-2">
          <input
            type="radio"
            checked={accountType === '実施計画書'}
            readOnly
          />
          <label className="ml-2">実施計画書</label>
          <input
            type="radio"
            checked={accountType === '事項別明細書'}
            className="ml-4"
            readOnly
          />
          <label className="ml-2">事項別明細書</label>
        </div>
      </div>

      <div className="mt-4">
        <label>作成年度</label>
        <div className="mt-2">
          <span>{year} 年度</span>
        </div>
      </div>

      <div className="mt-4">
        <label>作表条件</label>
        <div className="mt-2">
          <input
            type="radio"
            checked={viewOrCert === '見積要求額'}
            readOnly
          />
          <label className="ml-2">見積要求額</label>
          <input
            type="radio"
            checked={viewOrCert === '査定額'}
            className="ml-4"
            readOnly
          />
          <label className="ml-2">査定額</label>
        </div>
        <div className="mt-2">
          <label>予算編集区分</label>
          <input
            type="text"
            value={budgetEditSection}
            className="ml-2 border p-1"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>回数</label>
          <span className="ml-2">{count} 回</span>
        </div>
      </div>

      <div className="mt-4 flex">
        <label>予算科目</label>
        <div className="flex ml-2">
          <input
            type="text"
            value={budgetAccountStart}
            className="border p-1"
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={budgetAccountEnd}
            className="border p-1"
            readOnly
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={onExportCSV}
          className="bg-blue-500 text-white py-2 px-4 mr-2"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 mr-2"
        >
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4">
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;