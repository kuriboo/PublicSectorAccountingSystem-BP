```tsx
import React, { FC } from 'react';

type OrderFormProps = {
  issueType: '新規' | '再発行';
  startDate: string;
  endDate: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const OrderForm: FC<OrderFormProps> = ({
  issueType,
  startDate,
  endDate,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 max-w-lg mx-auto rounded-lg">
      <h2 className="text-lg font-bold mb-4">控除額支出命令書発行</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">発行区分</h3>
        <label className="mr-4">
          <input type="radio" checked={issueType === '新規'} readOnly />
          新規
        </label>
        <label>
          <input type="radio" checked={issueType === '再発行'} readOnly />
          再発行
        </label>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">発行対象</h3>
        <div className="mb-2">
          <label className="mr-2">支払年月日</label>
          <input type="text" value={startDate} readOnly className="border rounded p-1 mr-2" />
          <span>~</span>
          <input type="text" value={endDate} readOnly className="border rounded p-1 ml-2" />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 py-1 px-4 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default OrderForm;
```