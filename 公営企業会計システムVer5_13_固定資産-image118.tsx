import React from 'react';

// TypeScript 型定義
interface RecordManagementFormProps {
  historyTypeOptions: string[];
  statusOptions: string[];
  urgencyOptions: string[];
  onSubmit: () => void;
  onClear: () => void;
}

const RecordManagementForm: React.FC<RecordManagementFormProps> = ({
  historyTypeOptions,
  statusOptions,
  urgencyOptions,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      {/* 作表日付 */}
      <div className="mb-4">
        <label className="block text-gray-700">作表日付</label>
        <input type="text" className="border rounded w-full py-2 px-3" />
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <h2 className="font-bold">範囲指定</h2>
        
        {/* 履歴区分 */}
        <div className="mb-2">
          <label className="block text-gray-700">履歴区分</label>
          <select className="border rounded w-full py-2 px-3">
            {historyTypeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* 完了 */}
        <div className="mb-2">
          <label className="block text-gray-700">完了</label>
          <select className="border rounded w-full py-2 px-3">
            {statusOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* 緊急 */}
        <div className="mb-2">
          <label className="block text-gray-700">緊急</label>
          <select className="border rounded w-full py-2 px-3">
            {urgencyOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* 資産番号 */}
        <div className="mb-2">
          <label className="block text-gray-700">資産番号</label>
          <input type="text" className="border rounded w-full py-2 px-3" />
        </div>

        {/* 固定資産科目 */}
        <div className="mb-2">
          <label className="block text-gray-700">固定資産科目</label>
          <input type="text" className="border rounded w-full py-2 px-3" />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default RecordManagementForm;