import React from 'react';

type SegmentReportProps = {
  startMonth: string;
  endMonth: string;
  startSubject: string;
  endSubject: string;
  classification: 'Section' | 'Subsection' | 'Detail';
  onExportCSV: () => void;
  onClear: () => void;
  onClose: () => void;
};

const SegmentReport: React.FC<SegmentReportProps> = ({
  startMonth,
  endMonth,
  startSubject,
  endSubject,
  classification,
  onExportCSV,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold text-center mb-4">セグメント別仕訳金額一覧</h1>

      <div className="border p-4 rounded mb-4">
        <h2 className="text-lg font-semibold mb-2">範囲指定</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">作表年月</label>
          <div className="flex items-center">
            <input
              type="text"
              value={startMonth}
              readOnly
              className="border px-2 py-1 rounded mr-2"
            />
            <span>～</span>
            <input
              type="text"
              value={endMonth}
              readOnly
              className="border px-2 py-1 rounded ml-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">仕訳科目</label>
          <div className="flex items-center">
            <input
              type="text"
              value={startSubject}
              readOnly
              className="border px-2 py-1 rounded mr-2"
            />
            <span>～</span>
            <input
              type="text"
              value={endSubject}
              readOnly
              className="border px-2 py-1 rounded ml-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">作表区分</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                checked={classification === 'Section'}
                readOnly
                className="form-radio"
              />
              <span className="ml-2">節</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                checked={classification === 'Subsection'}
                readOnly
                className="form-radio"
              />
              <span className="ml-2">細節</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={classification === 'Detail'}
                readOnly
                className="form-radio"
              />
              <span className="ml-2">明細</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onExportCSV}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default SegmentReport;
```