import React from 'react';

// TypeScript interface for component props
interface FormProps {
  date: string; // 作表日
  reportType: '日次' | '月次'; // 作表区分
  target: '全体' | 'ブロック' | 'セグメント'; // 集計対象
  area?: string; // Optional: 地区
  onSubmit: () => void; // Function to execute on OK button click
  onClear: () => void; // Function to execute on Clear button click
}

// Reusable form component
const ReportForm: React.FC<FormProps> = ({
  date,
  reportType,
  target,
  area,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 border-2 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">銀行預金別資金残高表作成</h2>
      
      <div className="mb-4">
        <label className="block text-blue-600 mb-1">作表日</label>
        <input
          type="text"
          value={date}
          readOnly
          className="p-2 border-2 rounded w-full"
        />
      </div>
      
      <div className="mb-4">
        <div className="mb-2">
          <span className="block text-blue-600">作表区分</span>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                value="日次"
                checked={reportType === '日次'}
                readOnly
              />{' '}
              日次
            </label>
            <label>
              <input
                type="radio"
                value="月次"
                checked={reportType === '月次'}
                readOnly
              />{' '}
              月次
            </label>
          </div>
        </div>
        
        <div>
          <span className="block text-blue-600 mb-2">集計対象</span>
          <label className="mr-4">
            <input
              type="radio"
              value="全体"
              checked={target === '全体'}
              readOnly
            />{' '}
            全体
          </label>
          <label className="mr-4">
            <input
              type="radio"
              value="ブロック"
              checked={target === 'ブロック'}
              readOnly
            />{' '}
            ブロック
          </label>
          <label>
            <input
              type="radio"
              value="セグメント"
              checked={target === 'セグメント'}
              readOnly
            />{' '}
            セグメント
          </label>
        </div>

        {target === 'セグメント' && (
          <div className="mt-4">
            <select value={area} className="p-2 border-2 rounded w-full">
              <option value="20">20 第一地区</option>
              {/* Add more options as needed */}
            </select>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white p-2 rounded mr-2"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-300 p-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
