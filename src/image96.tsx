import React from 'react';

type CsvProcessorProps = {
  title: string;
  description: string;
  options: string[];
  onProcess: (selected: string) => void;
  onErrorCheck: () => void;
};

const CsvProcessor: React.FC<CsvProcessorProps> = ({
  title,
  description,
  options,
  onProcess,
  onErrorCheck,
}) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');

  return (
    <div className="p-4 bg-gray-100">
      {/* Title Section */}
      <div className="text-lg font-bold bg-blue-200 p-2">{title}</div>
      
      {/* Description Section */}
      <p className="text-sm mt-2 mb-4">{description}</p>
      
      {/* Button Row */}
      <div className="flex space-x-2 mb-4">
        <button className="px-4 py-2 bg-gray-300 rounded">詳細編集</button>
        <button className="px-4 py-2 bg-gray-200 rounded">行削除</button>
      </div>
      
      {/* Table Data */}
      <table className="w-full mb-4 border border-gray-300">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="px-4 py-2">内容</th>
            <th className="px-4 py-2">CSVファイル</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows here */}
        </tbody>
      </table>
      
      {/* CSV Import Section */}
      <div className="border p-4">
        <label className="block text-sm font-medium mb-2">内容</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="mb-4 p-2 bg-gray-100 border rounded"
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button
          onClick={() => onProcess(selectedOption)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          CSV取込
        </button>
      </div>
      
      {/* Actions Section */}
      <div className="flex mt-4 space-x-2">
        <button onClick={onErrorCheck} className="px-4 py-2 bg-gray-400 rounded">エラー確認</button>
        <button className="px-4 py-2 bg-gray-300 rounded">行確定</button>
        <button className="px-4 py-2 bg-gray-300 rounded">行キャンセル</button>
      </div>
      
      {/* Bottom Actions */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="px-4 py-2 bg-gray-400 rounded">OK</button>
        <button className="px-4 py-2 bg-gray-200 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-200 rounded">終了</button>
      </div>
    </div>
  );
};

export default CsvProcessor;
```