// components/BudgetForm.tsx

import React from 'react';

type BudgetFormProps = {
  reportYearMonth: string;
  startBudgetNumber: string;
  endBudgetNumber: string;
  startOfficeNumber: string;
  endOfficeNumber: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  reportYearMonth,
  startBudgetNumber,
  endBudgetNumber,
  startOfficeNumber,
  endOfficeNumber,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">所属別支出予算差引簿（予定No.）</h2>
      
      <div className="mb-4">
        <h3 className="font-bold">出力レベル</h3>
        <div className="flex space-x-4">
          <label>
            <input type="radio" name="outputLevel" value="department" />
            所属課
          </label>
          <label>
            <input type="radio" name="outputLevel" value="section" />
            所属細節
          </label>
        </div>
      </div>

      <div className="mb-4 border p-4 bg-white rounded-lg">
        <h3 className="font-bold mb-2">範囲指定</h3>
        
        <div className="mb-2">
          <label className="block font-semibold">
            作表年月: <input type="text" value={reportYearMonth} className="ml-2 border p-1 rounded" />
          </label>
        </div>
        
        <div className="mb-2 flex space-x-4">
          <div>
            <label className="block font-semibold">予算科目：</label>
          </div>
          <input type="text" value={startBudgetNumber} className="border p-1 rounded" />
          <span>～</span>
          <input type="text" value={endBudgetNumber} className="border p-1 rounded" />
        </div>

        <div className="mb-2 flex space-x-4">
          <div>
            <label className="block font-semibold">所属：</label>
          </div>
          <input type="text" value={startOfficeNumber} className="border p-1 rounded" />
          <span>～</span>
          <input type="text" value={endOfficeNumber} className="border p-1 rounded" />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold">集計対象</h3>
        <div className="flex space-x-4">
          <label>
            <input type="radio" name="aggregationTarget" value="all" />
            全体
          </label>
          <label>
            <input type="radio" name="aggregationTarget" value="block" />
            ブロック
          </label>
          <label>
            <input type="radio" name="aggregationTarget" value="segment" />
            セグメント
          </label>
        </div>
        <div className="mt-2 bg-purple-100 h-4 rounded"></div>
      </div>
      
      <div className="mb-4">
        <label>
          <input type="checkbox" name="prevCheck" />
          前月累積行のみでも印字する
        </label>
      </div>
      
      <div className="mb-4">
        <label>
          <input type="checkbox" name="printProjectName" />
          摘要欄に工事名を印字する
        </label>
      </div>
      
      <div className="mb-4">
        <label>
          <input type="checkbox" name="printUnitName" />
          摘要欄に単価名称を印字する
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">集計</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
