import React, { useState } from 'react';

type YearSelectProps = {
  currentYear: string;
  onYearChange: (newYear: string) => void;
};

const YearSelect: React.FC<YearSelectProps> = ({ currentYear, onYearChange }) => {
  // 年のリストを定義
  const years = [
    '平成29',
    '平成28',
    '平成27',
    // 追加年度...
  ];

  return (
    <div className="flex items-center space-x-2">
      <select
        value={currentYear}
        onChange={(e) => onYearChange(e.target.value)}
        className="border rounded p-2"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <span>年度</span>
    </div>
  );
};

type CSVImportSectionProps = {
  onImport: () => void;
  contents: string[];
  selectedContent: string;
  onContentChange: (content: string) => void;
};

const CSVImportSection: React.FC<CSVImportSectionProps> = ({
  onImport,
  contents,
  selectedContent,
  onContentChange,
}) => {
  return (
    <div className="border p-4 mt-4">
      <button
        onClick={onImport}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-2"
      >
        CSV取込
      </button>
      <div className="flex items-center space-x-2">
        <label htmlFor="contents">内容</label>
        <select
          id="contents"
          value={selectedContent}
          onChange={(e) => onContentChange(e.target.value)}
          className="border rounded p-2"
        >
          {contents.map((content) => (
            <option key={content} value={content}>
              {content}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Actions: React.FC = () => {
  return (
    <div className="flex space-x-2 mt-4">
      <button className="bg-gray-300 px-4 py-1 rounded">行確定</button>
      <button className="bg-gray-300 px-4 py-1 rounded">行キャンセル</button>
      <button className="bg-gray-300 px-4 py-1 rounded">OK</button>
      <button className="bg-gray-300 px-4 py-1 rounded">クリア</button>
      <button className="bg-gray-300 px-4 py-1 rounded">終了</button>
    </div>
  );
};

const MainComponent: React.FC = () => {
  const [currentYear, setCurrentYear] = useState('平成29');
  const [selectedContent, setSelectedContent] = useState('');
  const contents = ['内容1', '内容2', '内容3']; // サンプル内容

  const handleYearChange = (newYear: string) => {
    setCurrentYear(newYear);
  };

  const handleContentChange = (content: string) => {
    setSelectedContent(content);
  };

  const handleImport = () => {
    console.log('CSV Imported');
  };

  return (
    <div className="p-8">
      <h1 className="text-lg font-bold mb-4">業者情報取扱準備処理</h1>
      <YearSelect currentYear={currentYear} onYearChange={handleYearChange} />
      <CSVImportSection
        onImport={handleImport}
        contents={contents}
        selectedContent={selectedContent}
        onContentChange={handleContentChange}
      />
      <Actions />
    </div>
  );
};

export default MainComponent;
