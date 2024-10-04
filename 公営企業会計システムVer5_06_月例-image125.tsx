```tsx
import React from 'react';

// プロパティの型定義
type AccountingFormProps = {
  startDate: string;
  endDate: string;
  startAccountCode: string;
  endAccountCode: string;
  onDateChange: (startDate: string, endDate: string) => void;
  onAccountCodeChange: (startCode: string, endCode: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  startDate,
  endDate,
  startAccountCode,
  endAccountCode,
  onDateChange,
  onAccountCodeChange,
  onSubmit,
  onClear,
}) => {

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-4 mt-4">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      
      {/* 作表日 */}
      <div className="mb-4">
        <label className="block text-gray-700">作表日</label>
        <div className="flex space-x-2">
          <input 
            type="text" 
            value={startDate} 
            onChange={(e) => onDateChange(e.target.value, endDate)} 
            className="border rounded-lg p-2 w-full" 
            placeholder="例: 令和02年04月01日"
          />
          <span>〜</span>
          <input 
            type="text" 
            value={endDate} 
            onChange={(e) => onDateChange(startDate, e.target.value)} 
            className="border rounded-lg p-2 w-full" 
            placeholder="例: 令和03年03月31日"
          />
        </div>
      </div>
      
      {/* 仕訳科目 */}
      <div className="mb-4">
        <label className="block text-gray-700">仕訳科目</label>
        <div className="flex space-x-2">
          <input 
            type="text" 
            value={startAccountCode} 
            onChange={(e) => onAccountCodeChange(e.target.value, endAccountCode)} 
            className="border rounded-lg p-2 w-full" 
            placeholder="00000000"
          />
          <span>〜</span>
          <input 
            type="text" 
            value={endAccountCode} 
            onChange={(e) => onAccountCodeChange(startAccountCode, e.target.value)} 
            className="border rounded-lg p-2 w-full" 
            placeholder="99999999"
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-4">
        <button 
          onClick={onSubmit} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
        >
          CSV出力
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow"
        >
          クリア
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
```