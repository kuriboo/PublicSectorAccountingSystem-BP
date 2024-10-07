import React, { FC, useState } from 'react';

// TypeScript interface for the component props
interface ReportFormProps {
  initialYear?: number;
  blocks: string[];
  onSubmit: (year: number, target: string, blockId: number) => void;
}

// Main component
const ReportForm: FC<ReportFormProps> = ({ initialYear = 29, blocks, onSubmit }) => {
  const [year, setYear] = useState<number>(initialYear);
  const [target, setTarget] = useState<'全体' | 'ブロック' | 'セグメント'>('ブロック');
  const [blockId, setBlockId] = useState<number>(20);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(event.target.value, 10));
  };

  const handleTargetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(event.target.value as '全体' | 'ブロック' | 'セグメント');
  };

  const handleBlockChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBlockId(parseInt(event.target.value, 10));
  };

  // Submit handler
  const handleSubmit = () => {
    onSubmit(year, target, blockId);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md p-4 rounded-md">
      <h2 className="text-center text-lg font-bold mb-4">決算報告書集計処理</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">集計年度</label>
        <select value={year} onChange={handleYearChange} className="block w-full">
          <option value={29}>平成29</option>
          <option value={30}>平成30</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">集計対象</label>
        <div className="flex space-x-4">
          <label>
            <input type="radio" value="全体" checked={target === '全体'} onChange={handleTargetChange} />
            全体
          </label>
          <label>
            <input type="radio" value="ブロック" checked={target === 'ブロック'} onChange={handleTargetChange} />
            ブロック
          </label>
          <label>
            <input type="radio" value="セグメント" checked={target === 'セグメント'} onChange={handleTargetChange} />
            セグメント
          </label>
        </div>
      </div>

      {target === 'ブロック' && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">ブロック</label>
          <select value={blockId} onChange={handleBlockChange} className="block w-full">
            {blocks.map((block, index) => (
              <option key={index} value={index}>{block}</option>
            ))}
          </select>
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```