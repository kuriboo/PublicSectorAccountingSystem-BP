```tsx
import React from 'react';

interface TaxRate {
  code: string;
  startDate: string;
  rate: number;
  localRate: number;
  reducedRate: number;
  reducedRateNote: string;
}

interface TaxMasterProps {
  title: string;
  taxRates: TaxRate[];
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
}

const TaxMaster: React.FC<TaxMasterProps> = ({ title, taxRates, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">消費税コード</th>
            <th className="py-2">適用開始年月日</th>
            <th className="py-2">消費税率及び地方消費税率</th>
            <th className="py-2">地方消費税率</th>
            <th className="py-2">軽減税率</th>
            <th className="py-2">軽減税率対象記号</th>
            <th className="py-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {taxRates.map((rate) => (
            <tr key={rate.code} className="text-center">
              <td className="py-2 border">{rate.code}</td>
              <td className="py-2 border">{rate.startDate}</td>
              <td className="py-2 border">{rate.rate.toFixed(2)}%</td>
              <td className="py-2 border">{rate.localRate.toFixed(2)}%</td>
              <td className="py-2 border">{rate.reducedRate.toFixed(2)}%</td>
              <td className="py-2 border">{rate.reducedRateNote}</td>
              <td className="py-2 border">
                <button onClick={() => onEdit(rate.code)} className="bg-blue-500 text-white px-2 py-1 rounded">編集</button>
                <button onClick={() => onDelete(rate.code)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxMaster;
```