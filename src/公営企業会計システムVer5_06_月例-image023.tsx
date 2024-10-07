import React from 'react';

// TypeScriptの型定義
interface DateRangeSelectorProps {
  headerTitle: string;
  organizationName: string;
  creatorRole: string;
  systemDate: string;
  createdDate: string;
  startDate: string;
  endDate: string;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  headerTitle,
  organizationName,
  creatorRole,
  systemDate,
  createdDate,
  startDate,
  endDate,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      {/* ヘッダ情報の表示 */}
      <div className="bg-purple-100 text-purple-800 p-2 mb-4">
        <h1 className="font-bold">{headerTitle}</h1>
        <div className="text-right text-sm">
          <p>{organizationName}</p>
          <p>{creatorRole}</p>
          <p>{systemDate}</p>
        </div>
      </div>

      {/* 範囲指定セクション */}
      <div className="border p-4 mb-4">
        <h2 className="font-bold text-blue-800 mb-2">範囲指定</h2>
        <div className="mb-2">
          <label className="block">作表日: <span className="text-blue-600">{createdDate}</span></label>
        </div>
        <div className="mb-2">
          <label className="block">集計日: <span className="text-teal-600">{startDate}</span> ～ <span className="text-teal-600">{endDate}</span></label>
        </div>
      </div>

      {/* ボタンの配置 */}
      <div className="flex justify-end space-x-4">
        <button onClick={onConfirm} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">OK</button>
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">クリア</button>
        <button onClick={onClose} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">終了</button>
      </div>
    </div>
  );
};

export default DateRangeSelector;
