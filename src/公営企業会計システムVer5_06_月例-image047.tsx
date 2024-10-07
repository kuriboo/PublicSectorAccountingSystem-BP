import React, { useState } from 'react';

// Define the props for the component
interface JournalFilterProps {
  initialDateFrom?: string;
  initialDateTo?: string;
  onConfirm: (dateFrom: string, dateTo: string, types: string[]) => void;
}

// Reusable JournalFilter component
const JournalFilter: React.FC<JournalFilterProps> = ({
  initialDateFrom = '',
  initialDateTo = '',
  onConfirm,
}) => {
  // State to manage inputs
  const [dateFrom, setDateFrom] = useState(initialDateFrom);
  const [dateTo, setDateTo] = useState(initialDateTo);
  const [voucherTypes, setVoucherTypes] = useState<string[]>([]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (type: string) => {
    setVoucherTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl">範囲指定</h2>

      <div className="mt-4">
        <h3 className="text-lg">伝票種類</h3>
        <div className="space-x-4">
          <label>
            <input
              type="checkbox"
              checked={voucherTypes.includes('振替分')}
              onChange={() => handleCheckboxChange('振替分')}
            />
            振替分
          </label>
          <label>
            <input
              type="checkbox"
              checked={voucherTypes.includes('調定分')}
              onChange={() => handleCheckboxChange('調定分')}
            />
            調定分
          </label>
          <label>
            <input
              type="checkbox"
              checked={voucherTypes.includes('支払分')}
              onChange={() => handleCheckboxChange('支払分')}
            />
            支払分
          </label>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg">日付</h3>
        <div className="space-x-4">
          <input
            type="text"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="border p-2"
          />
          <span>～</span>
          <input
            type="text"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="border p-2"
          />
        </div>
      </div>

      <div className="mt-6 space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onConfirm(dateFrom, dateTo, voucherTypes)}
        >
          OK
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => {
            setDateFrom('');
            setDateTo('');
            setVoucherTypes([]);
          }}
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default JournalFilter;
