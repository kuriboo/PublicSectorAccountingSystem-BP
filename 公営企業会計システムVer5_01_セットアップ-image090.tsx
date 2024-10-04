```tsx
import React from 'react';

type Option = {
  label: string;
  value: string | number;
};

type FormComponentProps = {
  collectionNumber: number;
  itemName: string;
  currencyOptions: Option[];
  lineOptions: Option[];
  onIndentChange: (value: number) => void;
  onCheckChange: (checked: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
  indentValue: number;
  checked: boolean;
};

const FormComponent: React.FC<FormComponentProps> = ({
  collectionNumber,
  itemName,
  currencyOptions,
  lineOptions,
  onIndentChange,
  onCheckChange,
  onSubmit,
  onClear,
  onCancel,
  indentValue,
  checked
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md">
      <div className="mb-4">
        <label className="block font-bold">集計番号</label>
        <span>{collectionNumber}</span>
      </div>
      
      <div className="mb-4">
        <label className="block font-bold">項目名称1</label>
        <input 
          type="text" 
          value={itemName} 
          readOnly 
          className="w-full border p-2"
        />
      </div>
      
      <div className="mb-4">
        <label className="block font-bold">金額印字区分</label>
        <select className="w-full border p-2">
          {currencyOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block font-bold">改行区分</label>
        <select className="w-full border p-2">
          {lineOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block font-bold">インデント</label>
        <input 
          type="number" 
          value={indentValue} 
          onChange={(e) => onIndentChange(parseInt(e.target.value, 10))} 
          className="w-full border p-2"
        />
      </div>
      
      <div className="mb-4">
        <label className="flex items-center">
          <input 
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckChange(e.target.checked)} 
            className="mr-2"
          />
          帳票出力無し
        </label>
      </div>
      
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```