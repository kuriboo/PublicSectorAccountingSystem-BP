import React from 'react';

// Props Type Definition
type InputBlockProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

// Single Input Block Component
const InputBlock: React.FC<InputBlockProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col items-center">
      <label className="text-blue-800 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 text-center p-1 w-12"
      />
    </div>
  );
};

// Props Type Definition for Main Component
type AccountingEntryProps = {
  year: string;
  subject: string;
  day: string;
  section: string;
  subsection: string;
  detail: string;
  onYearChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onDayChange: (value: string) => void;
  onSectionChange: (value: string) => void;
  onSubsectionChange: (value: string) => void;
  onDetailChange: (value: string) => void;
};

// Main Component
const AccountingEntry: React.FC<AccountingEntryProps> = ({
  year,
  subject,
  day,
  section,
  subsection,
  detail,
  onYearChange,
  onSubjectChange,
  onDayChange,
  onSectionChange,
  onSubsectionChange,
  onDetailChange,
}) => {
  return (
    <div className="flex space-x-4">
      <InputBlock label="款" value={year} onChange={onYearChange} />
      <InputBlock label="項" value={subject} onChange={onSubjectChange} />
      <InputBlock label="目" value={day} onChange={onDayChange} />
      <InputBlock label="節" value={section} onChange={onSectionChange} />
      <InputBlock label="細節" value={subsection} onChange={onSubsectionChange} />
      <InputBlock label="明細" value={detail} onChange={onDetailChange} />
    </div>
  );
};

export default AccountingEntry;