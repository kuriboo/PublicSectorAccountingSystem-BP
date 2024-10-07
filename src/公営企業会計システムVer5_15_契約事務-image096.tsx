import React from 'react';

type TermRowProps = {
  term1: string;
  term2: string;
  name: string;
  abbrev: string;
  reserve1: string;
  reserve2: string;
  reserve3: string;
  reserve4: string;
};

const TermRow: React.FC<TermRowProps> = ({ 
  term1, term2, name, abbrev, reserve1, reserve2, reserve3, reserve4 
}) => {
  return (
    <tr className="odd:bg-gray-100 even:bg-white">
      <td className="px-4 py-2 border">{term1}</td>
      <td className="px-4 py-2 border">{term2}</td>
      <td className="px-4 py-2 border">{name}</td>
      <td className="px-4 py-2 border">{abbrev}</td>
      <td className="px-4 py-2 border">{reserve1}</td>
      <td className="px-4 py-2 border">{reserve2}</td>
      <td className="px-4 py-2 border">{reserve3}</td>
      <td className="px-4 py-2 border">{reserve4}</td>
    </tr>
  );
};

type TermTableProps = {
  rows: TermRowProps[];
};

const TermTable: React.FC<TermTableProps> = ({ rows }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-400 text-left">
      <thead>
        <tr>
          <th className="px-4 py-2 border bg-blue-100">用語番号1</th>
          <th className="px-4 py-2 border bg-blue-100">用語番号2</th>
          <th className="px-4 py-2 border bg-blue-100">名称</th>
          <th className="px-4 py-2 border bg-blue-100">略名</th>
          <th className="px-4 py-2 border bg-blue-100">予備1</th>
          <th className="px-4 py-2 border bg-blue-100">予備2</th>
          <th className="px-4 py-2 border bg-blue-100">予備3</th>
          <th className="px-4 py-2 border bg-blue-100">予備4</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TermRow key={index} {...row} />
        ))}
      </tbody>
    </table>
  );
};

export default TermTable;
