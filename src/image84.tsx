import React from "react";

type CsvDataProps = {
  title: string;
  options: string[];
  onOptionChange: (option: string) => void;
  csvContent: string;
  onCsvContentChange: (content: string) => void;
};

const CsvDataComponent: React.FC<CsvDataProps> = ({
  title,
  options,
  onOptionChange,
  csvContent,
  onCsvContentChange,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      {/* Radio buttons for options */}
      <div className="mb-4">
        {options.map((option, index) => (
          <label key={index} className="mr-4">
            <input
              type="radio"
              name="option"
              value={option}
              onChange={() => onOptionChange(option)}
              className="mr-1"
            />
            {option}
          </label>
        ))}
      </div>
      {/* Text input for CSV content */}
      <div className="mb-4">
        <label className="block mb-2">CSV内容</label>
        <input
          type="text"
          value={csvContent}
          onChange={(e) => onCsvContentChange(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      {/* Control buttons */}
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          明細編集
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          行削除
        </button>
      </div>
    </div>
  );
};

export default CsvDataComponent;
```