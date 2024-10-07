// components/DataExportForm.tsx

import React from 'react';

// Define the props type
interface DataExportFormProps {
  segments: string[];
  onYearChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMethodChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSegmentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onOutputClick: () => void;
  year: string;
  method: string;
  reportNumber: string;
}

// Create the component
const DataExportForm: React.FC<DataExportFormProps> = ({
  segments,
  onYearChange,
  onMethodChange,
  onSegmentChange,
  onOutputClick,
  year,
  method,
  reportNumber
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">キャッシュ・フロー集計伝票突合CSV作成</h1>
      <div className="mb-4">
        <label className="mr-2">集計年度</label>
        <input
          type="text"
          value={year}
          onChange={onYearChange}
          className="border rounded p-1"
          placeholder="例えば：令和04"
        />

        <label className="ml-4 mr-2">年度</label>
        <input
          type="text"
          className="border rounded p-1"
          placeholder="年度"
        />

        <label className="ml-4 mr-2">セグメント</label>
        <select
          onChange={onSegmentChange}
          className="border rounded p-1"
        >
          {segments.map((segment, index) => (
            <option key={index} value={segment}>{segment}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">計算方式</label>
        <div>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="method"
              value="間接法"
              checked={method === '間接法'}
              onChange={onMethodChange}
              className="form-radio"
            />
            <span className="ml-1">間接法</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="method"
              value="直接法"
              checked={method === '直接法'}
              onChange={onMethodChange}
              className="form-radio"
            />
            <span className="ml-1">直接法</span>
          </label>
        </div>
      </div>

      <div className="border p-2 mb-4">
        <p>作表番号ごとに集計した伝票一覧を出力します。</p>
        <p>作表番号を指定しない場合、すべての集計伝票を作表番号ごとに出力します。</p>
        
        <label className="mr-2">作表番号</label>
        <input
          type="text"
          value={reportNumber}
          className="border rounded p-1"
        />
        <button
          onClick={onOutputClick}
          className="ml-2 bg-blue-500 text-white rounded p-1"
        >
          CSV出力
        </button>
      </div>

      <button className="bg-gray-300 rounded p-2 mr-2">クリア</button>
      <button className="bg-gray-300 rounded p-2">終了</button>
    </div>
  );
};

export default DataExportForm;

```tsx
// Usage example (e.g., in a page or another component)

import DataExportForm from './components/DataExportForm';
import { useState } from 'react';

const ExamplePage = () => {
  const [year, setYear] = useState('');
  const [method, setMethod] = useState('間接法');
  const [segment, setSegment] = useState('');
  const [reportNumber, setReportNumber] = useState('');

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethod(event.target.value);
  };

  const handleSegmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSegment(event.target.value);
  };

  const handleOutputClick = () => {
    // Handle CSV output logic
    console.log('CSV出力 clicked');
  };

  return (
    <DataExportForm
      segments={['セグメント1', 'セグメント2']}
      onYearChange={handleYearChange}
      onMethodChange={handleMethodChange}
      onSegmentChange={handleSegmentChange}
      onOutputClick={handleOutputClick}
      year={year}
      method={method}
      reportNumber={reportNumber}
    />
  );
};

export default ExamplePage;
