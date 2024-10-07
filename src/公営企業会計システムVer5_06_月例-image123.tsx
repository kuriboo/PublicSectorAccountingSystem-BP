import React, { FC } from 'react';
import 'tailwindcss/tailwind.css';

// Type definitions for component props
interface ReportFormProps {
  startDate: string;
  endDate: string;
  departmentCode: string;
  isSummaryOnly: boolean;
  excludeRequestIssue: boolean;
  onCsvExport: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Component definition
const ReportForm: FC<ReportFormProps> = ({
  startDate,
  endDate,
  departmentCode,
  isSummaryOnly,
  excludeRequestIssue,
  onCsvExport,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 border rounded shadow-md max-w-xl mx-auto">
      <h1 className="text-lg font-bold mb-4">総勘定内訳簿EUC</h1>
      
      <div className="mb-4">
        <label className="block mb-1">作表日</label>
        <input 
          type="text" 
          value={startDate} 
          className="w-full p-2 border rounded mb-2" 
          readOnly 
        />
        <input 
          type="text" 
          value={endDate} 
          className="w-full p-2 border rounded" 
          readOnly 
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-1">仕訳科目</label>
        <input 
          type="text" 
          value={departmentCode} 
          className="w-full p-2 border rounded" 
          readOnly 
        />
      </div>
      
      <div className="mb-4">
        <fieldset>
          <legend className="block mb-1">集計対象</legend>
          <label className="mr-2">
            <input type="radio" name="target" defaultChecked /> 全体
          </label>
          <label className="mr-2">
            <input type="radio" name="target" /> ブロック
          </label>
          <label>
            <input type="radio" name="target" /> セグメント
          </label>
        </fieldset>
      </div>
      
      <div className="mb-4">
        <label className="block mb-1">
          <input 
            type="checkbox" 
            checked={isSummaryOnly} 
            readOnly 
          /> 
          「帳簿の保存」のみの伝票を出力する
        </label>
        
        <label className="block">
          <input 
            type="checkbox" 
            checked={excludeRequestIssue} 
            readOnly 
          /> 
          「適格請求書発行事業者以外」のみの伝票を出力する
        </label>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={onCsvExport} 
          className="flex-1 bg-blue-500 text-white py-2 rounded">CSV出力</button>
          
        <button 
          onClick={onClear} 
          className="flex-1 bg-gray-200 py-2 rounded">クリア</button>
          
        <button 
          onClick={onClose} 
          className="flex-1 bg-red-500 text-white py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```