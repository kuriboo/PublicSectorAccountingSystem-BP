import React from 'react';

// プロパティの型定義
type BudgetSettingProps = {
  year: string;
  budgetSectionOptions: Array<{ value: string; label: string }>;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネント定義
const BudgetSetting: React.FC<BudgetSettingProps> = ({
  year,
  budgetSectionOptions,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded p-6">
      <header className="mb-4">
        <h1 className="text-xl font-bold text-gray-800">予算仕訳構成比率一括初期設定</h1>
        <p className="text-gray-600">
          平成{year} 年度
        </p>
      </header>

      <main className="mb-6">
        <div className="flex items-center mb-4">
          <label className="text-gray-700 mr-4">予算編成区分</label>
          <select className="border rounded px-2 py-1">
            {budgetSectionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <ul className="list-disc pl-5 text-gray-700">
          <li>
            当機能は、予算科目に仕訳コードの構成比の初期設定処理を行います。
          </li>
          <li>
            予算科目配下の先頭の仕訳コードに「残り全て」とし、他の仕訳コードには「集計対象外」を設定します。
          </li>
          <li>
            構成比設定が行われていない予算科目を処理対象としますので、既に構成比設定されている予算科目は構成比の変更は行いません。
          </li>
        </ul>
      </main>

      <footer className="flex justify-end space-x-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          終了
        </button>
      </footer>
    </div>
  );
};

export default BudgetSetting;
```