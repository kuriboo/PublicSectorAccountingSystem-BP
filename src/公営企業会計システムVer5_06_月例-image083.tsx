import React from 'react';

// 型定義
type UpdateDialogProps = {
  title: string;
  currentDate: string;
  updateMessage: string;
  onOk: () => void;
  onCancel: () => void;
};

const UpdateDialog: React.FC<UpdateDialogProps> = ({
  title,
  currentDate,
  updateMessage,
  onOk,
  onCancel,
}) => {
  return (
    <div className="max-w-lg mx-auto my-4 p-4 rounded-md shadow-md border border-gray-200 bg-white">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="mt-4 border border-gray-300 p-4">
        <p className="text-sm mb-2">現在の監査終了年月</p>
        <p className="text-xl font-bold text-center">{currentDate}</p>
        <p className="mt-4 text-xs text-blue-800">{updateMessage}</p>
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default UpdateDialog;