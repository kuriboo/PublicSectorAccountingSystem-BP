import React from 'react';

// プロパティの型定義
interface FormProps {
  year: string;
  budgetCode: string;
  abbreviation: string;
  taxDivision: string;
  taxOptions: Array<{ value: string; label: string }>;
  consumptionTax: string;
  incomeDivision: string;
  incomeOptions: Array<{ value: string; label: string }>;
  temporaryDivision: string;
  temporaryOptions: Array<{ value: string; label: string }>;
  unbilledDivision: string;
  unbilledOptions: Array<{ value: string; label: string }>;
  includeTax: boolean;
  department: string;
  project: string;
  plan: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const FinancialForm: React.FC<FormProps> = ({
  year,
  budgetCode,
  abbreviation,
  taxDivision,
  taxOptions,
  consumptionTax,
  incomeDivision,
  incomeOptions,
  temporaryDivision,
  temporaryOptions,
  unbilledDivision,
  unbilledOptions,
  includeTax,
  department,
  project,
  plan,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-5 max-w-xl mx-auto">
      <form className="bg-white shadow-md rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 年度 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">年度</label>
            <input
              type="text"
              value={year}
              className="border px-2 py-1"
              readOnly
            />
          </div>
          {/* 予算科目コード */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">予算科目コード</label>
            <input
              type="text"
              value={budgetCode}
              className="border px-2 py-1"
              readOnly
            />
          </div>
          {/* 略名 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">略名</label>
            <input
              type="text"
              value={abbreviation}
              className="border px-2 py-1"
              readOnly
            />
          </div>
          {/* 税区分 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">税区分</label>
            <select className="border px-2 py-1" value={taxDivision}>
              {taxOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* 消費税 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">消費税</label>
            <input
              type="text"
              value={consumptionTax}
              className="border px-2 py-1"
            />
          </div>
          {/* 収入区分 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">収入区分</label>
            <select className="border px-2 py-1" value={incomeDivision}>
              {incomeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* 臨経区分 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">臨経区分</label>
            <select className="border px-2 py-1" value={temporaryDivision}>
              {temporaryOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* 未払計上区分 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">未払計上区分</label>
            <select className="border px-2 py-1" value={unbilledDivision}>
              {unbilledOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* 税込みフラグ */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-semibold">積算基確税込フラグ</label>
            <input
              type="radio"
              checked={!includeTax}
              onChange={() => {}}
              className="form-radio"
            />
            <span>税抜</span>
            <input
              type="radio"
              checked={includeTax}
              onChange={() => {}}
              className="form-radio"
            />
            <span>税込</span>
          </div>
          {/* 所属 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">所属</label>
            <input
              type="text"
              value={department}
              className="border px-2 py-1"
              readOnly
            />
          </div>
          {/* 事業 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">事業</label>
            <input
              type="text"
              value={project}
              className="border px-2 py-1"
              readOnly
            />
          </div>
          {/* 施案 */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">施案</label>
            <input
              type="text"
              value={plan}
              className="border px-2 py-1"
              readOnly
            />
          </div>
        </div>
        {/* ボタン */}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onCancel}
          >
            キャンセル
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
            onClick={onClear}
          >
            クリア
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={onSubmit}
          >
            OK
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinancialForm;
```