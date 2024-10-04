```tsx
import React from 'react';

// コンポーネントのPropsを定義
interface ComponentProps {
  fiscalYear: string;
  onRadioChange: (value: string) => void;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
}

const FinancialComponent: React.FC<ComponentProps> = ({
  fiscalYear,
  onRadioChange,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-6 bg-gray-100">
      {/* タイトル */}
      <div className="mb-4 text-xl text-purple-700 font-semibold">
        たたき卸資産価格自動仕訳作成
      </div>
      
      {/* 日付と担当情報 */}
      <div className="mb-6 text-gray-600 text-sm">
        行政市水道事業会計　総務課 予算・会計担当 ぎょうせい太郎
        <br />
        平成29年08月15日
      </div>

      {/* 作成区分 */}
      <div className="p-4 border rounded bg-white shadow-md">
        <div className="mb-2 font-semibold text-gray-800">作成区分</div>

        {/* 当期会計年度 */}
        <div className="mb-2 text-gray-800">
          当期会計年度　{fiscalYear}
        </div>

        {/* ラジオボタン */}
        <div className="flex items-center mb-4">
          <label className="mr-4 text-gray-800">
            <input
              type="radio"
              value="create"
              name="operation"
              className="mr-2"
              onChange={() => onRadioChange('create')}
            />
            仕訳作成
          </label>
          <label className="text-gray-800">
            <input
              type="radio"
              value="delete"
              name="operation"
              className="mr-2"
              onChange={() => onRadioChange('delete')}
            />
            仕訳解除
          </label>
        </div>
      </div>

      {/* ボタン */}
      <div className="mt-6 space-x-4">
        <button
          className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FinancialComponent;
```