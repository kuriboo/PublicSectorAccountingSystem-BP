// Import necessary libraries and types
import React from 'react';

type TableRow = {
  id: number;
  registrationNumber: string;
  submissionDate: string;
  officeName: string;
  address1: string;
  address2: string;
  phoneNumber: string;
};

type Props = {
  rows: TableRow[];
  onDisplayClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onCancelClick: () => void;
};

const OfficeSelection: React.FC<Props> = ({
  rows,
  onDisplayClick,
  onOkClick,
  onClearClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">指定工事店名</label>
        <input type="text" className="w-full px-3 py-2 mb-2 border rounded" />
        <button
          onClick={onDisplayClick}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          表示
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">電話番号</label>
        <input type="text" className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <span>令和06年02月08日 現在</span>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">一時番号</th>
            <th className="py-2">工事店番号</th>
            <th className="py-2">届出日</th>
            <th className="py-2">指定工事店名</th>
            <th className="py-2">住所1</th>
            <th className="py-2">住所2</th>
            <th className="py-2">電話番号</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border px-4 py-2">{row.id}</td>
              <td className="border px-4 py-2">{row.registrationNumber}</td>
              <td className="border px-4 py-2">{row.submissionDate}</td>
              <td className="border px-4 py-2">{row.officeName}</td>
              <td className="border px-4 py-2">{row.address1}</td>
              <td className="border px-4 py-2">{row.address2}</td>
              <td className="border px-4 py-2">{row.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          onClick={onOkClick}
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
        >
          OK
        </button>
        <button
          onClick={onClearClick}
          className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
        >
          クリア
        </button>
        <button
          onClick={onCancelClick}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default OfficeSelection;
```