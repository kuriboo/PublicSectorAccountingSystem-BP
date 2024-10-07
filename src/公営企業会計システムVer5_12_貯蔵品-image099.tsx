import React from 'react';

// 型定義
interface Props {
  year: number;
  onDepartmentChange: (value: string) => void;
  onCodeChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
  departmentMin: string;
  departmentMax: string;
  unitCodeMin: string;
  unitCodeMax: string;
}

const UnitPriceMasterList: React.FC<Props> = ({
  year,
  onDepartmentChange,
  onCodeChange,
  onSubmit,
  onClear,
  onClose,
  departmentMin,
  departmentMax,
  unitCodeMin,
  unitCodeMax,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      {/* 年度セレクタ */}
      <div className="mb-4">
        <label className="font-bold mr-2">年度:</label>
        <span>{year}</span>
      </div>

      {/* ラジオボタンセクション */}
      <div className="flex mb-4">
        <label className="mr-2">
          <input type="radio" name="selectType" className="mr-1" />
          所属別
        </label>
        <label>
          <input type="radio" name="selectType" className="mr-1" />
          単価コード
        </label>
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <fieldset className="border rounded p-4">
          <legend className="font-bold">範囲指定</legend>
          <div className="flex items-center mb-2">
            <label className="w-24">所属:</label>
            <input
              type="text"
              value={departmentMin}
              onChange={(e) => onDepartmentChange(e.target.value)}
              className="border rounded px-2 py-1 mr-2"
            />
            <span>~</span>
            <input
              type="text"
              value={departmentMax}
              readOnly
              className="border rounded px-2 py-1 ml-2 bg-blue-100"
            />
          </div>
          <div className="flex items-center">
            <label className="w-24">単価コード:</label>
            <input
              type="text"
              value={unitCodeMin}
              onChange={(e) => onCodeChange(e.target.value)}
              className="border rounded px-2 py-1 mr-2"
            />
            <span>~</span>
            <input
              type="text"
              value={unitCodeMax}
              readOnly
              className="border rounded px-2 py-1 ml-2 bg-blue-100"
            />
          </div>
        </fieldset>
      </div>

      {/* ボタン */}
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="bg-gray-300 rounded px-4 py-2 mr-2 hover:bg-gray-400"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 rounded px-4 py-2 mr-2 hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default UnitPriceMasterList;
```