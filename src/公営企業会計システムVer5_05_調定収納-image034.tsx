// Import necessary libraries
import React from 'react';

// Define TypeScript types
type TableRow = {
 仕訳コード: string;
 集合割定区分: string;
 摘要: string;
 税抜金額: number;
 税技金額: number;
 消費税額: number;
 集合割定番号: number;
 締め: string;
};

type AccountingEntryProps = {
 title: string;
 date: string;
 description: string;
 rows: TableRow[];
};

// Component Function
const AccountingEntry: React.FC<AccountingEntryProps> = ({ title, date, description, rows }) => {
 return (
   <div className="p-4 bg-gray-100 rounded-md">
     {/* Header Section */}
     <div className="text-center bg-blue-200 p-2 rounded-md">
       <h1 className="text-lg font-bold">{title}</h1>
       <span>{date}</span>
     </div>

     {/* Description Section */}
     <div className="mt-4 bg-white p-2 rounded-md">
       <p>{description}</p>
     </div>

     {/* Table Section */}
     <table className="mt-4 w-full border border-gray-300">
       <thead className="bg-blue-300">
         <tr>
           <th className="p-2 border">仕訳コード</th>
           <th className="p-2 border">集合割定区分</th>
           <th className="p-2 border">摘要</th>
           <th className="p-2 border">税抜金額</th>
           <th className="p-2 border">税技金額</th>
           <th className="p-2 border">消費税額</th>
           <th className="p-2 border">集合割定番号</th>
           <th className="p-2 border">締め</th>
         </tr>
       </thead>
       <tbody>
         {rows.map((row, index) => (
           <tr key={index} className="bg-white odd:bg-gray-50">
             <td className="p-2 border">{row.仕訳コード}</td>
             <td className="p-2 border">{row.集合割定区分}</td>
             <td className="p-2 border">{row.摘要}</td>
             <td className="p-2 border text-right">{row.税抜金額.toLocaleString()}</td>
             <td className="p-2 border text-right">{row.税技金額.toLocaleString()}</td>
             <td className="p-2 border text-right">{row.消費税額.toLocaleString()}</td>
             <td className="p-2 border">{row.集合割定番号}</td>
             <td className="p-2 border">{row.締め}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 );
};

export default AccountingEntry;
