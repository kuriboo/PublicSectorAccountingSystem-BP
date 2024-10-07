import React, { useState } from 'react';

// Props interface definition
interface CheckboxItem {
  label: string;
  checked: boolean;
}

interface CheckboxListProps {
  items: CheckboxItem[];
  onChange: (updatedItems: CheckboxItem[]) => void;
}

// CheckboxList component
const CheckboxList: React.FC<CheckboxListProps> = ({ items, onChange }) => {
  // State to manage the checkboxes
  const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>(items);

  // Handle checkbox change
  const handleCheckboxChange = (index: number) => {
    const updatedItems = checkboxItems.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setCheckboxItems(updatedItems);
    onChange(updatedItems);
  };

  return (
    <div className="p-4 bg-white border shadow-md rounded-md w-80">
      <h3 className="text-blue-800 font-bold">印刷対象帳票名</h3>
      <ul className="my-2">
        {checkboxItems.map((item, index) => (
          <li key={index} className="flex items-center my-1">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
              className="mr-2"
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
          OK
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
          クリア
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

// Example usage
const ExampleComponent: React.FC = () => {
  const initialItems: CheckboxItem[] = [
    { label: '調書兼命令書 (その他 BS)', checked: true },
    { label: '支払通知書', checked: false },
    { label: '調定伺書', checked: true },
  ];

  const handleItemsChange = (updatedItems: CheckboxItem[]) => {
    console.log(updatedItems);
  };

  return <CheckboxList items={initialItems} onChange={handleItemsChange} />;
};

export default ExampleComponent;
