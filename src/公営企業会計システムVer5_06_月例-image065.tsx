import React from 'react';

// TypeScript interface for component props
interface FormProps {
  reportDate: string;
  departmentFrom: number;
  departmentTo: number;
  budgetSubjectFrom: number;
  budgetSubjectTo: number;
  onClassificationChange: (value: string) => void;
  onTargetChange: (value: string) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
}

const ReportForm: React.FC<FormProps> = ({
  reportDate,
  departmentFrom,
  departmentTo,
  budgetSubjectFrom,
  budgetSubjectTo,
  onClassificationChange,
  onTargetChange,
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md">
      <h1 className="text-xl font-bold mb-2">範囲指定</h1>

      {/* Date Selection */}
      <div className="mb-4">
        <label className="font-semibold">作表日: </label>
        <span className="text-blue-600">{reportDate}</span>
      </div>

      {/* Department Range */}
      <div className="mb-4 flex items-center">
        <label className="font-semibold">所属: </label>
        <input type="number" min="0" max="9999999" value={departmentFrom} readOnly className="mx-2 border p-1" />
        <span>~</span>
        <input type="number" min="0" max="9999999" value={departmentTo} readOnly className="mx-2 border p-1" />
      </div>

      {/* Budget Subject Range */}
      <div className="mb-4 flex items-center">
        <label className="font-semibold">予算科目: </label>
        <input type="number" min="0" max="99999999" value={budgetSubjectFrom} readOnly className="mx-2 border p-1" />
        <span>~</span>
        <input type="number" min="0" max="99999999" value={budgetSubjectTo} readOnly className="mx-2 border p-1" />
      </div>

      {/* Classification */}
      <div className="mb-4">
        <label className="font-semibold">作表区分: </label>
        <input type="radio" name="classification" value="目" onChange={() => onClassificationChange('目')} className="mx-2" />
        <span>目</span>
        <input type="radio" name="classification" value="節" onChange={() => onClassificationChange('節')} className="mx-2" />
        <span>節</span>
      </div>

      {/* Target */}
      <div className="mb-4">
        <label className="font-semibold">集計対象: </label>
        <input type="radio" name="target" value="全体" onChange={() => onTargetChange('全体')} className="mx-2" />
        <span>全体</span>
        <input type="radio" name="target" value="ブロック" onChange={() => onTargetChange('ブロック')} className="mx-2" />
        <span>ブロック</span>
        <input type="radio" name="target" value="セグメント" onChange={() => onTargetChange('セグメント')} className="mx-2" />
        <span>セグメント</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOkClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">OK</button>
        <button onClick={onClearClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">クリア</button>
        <button onClick={onExitClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```