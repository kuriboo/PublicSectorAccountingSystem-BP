import React from 'react';

// 型定義
interface FormProps {
  outputType: '通常' | '年度別';
  startYear: number;
  endYear: number;
  printOption: '印字しない' | '会計区分別';
  rangeStartName: string;
  rangeEndName: string;
  rangeStartStandard: string;
  rangeEndStandard: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

// コンポーネント定義
const FormComponent: React.FC<FormProps> = ({
  outputType,
  startYear,
  endYear,
  printOption,
  rangeStartName,
  rangeEndName,
  rangeStartStandard,
  rangeEndStandard,
  onSubmit,
  onClear,
  onExit,
}) => (
  <div className="p-4 bg-gray-100 rounded-md">
    <div className="mb-4">
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        作表年月日
      </label>
      <input id="date" type="date" className="mt-1 p-2 border border-gray-300 rounded-md" />
    </div>
    <div className="mb-4">
      <div className="flex items-center">
        <span className="mr-2">出力区分</span>
        {['通常', '年度別'].map((type) => (
          <label key={type} className="mr-4">
            <input
              type="radio"
              name="outputType"
              value={type}
              checked={outputType === type}
              className="mr-1"
            />
            {type}
          </label>
        ))}
        <span className="ml-4">取得年度</span>
        <input
          type="number"
          value={startYear}
          className="mx-2 p-2 w-16 border border-gray-300 rounded-md"
        />
        <span>〜</span>
        <input
          type="number"
          value={endYear}
          className="mx-2 p-2 w-16 border border-gray-300 rounded-md"
        />
      </div>
    </div>
    <div className="mb-4">
      <div className="flex items-center">
        <span className="mr-2">会計区分</span>
        {['印字しない', '会計区分別'].map((option) => (
          <label key={option} className="mr-4">
            <input
              type="radio"
              name="printOption"
              value={option}
              checked={printOption === option}
              className="mr-1"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
    <div className="mb-4">
      <div className="flex items-center">
        <span className="mr-2">範囲指定</span>
        <div className="flex items-center">
          <span>管理名称</span>
          <input
            type="text"
            value={rangeStartName}
            className="mx-2 p-2 w-24 border border-gray-300 rounded-md"
          />
          <span>〜</span>
          <input
            type="text"
            value={rangeEndName}
            className="mx-2 p-2 w-24 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center ml-4">
          <span>管理規格</span>
          <input
            type="text"
            value={rangeStartStandard}
            className="mx-2 p-2 w-24 border border-gray-300 rounded-md"
          />
          <span>〜</span>
          <input
            type="text"
            value={rangeEndStandard}
            className="mx-2 p-2 w-24 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <button
        onClick={onSubmit}
        className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md transition hover:bg-blue-600"
      >
        OK
      </button>
      <button
        onClick={onClear}
        className="mr-4 px-4 py-2 bg-gray-200 rounded-md transition hover:bg-gray-300"
      >
        クリア
      </button>
      <button
        onClick={onExit}
        className="px-4 py-2 bg-gray-200 rounded-md transition hover:bg-gray-300"
      >
        終了
      </button>
    </div>
  </div>
);

export default FormComponent;