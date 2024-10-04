import React from 'react';

// TypeScriptの型定義
interface UpdateNoticeProps {
  title: string;
  year: string;
  additionalNote: string;
  onOk: () => void;
  onEnd: () => void;
}

const UpdateNotice: React.FC<UpdateNoticeProps> = ({
  title,
  year,
  additionalNote,
  onOk,
  onEnd,
}) => {
  return (
    <div className="p-8 bg-white border rounded-md shadow-md">
      {/* タイトル部分 */}
      <h1 className="text-xl font-bold mb-4">{title}</h1>

      {/* 年号部分 */}
      <div className="border p-4 mb-4">
        <p className="text-lg mb-2">現在の監査終了年月</p>
        <p className="text-xl font-semibold mb-4">{year}</p>
        <p className="text-sm text-blue-700">{additionalNote}</p>
      </div>

      {/* ボタン部分 */}
      <div className="flex justify-end">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          OK
        </button>
        <button
          onClick={onEnd}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default UpdateNotice;