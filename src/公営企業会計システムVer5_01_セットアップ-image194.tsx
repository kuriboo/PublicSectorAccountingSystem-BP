import React from 'react';

type TableRow = {
  code: string;
  name: string;
};

type FormComponentProps = {
  code: string;
  name: string;
  onCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOperationChange: (operation: 'register' | 'edit' | 'delete') => void;
  rows: TableRow[];
  onEdit: (row: TableRow) => void;
  onDelete: (row: TableRow) => void;
  onSubmit: () => void;
  onClear: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  code,
  name,
  onCodeChange,
  onNameChange,
  onOperationChange,
  rows,
  onEdit,
  onDelete,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4">
      <div className="bg-purple-200 p-2 rounded">
        <h1 className="text-lg font-bold">仕訳性質区分マスタ</h1>
      </div>
      <div className="flex items-center my-2">
        <label className="mr-2">仕訳性質区分コード</label>
        <input
          type="text"
          value={code}
          onChange={onCodeChange}
          className="border p-1 mr-4"
        />
        <label className="mr-2">名称</label>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          className="border p-1"
        />
      </div>
      <div className="flex items-center my-2">
        <label className="mr-2">操作</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="operation"
            onChange={() => onOperationChange('register')}
            className="mr-1"
          />
          <span className="mr-4">登録</span>
          <input
            type="radio"
            name="operation"
            onChange={() => onOperationChange('edit')}
            className="mr-1"
          />
          <span className="mr-4">訂正</span>
          <input
            type="radio"
            name="operation"
            onChange={() => onOperationChange('delete')}
            className="mr-1"
          />
          <span>削除</span>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">コード</th>
            <th className="border p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.code}>
              <td className="border p-2">{row.code}</td>
              <td className="border p-2">{row.name}</td>
              <td className="p-2">
                <button onClick={() => onEdit(row)} className="mr-2">編集</button>
                <button onClick={() => onDelete(row)}>行削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between my-4">
        <button onClick={onSubmit} className="bg-gray-300 p-2 flex-grow mr-2">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 p-2 flex-grow mr-2">
          クリア
        </button>
        <button className="bg-gray-300 p-2 flex-grow">終了</button>
      </div>
    </div>
  );
};

export default FormComponent;
```