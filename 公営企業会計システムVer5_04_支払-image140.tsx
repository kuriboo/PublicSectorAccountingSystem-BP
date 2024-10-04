```tsx
// components/PaymentForm.tsx
import React from 'react';

type PaymentFormProps = {
  startDate: string;
  endDate: string;
  specifyNumber: boolean;
  numberRange: [number, number];
  electronicSettlement: boolean;
  integrationOptions: {
    unintegrated: boolean;
    integrated: boolean;
    settled: boolean;
  };
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

export const PaymentForm: React.FC<PaymentFormProps> = ({
  startDate,
  endDate,
  specifyNumber,
  numberRange,
  electronicSettlement,
  integrationOptions,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">支払伝票（単票）作成</h1>
      <div className="mb-4">
        <label className="block font-semibold">範囲指定</label>
        <div className="flex items-center space-x-2">
          <span>支払日</span>
          <input type="text" value={startDate} className="input input-bordered" readOnly />
          <span>～</span>
          <input type="text" value={endDate} className="input input-bordered" readOnly />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">伝票番号</label>
        <div className="flex items-center space-x-2">
          <label>
            <input type="radio" checked={!specifyNumber} readOnly /> 指定しない
          </label>
          <label>
            <input type="radio" checked={specifyNumber} readOnly /> 指定する
          </label>
          <input 
            type="number" 
            value={numberRange[0]} 
            className="input input-bordered w-20" 
            readOnly 
          />
          <span>～</span>
          <input 
            type="number" 
            value={numberRange[1]} 
            className="input input-bordered w-20" 
            readOnly 
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">電子決裁</label>
        <div className="flex items-center space-x-2">
          <label>
            <input type="radio" checked={electronicSettlement} readOnly /> 連携する
          </label>
          <label>
            <input type="radio" checked={!electronicSettlement} readOnly /> 連携しない
          </label>
        </div>
      </div>
      <div className="mb-4 border p-2">
        <label className="block font-semibold">連携状況</label>
        <div className="flex items-center space-x-2">
          <label>
            <input 
              type="checkbox" 
              checked={integrationOptions.unintegrated} 
              readOnly 
            /> 未連携
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={integrationOptions.integrated} 
              readOnly 
            /> 連携済み（決裁中）
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={integrationOptions.settled} 
              readOnly 
            /> 決裁完了
          </label>
        </div>
        <p className="text-xs mt-2">
          ※連携する場合、「未連携」のみ出力対象となります。<br />
          「未連携」には、連携先システムで削除された伝票も含まれます。
        </p>
      </div>
      <div className="flex space-x-4 justify-end">
        <button className="btn" onClick={onOk}>OK</button>
        <button className="btn" onClick={onClear}>クリア</button>
        <button className="btn" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};
```