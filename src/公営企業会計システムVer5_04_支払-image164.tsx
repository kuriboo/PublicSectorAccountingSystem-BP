import React from 'react';

// TypeScriptの型定義
type ReturnInfoProps = {
  amount: number;
  detailType: string;
  detail: string;
  description: string;
  date: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
  className?: string;
};

const ReturnInfo: React.FC<ReturnInfoProps> = ({
  amount,
  detailType,
  detail,
  description,
  date,
  onConfirm,
  onClear,
  onCancel,
  className = '',
}) => {
  return (
    <div className={`p-4 bg-white border rounded ${className}`}>
      {/* 金額と日付 */}
      <div className="mb-4">
        <div className="flex justify-between">
          <label>戻入額: </label>
          <span>{amount}</span>
        </div>
        <div className="flex justify-between mt-2">
          <label>納入期限: </label>
          <span>{date}</span>
        </div>
      </div>

      {/* 相手方科目 */}
      <div className="mb-4 border p-2">
        <label>相手方科目</label>
        <div className="mt-2">
          <input
            type="text"
            value={detailType}
            readOnly
            className="border p-1 mr-2"
          />
          <input
            type="text"
            value={detail}
            readOnly
            className="border p-1"
          />
        </div>
        <button className="mt-2 p-1 bg-blue-500 text-white rounded">科目検索</button>
      </div>

      {/* 戻入摘要 */}
      <div className="mb-4">
        <label>戻入摘要</label>
        <input
          type="text"
          value={description}
          readOnly
          className="border p-1 w-full mt-2"
        />
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onConfirm} className="p-2 bg-gray-200 rounded">OK</button>
        <button onClick={onClear} className="p-2 bg-gray-200 rounded">クリア</button>
        <button onClick={onCancel} className="p-2 bg-gray-200 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ReturnInfo;
