import React, { useState } from 'react';

// TypeScriptの型定義
type PaymentScheduleProps = {
  startDate: string;
  endDate: string;
  paymentMethod: string[];
  onSubmit: (data: { startDate: string; endDate: string; paymentMethod: string; status: string }) => void;
};

// コンポーネントの定義
const PaymentSchedule: React.FC<PaymentScheduleProps> = ({ startDate, endDate, paymentMethod, onSubmit }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethod[0]);
  const [status, setStatus] = useState('すべて');

  const handleSubmit = () => {
    onSubmit({
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      paymentMethod: selectedPaymentMethod,
      status,
    });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block mb-1">支払予定日</label>
        <input
          type="date"
          value={selectedStartDate}
          onChange={(e) => setSelectedStartDate(e.target.value)}
          className="border p-2 rounded-md"
        />
        <span className="mx-2">〜</span>
        <input
          type="date"
          value={selectedEndDate}
          onChange={(e) => setSelectedEndDate(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">支払方法</label>
        <select
          value={selectedPaymentMethod}
          onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          className="border p-2 rounded-md"
        >
          {paymentMethod.map((method, index) => (
            <option key={index} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">状況</label>
        <div className="flex space-x-4">
          {['受渡未', '受渡済', 'すべて'].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="status"
                value={option}
                checked={status === option}
                onChange={() => setStatus(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          OK
        </button>
        <button
          onClick={() => {
            setSelectedStartDate('');
            setSelectedEndDate('');
            setSelectedPaymentMethod(paymentMethod[0]);
            setStatus('すべて');
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          クリア
        </button>
        <button onClick={() => console.log('終了')} className="px-4 py-2 bg-red-500 text-white rounded-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentSchedule;
