```tsx
import React from 'react';

// 型定義
type CashFlowFormProps = {
  creationDate: string;
  segment: string;
  calculationMethod: '直接法' | '間接法';
  currencyUnit: '円単位' | '千円単位';
  outputFormat: '単年度キャッシュ・フロー' | '比較キャッシュ・フロー';
  size: 'A4 横' | 'A4 縦';
  includePageNumber: boolean;
  startPage: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const CashFlowForm: React.FC<CashFlowFormProps> = ({
  creationDate,
  segment,
  calculationMethod,
  currencyUnit,
  outputFormat,
  size,
  includePageNumber,
  startPage,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>

      {/* 作表年月 */}
      <div className="mb-4">
        <label className="block text-gray-700">作表年月</label>
        <input
          type="text"
          value={creationDate}
          readOnly
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      {/* セグメント */}
      <div className="mb-4">
        <label className="block text-gray-700">セグメント</label>
        <input
          type="text"
          value={segment}
          readOnly
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      {/* 計算方式 */}
      <div className="mb-4">
        <label className="block text-gray-700">計算方式</label>
        <div className="mt-1 flex gap-4">
          <label>
            <input
              type="radio"
              value="間接法"
              checked={calculationMethod === '間接法'}
              readOnly
            />{' '}
            間接法
          </label>
          <label>
            <input
              type="radio"
              value="直接法"
              checked={calculationMethod === '直接法'}
              readOnly
            />{' '}
            直接法
          </label>
        </div>
      </div>

      {/* 金額単位選択 */}
      <div className="mb-4">
        <label className="block text-gray-700">金額単位選択</label>
        <div className="mt-1 flex gap-4">
          <label>
            <input
              type="radio"
              value="円単位"
              checked={currencyUnit === '円単位'}
              readOnly
            />{' '}
            円単位
          </label>
          <label>
            <input
              type="radio"
              value="千円単位"
              checked={currencyUnit === '千円単位'}
              readOnly
            />{' '}
            千円単位
          </label>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">書式</h2>

      {/* 出力形式 */}
      <div className="mb-4">
        <label className="block text-gray-700">出力形式</label>
        <div className="mt-1 flex gap-4">
          <label>
            <input
              type="radio"
              value="単年度キャッシュ・フロー"
              checked={outputFormat === '単年度キャッシュ・フロー'}
              readOnly
            />{' '}
            単年度キャッシュ・フロー
          </label>
          <label>
            <input
              type="radio"
              value="比較キャッシュ・フロー"
              checked={outputFormat === '比較キャッシュ・フロー'}
              readOnly
            />{' '}
            比較キャッシュ・フロー
          </label>
        </div>
      </div>

      {/* サイズ */}
      <div className="mb-4">
        <label className="block text-gray-700">サイズ</label>
        <div className="mt-1 flex gap-4">
          <label>
            <input type="radio" value="A4 横" checked={size === 'A4 横'} readOnly /> A4 横
          </label>
          <label>
            <input type="radio" value="A4 縦" checked={size === 'A4 縦'} readOnly /> A4 縦
          </label>
        </div>
      </div>

      {/* 頁印字 */}
      <div className="mb-4">
        <label className="block text-gray-700">頁印字</label>
        <div className="mt-1 flex gap-4">
          <label>
            <input type="radio" checked={includePageNumber} readOnly /> する
          </label>
          <label>
            <input type="radio" checked={!includePageNumber} readOnly /> しない
          </label>
        </div>
      </div>

      {/* 開始頁 */}
      <div className="mb-4">
        <label className="block text-gray-700">開始頁</label>
        <input
          type="number"
          value={startPage}
          readOnly
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      {/* ボタン */}
      <div className="flex gap-4 justify-end">
        <button onClick={onExit} className="bg-gray-300 p-2 rounded">
          終了
        </button>
        <button onClick={onClear} className="bg-yellow-300 p-2 rounded">
          クリア
        </button>
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">
          OK
        </button>
      </div>
    </div>
  );
};

export default CashFlowForm;
```