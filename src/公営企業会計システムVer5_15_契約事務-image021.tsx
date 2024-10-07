import React from "react";

// Define the types for the component props
type IndustryFilterProps = {
  year: string;
  onYearChange: (value: string) => void;
  onOutputDivisionChange: (value: string) => void;
  onIndustryRangeChange: (start: string, end: string) => void;
  onBusinessNumberRangeChange: (start: string, end: string) => void;
  onAreaChange: (value: string) => void;
  onSubmissionDateChange: (start: string, end: string) => void;
  onBaseDateChange: (value: string) => void;
};

// Define the reusable component
const IndustryFilter: React.FC<IndustryFilterProps> = ({
  year,
  onYearChange,
  onOutputDivisionChange,
  onIndustryRangeChange,
  onBusinessNumberRangeChange,
  onAreaChange,
  onSubmissionDateChange,
  onBaseDateChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">出力区分</label>
        <select
          onChange={(e) => onOutputDivisionChange(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="業種別">業種別</option>
          <option value="業種地区別">業種地区別</option>
          <option value="業者別">業者別</option>
          <option value="地区業者別">地区業者別</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">業種範囲</label>
        <input
          type="text"
          onChange={(e) => onIndustryRangeChange(e.target.value, "")}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="開始"
        />
        <input
          type="text"
          onChange={(e) => onIndustryRangeChange("", e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="終了"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">業者番号範囲</label>
        <input
          type="text"
          onChange={(e) => onBusinessNumberRangeChange(e.target.value, "")}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="開始"
        />
        <input
          type="text"
          onChange={(e) => onBusinessNumberRangeChange("", e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="終了"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">地区</label>
        <select
          onChange={(e) => onAreaChange(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="" disabled selected>
            地区を選択
          </option>
          {/* Add actual area options here */}
          <option value="area1">地区1</option>
          <option value="area2">地区2</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">変更届出日</label>
        <input
          type="date"
          onChange={(e) => onSubmissionDateChange(e.target.value, "")}
          className="border border-gray-300 rounded p-2 w-full"
        />
        <input
          type="date"
          onChange={(e) => onSubmissionDateChange("", e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">指定停止基準日</label>
        <input
          type="date"
          onChange={(e) => onBaseDateChange(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 text-white p-2 rounded mr-2">OK</button>
        <button className="bg-gray-300 p-2 rounded mr-2">クリア</button>
        <button className="bg-gray-300 p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default IndustryFilter;
```