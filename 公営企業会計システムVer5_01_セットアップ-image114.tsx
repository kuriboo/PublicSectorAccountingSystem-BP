import React, { useState } from 'react';

// 型定義
interface FileListFormProps {
  year: number;
  rowOrColumn: 'row' | 'column';
  onSubmit: (data: { year: number; rowOrColumn: 'row' | 'column'; rangeStart: number; rangeEnd: number }) => void;
  onClear: () => void;
  onClose: () => void;
}

const FileListForm: React.FC<FileListFormProps> = ({ year, rowOrColumn, onSubmit, onClear, onClose }) => {
  const [selectedYear, setSelectedYear] = useState<number>(year);
  const [selectedOption, setSelectedOption] = useState<'row' | 'column'>(rowOrColumn);
  const [rangeStart, setRangeStart] = useState<number>(0);
  const [rangeEnd, setRangeEnd] = useState<number>(999);

  // フォーム送信ハンドラー
  const handleSubmit = () => {
    onSubmit({ year: selectedYear, rowOrColumn: selectedOption, rangeStart, rangeEnd });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">作表制御表ファイルリスト作成</h1>
      
      {/* 年度選択 */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">年度</label>
        <input
          type="number"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border rounded w-full p-2"
        />
      </div>

      {/* 行リスト/列リスト 選択 */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">作表制御表行/列ファイルリスト</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="listType"
              checked={selectedOption === 'row'}
              onChange={() => setSelectedOption('row')}
            />
            行リスト
          </label>
          <label>
            <input
              type="radio"
              name="listType"
              checked={selectedOption === 'column'}
              onChange={() => setSelectedOption('column')}
            />
            列リスト
          </label>
        </div>
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">範囲指定</label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={rangeStart}
            onChange={(e) => setRangeStart(Number(e.target.value))}
            className="border rounded w-16 p-2"
          />
          <span>~</span>
          <input
            type="number"
            value={rangeEnd}
            onChange={(e) => setRangeEnd(Number(e.target.value))}
            className="border rounded w-16 p-2"
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white py-2 px-4 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default FileListForm;