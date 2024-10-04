```tsx
import React from 'react';

type AccountingProps = {
  title: string;
  adminInfo: string;
  date: string;
  periodStart: string;
  periodEnd: string;
  summary: string[];
  exclusionMethod: string;
  onOkClick: () => void;
  onCloseClick: () => void;
};

const AccountingComponent: React.FC<AccountingProps> = ({
  title,
  adminInfo,
  date,
  periodStart,
  periodEnd,
  summary,
  exclusionMethod,
  onOkClick,
  onCloseClick,
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-4 shadow-md">
      <header className="bg-blue-200 font-bold p-2 text-lg mb-4">{title}</header>
      <div className="flex justify-between text-sm mb-4">
        <span>{adminInfo}</span>
        <span>{date}</span>
      </div>
      <section className="border rounded-md p-2 mb-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        <p>課税期間: {periodStart} ～ {periodEnd}</p>
      </section>
      <section className="border rounded-md p-2 mb-4">
        <h2 className="font-semibold mb-2">処理概要</h2>
        <ul className="list-disc list-inside">
          {summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="border rounded-md p-2 mb-4">
        <h2 className="font-semibold mb-2">仕入控除額の計算方法</h2>
        <p>{exclusionMethod}</p>
      </section>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={onOkClick}
        >
          OK
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={onCloseClick}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingComponent;
```