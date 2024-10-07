import React from 'react';

type DocumentSelectorProps = {
  options: { label: string; checked: boolean }[];
  onOptionChange: (index: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// 再利用可能なコンポーネント
const DocumentSelector: React.FC<DocumentSelectorProps> = ({
  options,
  onOptionChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="w-80 border rounded shadow-md p-4 bg-white">
      <h2 className="text-lg font-semibold mb-4">
        印刷対象帳票名
      </h2>
      <ul className="mb-4">
        {options.map((option, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={() => onOptionChange(index)}
              className="mr-2"
            />
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          キャンセル
        </button>
      </div>
    </div>
  );
};

// 使用例のためのコード
const ExampleUsage = () => {
  const [options, setOptions] = React.useState([
    { label: '支出負担行為伺書(物品)', checked: true },
    { label: '検収調書', checked: false },
    { label: '発注品目明細書', checked: false },
  ]);

  const handleOptionChange = (index: number) => {
    const newOptions = options.map((option, idx) => ({
      ...option,
      checked: idx === index ? !option.checked : option.checked,
    }));
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    console.log('Submitted:', options);
  };

  const handleClear = () => {
    setOptions(options.map(option => ({ ...option, checked: false })));
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <DocumentSelector
      options={options}
      onOptionChange={handleOptionChange}
      onSubmit={handleSubmit}
      onClear={handleClear}
      onCancel={handleCancel}
    />
  );
};

export default ExampleUsage;
