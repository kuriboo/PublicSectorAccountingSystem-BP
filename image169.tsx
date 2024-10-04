```tsx
import React from 'react';

// TypeScript type definitions for TableRowProps
interface TableRowProps {
  data: {
    key: string;
    value: string;
  }[];
}

// Reusable TableRow component
const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 bg-gray-100 border border-gray-300 rounded-md shadow-md mb-4">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="p-2 border-b border-gray-200 font-bold">{item.key}</div>
          <div className="p-2 border-b border-gray-200">{item.value}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

// TypeScript type definitions for TableProps
interface TableProps {
  title: string;
  rows: {
    key: string;
    value: string;
  }[][];
}

// Reusable Table component
const Table: React.FC<TableProps> = ({ title, rows }) => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {rows.map((rowData, index) => (
        <TableRow key={index} data={rowData} />
      ))}
    </div>
  );
};

// Example of how to use the Table component with props
const ExampleUsage = () => {
  return (
    <div>
      <Table
        title="1133 APKGRPMT アプリケーショングループマスタ"
        rows={[
          [{ key: "K<RK>APGRPCD", value: "char" }, { key: "BSKNFG", value: "char" }],
        ]}
      />
      <Table
        title="1132 APMTM アプリケーションマスタ"
        rows={[
          [{ key: "K<RK>ZMTTLCD", value: "char" }, { key: "APGRPCD", value: "char" }],
        ]}
      />
      <Table
        title="1131 APKMT アプリケーション構成定義マスタ"
        rows={[
          [
            { key: "<K(RK)XENDD>", value: "number" },
            { key: "K<RK>ZSCCD", value: "char" },
            { key: "K<RK>ZTTLCD", value: "char" },
            { key: "K<RK>ZAPGRPCD", value: "char" },
            { key: "TRDLTATKDDV", value: "char" },
            { key: "SDDATKDDV", value: "char" },
          ],
        ]}
      />
      <Table
        title="1134 DATKTRGRSMT データ取扱者別設定マスタ"
        rows={[
          [
            { key: "<K(RK)XENDD>", value: "number" },
            { key: "K<RK>ZSCCD", value: "char" },
            { key: "K<RK>ZTTLCD", value: "char" },
            { key: "K(RK)ZAPGRPCD", value: "char" },
            { key: "SSKNFG", value: "char" },
            { key: "TJRNFNG", value: "char" },
            { key: "SJRNFS", value: "char" },
            { key: "BSKNFG", value: "char" },
          ],
        ]}
      />
    </div>
  );
};

export default ExampleUsage;
```