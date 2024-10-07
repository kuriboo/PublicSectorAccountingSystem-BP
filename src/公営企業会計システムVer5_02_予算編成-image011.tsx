import React from 'react';

// 型定義
interface CeilingSettingProps {
  fiscalYear: string;
  rate: number;
  startBudgetSubject: string;
  endBudgetSubject: string;
  startProjectSubject: string;
  endProjectSubject: string;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
}

// タイプスクリプトコンポーネント
const CeilingSetting: React.FC<CeilingSettingProps> = ({
  fiscalYear,
  rate,
  startBudgetSubject,
  endBudgetSubject,
  startProjectSubject,
  endProjectSubject,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold text-blue-600 mb-4">シーリング設定</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">新年度</label>
        <span className="p-2 bg-blue-100 rounded">{fiscalYear}</span>
      </div>
      <div className="mb-4">
        <label className="block mb-2">シーリング率</label>
        <input
          type="number"
          className="border p-2 rounded w-full"
          value={rate}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">範囲指定</label>
        <div className="flex space-x-2">
          <div>
            <label className="block mb-1">予算科目</label>
            <input
              type="text"
              className="border p-2 rounded"
              value={startBudgetSubject}
              readOnly
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              className="border p-2 rounded"
              value={endBudgetSubject}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">事業科目</label>
            <input
              type="text"
              className="border p-2 rounded"
              value={startProjectSubject}
              readOnly
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              className="border p-2 rounded"
              value={endProjectSubject}
              readOnly
            />
          </div>
        </div>
      </div>
      <p className="text-sm text-blue-600 mb-4">
        画面で指定した率で新年度の科目の予算枠を作成します。
      </p>
      <div className="flex space-x-2">
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-gray-300 px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

// コンポーネントとしてエクスポート
export default CeilingSetting;
```