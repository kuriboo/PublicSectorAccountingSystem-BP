```tsx
import React from 'react';

type Props = {
  fiscalYear: string;
  requestType: string;
  minValue: number;
  maxValue: number;
  size: 'A4横' | 'A4縦';
  title: string;
  subtitle: string;
  subTitle: string;
  pageNumber: boolean;
  startPage: number;
  segment: string;
  onExcelOutput: () => void;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const BudgetPlanComponent: React.FC<Props> = ({
  fiscalYear,
  requestType,
  minValue,
  maxValue,
  size,
  title,
  subtitle,
  subTitle,
  pageNumber,
  startPage,
  segment,
  onExcelOutput,
  onOk,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold">補正予算実施計画書作成</h1>
      <div className="mt-4">
        <label className="block font-semibold">年度</label>
        <input type="text" value={fiscalYear} readOnly className="p-2 border" />
      </div>
      <div className="mt-4">
        <label className="block font-semibold">見積要求額</label>
        <input type="text" value={requestType} readOnly className="p-2 border" />
      </div>
      <div className="mt-4">
        <label className="block font-semibold">範囲指定</label>
        <div className="flex">
          <input type="number" value={minValue} readOnly className="p-2 border" />
          <span className="mx-2">〜</span>
          <input type="number" value={maxValue} readOnly className="p-2 border" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block font-semibold">書式</label>
        <div>
          <span className="mr-2">サイズ</span>
          <span>{size}</span>
        </div>
        <div className="mt-2">
          <span className="block">タイトル</span>
          <input type="text" value={title} readOnly className="p-2 border" />
        </div>
        <div className="mt-2">
          <span className="block">サブタイトル</span>
          <input type="text" value={subtitle} readOnly className="p-2 border" />
        </div>
        <div className="mt-2">
          <span className="block">柱タイトル</span>
          <input type="text" value={subTitle} readOnly className="p-2 border" />
        </div>
      </div>
      <div className="mt-4">
        <label>頁印字</label>
        <input type="checkbox" checked={pageNumber} readOnly className="ml-2" />
      </div>
      <div className="mt-4">
        <label className="block font-semibold">開始頁</label>
        <input type="number" value={startPage} readOnly className="p-2 border" />
      </div>
      <div className="mt-4">
        <label className="block font-semibold">セグメント</label>
        <input type="text" value={segment} readOnly className="p-2 border" />
      </div>
      <div className="flex space-x-2 mt-4">
        <button onClick={onExcelOutput} className="bg-blue-500 text-white px-4 py-2 rounded">Excel出力</button>
        <button onClick={onOk} className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onEnd} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetPlanComponent;
```