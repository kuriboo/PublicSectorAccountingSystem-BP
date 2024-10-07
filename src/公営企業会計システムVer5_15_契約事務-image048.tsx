// components/NotificationForm.tsx
import React, { FC } from 'react';

// TypeScript type definitions for component props
interface NotificationFormProps {
  year: string;
  category: string;
  submitter: string;
  documentNumber: string;
  sender: string;
  senderDetail: string;
  notificationText: string;
  note: string;
  onOkClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
}

const NotificationForm: FC<NotificationFormProps> = ({
  year,
  category,
  submitter,
  documentNumber,
  sender,
  senderDetail,
  notificationText,
  note,
  onOkClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="bg-blue-200 p-2 rounded-t-md">
        <h1 className="text-lg font-bold">指名通知書</h1>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex items-center space-x-2">
          <label>年度:</label>
          <input type="text" value={year} className="p-1 border rounded" />
          <span>受付区分: {category}</span>
        </div>

        <div>
          <label>作表者: </label>
          <span>{submitter}</span>
        </div>

        <div className="flex items-center space-x-2">
          <label>文書番号:</label>
          <input type="text" value={documentNumber} className="p-1 border rounded" />
        </div>

        <div className="flex items-center space-x-2">
          <label>差出人:</label>
          <input type="text" value={sender} className="p-1 border rounded" />
          <span>{senderDetail}</span>
        </div>

        <div className="space-y-2">
          <label>通知文:</label>
          <textarea value={notificationText} className="w-full p-1 border rounded" rows={4} />
        </div>

        <div className="space-y-2">
          <label>備考:</label>
          <textarea value={note} className="w-full p-1 border rounded" rows={6} />
        </div>

        <div className="flex justify-end space-x-4">
          <button onClick={onOkClick} className="bg-blue-500 text-white p-2 rounded">OK</button>
          <button onClick={onClearClick} className="bg-gray-300 p-2 rounded">クリア</button>
          <button onClick={onCloseClick} className="bg-red-500 text-white p-2 rounded">終了</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationForm;
