```tsx
import React from 'react';

type ContractFormProps = {
  year: number;
  startCode: string;
  endCode: string;
  onYearChange: (year: number) => void;
  onStartCodeChange: (code: string) => void;
  onEndCodeChange: (code: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  year,
  startCode,
  endCode,
  onYearChange,
  onStartCodeChange,
  onEndCodeChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">重要契約一覧表出力用マスタリスト作成</h2>
      <div className="mb-4">
        <label className="mr-2">年度</label>
        <input
          type="number"
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="border px-2 py-1"
        />
      </div>
      <div className="border p-4 mb-4">
        <h3 className="font-semibold mb-2">範囲指定</h3>
        <div className="flex items-center">
          <label className="mr-2">重要契約区分</label>
          <input
            type="text"
            value={startCode}
            onChange={(e) => onStartCodeChange(e.target.value)}
            className="border px-2 py-1 mr-2"
          />
          <span>～</span>
          <input
            type="text"
            value={endCode}
            onChange={(e) => onEndCodeChange(e.target.value)}
            className="border px-2 py-1 ml-2"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 mr-2">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 mr-2">クリア</button>
        <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2">終了</button>
      </div>
    </div>
  );
};

export default ContractForm;
```