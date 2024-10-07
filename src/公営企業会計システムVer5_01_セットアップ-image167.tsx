import React from 'react';

// 型定義
interface TableItem {
  key: string;
  dataType: string;
}

interface TableProps {
  title: string;
  items: TableItem[];
}

// コンポーネント
const DataTable: React.FC<TableProps> = ({ title, items }) => {
  return (
    <div className="border rounded-lg shadow p-4 m-4 bg-white">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Key</th>
            <th className="px-4 py-2 border">Data Type</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 border">{item.key}</td>
              <td className="px-4 py-2 border">{item.dataType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 使用例
const App = () => {
  return (
    <div className="p-8">
      <DataTable
        title="1133 APKGRPMT アプリケーショングループマスタ"
        items={[
          { key: '<PK>APGRPCD', dataType: 'char' },
          { key: 'BSKNFG', dataType: 'char' }
        ]}
      />
      <DataTable
        title="1132 APMTT アプリケーションマスタ"
        items={[
          { key: '<PK>APMTTLCD', dataType: 'char' },
          { key: 'APGRPCD', dataType: 'char' }
        ]}
      />
      <DataTable
        title="1131 APKMNT アプリケーション構成マスタ"
        items={[
          { key: '<PK>HXNEND', dataType: 'number' },
          { key: '<PK>ZZSCD', dataType: 'char' },
          { key: '<PK>ZZTDCD', dataType: 'char' },
          { key: '<RX>APGRPCD', dataType: 'char' },
          { key: '<RD>TAKTGGV', dataType: 'char' },
          { key: 'SDDATKTDV', dataType: 'char' }
        ]}
      />
      <DataTable
        title="1134 DATKWGBSMT データ処理自動定マスタ"
        items={[
          { key: '<PK>HXNEND', dataType: 'number' },
          { key: '<PK>ZSZCD', dataType: 'char' },
          { key: '<PK>ZZKYTDCD', dataType: 'char' },
          { key: '<RX>APGRPCD', dataType: 'char' },
          { key: 'SSNFG', dataType: 'char' },
          { key: 'TRNFG', dataType: 'char' },
          { key: 'SUFNS', dataType: 'char' },
          { key: 'SSKNFG', dataType: 'char' }
        ]}
      />
    </div>
  );
};

export default App;
