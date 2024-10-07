import React from 'react';

// Type definitions for component props
interface ReportFormProps {
  year: string;
  onYearChange: (year: string) => void;
  section: string;
  onSectionChange: (section: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  year,
  onYearChange,
  section,
  onSectionChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-md mx-auto py-4">
      <h1 className="text-xl font-bold py-2">損益計算書/貸借対照表</h1>
      
      <div className="border-b-2 mb-4">
        <h2 className="font-semibold">帳票種別</h2>
        <div className="py-2">
          <label className="mr-4">
            <input type="radio" name="reportType" value="損益計算書" defaultChecked /> 損益計算書
          </label>
          <label>
            <input type="radio" name="reportType" value="貸借対照表" /> 貸借対照表
          </label>
        </div>
      </div>

      <div className="border-b-2 mb-4">
        <h2 className="font-semibold">作表条件</h2>
        <div className="flex items-center py-2">
          <label className="mr-2">年度</label>
          <input
            type="text"
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="border p-1"
          />
        </div>
        <div className="flex items-center py-2">
          <label className="mr-2">予算編成区分</label>
          <select value={section} onChange={(e) => onSectionChange(e.target.value)} className="border p-1">
            <option value="1">当初予算</option>
            <option value="2">修正予算</option>
          </select>
        </div>
      </div>

      <div className="border-b-2 mb-4">
        <h2 className="font-semibold">処理概要</h2>
        <p className="py-2">損益計算書・貸借対照表を作成します。</p>
      </div>

      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onSubmit} className="bg-gray-300 hover:bg-gray-400 py-1 px-3 rounded">CSV出力</button>
        <button onClick={onClear} className="bg-gray-300 hover:bg-gray-400 py-1 px-3 rounded">クリア</button>
        <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 py-1 px-3 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```