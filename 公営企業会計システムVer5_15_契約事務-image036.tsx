import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

interface TableColumn {
  header: string;
  accessor: string;
}

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: TableColumn[];
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, className }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`px-4 py-2 rounded ${disabled ? 'bg-gray-400' : 'bg-blue-500'} text-white ${className}`}
    >
      {label}
    </button>
  );
};

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className="py-2 text-left bg-gray-200">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b">
            {columns.map((column) => (
              <td key={column.accessor} className="py-2">
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
  selectedValue: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, selectedValue }) => {
  return (
    <select value={selectedValue} onChange={(e) => onChange(e.target.value)} className="border rounded px-2 py-1">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const App: React.FC = () => {
  const data = [
    { relationType: '入札執行者', relationName: 'ぎょうせい一郎' },
    { relationType: '入札立会人', relationName: 'ぎょうせい太郎' },
  ];

  const columns = [
    { header: '関係者区分', accessor: 'relationType' },
    { header: '入札関係者', accessor: 'relationName' },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <Button label="明細編集" onClick={() => alert('明細編集 clicked')} />
        <Button label="行削除" onClick={() => alert('行削除 clicked')} disabled={true} className="ml-2" />
      </div>
      <Table data={data} columns={columns} />
      <div className="mt-4">
        <Select 
          options={['入札執行者', '入札立会人']} 
          selectedValue="入札執行者" 
          onChange={(value) => console.log(value)} 
        />
      </div>
      <div className="mt-4">
        <Button label="OK" onClick={() => alert('OK clicked')} className="mr-2" />
        <Button label="クリア" onClick={() => alert('クリア clicked')} className="mr-2" />
        <Button label="キャンセル" onClick={() => alert('キャンセル clicked')} />
      </div>
    </div>
  );
};

export default App;