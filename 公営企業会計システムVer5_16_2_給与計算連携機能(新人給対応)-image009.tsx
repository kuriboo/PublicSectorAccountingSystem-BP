```tsx
import React from 'react';

type PaymentDataRemovalProps = {
  removalTarget: '給与支払データ' | '控除分支払データ';
  date: string;
  onDisplayClick: () => void;
  onDetailClick: () => void;
  onRemoveClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onEndClick: () => void;
};

const PaymentDataRemoval: React.FC<PaymentDataRemovalProps> = ({
  removalTarget,
  date,
  onDisplayClick,
  onDetailClick,
  onRemoveClick,
  onOkClick,
  onClearClick,
  onEndClick,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">給与支払確定解除入力</h1>
      
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="salary"
            name="removalTarget"
            value="給与支払データ"
            checked={removalTarget === '給与支払データ'}
            readOnly
          />
          <label htmlFor="salary" className="ml-2">給与支払データ</label>

          <input
            type="radio"
            id="deduction"
            name="removalTarget"
            value="控除分支払データ"
            checked={removalTarget === '控除分支払データ'}
            readOnly
            className="ml-4"
          />
          <label htmlFor="deduction" className="ml-2">控除分（預り金）支払データ</label>
        </div>
        
        <div className="flex items-center">
          <label htmlFor="payDate" className="mr-2">支払日</label>
          <input
            type="text"
            id="payDate"
            value={date}
            readOnly
            className="border p-1 mr-2"
          />
          <button 
            onClick={onDisplayClick}
            className="bg-blue-500 text-white px-4 py-1 rounded">
            表示
          </button>
        </div>
      </div>

      <div className="mb-4">
        <button 
          onClick={onDetailClick}
          className="bg-gray-200 text-black px-4 py-1 rounded mr-2">
          明細照会
        </button>
        <button 
          onClick={onRemoveClick}
          className="bg-gray-200 text-black px-4 py-1 rounded">
          解除
        </button>
      </div>

      <div className="border-t border-b py-2">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th>決定番号</th>
              <th>支払先</th>
              <th>摘要</th>
              <th>決定額</th>
            </tr>
          </thead>
          <tbody>
            {/* Data rows can be mapped here */}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <button 
          onClick={onRemoveClick}
          className="bg-gray-200 text-black px-4 py-1 rounded">
          解除
        </button>
      </div>

      <div className="border-t border-b py-2">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th>集合納付番号</th>
              <th>摘要</th>
              <th>収納金額</th>
              <th>内消費税額</th>
              <th>特定収入</th>
              <th>調</th>
            </tr>
          </thead>
          <tbody>
            {/* Data rows can be mapped here */}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button 
          onClick={onOkClick}
          className="bg-gray-800 text-white px-4 py-1 rounded">
          OK
        </button>
        <button 
          onClick={onClearClick}
          className="bg-gray-800 text-white px-4 py-1 rounded">
          クリア
        </button>
        <button 
          onClick={onEndClick}
          className="bg-gray-800 text-white px-4 py-1 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentDataRemoval;
```