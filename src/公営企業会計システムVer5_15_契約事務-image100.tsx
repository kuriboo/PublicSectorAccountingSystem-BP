import React from 'react';

// TypeScript types for props
type ReceptionRecord = {
  sectionType: string;
  sectionCode: string;
  affiliation: string;
  receptionNumber: string;
};

type ReceptionComponentProps = {
  year: string;
  sectionTypes: string[];
  records: ReceptionRecord[];
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const ReceptionComponent: React.FC<ReceptionComponentProps> = ({ 
  year, 
  sectionTypes, 
  records, 
  onOk, 
  onClear, 
  onEnd 
}) => {
  return (
    <div className="w-full p-4">
      {/* Header */}
      <div className="bg-blue-100 p-2 mb-4">
        <h1 className="text-xl font-bold text-center">所属別受付番号付番管理</h1>
      </div>

      {/* Form Section */}
      <div className="flex items-center space-x-4 mb-4">
        <div>
          <label>年度: </label>
          <span>{year}</span>
        </div>
        <div>
          <label>受付区分: </label>
          <select className="border border-gray-300 p-1">
            {sectionTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="text-left bg-blue-800 text-white">
            <th className="p-2">受付区分</th>
            <th className="p-2">所属コード</th>
            <th className="p-2">所属</th>
            <th className="p-2">受付番号</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className={`bg-${index % 2 === 0 ? 'white' : 'gray-100'}`}>
              <td className="p-2 border border-gray-300">{record.sectionType}</td>
              <td className="p-2 border border-gray-300">{record.sectionCode}</td>
              <td className="p-2 border border-gray-300">{record.affiliation}</td>
              <td className="p-2 border border-gray-300">{record.receptionNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button Actions */}
      <div className="flex justify-end space-x-4">
        <button onClick={onOk} className="bg-gray-200 p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-200 p-2 rounded">クリア</button>
        <button onClick={onEnd} className="bg-gray-200 p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReceptionComponent;
```