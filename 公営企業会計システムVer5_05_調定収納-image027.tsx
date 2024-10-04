```tsx
import React from 'react';

// タイプ定義
type SearchFormProps = {
  year: string;
  documentNumberStart: number;
  documentNumberEnd: number;
  dateFrom: string;
  dateTo: string;
  creditor: string;
  amountStart: number;
  amountEnd: number;
  summary: string;
  division: string;
  onDisplay: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
  year,
  documentNumberStart,
  documentNumberEnd,
  dateFrom,
  dateTo,
  creditor,
  amountStart,
  amountEnd,
  summary,
  division,
  onDisplay,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">検索条件設定</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label>年度</label>
          <input type="text" value={year} className="border p-2 w-full" />
        </div>
        <div>
          <label>納付書番号</label>
          <div className="flex">
            <input
              type="number"
              value={documentNumberStart}
              className="border p-2 w-full"
            />
            <span className="mx-2">~</span>
            <input
              type="number"
              value={documentNumberEnd}
              className="border p-2 w-full"
            />
          </div>
        </div>
        <div>
          <label>伝票日付</label>
          <div className="flex">
            <input
              type="date"
              value={dateFrom}
              className="border p-2 w-full"
            />
            <span className="mx-2">~</span>
            <input
              type="date"
              value={dateTo}
              className="border p-2 w-full"
            />
          </div>
        </div>
        <div>
          <label>債務者</label>
          <input type="text" value={creditor} className="border p-2 w-full" />
        </div>
        <div>
          <label>収納金額</label>
          <div className="flex">
            <input
              type="number"
              value={amountStart}
              className="border p-2 w-full"
            />
            <span className="mx-2">~</span>
            <input
              type="number"
              value={amountEnd}
              className="border p-2 w-full"
            />
          </div>
        </div>
        <div>
          <label>摘要</label>
          <input type="text" value={summary} className="border p-2 w-full" />
        </div>
        <div>
          <label>区分</label>
          <div className="flex flex-col">
            <label>
              <input type="radio" name="division" value="受付未" checked={division === '受付未'} /> 受付未
            </label>
            <label>
              <input type="radio" name="division" value="受付済" checked={division === '受付済'} /> 受付済
            </label>
            <label>
              <input type="radio" name="division" value="収納済" checked={division === '収納済'} /> 収納済
            </label>
            <label>
              <input type="radio" name="division" value="すべて" checked={division === 'すべて'} /> すべて
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button onClick={onDisplay} className="bg-blue-500 text-white px-4 py-2 rounded">表示</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default SearchForm;
```