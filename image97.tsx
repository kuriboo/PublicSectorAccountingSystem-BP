```tsx
import React from 'react';

// TypeScript interface for component props
interface DataEntryFormProps {
  year: string;
  contentOptions: string[];
  onSubmit: (selectedOption: string, year: string) => void;
  onClear: () => void;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({
  year,
  contentOptions,
  onSubmit,
  onClear,
}) => {
  const [selectedOption, setSelectedOption] = React.useState<string>(contentOptions[0]);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-200 p-2 rounded-t-lg">
        <span className="text-blue-800 font-bold">入札結果取込更新処理</span>
        <div className="text-right">
          <span className="text-sm">総務課 予算・会計担当</span>
          <br />
          <span className="text-xs">令和05年02月22日</span>
        </div>
      </div>
      
      {/* Form */}
      <div className="bg-white p-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">年度</label>
          <input 
            type="text" 
            className="border p-1 w-16 text-center"
            value={year}
            readOnly
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-2">内容</label>
          <select 
            className="border p-1" 
            value={selectedOption} 
            onChange={e => setSelectedOption(e.target.value)}
          >
            {contentOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button 
            className="ml-4 px-3 py-1 bg-gray-300 border rounded" 
            onClick={() => onSubmit(selectedOption, year)}
          >
            表示
          </button>
        </div>
        {/* Buttons */}
        <div className="flex justify-between">
          <div>
            <button className="mr-2 px-3 py-1 bg-gray-300 border rounded">
              行追加
            </button>
            <button className="px-3 py-1 bg-gray-300 border rounded">
              行削除
            </button>
          </div>
          <button 
            className="px-3 py-1 bg-gray-300 border rounded" 
            onClick={onClear}
          >
            クリア
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="flex justify-between bg-white p-4 rounded-b-lg">
        <button className="px-3 py-1 bg-gray-300 border rounded">
          データ更新
        </button>
        <div>
          <button className="mr-2 px-3 py-1 bg-gray-300 border rounded">
            軽減確定
          </button>
          <button className="px-3 py-1 bg-gray-300 border rounded">
            軽減キャンセル
          </button>
          <button className="ml-4 px-3 py-1 bg-gray-300 border rounded">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataEntryForm;
```