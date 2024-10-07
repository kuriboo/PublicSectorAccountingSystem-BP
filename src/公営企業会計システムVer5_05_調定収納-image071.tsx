// Import necessary modules and types
import React from 'react';

// Define the props for the component
type FormProps = {
  startDate: string;
  endDate: string;
  startId: number;
  endId: number;
  issuanceType: '新規' | '再発行';
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Define the functional component using TypeScript and Tailwind CSS for styling
const InputForm: React.FC<FormProps> = ({ startDate, endDate, startId, endId, issuanceType, onSubmit, onClear, onClose }) => {
  return (
    <div className="bg-gray-50 p-6 rounded shadow-md">
      <div className="text-lg font-bold mb-4">範囲指定</div>
      <div className="flex items-center mb-4">
        <label className="w-20 text-gray-700">開始日</label>
        <input type="text" value={startDate} className="border border-gray-300 px-2 py-1 mx-2" readOnly />
        <span>~</span>
        <label className="w-16 ml-2 text-gray-700">終了日</label>
        <input type="text" value={endDate} className="border border-gray-300 px-2 py-1 ml-2" readOnly />
      </div>
      <div className="flex items-center mb-4">
        <label className="w-20 text-gray-700">所属</label>
        <input type="number" value={startId} className="border border-gray-300 px-2 py-1 mx-2" readOnly />
        <span>~</span>
        <label className="w-16 ml-2 text-gray-700">所属</label>
        <input type="number" value={endId} className="border border-gray-300 px-2 py-1 ml-2" readOnly />
      </div>
      <div className="flex items-center mb-6">
        <label className="w-20 text-gray-700">発行区分</label>
        <label className="mr-6">
          <input type="radio" checked={issuanceType === '新規'} readOnly className="mr-1" />
          新規
        </label>
        <label>
          <input type="radio" checked={issuanceType === '再発行'} readOnly className="mr-1" />
          再発行
        </label>
      </div>
      <div className="flex space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-700">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-700">終了</button>
      </div>
    </div>
  )
}

export default InputForm;
