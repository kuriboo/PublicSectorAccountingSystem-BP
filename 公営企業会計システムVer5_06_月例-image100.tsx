import React, { useState } from 'react';

// TypeScriptの型定義
type CashFlowFormProps = {
  initialDate: string;
  // その他のプロパティを追加することで、カスタマイズ可能に
  onCsvExport: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
  className?: string;
};

const CashFlowForm: React.FC<CashFlowFormProps> = ({
  initialDate,
  onCsvExport,
  onOk,
  onClear,
  onClose,
  className = '',
}) => {
  const [date, setDate] = useState(initialDate);
  const [calculationMethod, setCalculationMethod] = useState('間接法');
  const [segment, setSegment] = useState('');
  const [currencyUnit, setCurrencyUnit] = useState('円単位');

  return (
    <div className={`p-4 bg-white shadow-md rounded ${className}`}>
      <h1 className="text-xl font-semibold mb-4">範囲指定</h1>
      <div className="mb-4">
        <label className="block mb-1">作表年月</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">計算方式</label>
        <div className="flex items-center">
          <label className="mr-2">
            <input
              type="radio"
              value="間接法"
              checked={calculationMethod === '間接法'}
              onChange={() => setCalculationMethod('間接法')}
            />
            間接法
          </label>
          <label>
            <input
              type="radio"
              value="直接法"
              checked={calculationMethod === '直接法'}
              onChange={() => setCalculationMethod('直接法')}
            />
            直接法
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">セグメント</label>
        <input
          type="text"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          className="border border-gray-300 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">金額単位選択</label>
        <div className="flex items-center">
          <label className="mr-2">
            <input
              type="radio"
              value="円単位"
              checked={currencyUnit === '円単位'}
              onChange={() => setCurrencyUnit('円単位')}
            />
            円単位
          </label>
          <label>
            <input
              type="radio"
              value="千円単位"
              checked={currencyUnit === '千円単位'}
              onChange={() => setCurrencyUnit('千円単位')}
            />
            千円単位
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={onCsvExport} className="bg-gray-200 px-4 py-2 rounded mr-2">
          CSV
        </button>
        <div className="flex">
          <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            OK
          </button>
          <button onClick={onClear} className="bg-yellow-400 text-white px-4 py-2 rounded mr-2">
            クリア
          </button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashFlowForm;