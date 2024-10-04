```tsx
import React from 'react';

// 型定義
type TableColumn = {
  title: string;
  key: string;
}

type TableRow = {
  [key: string]: React.ReactNode;
}

type DataTableProps = {
  columns: TableColumn[];
  data: TableRow[];
  className?: string;
}

// コンポーネント
const DataTable: React.FC<DataTableProps> = ({ columns, data, className = '' }) => {
  return (
    <table className={`min-w-full border-collapse ${className}`}>
      <thead>
        <tr className="bg-gray-100">
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-2 border">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="even:bg-gray-50">
            {columns.map((column) => (
              <td key={column.key} className="px-4 py-2 border">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

// 使用例
const columns: TableColumn[] = [
  { title: '筆者名', key: 'writerName' },
  { title: '工事名', key: 'constructionName' },
  { title: '摘要1', key: 'note1' },
  { title: '摘要2', key: 'note2' },
  { title: '入庫区分', key: 'entryType' },
  { title: '入庫内容', key: 'entryContent' },
  { title: '所轄コード', key: 'jurisdictionCode' },
  { title: '所轄署', key: 'jurisdictionStation' },
  { title: '予定番号', key: 'scheduledNumber' },
  { title: '負担番号', key: 'burdenNumber' },
];

const data: TableRow[] = [
  {
    writerName: '○○地区',
    constructionName: '',
    note1: '財政入庫登録',
    note2: '',
    entryType: '041001',
    entryContent: '[会計] 財政入庫登録',
    jurisdictionCode: '9999999',
    jurisdictionStation: '練馬署',
    scheduledNumber: '経常',
    burdenNumber: ''
  },
  {
    writerName: '○○地区',
    constructionName: '',
    note1: '減差帳',
    note2: '',
    entryType: '041001',
    entryContent: '[会計] 財政入庫登録',
    jurisdictionCode: '9999999',
    jurisdictionStation: '練馬署',
    scheduledNumber: '経常',
    burdenNumber: ''
  },
];
```