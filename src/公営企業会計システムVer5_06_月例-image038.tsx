import React from 'react';

type DateRangePickerProps = {
  label: string;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
};

type InputRangeProps = {
  label: string;
  startValue: string;
  endValue: string;
  onStartValueChange: (value: string) => void;
  onEndValueChange: (value: string) => void;
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  label,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="flex items-center space-x-3">
      <label className="font-bold">{label}</label>
      <input
        type="text"
        className="border p-1"
        value={startDate}
        onChange={(e) => onStartDateChange(e.target.value)}
      />
      <span>~</span>
      <input
        type="text"
        className="border p-1"
        value={endDate}
        onChange={(e) => onEndDateChange(e.target.value)}
      />
    </div>
  );
};

const InputRange: React.FC<InputRangeProps> = ({
  label,
  startValue,
  endValue,
  onStartValueChange,
  onEndValueChange,
}) => {
  return (
    <div className="flex items-center space-x-3">
      <label className="font-bold">{label}</label>
      <input
        type="text"
        className="border p-1"
        value={startValue}
        onChange={(e) => onStartValueChange(e.target.value)}
      />
      <span>~</span>
      <input
        type="text"
        className="border p-1"
        value={endValue}
        onChange={(e) => onEndValueChange(e.target.value)}
      />
    </div>
  );
};

const FormComponent: React.FC = () => {
  const [startDate, setStartDate] = React.useState('令和03年04月02日');
  const [endDate, setEndDate] = React.useState('令和03年04月02日');
  const [startAccount, setStartAccount] = React.useState('052020208');
  const [endAccount, setEndAccount] = React.useState('052020208');
  const [startDetail, setStartDetail] = React.useState('0000');
  const [endDetail, setEndDetail] = React.useState('9999');

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl mb-4">範囲指定</h2>
      <form className="space-y-4">
        <DateRangePicker
          label="作表日"
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
        <InputRange
          label="仕訳科目"
          startValue={startAccount}
          endValue={endAccount}
          onStartValueChange={setStartAccount}
          onEndValueChange={setEndAccount}
        />
        <InputRange
          label="仕訳細節"
          startValue={startDetail}
          endValue={endDetail}
          onStartValueChange={setStartDetail}
          onEndValueChange={setEndDetail}
        />
      </form>
    </div>
  );
};

export default FormComponent;
