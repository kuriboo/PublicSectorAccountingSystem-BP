import React from 'react';

// Propsの型定義
interface AccountingSystemProps {
  year: string;
  startCode: string;
  endCode: string;
  onYearChange: (year: string) => void;
  onStartCodeChange: (code: string) => void;
  onEndCodeChange: (code: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AccountingSystem: React.FC<AccountingSystemProps> = ({
  year,
  startCode,
  endCode,
  onYearChange,
  onStartCodeChange,
  onEndCodeChange,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-8">
      <div className="bg-gray-200 p-4 rounded-md">
        <div className="text-xl mb-4">仕訳科目自動作成</div>
        <div className="flex items-center mb-4">
          <label className="mr-2">年度:</label>
          <select
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="令和03">令和03</option>
            {/* その他の年度オプション */}
          </select>
        </div>
        <div className="mb-4">
          <div className="font-bold mb-2">範囲指定</div>
          <div className="flex items-center">
            <label className="mr-2">予算科目</label>
            <input
              type="text"
              value={startCode}
              onChange={(e) => onStartCodeChange(e.target.value)}
              className="border p-1 rounded mr-2"
            />
            <span>~</span>
            <input
              type="text"
              value={endCode}
              onChange={(e) => onEndCodeChange(e.target.value)}
              className="border p-1 rounded ml-2"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">OK</button>
          <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">クリア</button>
          <button onClick={onExit} className="bg-red-500 text-white p-2 rounded">終了</button>
        </div>
      </div>
    </div>
  );
};

export default AccountingSystem;