```tsx
import React, { useState } from 'react';

type ExtractionType = 'new' | 'reExtraction';

interface Props {
  yearOptions: string[];
  categoryOptions: string[];
  items: string[];
  onSubmit: (selectedItems: string[], extractionType: ExtractionType) => void;
}

const ExtractionForm: React.FC<Props> = ({ yearOptions, categoryOptions, items, onSubmit }) => {
  const [selectedYear, setSelectedYear] = useState(yearOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [extractionType, setExtractionType] = useState<ExtractionType>('new');

  const handleItemChange = (item: string) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item) ? prevItems.filter((i) => i !== item) : [...prevItems, item]
    );
  };

  const handleSelectAll = (isChecked: boolean) => {
    setSelectedItems(isChecked ? items : []);
  };

  const handleSubmit = () => {
    onSubmit(selectedItems, extractionType);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <select 
          className="block w-full mt-1 border-gray-300 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {yearOptions.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">受付区分</label>
        <select 
          className="block w-full mt-1 border-gray-300 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">抽出区分</label>
        <div>
          <label className="inline-flex items-center mr-4">
            <input 
              type="radio" 
              name="extractionType" 
              value="new" 
              checked={extractionType === 'new'}
              onChange={() => setExtractionType('new')}
            />
            <span className="ml-2">新規</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="extractionType" 
              value="reExtraction" 
              checked={extractionType === 'reExtraction'}
              onChange={() => setExtractionType('reExtraction')}
            />
            <span className="ml-2">再抽出</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">物件</label>
        <div>
          <label className="inline-flex items-center">
            <input 
              type="checkbox" 
              checked={selectedItems.length === items.length}
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
            <span className="ml-2">全選択</span>
          </label>
          <ul className="mt-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={selectedItems.includes(item)}
                  onChange={() => handleItemChange(item)}
                />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button 
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setSelectedItems([])} // Clear button
        >
          クリア
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleSubmit} // OK button
        >
          OK
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => console.log('終了')} // Finish button functionality can be defined
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ExtractionForm;
```