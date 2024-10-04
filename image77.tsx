```tsx
import React from 'react';

// TypeScriptの型定義
type ContractFormProps = {
  fiscalYear: string;
  division: string;
  tenderIndicators: '有' | '無';
  receptionNumberStart: string;
  receptionNumberEnd: string;
  contractDateStart: string;
  contractDateEnd: string;
  onSubmit: () => void;
  onReset: () => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  fiscalYear,
  division,
  tenderIndicators,
  receptionNumberStart,
  receptionNumberEnd,
  contractDateStart,
  contractDateEnd,
  onSubmit,
  onReset
}) => {
  // フォームコンポーネント
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-lg font-bold mb-4">契約台帳</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">年度</label>
        <input type="text" value={fiscalYear} readOnly className="border rounded px-2 py-1 w-full" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">受付区分</label>
        <input type="text" value={division} readOnly className="border rounded px-2 py-1 w-full" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">落札率印字</label>
        <div>
          <label className="mr-2">
            <input type="radio" checked={tenderIndicators === '有'} readOnly /> 有
          </label>
          <label>
            <input type="radio" checked={tenderIndicators === '無'} readOnly /> 無
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">受付番号</label>
        <div className="flex">
          <input type="text" value={receptionNumberStart} readOnly className="border rounded px-2 py-1 w-full" />
          <span className="mx-2">~</span>
          <input type="text" value={receptionNumberEnd} readOnly className="border rounded px-2 py-1 w-full" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">契約年月日</label>
        <div className="flex">
          <input type="text" value={contractDateStart} readOnly className="border rounded px-2 py-1 w-full" />
          <span className="mx-2">~</span>
          <input type="text" value={contractDateEnd} readOnly className="border rounded px-2 py-1 w-full" />
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={onReset} className="bg-gray-200 px-4 py-2 rounded mr-2">クリア</button>
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onReset} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">終了</button>
      </div>
    </div>
  );
};

export default ContractForm;
```