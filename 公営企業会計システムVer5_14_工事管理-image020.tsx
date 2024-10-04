```tsx
import React from 'react';

// TypeScript types for props
interface ConstructionDetailsProps {
  fiscalYear: string;
  projectNumber: string;
  category: string;
  projectName: string;
  location: string;
  totalAmount: number;
  items: {
    type: string;
    section: string;
    materialName: string;
    specification: string;
    quantity: number;
    unit: string;
    taxExcludedAmount: number;
  }[];
}

const ConstructionDetails: React.FC<ConstructionDetailsProps> = ({
  fiscalYear,
  projectNumber,
  category,
  projectName,
  location,
  totalAmount,
  items,
}) => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-4">
        <h1 className="text-lg font-bold">工事材料明細登録</h1>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>工事台帳年度: {fiscalYear}</div>
          <div>工事番号: {projectNumber}</div>
          <div>工事件目分類: {category}</div>
          <div>工事名称: {projectName}</div>
          <div>工事場所: {location}</div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">工種</th>
            <th className="border px-4 py-2">設置区分</th>
            <th className="border px-4 py-2">材料名称</th>
            <th className="border px-4 py-2">規格名称</th>
            <th className="border px-4 py-2">数量</th>
            <th className="border px-4 py-2">単位</th>
            <th className="border px-4 py-2">税抜金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="border px-4 py-2">{item.type}</td>
              <td className="border px-4 py-2">{item.section}</td>
              <td className="border px-4 py-2">{item.materialName}</td>
              <td className="border px-4 py-2">{item.specification}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">{item.unit}</td>
              <td className="border px-4 py-2">{item.taxExcludedAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right">
        合計金額: {totalAmount.toLocaleString()}
      </div>
    </div>
  );
};

export default ConstructionDetails;
```