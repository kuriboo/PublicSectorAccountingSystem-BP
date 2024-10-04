```tsx
import React from 'react';

type NotificationFormProps = {
  applicantName: string;
  location: string;
  address: string;
  phone: string;
  agencyName: string;
  agencyPhone: string;
  determinationDate: string;
  paymentDeadline: string;
  description: string[];
  onSave: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const NotificationForm: React.FC<NotificationFormProps> = ({
  applicantName,
  location,
  address,
  phone,
  agencyName,
  agencyPhone,
  determinationDate,
  paymentDeadline,
  description,
  onSave,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 space-y-4 bg-gray-200">
      {/* Header */}
      <div className="bg-blue-300 p-2 rounded text-center font-bold">
        納入通知書登録
      </div>

      {/* Applicant and Agency Info */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-2 rounded shadow">
          <h2 className="font-semibold">申請者情報</h2>
          <p>氏名: {applicantName}</p>
          <p>施工場所: {location}</p>
          <p>住所: {address}</p>
          <p>電話番号: {phone}</p>
        </div>
        <div className="bg-white p-2 rounded shadow">
          <h2 className="font-semibold">工事代理人情報</h2>
          <p>工事店: {agencyName}</p>
          <p>電話番号: {agencyPhone}</p>
        </div>
      </div>

      {/* Dates and Description */}
      <div className="bg-white p-2 rounded shadow">
        <h2 className="font-semibold">日付と概要</h2>
        <p>調定日: {determinationDate}</p>
        <p>納付期限: {paymentDeadline}</p>
        <div>
          <h3 className="font-semibold">摘要:</h3>
          <ul>
            {description.map((desc, index) => <li key={index}>{desc}</li>)}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onSave}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={onEnd}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default NotificationForm;
```