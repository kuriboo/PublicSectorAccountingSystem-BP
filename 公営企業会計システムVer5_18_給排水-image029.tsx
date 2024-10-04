```tsx
import React from 'react';

// Define the types for component props
type FormProps = {
  selectedOption?: string;
  options: string[];
  code: string;
  name: string;
  onCodeChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onOptionChange: (value: string) => void;
  onEdit: () => void;
  onDelete: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  selectedOption,
  options,
  code,
  name,
  onCodeChange,
  onNameChange,
  onOptionChange,
  onEdit,
  onDelete,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="mr-2">選択肢：</label>
        <select
          value={selectedOption}
          onChange={(e) => onOptionChange(e.target.value)}
          className="border p-1"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block">コード</label>
        <input
          type="text"
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block">名称</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="border p-1 w-full"
        />
      </div>

      <div className="flex space-x-2 mb-4">
        <button onClick={onEdit} className="bg-gray-200 p-2">明細編集</button>
        <button onClick={onDelete} className="bg-gray-200 p-2">行削除</button>
      </div>

      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2">コード</th>
            <th className="p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {/* Example of how rows could be handled dynamically if needed */}
          {/* {rows.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.code}</td>
              <td className="border px-4 py-2">{row.name}</td>
            </tr>
          ))} */}
        </tbody>
      </table>

      <div className="flex space-x-2">
        <button onClick={onOk} className="bg-gray-200 p-2">OK</button>
        <button onClick={onClear} className="bg-gray-200 p-2">クリア</button>
        <button onClick={onClose} className="bg-gray-200 p-2">終了</button>
      </div>
    </div>
  );
};

export default FormComponent;
```