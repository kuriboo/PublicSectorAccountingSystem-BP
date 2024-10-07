import React from 'react';

type SectionType = '課税' | '非課税';

interface InputFormProps {
  year: string;
  uncheckedOnly: boolean;
  voucherNumberRange: [number, number];
  budgetNumbers: [string, string];
  sectionType: SectionType;
  onSubmit: (values: any) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  year,
  uncheckedOnly,
  voucherNumberRange,
  budgetNumbers,
  sectionType,
  onSubmit,
}) => {
  return (
    <div className="p-4 max-w-3xl mx-auto bg-white border rounded shadow">
      <h2 className="text-xl font-bold mb-4">振替・収入伝票収入力</h2>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <label className="mr-2">年度:</label>
          <input type="text" value={year} className="border p-1" readOnly />
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={uncheckedOnly}
            className="mr-2"
            readOnly
          />
          <label>収入区分未設定のみ</label>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <label className="mr-2">伝票番号:</label>
          <input
            type="number"
            value={voucherNumberRange[0]}
            className="border p-1 mr-2"
            readOnly
          />
          <span>~</span>
          <input
            type="number"
            value={voucherNumberRange[1]}
            className="border p-1 ml-2"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <label className="mr-2">予算科目:</label>
          <input
            type="text"
            value={budgetNumbers[0]}
            className="border p-1 mr-2"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={budgetNumbers[1]}
            className="border p-1 ml-2"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <label className="mr-2">収入区分:</label>
          <select value={sectionType} className="border p-1">
            <option value="課税">課税</option>
            <option value="非課税">非課税</option>
          </select>
        </div>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => onSubmit({ year, uncheckedOnly, voucherNumberRange, budgetNumbers, sectionType })}
      >
        表示
      </button>
    </div>
  );
};

export default InputForm;
```