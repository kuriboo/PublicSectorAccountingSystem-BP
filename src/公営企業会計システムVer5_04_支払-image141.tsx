import React from 'react';

// 型定義
interface Props {
  title: string;
  startRange?: string;
  endRange?: string;
  paymentDateStart?: string;
  paymentDateEnd?: string;
  methods?: string[];
  selectedMethod?: string;
  onMethodChange?: (method: string) => void;
  segment?: string;
  statuses?: string[];
  selectedStatus?: string;
  onStatusChange?: (status: string) => void;
  onOkClick?: () => void;
  onClearClick?: () => void;
  onExitClick?: () => void;
}

const PaymentScheduleForm: React.FC<Props> = ({
  title,
  startRange = '000000',
  endRange = '999999',
  paymentDateStart,
  paymentDateEnd,
  methods = ['すべて', '方法1', '方法2'],
  selectedMethod,
  onMethodChange,
  segment,
  statuses = ['すべて', '受渡未', '受渡済'],
  selectedStatus,
  onStatusChange,
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-100 rounded-md p-2 text-lg mb-4">{title}</div>
      <div className="border p-4 bg-gray-50 rounded-md">
        <div className="mb-4">
          <label className="mr-2">所属</label>
          <input
            type="text"
            defaultValue={startRange}
            className="border rounded p-1"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            defaultValue={endRange}
            className="border rounded p-1"
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">支払予定日</label>
          <input
            type="date"
            defaultValue={paymentDateStart}
            className="border rounded p-1"
          />
          <span className="mx-2">~</span>
          <input
            type="date"
            defaultValue={paymentDateEnd}
            className="border rounded p-1"
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">支払方法</label>
          <select
            value={selectedMethod}
            onChange={(e) => onMethodChange?.(e.target.value)}
            className="border rounded p-1"
          >
            {methods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="mr-4">ステータス</label>
          {statuses.map((status) => (
            <label key={status} className="mr-4">
              <input
                type="radio"
                name="status"
                value={status}
                checked={selectedStatus === status}
                onChange={() => onStatusChange?.(status)}
                className="mr-1"
              />
              {status}
            </label>
          ))}
        </div>
        <div className="mb-4">
          <label className="mr-2">セグメント</label>
          <input
            type="text"
            defaultValue={segment}
            className="border rounded p-1"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onOkClick} className="bg-blue-500 text-white px-4 py-1 rounded">
            OK
          </button>
          <button onClick={onClearClick} className="bg-yellow-500 text-white px-4 py-1 rounded">
            クリア
          </button>
          <button onClick={onExitClick} className="bg-red-500 text-white px-4 py-1 rounded">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentScheduleForm;
