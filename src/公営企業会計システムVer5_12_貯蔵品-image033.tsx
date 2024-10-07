import React from 'react';

// Props type definition
interface ShippingComponentProps {
  plannedShipping?: number;
  actualShipping?: number;
  referenceData?: string;
}

// Reusable component using Tailwind CSS
const ShippingComponent: React.FC<ShippingComponentProps> = ({
  plannedShipping = 30,
  actualShipping = 20,
  referenceData = 'データ参照',
}) => {
  const remainingShipping = plannedShipping - actualShipping;

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-200">
      {/* 仮出庫入力 Box */}
      <div className="flex-1 p-4 bg-white border border-gray-300">
        仮出庫入力
      </div>
      {/* Reference Data and Arrow */}
      <div className="flex items-center space-x-2">
        <button className="text-white bg-gray-600 px-2 py-1 rounded">
          {referenceData}
        </button>
        <span className="text-xl">→</span>
      </div>
      {/* 仮予定有出庫入力 Box */}
      <div className="flex-1 p-4 bg-gray-300 border border-gray-500">
        仮予定有出庫入力
        <div className="mt-2">
          仮出庫数{plannedShipping}個のうち実際は{actualShipping}個を出庫
        </div>
        <div className="text-sm text-gray-700">
          （仮出庫残数が{remainingShipping}個発生）
        </div>
      </div>
    </div>
  );
};

export default ShippingComponent;
