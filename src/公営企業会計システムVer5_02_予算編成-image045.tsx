import React from 'react';

// 定義された TypeScript のプロパティ型
type ComponentProps = {
  fiscalYear: string;
  operationType: '開始' | '解除';
  budgetDivision: '当初' | '補正';
  departments: { code: string; name: string }[];
  onConfirm: () => void;
  onCancel: () => void;
  onClear: () => void;
};

// 再利用可能なコンポーネントの定義
const FiscalManagementComponent: React.FC<ComponentProps> = ({
  fiscalYear,
  operationType,
  budgetDivision,
  departments,
  onConfirm,
  onCancel,
  onClear,
}) => {
  return (
    <div className="p-4 border border-gray-300 shadow-md">
      {/* 年度と操作の選択 */}
      <div className="mb-4">
        <label className="mr-2">年度:</label>
        <span className="mr-4">{fiscalYear}</span>

        <label>
          <input
            type="radio"
            name="operation"
            value="開始"
            checked={operationType === '開始'}
            className="mr-1"
          />
          審定開始（見積締）
        </label>
        <label className="ml-4">
          <input
            type="radio"
            name="operation"
            value="解除"
            checked={operationType === '解除'}
            className="mr-1"
          />
          審定解除
        </label>
      </div>

      {/* 予算編成区分の選択 */}
      <div className="mb-4">
        <label className="mr-2">予算編成区分:</label>
        <select value={budgetDivision} className="border">
          <option value="当初">当初予算</option>
          <option value="補正">補正予算</option>
        </select>
      </div>

      {/* 所属部門のチェックボックス一覧 */}
      <div className="mb-4">
        <strong>全選択</strong>
        {departments.map((department) => (
          <div key={department.code}>
            <label>
              <input type="checkbox" className="mr-1" />
              {department.code} {department.name}
            </label>
          </div>
        ))}
      </div>

      {/* ボタンアクション */}
      <div className="flex justify-end">
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 mx-1">クリア</button>
        <button onClick={onCancel} className="bg-gray-200 px-4 py-2 mx-1">終了</button>
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 mx-1">OK</button>
      </div>
    </div>
  );
};

export default FiscalManagementComponent;
```