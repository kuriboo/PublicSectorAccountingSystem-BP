```tsx
import React from 'react';

// TypeScriptの型定義
type ConstructionData = {
  category: string;
  details: Array<{
    budgetName: string;
    calculationBaseName: string;
    constructionType: string;
    unitCode: string;
    calculationBaseAmount: number;
    quantity: number;
    unit: string;
  }>;
};

// プロパティの型定義
interface ConstructionComponentProps {
  data: ConstructionData;
  onCancel: () => void;
}

const ConstructionComponent: React.FC<ConstructionComponentProps> = ({ data, onCancel }) => {
  return (
    <div className="p-4 border-solid border-2 border-gray-300">
      {/* 工事種目分類 */}
      <h2 className="text-center bg-blue-700 text-white py-2">{data.category}</h2>
      <div className="overflow-x-auto">
        {/* テーブル */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-4 py-2">予算明細名称</th>
              <th className="px-4 py-2">積算基礎名称</th>
              <th className="px-4 py-2">工事種目</th>
              <th className="px-4 py-2">単価コード</th>
              <th className="px-4 py-2">積算基礎金額</th>
              <th className="px-4 py-2">数量</th>
              <th className="px-4 py-2">単位</th>
            </tr>
          </thead>
          <tbody>
            {data.details.map((detail, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{detail.budgetName}</td>
                <td className="border px-4 py-2">{detail.calculationBaseName}</td>
                <td className="border px-4 py-2">{detail.constructionType}</td>
                <td className="border px-4 py-2">{detail.unitCode}</td>
                <td className="border px-4 py-2">{detail.calculationBaseAmount}</td>
                <td className="border px-4 py-2">{detail.quantity}</td>
                <td className="border px-4 py-2">{detail.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* キャンセルボタン */}
      <button 
        className="mt-4 bg-gray-700 text-white py-1 px-3 rounded"
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  );
};

export default ConstructionComponent;
```