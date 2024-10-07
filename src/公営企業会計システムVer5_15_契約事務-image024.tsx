// components/NotificationForm.tsx
import React from 'react';

type Option = {
  label: string;
  value: string;
};

type NotificationFormProps = {
  years: Option[];
  receptionCategories: Option[];
  documentNumbers: Option[];
  senders: Option[];
  remarks: string[];
  onSubmit: () => void;
  onClear: () => void;
  onComplete: () => void;
};

const NotificationForm: React.FC<NotificationFormProps> = ({
  years,
  receptionCategories,
  documentNumbers,
  senders,
  remarks,
  onSubmit,
  onClear,
  onComplete,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">入札参加認定通知書</h2>

      <div className="mb-4">
        <label className="block font-bold">年度</label>
        <select className="border p-2 rounded">
          {years.map((year) => (
            <option key={year.value} value={year.value}>
              {year.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold">受付区分</label>
        <select className="border p-2 rounded">
          {receptionCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold">文書番号</label>
        <select className="border p-2 rounded">
          {documentNumbers.map((doc) => (
            <option key={doc.value} value={doc.value}>
              {doc.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold">差出人</label>
        <select className="border p-2 rounded">
          {senders.map((sender) => (
            <option key={sender.value} value={sender.value}>
              {sender.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold">備考</label>
        <textarea className="border p-2 rounded w-full" rows={5}>
          {remarks.join('\n')}
        </textarea>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={onComplete}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default NotificationForm;
