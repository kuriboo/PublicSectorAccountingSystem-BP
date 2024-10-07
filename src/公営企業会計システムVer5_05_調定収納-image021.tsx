import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  date: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, date }) => (
  <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl">{title}</h1>
    <div className="text-right">
      <p>{subtitle}</p>
      <p>{date}</p>
    </div>
  </div>
);

interface DateRangeProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const DateRange: React.FC<DateRangeProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => (
  <div className="border p-4 mt-4">
    <label className="block text-sm font-bold mb-2">範囲指定</label>
    <div className="flex items-center">
      <label className="mr-2">調定日</label>
      <input
        type="text"
        value={startDate}
        onChange={(e) => onStartDateChange(e.target.value)}
        className="border p-1 mr-2"
      />
      <span className="mx-2">〜</span>
      <input
        type="text"
        value={endDate}
        onChange={(e) => onEndDateChange(e.target.value)}
        className="border p-1"
      />
    </div>
  </div>
);

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded mr-2"
  >
    {text}
  </button>
);

interface ComponentProps {
  headerTitle: string;
  headerSubtitle: string;
  headerDate: string;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const CustomComponent: React.FC<ComponentProps> = ({
  headerTitle,
  headerSubtitle,
  headerDate,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onOk,
  onClear,
  onClose,
}) => (
  <div className="font-sans p-4">
    <Header title={headerTitle} subtitle={headerSubtitle} date={headerDate} />
    <DateRange
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={onStartDateChange}
      onEndDateChange={onEndDateChange}
    />
    <div className="flex justify-end mt-4">
      <Button text="OK" onClick={onOk} />
      <Button text="クリア" onClick={onClear} />
      <Button text="終了" onClick={onClose} />
    </div>
  </div>
);

export default CustomComponent;