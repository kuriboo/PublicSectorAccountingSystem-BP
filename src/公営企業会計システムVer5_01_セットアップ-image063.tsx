import React from 'react';

interface FormProps {
  year: number;
  minNumber: number;
  maxNumber: number;
  onChangeYear: (year: number) => void;
  onChangeMinNumber: (minNumber: number) => void;
  onChangeMaxNumber: (maxNumber: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const FormComponent: React.FC<FormProps> = ({
  year,
  minNumber,
  maxNumber,
  onChangeYear,
  onChangeMinNumber,
  onChangeMaxNumber,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md w-96">
      <h1 className="text-lg font-semibold mb-4">資金予算表ファイルリスト作成</h1>
      <div className="mb-4">
        <label className="block mb-2">年度</label>
        <input
          type="number"
          value={year}
          onChange={(e) => onChangeYear(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>
      <div className="border p-4 mb-4">
        <h2 className="text-base font-semibold mb-2">範囲指定</h2>
        <label className="block mb-2">集計番号</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={minNumber}
            onChange={(e) => onChangeMinNumber(Number(e.target.value))}
            className="border p-2 w-full"
          />
          <span className="self-center">～</span>
          <input
            type="number"
            value={maxNumber}
            onChange={(e) => onChangeMaxNumber(Number(e.target.value))}
            className="border p-2 w-full"
          />
        </div>
      </div>
      <div className="flex space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-200 py-2 px-4 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-gray-200 py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```