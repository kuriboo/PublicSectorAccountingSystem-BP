```tsx
import React from 'react';

// TypeScript Interface for Component Props
interface SearchSettingsProps {
  fiscalYear: number;
  startDate: string;
  endDate: string;
  reportNumber?: string;
  budgetType?: string;
  division?: string;
  section?: string;
  detail?: string;
  amountRange?: [number, number];
  summary?: string;
  onSearch: () => void;
  onReset: () => void;
  onOk: () => void;
  onCancel: () => void;
}

const SearchSettings: React.FC<SearchSettingsProps> = ({
  fiscalYear,
  startDate,
  endDate,
  reportNumber = '',
  budgetType = '',
  division = '',
  section = '',
  detail = '',
  amountRange = [0, 999999999999],
  summary = '',
  onSearch,
  onReset,
  onOk,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Header */}
      <h2 className="text-lg font-bold">検索条件設定</h2>
      
      {/* Fiscal Year and Dates Section */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>年度: {fiscalYear}</div>
        <div>調定日: {startDate} ~ {endDate}</div>
      </div>

      {/* Report Number and Budget Type Section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label>調定番号: </label>
          <input type="text" value={reportNumber} className="border" />
        </div>
        <div>
          <label>予算科目: </label>
          <input type="text" value={budgetType} className="border" />
        </div>
      </div>

      {/* Division, Section, Detail Section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label>節: </label>
          <input type="text" value={division} className="border" />
        </div>
        <div>
          <label>細節: </label>
          <input type="text" value={section} className="border" />
        </div>
        <div>
          <label>明細: </label>
          <input type="text" value={detail} className="border" />
        </div>
      </div>

      {/* Amount Range and Summary Section */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>調定金額: </label>
          <input type="text" value={amountRange[0]} className="border" /> ~ <input type="text" value={amountRange[1]} className="border" />
        </div>
        <div>
          <label>摘要: </label>
          <input type="text" value={summary} className="border" />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onSearch} className="px-4 py-2 bg-blue-500 text-white rounded">表示</button>
        <button onClick={onReset} className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button onClick={onOk} className="px-4 py-2 bg-green-500 text-white rounded">OK</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default SearchSettings;
```