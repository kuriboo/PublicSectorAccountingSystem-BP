import React from 'react';

// Props interface for the component
interface ReportFormProps {
  date: string;
  onDateChange: (date: string) => void;
  reportDivision: string;
  onReportDivisionChange: (division: string) => void;
  format: string;
  onFormatChange: (format: string) => void;
  accountCodeStart: string;
  accountCodeEnd: string;
  onAccountCodeChange: (start: string, end: string) => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  date,
  onDateChange,
  reportDivision,
  onReportDivisionChange,
  format,
  onFormatChange,
  accountCodeStart,
  accountCodeEnd,
  onAccountCodeChange,
}) => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">会計別固定資産明細表作成</h1>
      
      {/* 作表年月日 */}
      <div className="mb-4">
        <label className="block text-gray-700">作表年月日</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      
      {/* 作表区分 */}
      <div className="mb-4">
        <label className="block text-gray-700">作表区分</label>
        <div>
          {['節', '細節', '明細'].map((option) => (
            <label className="mr-4" key={option}>
              <input
                type="radio"
                value={option}
                checked={reportDivision === option}
                onChange={(e) => onReportDivisionChange(e.target.value)}
                className="mr-1"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      
      {/* 書式区分 */}
      <div className="mb-4">
        <label className="block text-gray-700">書式区分</label>
        <div>
          {['有形', '無形'].map((option) => (
            <label className="mr-4" key={option}>
              <input
                type="radio"
                value={option}
                checked={format === option}
                onChange={(e) => onFormatChange(e.target.value)}
                className="mr-1"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="block text-gray-700">会計区分コード</label>
        <div className="flex items-center">
          <input
            type="text"
            value={accountCodeStart}
            onChange={(e) => onAccountCodeChange(e.target.value, accountCodeEnd)}
            className="p-2 border rounded mr-2 w-20"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={accountCodeEnd}
            onChange={(e) => onAccountCodeChange(accountCodeStart, e.target.value)}
            className="p-2 border rounded w-20"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="bg-gray-300 text-black px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
