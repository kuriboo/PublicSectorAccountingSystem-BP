import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props {
  years: Option[];
  categories: Option[];
  items: string[];
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const DocumentComponent: React.FC<Props> = ({ years, categories, items, onOk, onClear, onClose }) => {
  const [selectedYear, setSelectedYear] = useState<string>(years[0].value);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].value);
  const [selectedOrder, setSelectedOrder] = useState<string>('現説日順');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (item: string) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems([...items]);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-4">
        <div>
          <label>年度：</label>
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="border p-1">
            {years.map(year => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>受付区分：</label>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border p-1">
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label>出力順序：</label>
        <div className="flex space-x-4">
          {['現説日順', '入札日順'].map(order => (
            <div key={order}>
              <input
                type="radio"
                id={order}
                name="order"
                value={order}
                checked={selectedOrder === order}
                onChange={e => setSelectedOrder(e.target.value)}
              />
              <label htmlFor={order}>{order}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label>物件：</label>
        <div className="border p-2 max-h-32 overflow-y-auto">
          <div>
            <input
              type="checkbox"
              checked={selectedItems.length === items.length}
              onChange={handleSelectAll}
            />
            <label className="px-2">全選択</label>
          </div>
          {items.map(item => (
            <div key={item}>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleItemClick(item)}
              />
              <label className="px-2">{item}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <button onClick={onOk} className="border p-2 bg-blue-500 text-white">OK</button>
        <button onClick={onClear} className="border p-2">クリア</button>
        <button onClick={onClose} className="border p-2">終了</button>
      </div>
    </div>
  );
};

export default DocumentComponent;
```