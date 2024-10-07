import React from 'react';

type RangeSettingProps = {
  startDate: string;
  endDate: string;
  fromCode: string;
  toCode: string;
  expressionType: '目' | '節' | '細節' | '明細';
  includeDecision: boolean;
  aggregationTarget: '全体' | 'ブロック' | 'セグメント';
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onFromCodeChange: (code: string) => void;
  onToCodeChange: (code: string) => void;
  onExpressionTypeChange: (type: '目' | '節' | '細節' | '明細') => void;
  onIncludeDecisionChange: (include: boolean) => void;
  onAggregationTargetChange: (target: '全体' | 'ブロック' | 'セグメント') => void;
};

const RangeSetting: React.FC<RangeSettingProps> = ({
  startDate,
  endDate,
  fromCode,
  toCode,
  expressionType,
  includeDecision,
  aggregationTarget,
  onStartDateChange,
  onEndDateChange,
  onFromCodeChange,
  onToCodeChange,
  onExpressionTypeChange,
  onIncludeDecisionChange,
  onAggregationTargetChange,
}) => {
  return (
    <div className="p-6 bg-white shadow-md w-auto rounded-lg">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">当月集計日付</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <span>〜</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="border px-2 py-1 ml-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">仕訳科目</label>
        <input
          type="text"
          value={fromCode}
          onChange={(e) => onFromCodeChange(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <span>〜</span>
        <input
          type="text"
          value={toCode}
          onChange={(e) => onToCodeChange(e.target.value)}
          className="border px-2 py-1 ml-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">作表区分</label>
        {['目', '節', '細節', '明細'].map((type) => (
          <label key={type} className="mr-4">
            <input
              type="radio"
              name="expressionType"
              value={type}
              checked={expressionType === type}
              onChange={() => onExpressionTypeChange(type as any)}
              className="mr-1"
            />
            {type}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">決算仕訳</label>
        <label className="mr-4">
          <input
            type="checkbox"
            checked={includeDecision}
            onChange={(e) => onIncludeDecisionChange(e.target.checked)}
            className="mr-1"
          />
          含む
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">集計対象</label>
        {['全体', 'ブロック', 'セグメント'].map((target) => (
          <label key={target} className="mr-4">
            <input
              type="radio"
              name="aggregationTarget"
              value={target}
              checked={aggregationTarget === target}
              onChange={() => onAggregationTargetChange(target as any)}
              className="mr-1"
            />
            {target}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RangeSetting;
```