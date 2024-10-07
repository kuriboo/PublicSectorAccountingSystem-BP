import React from 'react';

// Define TypeScript types for component props
interface SearchFormProps {
  year: string;
  minNumber: string;
  maxNumber: string;
  minLocation: string;
  maxLocation: string;
  onChange: (key: string, value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  year,
  minNumber,
  maxNumber,
  minLocation,
  maxLocation,
  onChange,
  onSearch,
  onClear
}) => {
  return (
    <div className="p-8">
      <div className="border p-4 rounded">
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-xl">年度</label>
          <select 
            className="border rounded p-2"
            value={year}
            onChange={(e) => onChange('year', e.target.value)}
          >
            <option value="平成29">平成29</option>
            <option value="令和1">令和1</option>
            {/* Other year options can be added here */}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="font-semibold">伝票番号</label>
            <div className="flex space-x-2">
              <input 
                type="text" 
                className="border rounded p-2" 
                value={minNumber}
                onChange={(e) => onChange('minNumber', e.target.value)}
              />
              <span>～</span>
              <input 
                type="text" 
                className="border rounded p-2" 
                value={maxNumber}
                onChange={(e) => onChange('maxNumber', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">保管場所</label>
            <div className="flex space-x-2">
              <input 
                type="text" 
                className="border rounded p-2" 
                value={minLocation}
                onChange={(e) => onChange('minLocation', e.target.value)}
              />
              <span>～</span>
              <input 
                type="text" 
                className="border rounded p-2" 
                value={maxLocation}
                onChange={(e) => onChange('maxLocation', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold">印刷対象</label>
          <div className="flex space-x-2">
            <label><input type="checkbox" /> 発注予定</label>
            <label><input type="checkbox" /> 契約発注</label>
            <label><input type="checkbox" /> 入庫</label>
            <label><input type="checkbox" /> 出庫</label>
            <label><input type="checkbox" /> 仮出庫</label>
            <label><input type="checkbox" /> 出庫予定</label>
          </div>
        </div>

        <div className="flex space-x-4">
          <button 
            className="bg-blue-500 text-white p-2 rounded" 
            onClick={onSearch}
          >
            OK
          </button>
          <button 
            className="bg-red-500 text-white p-2 rounded" 
            onClick={onClear}
          >
            クリア
          </button>
          <button 
            className="bg-gray-500 text-white p-2 rounded" 
            onClick={() => alert('終了機能は実装されていません。')}
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
