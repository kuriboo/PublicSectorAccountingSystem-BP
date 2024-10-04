```tsx
import React from 'react';

// 型定義
type MasterListFormProps = {
  fiscalYear: number;
  startCode: number;
  endCode: number;
  onFiscalYearChange: (year: number) => void;
  onStartCodeChange: (code: number) => void;
  onEndCodeChange: (code: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// コンポーネント定義
const MasterListForm: React.FC<MasterListFormProps> = ({
  fiscalYear,
  startCode,
  endCode,
  onFiscalYearChange,
  onStartCodeChange,
  onEndCodeChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">決裁合議者マスタリスト作成</h2>
      <div className="mb-4">
        <label className="mr-2">年度</label>
        <input
          type="number"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(Number(e.target.value))}
          className="border p-1"
        />
      </div>
      <div className="border p-4 mb-4">
        <h3 className="font-semibold mb-2">範囲指定</h3>
        <div className="flex items-center">
          <label className="mr-2">決裁合議者コード</label>
          <input
            type="number"
            value={startCode}
            onChange={(e) => onStartCodeChange(Number(e.target.value))}
            className="border p-1 mr-2"
          />
          <span>〜</span>
          <input
            type="number"
            value={endCode}
            onChange={(e) => onEndCodeChange(Number(e.target.value))}
            className="border p-1 ml-2"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 mr-2">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 mr-2">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2">終了</button>
      </div>
    </div>
  );
};

export default MasterListForm;
```