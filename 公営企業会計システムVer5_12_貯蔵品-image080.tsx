```tsx
import React from 'react';

// タイプ定義
interface ShelfResultsFormProps {
  decisionType: '管理者' | '予物';
  yearMonth: string;
  storageLocationRange: { start: string; end: string };
  itemNumberRange: { start: string; end: string };
  adjustmentType: 'すべて' | '棚卸増' | '棚卸減';
  printUnadjustedItems: boolean;
  printNonZeroItems: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const ShelfResultsForm: React.FC<ShelfResultsFormProps> = ({
  decisionType,
  yearMonth,
  storageLocationRange,
  itemNumberRange,
  adjustmentType,
  printUnadjustedItems,
  printNonZeroItems,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">棚卸結果表作成</h1>
      
      <div className="mb-4">
        <h2 className="font-semibold text-sm mb-2">棚卸結果表範囲入力</h2>
        <div className="mb-2">
          決裁区分: {decisionType}
        </div>
        <div className="mb-2">
          棚卸年月: {yearMonth}
        </div>
        <div className="flex mb-2">
          <span className="mr-2">保管場所:</span>
          <span className="mr-2">{storageLocationRange.start}</span>
          <span>~</span>
          <span className="ml-2">{storageLocationRange.end}</span>
        </div>
        <div className="flex">
          <span className="mr-2">品番:</span>
          <span className="mr-2">{itemNumberRange.start}</span>
          <span>~</span>
          <span className="ml-2">{itemNumberRange.end}</span>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-sm mb-2">棚卸増減区分</h2>
        <div className="mb-2">
          {adjustmentType}
        </div>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" checked={printUnadjustedItems} readOnly className="mr-2" />
          棚卸時に増減のない品番を印字
        </label>
        <label className="flex items-center">
          <input type="checkbox" checked={printNonZeroItems} readOnly className="mr-2" />
          総残現在高、棚卸高のない品番を印字
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ShelfResultsForm;
```