import React, { ChangeEvent } from 'react';

// 型定義
interface BusinessInfoProps {
  year: string;
  contentOptions: string[];
  onYearChange: (year: string) => void;
  onContentChange: (content: string) => void;
  onShowClick: () => void;
}

const BusinessInfoForm: React.FC<BusinessInfoProps> = ({
  year,
  contentOptions,
  onYearChange,
  onContentChange,
  onShowClick,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="flex items-center mb-4">
        <label htmlFor="year" className="mr-2 text-md font-semibold">年度</label>
        <select
          id="year"
          className="border rounded-md p-1 mr-4"
          value={year}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onYearChange(e.target.value)}
        >
          <option value="令和004">令和004</option>
          {/* 他の年度のオプションを追加可能 */}
        </select>

        <label htmlFor="content" className="mr-2 text-md font-semibold">内容</label>
        <select
          id="content"
          className="border rounded-md p-1 mr-4"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onContentChange(e.target.value)}
        >
          {contentOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={onShowClick}
        >
          表示
        </button>
      </div>
    </div>
  );
};

export default BusinessInfoForm;