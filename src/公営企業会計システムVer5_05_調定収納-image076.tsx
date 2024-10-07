// Import necessary packages and components
import React from 'react';

// Define the props type for the component
interface FilterFormProps {
  startDate?: string;
  endDate?: string;
  invoiceNumber?: string;
  onCsvExport?: () => void;
  onConfirm?: () => void;
  onClear?: () => void;
  onClose?: () => void;
}

// Define the FilterForm component
const FilterForm: React.FC<FilterFormProps> = ({
  startDate = '',
  endDate = '',
  invoiceNumber = '',
  onCsvExport,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 space-y-4 bg-gray-100 border rounded-md">
      <h2 className="text-lg font-bold">範囲指定</h2>
      <div className="grid gap-4">
        <div>
          <label className="flex items-center space-x-2">
            <span>調定日</span>
            <input type="date" defaultValue={startDate} className="border p-1 rounded-md" />
            <span>～</span>
            <input type="date" defaultValue={endDate} className="border p-1 rounded-md" />
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <span>伝票番号</span>
            <select defaultValue="平成25">
              <option>平成25</option>
              <option>平成26</option>
            </select>
            <span>年度</span>
            <input type="text" defaultValue={invoiceNumber} className="border p-1 rounded-md" />
            <span>～</span>
            <input type="text" className="border p-1 rounded-md" placeholder="999999" />
          </label>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" id="incompleteOnly" />
        <label htmlFor="incompleteOnly">未納額ありのみを対象</label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="specificAdjustment" />
        <label htmlFor="specificAdjustment">調定済分・労務収納分のみを対象</label>
      </div>

      <div className="flex space-x-4">
        <button onClick={onCsvExport} className="px-4 py-2 bg-gray-300 rounded-md">CSV出力</button>
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded-md">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded-md">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md">終了</button>
      </div>
    </div>
  );
};

export default FilterForm;
```