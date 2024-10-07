// components/PresetCalculationForm.tsx

import React from 'react';

// Type definitions for props
interface PresetCalculationFormProps {
  year: string;
  budgetType: string;
  occurrence: number;
  totalType: string;
  startDate: string;
  endDate: string;
  formSize: string;
  title: string;
  subtitle: string;
  columnTitle: string;
  includePageNumber: boolean;
  startPage: number;
  collectionDateTime: string;
  onExcelExport: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const PresetCalculationForm: React.FC<PresetCalculationFormProps> = ({
  year,
  budgetType,
  occurrence,
  totalType,
  startDate,
  endDate,
  formSize,
  title,
  subtitle,
  columnTitle,
  includePageNumber,
  startPage,
  collectionDateTime,
  onExcelExport,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Automatic Translation Information */}
      <div className="mb-4">
        <h2>自動仕様情報</h2>
        <div>
          <label>年度: </label>
          <input type="text" value={year} readOnly className="bg-white border p-1" />
        </div>
        <div>
          <label>予算種成区分: </label>
          <input type="text" value={budgetType} readOnly className="bg-white border p-1" />
        </div>
        <div>
          <label>回数: </label>
          <input type="number" value={occurrence} readOnly className="bg-white border p-1" />
        </div>
        <div>
          <label>金額種別: </label>
          <input type="text" value={totalType} readOnly className="bg-white border p-1" />
        </div>
      </div>

      {/* Accounting Period */}
      <div className="mb-4">
        <h2>会計期間</h2>
        <input type="text" value={startDate} readOnly className="bg-white border p-1" />
        <span> ~ </span>
        <input type="text" value={endDate} readOnly className="bg-white border p-1" />
      </div>

      {/* Document Format */}
      <div className="mb-4">
        <h2>書式</h2>
        <div>
          <label>サイズ: </label>
          <input type="text" value={formSize} readOnly className="bg-white border p-1" />
        </div>
        <div>
          <label>タイトル: </label>
          <input type="text" value={title} readOnly className="bg-white border p-1" />
        </div>
        <div>
          <label>サブタイトル: </label>
          <input type="text" value={subtitle} readOnly className="bg-white border p-1" />
        </div>
        <div>
          <label>柱タイトル: </label>
          <input type="text" value={columnTitle} readOnly className="bg-white border p-1" />
        </div>
        <div>
          <label>頁数字: </label>
          <span className="mr-2">{includePageNumber ? 'する' : 'しない'}</span>
        </div>
        <div>
          <label>開始頁: </label>
          <input type="number" value={startPage} readOnly className="bg-white border p-1" />
        </div>
      </div>

      {/* Data Collection Date and Time */}
      <div className="mb-4">
        <h2>集計日時</h2>
        <input type="text" value={collectionDateTime} readOnly className="bg-white border p-1" />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onExcelExport} className="bg-gray-300 px-3 py-1 rounded">Excel出力</button>
        <button onClick={onSubmit} className="bg-gray-300 px-3 py-1 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-3 py-1 rounded">クリア</button>
        <button onClick={onExit} className="bg-gray-300 px-3 py-1 rounded">終了</button>
      </div>
    </div>
  );
};

export default PresetCalculationForm;
