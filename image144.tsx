```tsx
import React from 'react';

// TypeScript interface for component props
interface DepreciationFormProps {
  code: string;
  defaultRate: number;
  modifiedRate: number;
  guaranteeRate: number;
  newRate: number;
  onCodeChange: (value: string) => void;
  onDefaultRateChange: (value: number) => void;
  onModifiedRateChange: (value: number) => void;
  onGuaranteeRateChange: (value: number) => void;
  onNewRateChange: (value: number) => void;
  onModeChange: (mode: 'registration' | 'edit' | 'delete') => void;
  onCalculationMethodChange: (method: 'fixed' | 'rate') => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onTerminate: () => void;
}

const DepreciationForm: React.FC<DepreciationFormProps> = ({
  code,
  defaultRate,
  modifiedRate,
  guaranteeRate,
  newRate,
  onCodeChange,
  onDefaultRateChange,
  onModifiedRateChange,
  onGuaranteeRateChange,
  onNewRateChange,
  onModeChange,
  onCalculationMethodChange,
  onPrev,
  onNext,
  onSubmit,
  onClear,
  onTerminate,
}) => {

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h1 className="text-xl font-semibold mb-4">耐用年数マスタ</h1>
      <div className="flex space-x-4 mb-4">
        <button onClick={() => onModeChange('registration')} className="btn">登録</button>
        <button onClick={() => onModeChange('edit')} className="btn">訂正</button>
        <button onClick={() => onModeChange('delete')} className="btn">削除</button>
      </div>

      <div className="border p-4 rounded mb-4">
        <label className="block mb-2 font-medium">償却方法</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="method"
              value="fixed"
              onChange={() => onCalculationMethodChange('fixed')}
            />
            定額法
          </label>
          <label>
            <input
              type="radio"
              name="method"
              value="rate"
              onChange={() => onCalculationMethodChange('rate')}
            />
            定率法
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">耐用年数コード</label>
        <input
          type="text"
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">償却率</label>
        <input
          type="number"
          value={defaultRate}
          onChange={(e) => onDefaultRateChange(parseFloat(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">改定償却率</label>
        <input
          type="number"
          value={modifiedRate}
          onChange={(e) => onModifiedRateChange(parseFloat(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">償却保証率</label>
        <input
          type="number"
          value={guaranteeRate}
          onChange={(e) => onGuaranteeRateChange(parseFloat(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2">新償却率</label>
        <input
          type="number"
          value={newRate}
          onChange={(e) => onNewRateChange(parseFloat(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div className="flex space-x-4">
        <button onClick={onPrev} className="btn">前データ</button>
        <button onClick={onNext} className="btn">次データ</button>
        <button onClick={onSubmit} className="btn">OK</button>
        <button onClick={onClear} className="btn">クリア</button>
        <button onClick={onTerminate} className="btn">終了</button>
      </div>
    </div>
  );
};

export default DepreciationForm;

// Tailwind CSS styles at a high level
// .btn {
//   @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700;
// }
```