```tsx
import React from 'react';

type BudgetComponentProps = {
  level: 'attribute' | 'attributeDetail' | 'attributeBreakdown';
  creationMonthFrom: string;
  creationMonthTo: string;
  budgetFrom: number;
  budgetTo: number;
  officeFrom: number;
  officeTo: number;
  collectionTarget: 'overall' | 'block' | 'segment';
  printPreviousMonth?: boolean;
  printProjectName?: boolean;
  printUnitName?: boolean;
  onCalculate: () => void;
  onPrint: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  level,
  creationMonthFrom,
  creationMonthTo,
  budgetFrom,
  budgetTo,
  officeFrom,
  officeTo,
  collectionTarget,
  printPreviousMonth,
  printProjectName,
  printUnitName,
  onCalculate,
  onPrint,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Output Level */}
      <div>
        <label>出力レベル</label>
        <div>
          <input type="radio" checked={level === 'attribute'} readOnly /> 所属節
          <input type="radio" checked={level === 'attributeDetail'} readOnly /> 所属細節
          <input type="radio" checked={level === 'attributeBreakdown'} readOnly /> 所属別細
        </div>
      </div>

      {/* Range Specification */}
      <div>
        <label>範囲指定</label>
        <div>
          {/* Creation Month */}
          <div>
            <span>作成年月</span>
            <input type="text" value={creationMonthFrom} readOnly className="border mx-2" />
            <span>~</span>
            <input type="text" value={creationMonthTo} readOnly className="border mx-2" />
          </div>
          {/* Budget */}
          <div className="mt-2">
            <span>予算科目</span>
            <input type="number" value={budgetFrom} readOnly className="border mx-2" />
            <span>~</span>
            <input type="number" value={budgetTo} readOnly className="border mx-2" />
          </div>
          {/* Office */}
          <div className="mt-2">
            <span>所属</span>
            <input type="number" value={officeFrom} readOnly className="border mx-2" />
            <span>~</span>
            <input type="number" value={officeTo} readOnly className="border mx-2" />
          </div>
        </div>
      </div>

      {/* Collection Target */}
      <div className="mt-4">
        <label>集計対象</label>
        <div>
          <input type="radio" checked={collectionTarget === 'overall'} readOnly /> 全体
          <input type="radio" checked={collectionTarget === 'block'} readOnly /> ブロック
          <input type="radio" checked={collectionTarget === 'segment'} readOnly /> セグメント
        </div>
      </div>

      {/* Options */}
      <div className="mt-4">
        <label>オプション</label>
        <div>
          <input type="checkbox" checked={!!printPreviousMonth} readOnly /> 前月保振行のみでも印字する
        </div>
        <div>
          <input type="checkbox" checked={!!printProjectName} readOnly /> 摘要欄に工事名を印字する
        </div>
        <div>
          <input type="checkbox" checked={!!printUnitName} readOnly /> 摘要欄に単位名称を印字する
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex space-x-4">
        <button onClick={onCalculate} className="btn">集計</button>
        <button onClick={onPrint} className="btn">印刷</button>
        <button onClick={onClear} className="btn">クリア</button>
        <button onClick={onClose} className="btn">終了</button>
      </div>
    </div>
  );
};

export default BudgetComponent;
```