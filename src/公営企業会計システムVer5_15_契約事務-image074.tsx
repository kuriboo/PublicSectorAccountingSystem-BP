import React from 'react';

type FormProps = {
  fiscalYear: string;
  setFiscalYear: (year: string) => void;
  receptionSection: string;
  setReceptionSection: (section: string) => void;
  aggregationType: string;
  setAggregationType: (type: string) => void;
  outputType: string;
  setOutputType: (type: string) => void;
  industryStart: number;
  setIndustryStart: (value: number) => void;
  industryEnd: number;
  setIndustryEnd: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const IndustryForm: React.FC<FormProps> = ({
  fiscalYear,
  setFiscalYear,
  receptionSection,
  setReceptionSection,
  aggregationType,
  setAggregationType,
  outputType,
  setOutputType,
  industryStart,
  setIndustryStart,
  industryEnd,
  setIndustryEnd,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-4">
        <label className="block font-bold">年度</label>
        <input
          type="text"
          value={fiscalYear}
          onChange={e => setFiscalYear(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">受付区分</label>
        <select
          value={receptionSection}
          onChange={e => setReceptionSection(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="工事">工事</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-bold">集計区分</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              value="格付"
              checked={aggregationType === '格付'}
              onChange={e => setAggregationType(e.target.value)}
            />
            格付
          </label>
          <label>
            <input
              type="radio"
              value="分類"
              checked={aggregationType === '分類'}
              onChange={e => setAggregationType(e.target.value)}
            />
            分類
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-bold">出力区分</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              value="落札金額"
              checked={outputType === '落札金額'}
              onChange={e => setOutputType(e.target.value)}
            />
            落札金額
          </label>
          <label>
            <input
              type="radio"
              value="最新契約金額"
              checked={outputType === '最新契約金額'}
              onChange={e => setOutputType(e.target.value)}
            />
            最新契約金額
          </label>
        </div>
      </div>
      <div className="mb-4 flex space-x-2">
        <label className="block font-bold">業種</label>
        <input
          type="number"
          value={industryStart}
          onChange={e => setIndustryStart(parseInt(e.target.value))}
          className="border p-2 rounded w-full"
        />
        <span>~</span>
        <input
          type="number"
          value={industryEnd}
          onChange={e => setIndustryEnd(parseInt(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="flex space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default IndustryForm;
```