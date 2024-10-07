import React from 'react';

type TableRow = {
  code: string;
  name: string;
}

type Props = {
  rows: TableRow[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const TableComponent: React.FC<Props> = ({ rows, onOk, onClear, onCancel }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-center font-bold text-lg mb-4">会議区分検索</h2>
      <div className="grid grid-cols-7 gap-2 mb-4">
        <div>会計年度</div>
        <div className="col-span-2">平成29</div>
        <div>年度</div>
        <div className="col-span-3 grid grid-cols-5">
          {['上水課', '上水課長補佐', '上水経理係長', '上水係', '決裁'].map((title, index) => (
            <div key={index}>{title}</div>
          ))}
        </div>
      </div>
      <table className="w-full table-fixed border-collapse mb-4">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="w-1/4 p-2 border">合議区分コード</th>
            <th className="w-3/4 p-2 border">合議区分名称</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-white">
              <td className="border p-2">{row.code}</td>
              <td className="border p-2">{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded shadow">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded shadow">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded shadow">キャンセル</button>
      </div>
    </div>
  );
}

export default TableComponent;
