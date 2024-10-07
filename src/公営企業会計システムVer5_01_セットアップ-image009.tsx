import React from 'react';

// TypeScriptの型定義
interface PaymentScheduleProps {
  scheduleDate: string;
  onEdit: () => void;
  onConfirm: () => void;
  onDeleteRow: () => void;
  onCancel: () => void;
}

const PaymentSchedule: React.FC<PaymentScheduleProps> = ({
  scheduleDate,
  onEdit,
  onConfirm,
  onDeleteRow,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl mb-4">支払予定日マスタ</h1>

      <div className="flex mb-4">
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onEdit}>
          編集
        </button>
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded"
          onClick={onDeleteRow}>
          行削除
        </button>
      </div>

      <table className="mb-4 w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">支払予定日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">{scheduleDate}</td>
          </tr>
        </tbody>
      </table>

      <div className="mb-4 border p-4 w-max bg-white">
        <h2 className="mb-2">編集</h2>
        <div className="flex mb-4">
          <label className="mr-2">支払予定日</label>
          <input
            className="border px-2 py-1"
            type="date"
            value={scheduleDate}
            readOnly
          />
        </div>
        <div className="flex">
          <button
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onConfirm}>
            行確定
          </button>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded"
            onClick={onCancel}>
            行キャンセル
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="mr-2 px-4 py-2 bg-green-500 text-white rounded">
          OK
        </button>
        <button className="mr-2 px-4 py-2 bg-orange-500 text-white rounded">
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentSchedule;
```