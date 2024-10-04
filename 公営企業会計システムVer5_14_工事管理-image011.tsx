```tsx
import React from 'react';

type Props = {
  fiscalYear: string;
  isUpdateable: boolean;
  isNextYearCreated: boolean;
  onFiscalYearChange: (value: string) => void;
  onUpdateableChange: (value: boolean) => void;
  onNextYearCreatedChange: (value: boolean) => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const ManagementMasterComponent: React.FC<Props> = ({
  fiscalYear,
  isUpdateable,
  isNextYearCreated,
  onFiscalYearChange,
  onUpdateableChange,
  onNextYearCreatedChange,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white">
      <h1 className="text-lg font-bold mb-4">工事管理マスタ保守</h1>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">
          工事会帳年度
        </label>
        <input 
          type="text" 
          value={fiscalYear} 
          onChange={(e) => onFiscalYearChange(e.target.value)} 
          className="border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">
          年次更新有無フラグ
        </label>
        <div>
          <label className="mr-4">
            <input 
              type="radio" 
              checked={isUpdateable} 
              onChange={() => onUpdateableChange(true)} 
            />
            年次更新可
          </label>
          <label>
            <input 
              type="radio" 
              checked={!isUpdateable} 
              onChange={() => onUpdateableChange(false)} 
            />
            年次更新不可
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">
          次年度マスタ作成区分
        </label>
        <div>
          <label className="mr-4">
            <input 
              type="radio" 
              checked={!isNextYearCreated} 
              onChange={() => onNextYearCreatedChange(false)} 
            />
            未作成
          </label>
          <label>
            <input 
              type="radio" 
              checked={isNextYearCreated} 
              onChange={() => onNextYearCreatedChange(true)} 
            />
            作成済
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-gray-300 rounded">
          終了
        </button>
      </div>
    </div>
  );
}

export default ManagementMasterComponent;
```