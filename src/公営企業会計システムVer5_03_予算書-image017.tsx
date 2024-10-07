// components/ReportForm.tsx
import React from 'react';

interface ReportFormProps {
  year: string;
  budgetClassification: string;
  count: number;
  settlementType: string;
  reportDate: string;
  formatSize: 'A4 横' | 'A4 縦';
  title: string;
  subtitle: string;
  columnTitle: string;
  includePageNumber: boolean;
  startPage: number;
  collectedDateTime: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  year,
  budgetClassification,
  count,
  settlementType,
  reportDate,
  formatSize,
  title,
  subtitle,
  columnTitle,
  includePageNumber,
  startPage,
  collectedDateTime,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">予定貸借対照表作成</h1>

      <section className="mb-4">
        <h2 className="text-lg">自動仕訳情報</h2>
        <div>
          <label>年度: </label>
          <select value={year} className="border" disabled>
            <option value={year}>{year}</option>
          </select>
        </div>
        <div>
          <label>予算額区分: </label>
          <select value={budgetClassification} className="border" disabled>
            <option value={budgetClassification}>{budgetClassification}</option>
          </select>
        </div>
        <div>
          <label>回数: </label>
          <input 
            type="number" 
            value={count} 
            className="border" 
            disabled
          />
        </div>
        <div>
          <label>金額種別: </label>
          <input 
            type="text" 
            value={settlementType} 
            className="border" 
            disabled
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-lg">作表日</h2>
        <input 
          type="text" 
          value={reportDate} 
          className="border" 
          disabled
        />
      </section>

      <section className="mb-4">
        <h2 className="text-lg">書式</h2>
        <div>
          <label>サイズ: </label>
          <input 
            type="radio" 
            name="formatSize" 
            checked={formatSize === 'A4 横'} 
            readOnly
          /> A4 横
          <input 
            type="radio" 
            name="formatSize" 
            checked={formatSize === 'A4 縦'} 
            readOnly
          /> A4 縦
        </div>
        <div>
          <label>タイトル: </label>
          <input 
            type="text" 
            value={title} 
            className="border" 
            disabled
          />
        </div>
        <div>
          <label>サブタイトル: </label>
          <input 
            type="text" 
            value={subtitle} 
            className="border" 
            disabled
          />
        </div>
        <div>
          <label>柱タイトル: </label>
          <input 
            type="text" 
            value={columnTitle} 
            className="border" 
            disabled
          />
        </div>
        <div>
          <label>頁印字: </label>
          <input 
            type="radio" 
            name="includePageNumber" 
            checked={includePageNumber} 
            readOnly
          /> する
          <input 
            type="radio" 
            name="includePageNumber" 
            checked={!includePageNumber} 
            readOnly
          /> しない
        </div>
        <div>
          <label>開始頁: </label>
          <input 
            type="number" 
            value={startPage} 
            className="border" 
            disabled
          />
        </div>
      </section>

      <div className="mb-4">
        <span>集計日時: {collectedDateTime}</span>
      </div>

      <div className="flex gap-2">
        <button 
          className="bg-blue-500 text-white p-2 rounded" 
          onClick={onSubmit}
        >Excel出力</button>
        <button 
          className="bg-green-500 text-white p-2 rounded" 
          onClick={onSubmit}
        >OK</button>
        <button 
          className="bg-yellow-500 text-white p-2 rounded" 
          onClick={onClear}
        >クリア</button>
        <button 
          className="bg-red-500 text-white p-2 rounded" 
          onClick={onClose}
        >終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```