import React from 'react';

type Entry = {
  borrowSubject: string;
  borrowDetail: string;
  borrowSummary: string;
  lendSubject: string;
  lendDetail: string;
  lendSummary: string;
};

type DetailComponentProps = {
  entries: Entry[];
  itemCount: number;
  taxIncluded: number;
  mainAmount: number;
  borrowFixedIncome: number;
  lendFixedIncome: number;
  onCancel: () => void;
};

const DetailComponent: React.FC<DetailComponentProps> = ({
  entries,
  itemCount,
  taxIncluded,
  mainAmount,
  borrowFixedIncome,
  lendFixedIncome,
  onCancel,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <h1 className="font-bold text-lg mb-2">仕訳詳細</h1>
      <div className="flex justify-between w-full mb-4">
        <div className="text-sm">
          <div>予算</div>
          <div>本体仕訳</div>
          <div>消費税仕訳</div>
        </div>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th>借方科目</th>
            <th>借方細節</th>
            <th>借方明細</th>
            <th>貸方科目</th>
            <th>貸方細節</th>
            <th>貸方明細</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="text-center">
              <td>{entry.borrowSubject}</td>
              <td>{entry.borrowDetail}</td>
              <td>{entry.borrowSummary}</td>
              <td>{entry.lendSubject}</td>
              <td>{entry.lendDetail}</td>
              <td>{entry.lendSummary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between w-full mb-4 text-sm">
        <div className="flex flex-col items-start w-1/3">
          <div>件数</div>
          <div>税込金額</div>
          <div>借方指定収入</div>
          <div>仕訳区分</div>
        </div>
        <div className="flex flex-col items-end w-1/3">
          <div>{itemCount}</div>
          <div>{taxIncluded.toLocaleString()}</div>
          <div>{borrowFixedIncome}</div>
          <div>期中仕訳</div>
        </div>
        <div className="flex flex-col items-end w-1/3">
          <div>本体金額</div>
          <div>消費税率</div>
          <div>消費税額</div>
          <div>貸方指定収入</div>
        </div>
        <div className="flex flex-col items-end w-1/3">
          <div>{mainAmount.toLocaleString()}</div>
          <div>0</div>
          <div>0</div>
          <div>{lendFixedIncome}</div>
        </div>
      </div>
      <button
        className="bg-gray-200 text-black py-1 px-4 rounded"
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  );
};

export default DetailComponent;
```