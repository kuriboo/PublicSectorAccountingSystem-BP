// Import necessary modules
import React from 'react';

// Define the props for the component
interface FormProps {
  startDate: string;
  endDate: string;
  deliveryNumber: string;
  creditorStart: string;
  creditorEnd: string;
  temporaryCreditor: boolean;
  onStatusChange: (status: string) => void;
}

export const NotificationForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  deliveryNumber,
  creditorStart,
  creditorEnd,
  temporaryCreditor,
  onStatusChange
}) => {
  return (
    <div className="container p-4 border border-gray-300 rounded shadow-lg">
      {/* Date Range */}
      <div className="mb-4">
        <label className="block mb-2 font-bold">伝票日付</label>
        <input 
          type="date" 
          value={startDate} 
          className="border border-gray-400 p-2 mr-2 rounded" 
        />
        <input 
          type="date" 
          value={endDate} 
          className="border border-gray-400 p-2 rounded" 
        />
      </div>

      {/* Delivery Number */}
      <div className="mb-4">
        <label className="block mb-2 font-bold">納付書番号</label>
        <input 
          type="text" 
          value={deliveryNumber} 
          className="border border-gray-400 p-2 w-full rounded" 
        />
      </div>

      {/* Creditor Range */}
      <div className="mb-4">
        <label className="block mb-2 font-bold">債務者</label>
        <input 
          type="text" 
          value={creditorStart} 
          className="border border-gray-400 p-2 mr-2 rounded" 
        />
        <input 
          type="text" 
          value={creditorEnd} 
          className="border border-gray-400 p-2 rounded" 
        />
      </div>

      {/* Temporary Creditor */}
      <div className="mb-4">
        <label className="block mb-2 font-bold">一時債務者</label>
        <input 
          type="checkbox" 
          checked={temporaryCreditor} 
          className="mr-2"
        />
        一時債務者を抽出対象とする
      </div>

      {/* Acceptance Status */}
      <div className="mb-4">
        <label className="block mb-2 font-bold">受付状況</label>
        <div className="space-x-4">
          <label>
            <input 
              type="radio" 
              name="status" 
              value="all" 
              onChange={() => onStatusChange('all')} 
              className="mr-2"
            />
            すべて
          </label>
          <label>
            <input 
              type="radio" 
              name="status" 
              value="not_received" 
              onChange={() => onStatusChange('not_received')} 
              className="mr-2"
            />
            受付未
          </label>
          <label>
            <input 
              type="radio" 
              name="status" 
              value="received" 
              onChange={() => onStatusChange('received')} 
              className="mr-2"
            />
            受付済
          </label>
          <label>
            <input 
              type="radio" 
              name="status" 
              value="stored" 
              onChange={() => onStatusChange('stored')} 
              className="mr-2"
            />
            収納済
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};
