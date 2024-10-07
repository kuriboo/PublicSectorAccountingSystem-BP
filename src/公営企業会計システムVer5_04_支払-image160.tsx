import React from 'react';

type ZaikoInputProps = {
  year: string;
  date: string;
  payment: string;
  paymentDestination: string;
  amount: number;
  isSaveOnly: boolean;
  summary: string;
  onDecideNumberChange: (value: string) => void;
  onSave: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ZaikoInput: React.FC<ZaikoInputProps> = ({
  year,
  date,
  payment,
  paymentDestination,
  amount,
  isSaveOnly,
  summary,
  onDecideNumberChange,
  onSave,
  onClear,
  onExit,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md space-y-4">
      <h1 className="text-lg font-semibold">資金前渡振替入力</h1>
      
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <label>精算処理日</label>
          <input type="date" value={year} readOnly className="border-gray-300 border rounded-md p-1" />
        </div>

        <div className="flex items-center space-x-2">
          <label>支払日</label>
          <input type="date" value={date} readOnly className="border-gray-300 border rounded-md p-1" />
        </div>

        <div className="flex items-center space-x-2">
          <label>支払先</label>
          <input type="text" value={paymentDestination} readOnly className="border-gray-300 border rounded-md p-1" />
        </div>

        <div className="flex items-center space-x-2">
          <label>金額</label>
          <input type="number" value={amount} readOnly className="border-gray-300 border rounded-md p-1" />
        </div>

        <div className="flex items-center">
          <input type="checkbox" checked={isSaveOnly} readOnly className="mr-2" />
          <label>適格請求書発行事業者以外 帳簿のみ保存</label>
        </div>

        <div className="flex items-center space-x-2">
          <label>摘要</label>
          <input type="text" value={summary} readOnly className="border-gray-300 border rounded-md p-1 flex-1" />
        </div>

        <div className="flex items-center space-x-2">
          <label>決定番号</label>
          <input
            type="number"
            onChange={(e) => onDecideNumberChange(e.target.value)}
            className="border-gray-300 border rounded-md p-1"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button onClick={onSave} className="bg-blue-500 text-white px-4 py-2 rounded-md">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded-md">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded-md">終了</button>
      </div>
    </div>
  );
};

export default ZaikoInput;
```