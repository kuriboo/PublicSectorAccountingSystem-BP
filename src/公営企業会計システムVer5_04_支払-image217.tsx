import React from 'react';

// 型定義
interface Record {
  date: string;
  type: string;
  documentNumber: number;
  amount: string;
  summary: string;
}

interface UsageHistoryProps {
  records: Record[];
  year: string;
  documentNumber: number;
  usageDetails?: string;
  onDetailsClick: () => void;
  onReissueClick: () => void;
  onCancelClick: () => void;
}

// コンポーネントの定義
const UsageHistory: React.FC<UsageHistoryProps> = ({
  records,
  year,
  documentNumber,
  usageDetails = "流用",
  onDetailsClick,
  onReissueClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 border border-gray-300">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">流用先用履歴</h1>
        <span className="text-sm">伝票番号 {documentNumber}</span>
      </div>
      <div className="mt-2">
        <span className="mr-4">令和{year}年度</span>
        <span>流用充用区分: {usageDetails}</span>
      </div>
      <button onClick={onDetailsClick} className="mt-2 p-2 bg-gray-200 rounded">
        詳細
      </button>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="p-2 border">起案日</th>
            <th className="p-2 border">種別</th>
            <th className="p-2 border">伝票No</th>
            <th className="p-2 border">金額</th>
            <th className="p-2 border">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="p-2 border">{record.date}</td>
              <td className="p-2 border">{record.type}</td>
              <td className="p-2 border">{record.documentNumber}</td>
              <td className="p-2 border">{record.amount}</td>
              <td className="p-2 border">{record.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onReissueClick} className="p-2 bg-gray-300 rounded">
          再発行
        </button>
        <button onClick={onCancelClick} className="p-2 bg-gray-300 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default UsageHistory;
