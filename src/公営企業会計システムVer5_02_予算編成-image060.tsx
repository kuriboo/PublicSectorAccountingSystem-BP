import React from 'react';

// Propsの型定義
type ExecutionFormProps = {
  year: string;
  budgetEditType: string;
  count: number;
  budgetFrom: string;
  budgetTo: string;
  departmentFrom: string;
  departmentTo: string;
  sectionType: 'section' | 'detailedSection' | 'transparent';
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// 再利用可能なコンポーネント
const ExecutionForm: React.FC<ExecutionFormProps> = ({
  year,
  budgetEditType,
  count,
  budgetFrom,
  budgetTo,
  departmentFrom,
  departmentTo,
  sectionType,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* 範囲指定セクション */}
      <section className="mb-4">
        <h2 className="text-lg font-bold">範囲指定</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* 年度 */}
          <div>
            <label className="block">年度</label>
            <input type="text" value={year} className="border p-2 w-full" disabled />
          </div>

          {/* 予算編成区分 */}
          <div>
            <label className="block">予算編成区分</label>
            <input type="text" value={budgetEditType} className="border p-2 w-full" disabled />
          </div>

          {/* 回数 */}
          <div>
            <label className="block">回数</label>
            <input type="number" value={count} className="border p-2 w-full" disabled />
          </div>

          {/* 予算科目 */}
          <div>
            <label className="block">予算科目</label>
            <div className="flex">
              <input type="text" value={budgetFrom} className="border p-2 w-1/2" disabled />
              <span className="mx-2">~</span>
              <input type="text" value={budgetTo} className="border p-2 w-1/2" disabled />
            </div>
          </div>

          {/* 所属 */}
          <div>
            <label className="block">所属</label>
            <div className="flex">
              <input type="text" value={departmentFrom} className="border p-2 w-1/2" disabled />
              <span className="mx-2">~</span>
              <input type="text" value={departmentTo} className="border p-2 w-1/2" disabled />
            </div>
          </div>

          {/* 節区分 */}
          <div>
            <label className="block">節区分</label>
            <div className="flex space-x-2">
              <label>
                <input type="radio" value="section" checked={sectionType === 'section'} disabled />
                <span className="ml-1">節</span>
              </label>
              <label>
                <input type="radio" value="detailedSection" checked={sectionType === 'detailedSection'} disabled />
                <span className="ml-1">細節</span>
              </label>
              <label>
                <input type="radio" value="transparent" checked={sectionType === 'transparent'} disabled />
                <span className="ml-1">明細</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* ボタンセクション */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

// コンポーネントのエクスポート
export default ExecutionForm;
```