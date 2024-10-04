```tsx
import React from 'react';

// Define the types for the component props
type RecordComponentProps = {
  year: number;
  codes: { code: string; name: string }[];
  onPrevious: () => void;
  onNext: () => void;
  onConfirm: () => void;
};

const RecordComponent: React.FC<RecordComponentProps> = ({
  year,
  codes,
  onPrevious,
  onNext,
  onConfirm,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Year Selection */}
      <div className="mb-4">
        <label htmlFor="yearSelect" className="mr-2">年度: </label>
        <select id="yearSelect" className="border rounded px-2 py-1">
          <option value={year}>{`平成${year}年`}</option>
        </select>
      </div>

      {/* Table of Codes */}
      <div className="mb-4">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2">注記コード</th>
              <th className="border px-4 py-2">注記名称</th>
            </tr>
          </thead>
          <tbody>
            {codes.map(({ code, name }, index) => (
              <tr key={index} className="odd:bg-gray-100">
                <td className="border px-4 py-2">{code}</td>
                <td className="border px-4 py-2">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <div>
          <button onClick={onPrevious} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
            前データ
          </button>
          <button onClick={onNext} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
            次データ
          </button>
        </div>
        <button onClick={onConfirm} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          確定
        </button>
      </div>
    </div>
  );
};

export default RecordComponent;
```