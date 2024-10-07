import React from 'react';

type Props = {
  outputPath: string;
  onOutputPathChange: (path: string) => void;
  checkedOptions: string[];
  onOptionToggle: (option: string) => void;
  dateRanges: {
    [key: string]: { start: string; end: string };
  };
  onDateRangeChange: (key: string, start: string, end: string) => void;
};

const AccountingIntegrationForm: React.FC<Props> = ({
  outputPath,
  onOutputPathChange,
  checkedOptions,
  onOptionToggle,
  dateRanges,
  onDateRangeChange,
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">会計連携データ出力</h2>
      
      <div className="mb-4">
        <label className="block font-medium mb-2">出力先</label>
        <input
          type="text"
          value={outputPath}
          onChange={(e) => onOutputPathChange(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      
      <div className="mb-4">
        <h3 className="font-bold mb-2">調定</h3>
        {['通常', '精算', '通常＋精算'].map((option) => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={checkedOptions.includes(option)}
              onChange={() => onOptionToggle(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
      
      {Object.keys(dateRanges).map((range) => (
        <div key={range} className="mb-4">
          <h3 className="font-bold mb-2">{range}</h3>
          <div className="flex space-x-2">
            <input
              type="date"
              value={dateRanges[range].start}
              onChange={(e) =>
                onDateRangeChange(range, e.target.value, dateRanges[range].end)
              }
              className="border rounded px-2 py-1"
            />
            <span>~</span>
            <input
              type="date"
              value={dateRanges[range].end}
              onChange={(e) =>
                onDateRangeChange(range, dateRanges[range].start, e.target.value)
              }
              className="border rounded px-2 py-1"
            />
          </div>
        </div>
      ))}
      
      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-200 px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default AccountingIntegrationForm;
