import React from 'react';

type AssetCalculationFormProps = {
  assetNumber: string;
  assetName: string;
  unitName: string;
  unitSpecification: string;
  quantities: {
    acquisition: number;
    lastPeriodEnd: number;
    currentPeriodAddition: number;
    currentPeriodReduction: number;
  };
  amounts: {
    acquisition: number;
    lastPeriodEnd: number;
    currentPeriodAddition: number;
    currentPeriodReduction: number;
  };
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AssetCalculationForm: React.FC<AssetCalculationFormProps> = ({
  assetNumber,
  assetName,
  unitName,
  unitSpecification,
  quantities,
  amounts,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">管種信産累計マスタ</h2>

      {/* Asset Information */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="mr-2">資産番号</span>
          <input
            type="text"
            value={assetNumber}
            readOnly
            className="border px-2 py-1"
          />
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">資産名称</span>
          <input
            type="text"
            value={assetName}
            readOnly
            className="border px-2 py-1"
          />
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">単位名称</span>
          <input
            type="text"
            value={unitName}
            readOnly
            className="border px-2 py-1"
          />
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">単位規格</span>
          <input
            type="text"
            value={unitSpecification}
            readOnly
            className="border px-2 py-1"
          />
        </div>
      </div>

      {/* Quantity and Amounts */}
      <div className="flex">
        <div className="mr-8">
          <h4 className="mb-2">数量</h4>
          <div className="space-y-2">
            {Object.entries(quantities).map(([label, value]) => (
              <div key={label} className="flex items-center">
                <span className="mr-2">{label}</span>
                <input
                  type="number"
                  value={value}
                  readOnly
                  className="border px-2 py-1 w-16"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-2">金額</h4>
          <div className="space-y-2">
            {Object.entries(amounts).map(([label, value]) => (
              <div key={label} className="flex items-center">
                <span className="mr-2">{label}</span>
                <input
                  type="number"
                  value={value}
                  readOnly
                  className="border px-2 py-1 w-24"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetCalculationForm;
