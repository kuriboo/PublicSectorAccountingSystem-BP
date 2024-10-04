```tsx
import React from 'react';

interface BudgetFormProps {
  year: number;
  accountType: '事業別' | '所属別';
  printType: '見積要求額' | '査定額';
  version: number;
  startDepartmentCode: string;
  endDepartmentCode: string;
  startProjectCode: string;
  endProjectCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  accountType,
  printType,
  version,
  startDepartmentCode,
  endDepartmentCode,
  startProjectCode,
  endProjectCode,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-8 bg-gray-100 rounded-md">
      {/* Year Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          年度: {year} 平成
        </label>
      </div>

      {/* Account Type Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          帳票種別
        </label>
        <div>
          <label>
            <input type="radio" name="accountType" checked={accountType === '事業別'} readOnly /> 事業別
          </label>
          <label className="ml-4">
            <input type="radio" name="accountType" checked={accountType === '所属別'} readOnly /> 所属別
          </label>
        </div>
      </div>

      {/* Print Type Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          印字区分
        </label>
        <div>
          <label>
            <input type="radio" name="printType" checked={printType === '見積要求額'} readOnly /> 見積要求額
          </label>
          <label className="ml-4">
            <input type="radio" name="printType" checked={printType === '査定額'} readOnly /> 査定額
            <select value={version} className="ml-2">
              <option value={1}>{version} 回</option>
            </select>
          </label>
        </div>
      </div>

      {/* Range Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          範囲指定
        </label>
        <div>
          <div className="flex items-center mb-2">
            <span className="mr-2">所属</span>
            <input type="text" value={startDepartmentCode} className="border p-1 rounded-md" readOnly />
            <span className="mx-2">~</span>
            <input type="text" value={endDepartmentCode} className="border p-1 rounded-md" readOnly />
          </div>
          <div className="flex items-center">
            <span className="mr-2">事業科目</span>
            <input type="text" value={startProjectCode} className="border p-1 rounded-md" readOnly />
            <span className="mx-2">~</span>
            <input type="text" value={endProjectCode} className="border p-1 rounded-md" readOnly />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-400 text-white rounded-md">クリア</button>
        <button onClick={onFinish} className="px-4 py-2 bg-red-500 text-white rounded-md">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```