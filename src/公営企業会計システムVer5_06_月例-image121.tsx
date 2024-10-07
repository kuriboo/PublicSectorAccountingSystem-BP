import React from 'react';

// 型定義
type AccountingFormProps = {
  startDate: string;
  endDate: string;
  onDateChange: (start: string, end: string) => void;
  includeSettlement: boolean;
  onSettlementChange: (include: boolean) => void;
  aggregationTarget: 'overall' | 'block' | 'segment';
  onAggregationChange: (target: 'overall' | 'block' | 'segment') => void;
  onExportClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
};

// コンポーネント定義
const AccountingForm: React.FC<AccountingFormProps> = ({
  startDate,
  endDate,
  onDateChange,
  includeSettlement,
  onSettlementChange,
  aggregationTarget,
  onAggregationChange,
  onExportClick,
  onClearClick,
  onCloseClick
}) => {
  return (
    <div className="p-6 bg-gray-100 border rounded-lg max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">当月集計日付</label>
        <div className="mt-1 flex space-x-2">
          <input
            type="text"
            value={startDate}
            onChange={(e) => onDateChange(e.target.value, endDate)}
            className="w-36 px-2 py-1 border rounded-md"
          />
          <span>~</span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onDateChange(startDate, e.target.value)}
            className="w-36 px-2 py-1 border rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <fieldset>
          <legend className="text-sm font-medium text-gray-700">決算仕訳</legend>
          <div className="mt-1 space-x-4 flex">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="settlement"
                checked={includeSettlement}
                onChange={() => onSettlementChange(true)}
              />
              <span>含む</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="settlement"
                checked={!includeSettlement}
                onChange={() => onSettlementChange(false)}
              />
              <span>含まない</span>
            </label>
          </div>
        </fieldset>
      </div>

      <div className="mb-6">
        <fieldset>
          <legend className="text-sm font-medium text-gray-700">集計対象</legend>
          <div className="mt-1 space-x-4 flex">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="aggregationTarget"
                checked={aggregationTarget === 'overall'}
                onChange={() => onAggregationChange('overall')}
              />
              <span>全体</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="aggregationTarget"
                checked={aggregationTarget === 'block'}
                onChange={() => onAggregationChange('block')}
              />
              <span>ブロック</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="aggregationTarget"
                checked={aggregationTarget === 'segment'}
                onChange={() => onAggregationChange('segment')}
              />
              <span>セグメント</span>
            </label>
          </div>
        </fieldset>
      </div>

      <div className="flex justify-end space-x-4">
        <button 
          onClick={onExportClick} 
          className="px-4 py-2 bg-blue-600 text-white rounded-md">
          CSV出力
        </button>
        <button 
          onClick={onClearClick} 
          className="px-4 py-2 bg-gray-300 text-black rounded-md">
          クリア
        </button>
        <button 
          onClick={onCloseClick} 
          className="px-4 py-2 bg-red-600 text-white rounded-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;