```tsx
import React from 'react';

// TypeScriptの型定義
interface CorrectionInputProps {
  year: string;
  selection: number;
  correctionNumber: number;
  processDate: string;
  subject: string;
  details: Array<{
    section: string;
    subSection: string;
    budgetOffice: string;
    amount: number;
  }>;
  partnerName?: string;
  address?: string;
  onOK: () => void;
  onClear: () => void;
  onExit: () => void;
}

const CorrectionInput: React.FC<CorrectionInputProps> = ({
  year,
  selection,
  correctionNumber,
  processDate,
  subject,
  details,
  partnerName,
  address,
  onOK,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold">欄外番号修正入力</h1>
        <span className="block mt-2">年度: {year}</span>
      </div>

      <div className="mb-4">
        <label className="block font-bold">選択区分: </label>
        <input
          type="number"
          value={selection}
          className="border p-1 rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold">修正番号: </label>
        <input
          type="number"
          value={correctionNumber}
          className="border p-1 rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold">処理日: </label>
        <span>{processDate}</span>
      </div>

      <div className="mb-4">
        <label className="block font-bold">件名（摘要）: </label>
        <span>{subject}</span>
      </div>

      <div className="mb-4">
        <label className="block font-bold">予算科目別明細: </label>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th>節</th>
              <th>細節</th>
              <th>予算所属</th>
              <th>金額</th>
              <th>欄外番号</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{item.section}</td>
                <td>{item.subSection}</td>
                <td>{item.budgetOffice}</td>
                <td>{item.amount.toLocaleString()}</td>
                <td>{correctionNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <label className="block font-bold">相手先名称: </label>
        <span>{partnerName || '---'}</span>
      </div>

      <div className="mb-4">
        <label className="block font-bold">住所: </label>
        <span>{address || '---'}</span>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onOK} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default CorrectionInput;
```