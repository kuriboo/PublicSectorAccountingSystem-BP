import React from 'react'

type ComponentProps = {
  year: string;
  taxAmount: number;
  consumptionTax: number;
  totalTaxIncluded: number;
  breakdown: {
    business: string;
    code: string;
    name: string;
    division: string;
    amount: number;
    consumption: number;
    total: number;
    ratio: string;
  }[];
  onPrevious: () => void;
  onNext: () => void;
  onUpdate: () => void;
  onClear: () => void;
  onClose: () => void;
}

const FinancialComponent: React.FC<ComponentProps> = ({
  year,
  taxAmount,
  consumptionTax,
  totalTaxIncluded,
  breakdown,
  onPrevious,
  onNext,
  onUpdate,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-gray-100 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>令和{year}年度</div>
      </div>

      {/* Tax information */}
      <div className="border p-2 bg-white">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>税抜額</th>
              <th>消費税額</th>
              <th>税込額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{taxAmount.toLocaleString()} 円</td>
              <td>{consumptionTax.toLocaleString()} 円</td>
              <td>{totalTaxIncluded.toLocaleString()} 円</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Breakdown table */}
      <div className="border p-2 bg-white">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>事業</th>
              <th>振替コード</th>
              <th>振替名</th>
              <th>性質名</th>
              <th>税抜額</th>
              <th>消費税額</th>
              <th>税込額</th>
              <th>構成比率(%)</th>
            </tr>
          </thead>
          <tbody>
            {breakdown.map((row, index) => (
              <tr key={index}>
                <td>{row.business}</td>
                <td>{row.code}</td>
                <td>{row.name}</td>
                <td>{row.division}</td>
                <td>{row.amount.toLocaleString()}</td>
                <td>{row.consumption.toLocaleString()}</td>
                <td>{row.total.toLocaleString()}</td>
                <td>{row.ratio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button onClick={onPrevious} className="px-4 py-2 bg-blue-600 text-white">前年度</button>
        <div className="flex space-x-2">
          <button onClick={onUpdate} className="px-4 py-2 bg-green-600 text-white">更新</button>
          <button onClick={onClear} className="px-4 py-2 bg-yellow-600 text-white">クリア</button>
          <button onClick={onClose} className="px-4 py-2 bg-red-600 text-white">終了</button>
        </div>
        <button onClick={onNext} className="px-4 py-2 bg-blue-600 text-white">次年度</button>
      </div>
    </div>
  )
}

export default FinancialComponent;
