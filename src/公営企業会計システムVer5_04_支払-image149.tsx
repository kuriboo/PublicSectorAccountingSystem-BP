import React from 'react';

interface PaymentDetailFormProps {
  partnerStart?: string;
  partnerEnd?: string;
  dateStart?: string;
  dateEnd?: string;
  outputTarget?: string;
  onOkClick?: () => void;
  onClearClick?: () => void;
  onExitClick?: () => void;
}

const PaymentDetailForm: React.FC<PaymentDetailFormProps> = ({
  partnerStart = '',
  partnerEnd = '',
  dateStart = '',
  dateEnd = '',
  outputTarget = '',
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">支払明細書作成</h2>
      <div className="border p-4 bg-white rounded-md">
        <div className="mb-4">
          <label className="block font-semibold mb-2">範囲指定</label>
          <div className="flex">
            <div className="flex-1 mr-2">
              <label>相手先</label>
              <input
                type="text"
                defaultValue={partnerStart}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <span className="mx-2">~</span>
            <div className="flex-1">
              <label>相手先</label>
              <input
                type="text"
                defaultValue={partnerEnd}
                className="w-full border rounded px-2 py-1"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">支払年月日</label>
          <div className="flex">
            <div className="flex-1 mr-2">
              <input
                type="text"
                defaultValue={dateStart}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <span className="mx-2">~</span>
            <div className="flex-1">
              <input
                type="text"
                defaultValue={dateEnd}
                className="w-full border rounded px-2 py-1"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">出力対象</label>
          <input
            type="text"
            defaultValue={outputTarget}
            className="w-full border rounded px-2 py-1"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onOkClick} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClearClick} className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button onClick={onExitClick} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentDetailForm;
```