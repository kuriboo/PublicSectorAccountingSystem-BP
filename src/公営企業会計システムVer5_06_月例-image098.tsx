// components/CashFlowForm.tsx
import React from 'react';

// Props type definition for the component
type CashFlowFormProps = {
  date: string;
  method: '間接法' | '直接法';
  unit: '円単位' | '千円単位';
  segment: string;
  onDateChange: (date: string) => void;
  onMethodChange: (method: '間接法' | '直接法') => void;
  onUnitChange: (unit: '円単位' | '千円単位') => void;
  onSegmentChange: (segment: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCsvExport: () => void;
};

const CashFlowForm: React.FC<CashFlowFormProps> = ({
  date,
  method,
  unit,
  segment,
  onDateChange,
  onMethodChange,
  onUnitChange,
  onSegmentChange,
  onSubmit,
  onClear,
  onCsvExport,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 border rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">作表年月</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">計算方式</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              value="間接法"
              checked={method === '間接法'}
              onChange={() => onMethodChange('間接法')}
            />{' '}
            間接法
          </label>
          <label>
            <input
              type="radio"
              value="直接法"
              checked={method === '直接法'}
              onChange={() => onMethodChange('直接法')}
            />{' '}
            直接法
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">金額単位選択</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              value="円単位"
              checked={unit === '円単位'}
              onChange={() => onUnitChange('円単位')}
            />{' '}
            円単位
          </label>
          <label>
            <input
              type="radio"
              value="千円単位"
              checked={unit === '千円単位'}
              onChange={() => onUnitChange('千円単位')}
            />{' '}
            千円単位
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">セグメント</label>
        <input
          type="text"
          value={segment}
          onChange={(e) => onSegmentChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex space-x-4">
        <button onClick={onCsvExport} className="px-4 py-2 bg-gray-300 rounded">
          CSV
        </button>
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded">
          クリア
        </button>
      </div>
    </div>
  );
};

export default CashFlowForm;
