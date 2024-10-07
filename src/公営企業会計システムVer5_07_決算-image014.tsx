import React from 'react';

type DocumentFormProps = {
  accountingPeriodStart: string;
  accountingPeriodEnd: string;
  budgetCodeStart: string;
  budgetCodeEnd: string;
  size: 'A4横' | 'A4縦';
  amountType: '税抜' | '税込';
  revenueSubtitle: string;
  expenditureSubtitle: string;
  includePageNumber: boolean;
  startPage: number;
  includeTotalPage: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const DocumentForm: React.FC<DocumentFormProps> = ({
  accountingPeriodStart,
  accountingPeriodEnd,
  budgetCodeStart,
  budgetCodeEnd,
  size,
  amountType,
  revenueSubtitle,
  expenditureSubtitle,
  includePageNumber,
  startPage,
  includeTotalPage,
  onSubmit,
  onClear,
  onClose,
}) => {

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">資本的収支明細書作成</h2>
      <form>
        {/* Accounting Period */}
        <div className="mb-2">
          <label className="block">会計期間</label>
          <input type="text" value={accountingPeriodStart} readOnly className="border p-1" /> ~
          <input type="text" value={accountingPeriodEnd} readOnly className="border p-1" />
        </div>

        {/* Budget Code */}
        <div className="mb-2">
          <label className="block">予算科目</label>
          <input type="text" value={budgetCodeStart} readOnly className="border p-1" /> ~
          <input type="text" value={budgetCodeEnd} readOnly className="border p-1" />
        </div>

        {/* Size Radio Buttons */}
        <div className="mb-2">
          <label className="block">サイズ</label>
          <label>
            <input type="radio" checked={size === 'A4横'} readOnly /> A4 横
          </label>
          <label>
            <input type="radio" checked={size === 'A4縦'} readOnly /> A4 縦
          </label>
        </div>

        {/* Amount Type */}
        <div className="mb-2">
          <label className="block">金額</label>
          <label>
            <input type="radio" checked={amountType === '税抜'} readOnly /> 税抜
          </label>
          <label>
            <input type="radio" checked={amountType === '税込'} readOnly /> 税込
          </label>
        </div>

        {/* Subtitles */}
        <div className="mb-2">
          <label className="block">収入サブタイトル</label>
          <input type="text" value={revenueSubtitle} readOnly className="border p-1 w-full" />
        </div>
        <div className="mb-2">
          <label className="block">支出サブタイトル</label>
          <input type="text" value={expenditureSubtitle} readOnly className="border p-1 w-full" />
        </div>

        {/* Page Number */}
        <div className="mb-2">
          <label className="block">頁印字</label>
          <label>
            <input type="radio" checked={includePageNumber} readOnly /> する
          </label>
          <label>
            <input type="radio" checked={!includePageNumber} readOnly /> しない
          </label>
        </div>

        {/* Start Page */}
        <div className="mb-2">
          <label className="block">開始頁</label>
          <input type="number" value={startPage} readOnly className="border p-1" />
        </div>

        {/* Total Page */}
        <div className="mb-4">
          <label className="block">合計印字</label>
          <label>
            <input type="radio" checked={includeTotalPage} readOnly /> する
          </label>
          <label>
            <input type="radio" checked={!includeTotalPage} readOnly /> しない
          </label>
        </div>

        {/* Buttons */}
        <div className="space-x-2">
          <button type="button" onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
          <button type="button" onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
          <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
        </div>
      </form>
    </div>
  );
};

export default DocumentForm;
