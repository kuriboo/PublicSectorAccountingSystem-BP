import React from 'react';

// TypeScript type definitions for component props
type Props = {
  title: string;
  date?: string;
  accountingDivisionOptions: string[];
  reportDivisionOptions: string[];
  levelOptions: string[];
  formatOptions: string[];
  shapelessOptions: string[];
  rangeDivisionOptions: string[];
  fundCodes: string[];
  onSubmit: () => void;
  onClear: () => void;
};

const FormComponent: React.FC<Props> = ({
  title,
  date,
  accountingDivisionOptions,
  reportDivisionOptions,
  levelOptions,
  formatOptions,
  shapelessOptions,
  rangeDivisionOptions,
  fundCodes,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="mb-2">
        <label className="block text-sm font-medium">作表年月日:</label>
        <p className="text-sm text-gray-700">{date}</p>
      </div>

      {/* 会計区分 */}
      <div className="mb-4">
        <label className="block text-sm font-medium">会計区分:</label>
        {accountingDivisionOptions.map((option, index) => (
          <div key={index} className="inline-flex items-center mr-2">
            <input type="radio" name="accountingDivision" />
            <span className="ml-1">{option}</span>
          </div>
        ))}
      </div>

      {/* 作表区分 */}
      <div className="mb-4">
        <label className="block text-sm font-medium">作表区分:</label>
        {reportDivisionOptions.map((option, index) => (
          <div key={index} className="inline-flex items-center mr-2">
            <input type="radio" name="reportDivision" />
            <span className="ml-1">{option}</span>
          </div>
        ))}
      </div>

      {/* 科目レベル */}
      <div className="mb-4">
        <label className="block text-sm font-medium">科目レベル:</label>
        {levelOptions.map((option, index) => (
          <div key={index} className="inline-flex items-center mr-2">
            <input type="radio" name="level" />
            <span className="ml-1">{option}</span>
          </div>
        ))}
      </div>

      {/* 書式区分 */}
      <div className="mb-4">
        <label className="block text-sm font-medium">書式区分:</label>
        {formatOptions.map((option, index) => (
          <div key={index} className="inline-flex items-center mr-2">
            <input type="radio" name="format" />
            <span className="ml-1">{option}</span>
          </div>
        ))}
      </div>

      {/* 無形の様式 */}
      <div className="mb-4">
        <label className="block text-sm font-medium">無形の様式:</label>
        {shapelessOptions.map((option, index) => (
          <div key={index} className="inline-flex items-center mr-2">
            <input type="radio" name="shapeless" />
            <span className="ml-1">{option}</span>
          </div>
        ))}
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="block text-sm font-medium">範囲指定:</label>
        {rangeDivisionOptions.map((option, index) => (
          <div key={index} className="inline-flex items-center mr-2">
            <input type="radio" name="rangeDivision" />
            <span className="ml-1">{option}</span>
          </div>
        ))}
      </div>

      {/* 財源コード */}
      <div className="mb-4">
        <label className="block text-sm font-medium">財源コード:</label>
        <select className="border rounded-md p-1">
          {fundCodes.map((code, index) => (
            <option key={index} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```