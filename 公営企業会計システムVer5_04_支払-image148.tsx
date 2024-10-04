```tsx
import React from 'react';

interface NotificationProps {
  paymentStartDate: string;
  paymentEndDate: string;
  partnerStart: string;
  partnerEnd: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  paymentStartDate,
  paymentEndDate,
  partnerStart,
  partnerEnd,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded shadow-lg max-w-lg mx-auto">
      <h2 className="text-lg font-bold text-purple-700 border-b-2 border-purple-300 mb-4">
        債権者宛振込通知書(メールシーラー)
      </h2>
      <div className="bg-white p-4 rounded shadow-inner">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            支払年月日
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value={paymentStartDate}
              className="bg-blue-100 border-blue-300 border rounded py-1 px-2 mr-2"
              disabled
            />
            <span>~</span>
            <input
              type="text"
              value={paymentEndDate}
              className="bg-blue-100 border-blue-300 border rounded py-1 px-2 ml-2"
              disabled
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            相手先
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value={partnerStart}
              className="bg-blue-100 border-blue-300 border rounded py-1 px-2 mr-2"
              disabled
            />
            <span>~</span>
            <input
              type="text"
              value={partnerEnd}
              className="bg-blue-100 border-blue-300 border rounded py-1 px-2 ml-2"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white py-1 px-4 rounded mr-2"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-gray-700 py-1 px-4 rounded mr-2"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-gray-300 text-gray-700 py-1 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default Notification;
```