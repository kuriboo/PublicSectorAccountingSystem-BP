```tsx
import React from 'react';

type GridItem = {
  budgetItemName: string;
  calculationBasis: string;
  workType: string;
  unitCode: string;
  calculationAmount: number;
  quantity: number;
  unit: string;
};

type ConstructionReferenceGridProps = {
  category: string;
  items: GridItem[];
  onCancel: () => void;
};

const ConstructionReferenceGrid: React.FC<ConstructionReferenceGridProps> = ({ category, items, onCancel }) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white p-2">
        {category}
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-7 bg-blue-900 text-white text-center">
        <div className="p-2">予算明細名称</div>
        <div className="p-2">積算基礎名称</div>
        <div className="p-2">工事種目</div>
        <div className="p-2">単価コード</div>
        <div className="p-2">積算基礎金額</div>
        <div className="p-2">数量</div>
        <div className="p-2">単位</div>
      </div>

      {/* Table Body */}
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-7 text-center border-b border-gray-300">
          <div className="p-2">{item.budgetItemName}</div>
          <div className="p-2">{item.calculationBasis}</div>
          <div className="p-2">{item.workType}</div>
          <div className="p-2">{item.unitCode}</div>
          <div className="p-2">{item.calculationAmount}</div>
          <div className="p-2">{item.quantity}</div>
          <div className="p-2">{item.unit}</div>
        </div>
      ))}

      {/* Cancel Button */}
      <div className="text-right mt-4">
        <button onClick={onCancel} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ConstructionReferenceGrid;
```