import React from 'react';

interface DateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ label, value, onChange }) => (
  <div className="flex items-center my-2">
    <span className="mr-2">{label}</span>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-2 py-1"
    />
  </div>
);

interface RadioGroupProps {
  name: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, selected, onChange }) => (
  <div className="flex items-center my-2">
    <span className="mr-2">{name}</span>
    {options.map((option) => (
      <label key={option} className="flex items-center mr-4">
        <input
          type="radio"
          name={name}
          value={option}
          checked={selected === option}
          onChange={() => onChange(option)}
          className="mr-1"
        />
        {option}
      </label>
    ))}
  </div>
);

interface AccountingFormProps {
  startDate: string;
  endDate: string;
  accountStart: string;
  accountEnd: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onAccountStartChange: (value: string) => void;
  onAccountEndChange: (value: string) => void;
  reportType: string;
  onReportTypeChange: (value: string) => void;
  includeAudit: string;
  onIncludeAuditChange: (value: string) => void;
}

const AccountingForm: React.FC<AccountingFormProps> = ({
  startDate,
  endDate,
  accountStart,
  accountEnd,
  onStartDateChange,
  onEndDateChange,
  onAccountStartChange,
  onAccountEndChange,
  reportType,
  onReportTypeChange,
  includeAudit,
  onIncludeAuditChange,
}) => (
  <div className="p-4 border rounded bg-gray-100">
    <h2 className="text-lg font-semibold mb-4">範囲指定</h2>
    <DateInput label="当月集計日付" value={startDate} onChange={onStartDateChange} />
    <DateInput label="~" value={endDate} onChange={onEndDateChange} />
    <DateInput label="仕訳科目" value={accountStart} onChange={onAccountStartChange} />
    <DateInput label="~" value={accountEnd} onChange={onAccountEndChange} />
    <RadioGroup
      name="作表区分"
      options={['目', '節', '細節', '明細']}
      selected={reportType}
      onChange={onReportTypeChange}
    />
    <RadioGroup
      name="決算仕様"
      options={['含む', '含まない']}
      selected={includeAudit}
      onChange={onIncludeAuditChange}
    />
  </div>
);

export default AccountingForm;
```