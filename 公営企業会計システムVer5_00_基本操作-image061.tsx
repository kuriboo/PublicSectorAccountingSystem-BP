```tsx
import React from 'react';

// 型定義
type SpreadsheetProps = {
  fiscalYear: string;
  forecastOrActual: string;
  sectionCode: string;
  itemCode: string;
  onValueChange?: (field: string, value: string) => void;
};

// 再利用可能なコンポーネント
const Spreadsheet: React.FC<SpreadsheetProps> = ({
  fiscalYear,
  forecastOrActual,
  sectionCode,
  itemCode,
  onValueChange,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2 p-4 border rounded shadow">
      {/* 会計年度フィールド */}
      <div className="flex flex-col">
        <label className="font-semibold">会計年度 (半角西暦)</label>
        <input
          type="text"
          value={fiscalYear}
          className="border p-1 rounded"
          onChange={(e) => onValueChange?.('fiscalYear', e.target.value)}
        />
      </div>

      {/* 予算または仕訳フィールド */}
      <div className="flex flex-col">
        <label className="font-semibold">「予算」または「仕訳」</label>
        <input
          type="text"
          value={forecastOrActual}
          className="border p-1 rounded"
          onChange={(e) => onValueChange?.('forecastOrActual', e.target.value)}
        />
      </div>

      {/* 歌コードフィールド */}
      <div className="flex flex-col">
        <label className="font-semibold">歌コード</label>
        <input
          type="text"
          value={sectionCode}
          className="border p-1 rounded"
          onChange={(e) => onValueChange?.('sectionCode', e.target.value)}
        />
      </div>

      {/* 項コードフィールド */}
      <div className="flex flex-col">
        <label className="font-semibold">項コード</label>
        <input
          type="text"
          value={itemCode}
          className="border p-1 rounded"
          onChange={(e) => onValueChange?.('itemCode', e.target.value)}
        />
      </div>
    </div>
  );
};

export default Spreadsheet;
```