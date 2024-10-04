```tsx
import React from 'react';

// TypeScript types for props
type TableRow = {
  id: string;
  label: string;
  value: number | string;
};

type JobTableProps = {
  title: string;
  rows: TableRow[];
  className?: string;
};

type NoteTableProps = {
  title: string;
  rows: TableRow[];
  className?: string;
};

// Component for rendering a table
const Table: React.FC<{ title: string; rows: TableRow[]; className?: string }> = ({ title, rows, className }) => (
  <div className={`bg-blue-900 text-white p-4 ${className}`}>
    <h2 className="font-bold mb-2">{title}</h2>
    <table className="w-full bg-white text-black">
      <thead>
        <tr>
          <th className="border px-2 py-1">ID</th>
          <th className="border px-2 py-1">Label</th>
          <th className="border px-2 py-1">Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="odd:bg-gray-100">
            <td className="border px-2 py-1">{row.id}</td>
            <td className="border px-2 py-1">{row.label}</td>
            <td className="border px-2 py-1">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Component for the job information section
const JobTable: React.FC<JobTableProps> = ({ title, rows, className }) => (
  <Table title={title} rows={rows} className={className} />
);

// Component for the note section
const NoteTable: React.FC<NoteTableProps> = ({ title, rows, className }) => (
  <Table title={title} rows={rows} className={className} />
);

// Main component
const MainComponent: React.FC = () => {
  const jobRows: TableRow[] = [
    { id: '000001', label: '一般雑手配文管理技能者', value: 10 },
    { id: '000002', label: '耐震雑手配文管理技能者', value: 8 },
    { id: '000003', label: '主観点:ISO', value: 2 },
  ];

  const noteRows: TableRow[] = [
    { id: '注記001', label: '注記名称テスト××線', value: 'ISG000series' },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <JobTable title="業者名" rows={jobRows} className="mr-4" />
        <NoteTable title="業者カナ" rows={noteRows} />
      </div>
      <button className="mt-4 bg-gray-400 text-black px-4 py-2 rounded">キャンセル</button>
    </div>
  );
};

export default MainComponent;
```