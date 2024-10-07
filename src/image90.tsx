import React from 'react';

type SelectItem = {
  id: string;
  label: string;
};

type FormProps = {
  yearOptions: string[];
  categoryOptions: string[];
  items: SelectItem[];
  onSelectItem: (id: string) => void;
  onSelectAll: (selected: boolean) => void;
  onOk: () => void;
  onClear: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  yearOptions,
  categoryOptions,
  items,
  onSelectItem,
  onSelectAll,
  onOk,
  onClear,
}) => {
  // Local state for managing the "select all" checkbox
  const [selectAll, setSelectAll] = React.useState(false);

  // Toggle select all items
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    onSelectAll(!selectAll);
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">入札結果取込更新処理</h2>
      <div className="flex space-x-4 mb-4">
        <div>
          <label htmlFor="year" className="block text-sm mb-2">年度</label>
          <select id="year" className="border rounded p-2">
            {yearOptions.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block text-sm mb-2">受付区分</label>
          <select id="category" className="border rounded p-2">
            {categoryOptions.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="border rounded p-4 mb-4">
        <label className="block text-sm mb-2">
          <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
          全選択
        </label>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <label className="block text-sm">
                <input type="checkbox" onChange={() => onSelectItem(item.id)} />
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded"
          onClick={onClear}
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```