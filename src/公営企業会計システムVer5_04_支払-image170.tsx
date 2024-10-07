import React, { FC, useState } from 'react';

// 定義するプロパティの型
type BudgetFormProps = {
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

// コンポーネント定義
const BudgetForm: FC<BudgetFormProps> = ({ onSubmit, onClear, onFinish }) => {
  const [outputLevel, setOutputLevel] = useState<'section' | 'detail'>('section');
  const [representYearStart, setRepresentYearStart] = useState('');
  const [representYearEnd, setRepresentYearEnd] = useState('');
  const [budgetItemStart, setBudgetItemStart] = useState('');
  const [budgetItemEnd, setBudgetItemEnd] = useState('');
  const [aggregationTarget, setAggregationTarget] = useState<'all' | 'block' | 'segment'>('all');
  const [options, setOptions] = useState({
    prevMonth: false,
    printWorkName: false,
    printUnitName: false,
  });

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">科目別支出予算差引簿（予定額有）</h1>
      
      <div className="border p-4 mt-4">
        <h2 className="font-bold">出力レベル</h2>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="outputLevel"
              value="section"
              checked={outputLevel === 'section'}
              onChange={() => setOutputLevel('section')}
            />{' '}
            節
          </label>
          <label>
            <input
              type="radio"
              name="outputLevel"
              value="detail"
              checked={outputLevel === 'detail'}
              onChange={() => setOutputLevel('detail')}
            />{' '}
            明細
          </label>
        </div>
      </div>

      <div className="border p-4 mt-4">
        <h2 className="font-bold">範囲指定</h2>
        <div className="flex space-x-4">
          <div>
            <label>作成年月</label>
            <div>
              <input
                type="text"
                className="border"
                value={representYearStart}
                placeholder="開始"
                onChange={(e) => setRepresentYearStart(e.target.value)}
              />
              ～
              <input
                type="text"
                className="border"
                value={representYearEnd}
                placeholder="終了"
                onChange={(e) => setRepresentYearEnd(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>予算科目</label>
            <div>
              <input
                type="text"
                className="border"
                value={budgetItemStart}
                placeholder="開始"
                onChange={(e) => setBudgetItemStart(e.target.value)}
              />
              ～
              <input
                type="text"
                className="border"
                value={budgetItemEnd}
                placeholder="終了"
                onChange={(e) => setBudgetItemEnd(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <h2 className="font-bold mt-2">集計対象</h2>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="aggregationTarget"
              value="all"
              checked={aggregationTarget === 'all'}
              onChange={() => setAggregationTarget('all')}
            />{' '}
            全体
          </label>
          <label>
            <input
              type="radio"
              name="aggregationTarget"
              value="block"
              checked={aggregationTarget === 'block'}
              onChange={() => setAggregationTarget('block')}
            />{' '}
            ブロック
          </label>
          <label>
            <input
              type="radio"
              name="aggregationTarget"
              value="segment"
              checked={aggregationTarget === 'segment'}
              onChange={() => setAggregationTarget('segment')}
            />{' '}
            セグメント
          </label>
        </div>
      </div>

      <div className="border p-4 mt-4">
        <h2 className="font-bold">オプション</h2>
        <div className="space-y-2">
          <label>
            <input
              type="checkbox"
              checked={options.prevMonth}
              onChange={() =>
                setOptions({ ...options, prevMonth: !options.prevMonth })
              }
            />{' '}
            前月繰越行のみで印字する
          </label>
          <label>
            <input
              type="checkbox"
              checked={options.printWorkName}
              onChange={() =>
                setOptions({ ...options, printWorkName: !options.printWorkName })
              }
            />{' '}
            摘要欄に工事名を印字する
          </label>
          <label>
            <input
              type="checkbox"
              checked={options.printUnitName}
              onChange={() =>
                setOptions({ ...options, printUnitName: !options.printUnitName })
              }
            />{' '}
            摘要欄に単価名称を印字する
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">集計</button>
        <button onClick={onClear} className="bg-gray-500 text-white py-1 px-4 rounded">クリア</button>
        <button onClick={onFinish} className="bg-red-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;