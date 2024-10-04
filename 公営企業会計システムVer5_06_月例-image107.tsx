```tsx
import React from 'react';

// TypeScriptの型定義
type AccountingFormProps = {
  reportDateFrom: string;
  reportDateTo: string;
  accountCodeFrom: string;
  accountCodeTo: string;
  accountDetailFrom: string;
  accountDetailTo: string;
  onOptionChange: (option: string) => void;
  selectedOption: string;
  onExportClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  reportDateFrom,
  reportDateTo,
  accountCodeFrom,
  accountCodeTo,
  accountDetailFrom,
  accountDetailTo,
  onOptionChange,
  selectedOption,
  onExportClick,
  onClearClick,
  onCloseClick
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      
      {/* 作表日 */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">作表日</label>
        <input type="text" value={reportDateFrom} className="border p-2 w-full" readOnly />
        <span className="mx-2">~</span>
        <input type="text" value={reportDateTo} className="border p-2 w-full" readOnly />
      </div>
      
      {/* 仕訳科目 */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">仕訳科目</label>
        <input type="text" value={accountCodeFrom} className="border p-2 w-full" readOnly />
        <span className="mx-2">~</span>
        <input type="text" value={accountCodeTo} className="border p-2 w-full" readOnly />
      </div>
      
      {/* 仕訳細節 */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">仕訳細節</label>
        <input type="text" value={accountDetailFrom} className="border p-2 w-full" readOnly />
        <span className="mx-2">~</span>
        <input type="text" value={accountDetailTo} className="border p-2 w-full" readOnly />
      </div>
      
      {/* 集計対象 */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">集計対象</label>
        <div className="flex items-center">
          <label className="mr-2">
            <input 
              type="radio" 
              name="sumTarget" 
              value="全体" 
              checked={selectedOption === '全体'} 
              onChange={() => onOptionChange('全体')} 
            />
            全体
          </label>
          <label className="mr-2">
            <input 
              type="radio" 
              name="sumTarget" 
              value="ブロック" 
              checked={selectedOption === 'ブロック'} 
              onChange={() => onOptionChange('ブロック')} 
            />
            ブロック
          </label>
          <label>
            <input 
              type="radio" 
              name="sumTarget" 
              value="セグメント" 
              checked={selectedOption === 'セグメント'} 
              onChange={() => onOptionChange('セグメント')} 
            />
            セグメント
          </label>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onExportClick} className="bg-blue-500 text-white py-2 px-4 rounded">
          CSV出力
        </button>
        <button onClick={onClearClick} className="bg-gray-500 text-white py-2 px-4 rounded">
          クリア
        </button>
        <button onClick={onCloseClick} className="bg-red-500 text-white py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
```