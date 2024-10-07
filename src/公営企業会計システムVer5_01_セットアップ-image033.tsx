import React from 'react';
import 'tailwindcss/tailwind.css';

type Status = '登録' | '訂正' | '削除';

interface TranslationCodeFormProps {
  fiscalYear: string;
  formMode: Status;
  patternNumber: string;
  waterChargeDivision: string;
  translationCode: string;
  isSummary: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const TranslationCodeForm: React.FC<TranslationCodeFormProps> = ({
  fiscalYear,
  formMode,
  patternNumber,
  waterChargeDivision,
  translationCode,
  isSummary,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-4">仕訳コード変換マスタ保守</h2>
      <div className="mb-2">
        <label className="mr-2">会計年度</label>
        <input type="text" value={fiscalYear} className="border p-1" readOnly />
      </div>
      
      <div className="mb-2">
        <label className="mr-2">登録</label>
        <div className="inline">
          <input type="radio" name="status" checked={formMode === '登録'} readOnly /> 登録
          <input type="radio" name="status" checked={formMode === '訂正'} readOnly /> 訂正
          <input type="radio" name="status" checked={formMode === '削除'} readOnly /> 削除
        </div>
      </div>

      <div className="mb-2">
        <label className="mr-2">水道料金業務パターン</label>
        <input type="text" value={patternNumber} className="border p-1" readOnly />
      </div>

      <div className="mb-2">
        <label className="mr-2">水道料金集計区分</label>
        <input type="text" value={waterChargeDivision} className="border p-1" readOnly />
      </div>

      <div className="mb-2">
        <label className="mr-2">会計仕訳</label>
        <input type="text" value={translationCode} className="border p-1" readOnly />
      </div>

      <div className="mb-2">
        <div className="inline">
          <label className="mr-2">節／明細切替</label>
          <input type="radio" name="detail" checked={isSummary} readOnly /> 節
          <input type="radio" name="detail" checked={!isSummary} readOnly /> 明細
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default TranslationCodeForm;