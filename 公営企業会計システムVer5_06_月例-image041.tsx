```tsx
import React from 'react';

// 定義されるTypeScriptのプロパティの型
interface ReportComponentProps {
  startDate: string;
  endDate: string;
  selectedGroup: '全体' | 'ブロック' | 'セグメント';
  blockOptions: { value: string; label: string }[];
  selectedBlock: string;
  onGroupChange: (group: '全体' | 'ブロック' | 'セグメント') => void;
  onBlockChange: (block: string) => void;
}

const ReportComponent: React.FC<ReportComponentProps> = ({
  startDate,
  endDate,
  selectedGroup,
  blockOptions,
  selectedBlock,
  onGroupChange,
  onBlockChange,
}) => {
  return (
    <div className="p-6 border rounded-md">
      <h1 className="text-lg font-bold mb-4">範囲指定</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">集計年月</label>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={startDate}
            readOnly
            className="border rounded p-2 bg-gray-100"
          />
          <span>〜</span>
          <input
            type="text"
            value={endDate}
            readOnly
            className="border rounded p-2 bg-gray-100"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">集計対象</label>
        <div>
          <label className="inline-flex items-center space-x-2">
            <input
              type="radio"
              checked={selectedGroup === '全体'}
              onChange={() => onGroupChange('全体')}
            />
            <span>全体</span>
          </label>
          <label className="inline-flex items-center space-x-2 ml-4">
            <input
              type="radio"
              checked={selectedGroup === 'ブロック'}
              onChange={() => onGroupChange('ブロック')}
            />
            <span>ブロック</span>
          </label>
          <label className="inline-flex items-center space-x-2 ml-4">
            <input
              type="radio"
              checked={selectedGroup === 'セグメント'}
              onChange={() => onGroupChange('セグメント')}
            />
            <span>セグメント</span>
          </label>
        </div>
        {selectedGroup === 'ブロック' && (
          <div className="mt-2">
            <select
              value={selectedBlock}
              onChange={(e) => onBlockChange(e.target.value)}
              className="border rounded p-2"
            >
              {blockOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportComponent;
```