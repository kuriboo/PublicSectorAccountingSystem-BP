import React from 'react';

type TermMasterProps = {
  year: string;
  termSections: string[];
  data: { termNo1: string; termNo2: string; name: string; abbreviation: string; reserve1: string; reserve2: string; reserve3: string; reserve4: string; }[];
  onEditDetail: () => void;
  onRowDelete: () => void;
};

const TermMaster: React.FC<TermMasterProps> = ({ year, termSections, data, onEditDetail, onRowDelete }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-xl font-bold text-center mb-4">用語マスタ</h1>
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <label className="mr-2">年度:</label>
          <span className="font-medium">{year}</span>
        </div>

        <div>
          <button onClick={onEditDetail} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">明細編集</button>
          <button onClick={onRowDelete} className="bg-red-500 text-white px-4 py-2 rounded">行削除</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">用語番号1</th>
              <th className="py-2 px-4 border-b">用語番号2</th>
              <th className="py-2 px-4 border-b">名称</th>
              <th className="py-2 px-4 border-b">略名</th>
              <th className="py-2 px-4 border-b">予備1</th>
              <th className="py-2 px-4 border-b">予備2</th>
              <th className="py-2 px-4 border-b">予備3</th>
              <th className="py-2 px-4 border-b">予備4</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{row.termNo1}</td>
                <td className="py-2 px-4 border-b">{row.termNo2}</td>
                <td className="py-2 px-4 border-b">{row.name}</td>
                <td className="py-2 px-4 border-b">{row.abbreviation}</td>
                <td className="py-2 px-4 border-b">{row.reserve1}</td>
                <td className="py-2 px-4 border-b">{row.reserve2}</td>
                <td className="py-2 px-4 border-b">{row.reserve3}</td>
                <td className="py-2 px-4 border-b">{row.reserve4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TermMaster;
```