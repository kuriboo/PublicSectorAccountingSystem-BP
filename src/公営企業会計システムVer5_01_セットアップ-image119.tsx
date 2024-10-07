// Import necessary modules
import React from 'react';

// Define the props interface
interface FileListFormProps {
  year: number;
  onYearChange: (newYear: number) => void;
  listType: 'row' | 'column';
  onListTypeChange: (newListType: 'row' | 'column') => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Define the component
const FileListForm: React.FC<FileListFormProps> = ({
  year,
  onYearChange,
  listType,
  onListTypeChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <h1 className="text-lg font-bold mb-4">費用構成表ファイルリスト作成</h1>
      
      {/* Year Selection */}
      <div className="flex items-center mb-4">
        <label className="mr-2">年度:</label>
        <select
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="border border-gray-300 rounded p-1"
        >
          {[...Array(5)].map((_, index) => (
            <option key={index} value={2017 + index}>
              平成{29 + index}
            </option>
          ))}
        </select>
      </div>

      {/* List Type Selection */}
      <div className="mb-4">
        <label className="block mb-2">費用構成表行/列ファイルリスト:</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              value="row"
              checked={listType === 'row'}
              onChange={() => onListTypeChange('row')}
            />
            行リスト
          </label>
          <label>
            <input
              type="radio"
              value="column"
              checked={listType === 'column'}
              onChange={() => onListTypeChange('column')}
            />
            列リスト
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default FileListForm;
