```tsx
import React from 'react';

type Record = {
  date: string;
  details: string;
  fileName: string;
};

type FixedAssetCompartmentProps = {
  title?: string;
  records: Record[];
};

const FixedAssetCompartment: React.FC<FixedAssetCompartmentProps> = ({
  title = '固定資産コンパート取消',
  records,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow-sm max-w-2xl">
      {/* Header */}
      <div className="text-xl font-bold border-b pb-2 mb-4">{title}</div>
      
      {/* Table */}
      <table className="table-auto w-full mb-4 text-sm">
        <thead>
          <tr className="border-b text-left">
            <th className="px-2 py-1">No.</th>
            <th className="px-2 py-1">コンパート日時</th>
            <th className="px-2 py-1">異動区分</th>
            <th className="px-2 py-1">取込ファイル名</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="border-b">
              <td className="px-2 py-1">{index + 1}</td>
              <td className="px-2 py-1">{record.date}</td>
              <td className="px-2 py-1">{record.details}</td>
              <td className="px-2 py-1">{record.fileName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Note */}
      <div className="bg-blue-50 border-t border-blue-200 text-xs p-2 rounded">
        固定資産コンパート機能で登録した固定資産情報を削除します。<br />
        コンパートを行った日を指定して取消を行います。指定した日以前にコンパートしたすべての固定資産情報が削除されます。<br />
        ただし、コンバート後、異動が発生した固定資産が含まれている場合は、コンパート取消を行うことはできません。<br />
        コンパート後の異動承認をすべて削除してから、コンパート取消を行ってください。<br />
        当年度に行ったコンパートのみ取消すことができます。<br />
        コンパート取消を行った場合、データを元に戻すことはできません。
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default FixedAssetCompartment;
```