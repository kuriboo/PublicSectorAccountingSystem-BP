import React from 'react';

// TypeScriptの型定義
interface FormProps {
  startDate: string;
  endDate: string;
  startNumber: string;
  endNumber: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const ReportForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  startNumber,
  endNumber,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">所属別振替伝票(一覧)作成</h2>
      <div className="bg-white p-4 shadow-md rounded">
        <div className="mb-4">
          <label className="block text-gray-700">振替日</label>
          <input
            type="text"
            value={startDate}
            className="border p-2 w-full rounded"
          />
          <span>〜</span>
          <input
            type="text"
            value={endDate}
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">所属</label>
          <input
            type="text"
            value={startNumber}
            className="border p-2 w-48 rounded"
          />
          <span>〜</span>
          <input
            type="text"
            value={endNumber}
            className="border p-2 w-48 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">範囲指定</label>
          <div className="flex items-center space-x-4">
            <input type="radio" name="type" className="mr-2" /> 予算所属
            <input type="radio" name="type" className="mr-2" /> 起案所属
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" className="mr-2" /> 振替分
            <input type="checkbox" className="mr-2" /> 調定分
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">発行区分</label>
          <div className="flex items-center space-x-4">
            <input type="radio" name="issue" className="mr-2" /> 新規
            <input type="radio" name="issue" className="mr-2" /> 再発行
          </div>
        </div>
        <div className="flex space-x-4">
          <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            OK
          </button>
          <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
            クリア
          </button>
          <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;