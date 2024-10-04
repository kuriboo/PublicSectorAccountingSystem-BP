```tsx
// components/BudgetForm.tsx
import React from 'react';

type BudgetFormProps = {
  fiscalYear: string;
  calculationMethod: 'indirect' | 'direct';
  budgetComposition: string;
  count: number;
  amountType: string;
  decisionRound: number;
  amountUnit: 'simple' | 'thousand';
  comparisonFiscalYear?: string;
  comparisonBudgetComposition?: string;
  comparisonCount?: number;
  comparisonAmountType?: string;
  comparisonDecisionRound?: number;
  accountingPeriodStart: string;
  accountingPeriodEnd: string;
  pageSize: 'A4' | 'A4v';
  printMark: boolean;
  startingPage: number;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  fiscalYear,
  calculationMethod,
  budgetComposition,
  count,
  amountType,
  decisionRound,
  amountUnit,
  comparisonFiscalYear,
  comparisonBudgetComposition,
  comparisonCount,
  comparisonAmountType,
  comparisonDecisionRound,
  accountingPeriodStart,
  accountingPeriodEnd,
  pageSize,
  printMark,
  startingPage,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* 範囲指定 */}
      <div className="border-b mb-4">
        <h2 className="text-xl font-bold mb-2">範囲指定</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block">
              年度: <span>{fiscalYear}</span>
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  name="calculationMethod"
                  value="indirect"
                  checked={calculationMethod === 'indirect'}
                  readOnly
                />
                間接法
              </label>
              <label>
                <input
                  type="radio"
                  name="calculationMethod"
                  value="direct"
                  checked={calculationMethod === 'direct'}
                  readOnly
                />
                直接法
              </label>
            </div>
            <div>
              <label>
                予算編成区分: <span>{budgetComposition}</span>
              </label>
            </div>
            <div>
              <label>
                回数: <span>{count}</span>
              </label>
            </div>
            <div>
              <label>
                金額種別: <span>{amountType}</span>
              </label>
            </div>
            <div>
              <label>
                決算見込回数: <span>{decisionRound}</span>
              </label>
            </div>
            <div>
              <label>
                金額単位選択: <span>{amountUnit === 'simple' ? '円単位' : '千円単位'}</span>
              </label>
            </div>
          </div>
          {comparisonFiscalYear && (
            <div className="border-l pl-4">
              <h3 className="font-bold mb-2">比較対象</h3>
              <div>
                <label>年度: <span>{comparisonFiscalYear}</span></label>
              </div>
              <div>
                <label>予算編成区分: <span>{comparisonBudgetComposition}</span></label>
              </div>
              <div>
                <label>回数: <span>{comparisonCount}</span></label>
              </div>
              <div>
                <label>金額種別: <span>{comparisonAmountType}</span></label>
              </div>
              <div>
                <label>決算見込回数: <span>{comparisonDecisionRound}</span></label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 会計期間 */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">会計期間</h2>
        <div>
          <label>
            <span>{accountingPeriodStart}</span> ～ <span>{accountingPeriodEnd}</span>
          </label>
        </div>
      </div>

      {/* その他設定 */}
      <div className="mb-4">
        <div>
          <label>
            サイズ: <span>{pageSize}</span>
          </label>
        </div>
        <div>
          <label>
            页付: <span>{printMark ? 'する' : 'しない'}</span>
          </label>
        </div>
        <div>
          <label>
            開始頁: <span>{startingPage}</span>
          </label>
        </div>
      </div>

      {/* アクションボタン */}
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSubmit}>
          Excel出力
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onEnd}>
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```