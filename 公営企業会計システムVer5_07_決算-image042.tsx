```tsx
import React from 'react';

// 型定義
interface DetailInputProps {
  fiscalYear: string;
  activity: string;
  subjectCode: string;
  subjectDescription: string;
  periodSection: string;
  amount: number;
  onAmountChange: (value: number) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const DetailInput: React.FC<DetailInputProps> = ({
  fiscalYear,
  activity,
  subjectCode,
  subjectDescription,
  periodSection,
  amount,
  onAmountChange,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-6 border-2 rounded shadow-lg max-w-md">
      {/* 年度と演算子 */}
      <div className="mb-4">
        <div className="flex justify-between">
          <label>年度</label>
          <span>{fiscalYear}</span>
        </div>
        <div className="flex justify-between mt-2">
          <label>演算子</label>
          <span>{activity}</span>
        </div>
      </div>

      {/* 集計科目 */}
      <div className="mb-4">
        <label>集計科目</label>
        <div className="flex justify-between mt-1">
          <span>{subjectCode}</span>
          <span>{subjectDescription}</span>
        </div>
      </div>

      {/* 期区分 */}
      <div className="mb-4">
        <label>期区分</label>
        <span>{periodSection}</span>
      </div>

      {/* 金額入力 */}
      <div className="mb-4">
        <label>金額</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="border px-2 py-1 rounded w-full mt-1"
        />
      </div>

      {/* 注記 */}
      <div className="mb-4">
        <p className="text-sm">
          要素マスタの集計科目と期区分（集計対象金額）を入力します。
        </p>
        <p className="text-sm">
          ※親画面の数値に固定値を設定した場合は入力の必要はありません。
        </p>
      </div>

      {/* 操作ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-1 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-1 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-1 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default DetailInput;
```