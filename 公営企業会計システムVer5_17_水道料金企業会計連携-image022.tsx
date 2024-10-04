```tsx
import React from 'react';

type DateRangeInputProps = {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
};

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  label,
  checked,
  onCheckedChange,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => (
  <div className="flex items-center space-x-2">
    <label>
      <input type="checkbox" checked={checked} onChange={(e) => onCheckedChange(e.target.checked)} />
      {label}
    </label>
    <input
      type="date"
      value={startDate}
      onChange={(e) => onStartDateChange(e.target.value)}
      className="border p-1"
    />
    <span>〜</span>
    <input
      type="date"
      value={endDate}
      onChange={(e) => onEndDateChange(e.target.value)}
      className="border p-1"
    />
  </div>
);

type ExportSettingsProps = {
  destination: string;
  onDestinationChange: (destination: string) => void;
};

const ExportSettings: React.FC<ExportSettingsProps> = ({
  destination,
  onDestinationChange,
}) => (
  <div className="p-4 border rounded mb-4">
    <div>
      <label>
        出力先:
        <input
          type="text"
          value={destination}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="border p-1 ml-2"
        />
      </label>
    </div>
  </div>
);

const ExportDataComponent: React.FC = () => {
  const [exportDestination, setExportDestination] = React.useState('C:\\Gyosei\\Ryokin\\連携データ');
  const [dateChecked, setDateChecked] = React.useState(false);
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  return (
    <div className="max-w-lg mx-auto p-4 border">
      <h1 className="text-xl font-bold mb-4">会計連携データ出力</h1>
      <ExportSettings
        destination={exportDestination}
        onDestinationChange={setExportDestination}
      />
      <DateRangeInput
        label="収納年/月日"
        checked={dateChecked}
        onCheckedChange={setDateChecked}
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">OK</button>
    </div>
  );
};

export default ExportDataComponent;
```