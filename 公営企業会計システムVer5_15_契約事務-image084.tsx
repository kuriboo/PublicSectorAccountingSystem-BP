```tsx
import React from 'react';

type CSVImportComponentProps = {
  onImport: (file: File) => void;
  year: number;
  onYearChange: (year: number) => void;
  contentOptions: string[];
  selectedContent: string;
  onContentChange: (content: string) => void;
};

// 再利用可能なCSVインポートコンポーネント
const CSVImportComponent: React.FC<CSVImportComponentProps> = ({
  onImport,
  year,
  onYearChange,
  contentOptions,
  selectedContent,
  onContentChange,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="year-select" className="block mb-2 font-bold">
          年度
        </label>
        <select
          id="year-select"
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="border rounded-md p-2"
        >
          {[...Array(10)].map((_, index) => (
            <option key={index} value={2017 + index}>
              平成{29 + index}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="content-select" className="block mb-2 font-bold">
          内容
        </label>
        <select
          id="content-select"
          value={selectedContent}
          onChange={(e) => onContentChange(e.target.value)}
          className="border rounded-md p-2 w-full"
        >
          {contentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="font-bold">CSV読み込み</label>
        <input
          type="file"
          accept=".csv"
          className="block mt-2"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              onImport(e.target.files[0]);
            }
          }}
        />
      </div>

      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">行確定</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">行キャンセル</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">OK</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">終了</button>
      </div>
    </div>
  );
};

export default CSVImportComponent;
```