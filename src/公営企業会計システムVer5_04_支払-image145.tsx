import React from 'react';

// TypeScript interface for component props
interface PaymentScheduleProps {
  scheduledDate: string;
  title?: string;
  onConfirm?: () => void;
  onClear?: () => void;
  onFinish?: () => void;
}

// Reusable component using Tailwind CSS
const PaymentSchedule: React.FC<PaymentScheduleProps> = ({
  scheduledDate,
  title = '支払先分割入力チェックリスト作成',
  onConfirm,
  onClear,
  onFinish,
}) => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-blue-100 p-4 rounded shadow">
        {/* Header Section */}
        <div className="bg-blue-400 text-white p-2 rounded-t text-center">
          {title}
        </div>

        {/* Payment Schedule Section */}
        <div className="bg-white border p-6 mt-4">
          <div className="text-lg text-blue-900 font-semibold">範囲指定</div>
          <div className="mt-4">
            <span className="text-blue-900">支払予定日</span>
            <div className="mt-2 bg-blue-100 p-2 rounded inline-block">
              {scheduledDate}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onConfirm}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-4 rounded"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-4 rounded"
          >
            クリア
          </button>
          <button
            onClick={onFinish}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-4 rounded"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSchedule;
