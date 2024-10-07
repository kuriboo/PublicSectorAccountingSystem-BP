import React from 'react';

type DateRangePickerProps = {
  startDate: string;
  endDate: string;
  startDateLabel?: string;
  endDateLabel?: string;
  onDateChange: (startDate: string, endDate: string) => void;
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  startDateLabel = '開始日',
  endDateLabel = '終了日',
  onDateChange,
}) => {
  return (
    <div className="flex flex-col p-4 border rounded bg-gray-100">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">{startDateLabel}</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => onDateChange(e.target.value, endDate)}
          className="mt-1 block w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">{endDateLabel}</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onDateChange(startDate, e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

type CounterpartyInputProps = {
  startCounterparty: string;
  endCounterparty: string;
  onCounterpartyChange: (startCounterparty: string, endCounterparty: string) => void;
};

const CounterpartyInput: React.FC<CounterpartyInputProps> = ({
  startCounterparty,
  endCounterparty,
  onCounterpartyChange,
}) => {
  return (
    <div className="flex flex-col p-4 border rounded bg-gray-100 mt-4">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">相手先（開始）</label>
        <input
          type="text"
          value={startCounterparty}
          onChange={(e) => onCounterpartyChange(e.target.value, endCounterparty)}
          className="mt-1 block w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">相手先（終了）</label>
        <input
          type="text"
          value={endCounterparty}
          onChange={(e) => onCounterpartyChange(startCounterparty, e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

type MainFormProps = {
  startDate: string;
  endDate: string;
  startCounterparty: string;
  endCounterparty: string;
  onDateChange: (startDate: string, endDate: string) => void;
  onCounterpartyChange: (startCounterparty: string, endCounterparty: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const MainForm: React.FC<MainFormProps> = ({
  startDate,
  endDate,
  startCounterparty,
  endCounterparty,
  onDateChange,
  onCounterpartyChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8 border rounded bg-white shadow-lg">
      <h1 className="text-xl font-bold mb-4">業者別取扱品目一覧表作成</h1>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onDateChange={onDateChange}
      />
      <CounterpartyInput
        startCounterparty={startCounterparty}
        endCounterparty={endCounterparty}
        onCounterpartyChange={onCounterpartyChange}
      />
      <div className="flex space-x-4 mt-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default MainForm;
```