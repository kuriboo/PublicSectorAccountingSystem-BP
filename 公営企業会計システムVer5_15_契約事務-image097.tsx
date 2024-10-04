```tsx
// Reusable Next.js + TypeScript Component
import React from 'react';

// Define the types for the component's props
interface MasterFormProps {
  title: string;
  year: string;
  divisionCode: string;
  records: Array<{
    usage1: string;
    usage2: string;
    name: string;
    shortName: string;
    reserve1: string;
    reserve2: string;
    reserve3: string;
  }>;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}

const MasterForm: React.FC<MasterFormProps> = ({
  title,
  year,
  divisionCode,
  records,
  onConfirm,
  onCancel,
  onClose
}) => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-indigo-600 text-white p-4 rounded">
        {title}
      </div>
      <div className="flex items-center my-4">
        <label className="w-24">年度: </label>
        <span>{year}</span>
      </div>
      <div className="flex items-center mb-4">
        <label className="w-24">用語区分: </label>
        <span>{divisionCode}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow-md">
          <thead>
            <tr className="bg-gray-300">
              <th>用語番号1</th>
              <th>用語番号2</th>
              <th>名称</th>
              <th>略名</th>
              <th>予備1</th>
              <th>予備2</th>
              <th>予備3</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className="border-b">
                <td>{record.usage1}</td>
                <td>{record.usage2}</td>
                <td>{record.name}</td>
                <td>{record.shortName}</td>
                <td>{record.reserve1}</td>
                <td>{record.reserve2}</td>
                <td>{record.reserve3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex space-x-4 mt-4">
        <button onClick={onConfirm} className="bg-green-500 text-white py-2 px-4 rounded">
          行確定
        </button>
        <button onClick={onCancel} className="bg-yellow-500 text-white py-2 px-4 rounded">
          行キャンセル
        </button>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterForm;
```