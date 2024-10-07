import React from 'react';

type Props = {
  header: string;
  data: Array<{
    sourceName: string;
    category: string;
    beforeChange: number;
    changeAmount: number;
    afterChange: number;
  }>;
  editableSource: {
    code: string;
    name: string;
    category: string;
    beforeChange: number;
    changeAmount: number;
    afterChange: number;
  }
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BalanceInputTable: React.FC<Props> = ({
  header,
  data,
  editableSource,
  onConfirm,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-blue-600 text-white py-2 px-4">{header}</div>
      <table className="w-full table-auto mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">財源名称</th>
            <th className="px-4 py-2">償却区分</th>
            <th className="px-4 py-2">異動前</th>
            <th className="px-4 py-2">異動額</th>
            <th className="px-4 py-2">異動後</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="hover:bg-gray-100" key={index}>
              <td className="border px-4 py-2">{item.sourceName}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">{item.beforeChange.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.changeAmount.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.afterChange.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <h3 className="mb-2">財源編集</h3>
        <div className="mb-2">
          <label>財源コード: </label>
          <input value={editableSource.code} readOnly className="border" />
          <input value={editableSource.name} readOnly className="border" />
        </div>
        <div>
          <label>償却区分: </label>
          <input value={editableSource.category} readOnly className="border" />
        </div>
        <div className="flex space-x-4 mt-2">
          <input value={editableSource.beforeChange.toLocaleString()} readOnly className="border" />
          <input value={editableSource.changeAmount} className="border" />
          <input value={editableSource.afterChange.toLocaleString()} readOnly className="border" />
        </div>
      </div>
      <div className="flex mt-6 space-x-4">
        <button onClick={onConfirm} className="bg-blue-500 text-white py-2 px-4">
          行確定
        </button>
        <button onClick={onCancel} className="bg-gray-500 text-white py-2 px-4">
          行キャンセル
        </button>
        <button onClick={onClear} className="bg-red-500 text-white py-2 px-4">
          クリア
        </button>
      </div>
    </div>
  );
};

export default BalanceInputTable;
```