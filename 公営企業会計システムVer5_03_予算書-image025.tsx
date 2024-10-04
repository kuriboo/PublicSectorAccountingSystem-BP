```tsx
import React from 'react';

// Define the prop types for the component
interface FormProps {
  year: string;
  amountType: 'quoteRequest' | 'fixedAmount';
  rangeStart: string;
  rangeEnd: string;
  size: 'A4_horizontal' | 'A4_vertical';
  title: string;
  subTitle: string;
  minorTitle: string;
  pageNumbering: boolean;
  startPage: number;
  segment: string;
}

// Reusable form component
const BudgetForm: React.FC<FormProps> = ({
  year,
  amountType,
  rangeStart,
  rangeEnd,
  size,
  title,
  subTitle,
  minorTitle,
  pageNumbering,
  startPage,
  segment
}) => {
  return (
    <div className="p-4 shadow-md bg-white rounded-md max-w-xl mx-auto">
      <div className="mb-4">
        <label className="block font-semibold">年度</label>
        <input
          type="text"
          value={year}
          className="border rounded-md px-2 py-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">説明種別データ作成情報</label>
        <div>
          <label>
            <input
              type="radio"
              checked={amountType === 'quoteRequest'}
              readOnly
            />
            見積要求額
          </label>
          <label className="ml-4">
            <input
              type="radio"
              checked={amountType === 'fixedAmount'}
              readOnly
            />
            査定額
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">範囲指定</label>
        <div className="flex">
          <span className="mr-2">予算科目</span>
          <input
            type="text"
            value={rangeStart}
            className="border rounded-md px-2 py-1"
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={rangeEnd}
            className="border rounded-md px-2 py-1"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">書式</label>
        <div>
          <div className="mb-2">
            <label>
              <input
                type="radio"
                checked={size === 'A4_horizontal'}
                readOnly
              />
              A4 横
            </label>
            <label className="ml-4">
              <input
                type="radio"
                checked={size === 'A4_vertical'}
                readOnly
              />
              A4 縦
            </label>
          </div>
          <input
            type="text"
            placeholder="タイトル"
            value={title}
            className="border rounded-md px-2 py-1 w-full mb-2"
            readOnly
          />
          <input
            type="text"
            placeholder="サブタイトル"
            value={subTitle}
            className="border rounded-md px-2 py-1 w-full mb-2"
            readOnly
          />
          <input
            type="text"
            placeholder="柱タイトル"
            value={minorTitle}
            className="border rounded-md px-2 py-1 w-full mb-2"
            readOnly
          />
          <div className="mb-2">
            <label>
              <input
                type="checkbox"
                checked={pageNumbering}
                readOnly
              />
              頁印字
            </label>
            <label className="ml-4">
              <input
                type="checkbox"
                checked={!pageNumbering}
                readOnly
              />
              しない
            </label>
          </div>
          <input
            type="number"
            value={startPage}
            className="border rounded-md px-2 py-1 w-20"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">セグメント</label>
        <input
          type="text"
          value={segment}
          className="border rounded-md px-2 py-1 w-full"
          readOnly
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button className="bg-gray-300 px-4 py-2 rounded-md">Excel出力</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">OK</button>
        <button className="bg-yellow-500 px-4 py-2 rounded-md">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```