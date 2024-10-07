import React from 'react';

// TypeScriptの型定義
type FormProps = {
  yearOptions: string[];
  onYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  division: string;
  onDivisionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  yearOptions,
  onYearChange,
  division,
  onDivisionChange,
  onSubmit,
  onClear,
  onFinish
}) => {
  return (
    <div className="p-6">
      {/* タイトル */}
      <h1 className="text-lg font-bold mb-4">決算統計作表制御集計処理</h1>

      {/* 年度セレクタ */}
      <div className="mb-4">
        <label className="block mb-2">年度</label>
        <select onChange={onYearChange} className="border p-2">
          {yearOptions.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* 作表制御区分入力 */}
      <div className="mb-4">
        <label className="block mb-2">作表制御区分</label>
        <input
          type="text"
          value={division}
          onChange={onDivisionChange}
          className="border p-2 w-full"
        />
      </div>

      {/* 処理概要 */}
      <div className="p-4 border bg-gray-100">
        <h2 className="font-semibold mb-2">処理概要</h2>
        <p>事前にセットアップにて作表制御表関連の設定が必要となります。</p>
        <p>以下の処理で1000円丸めをしたデータを印字をするにはこの処理が必要です。</p>
      </div>

      {/* ボタン群 */}
      <div className="flex justify-end mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 mr-4">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 mr-4">
          クリア
        </button>
        <button onClick={onFinish} className="bg-red-500 text-white px-4 py-2">
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```