import React from 'react';

// Type definitions for input properties
interface PropertyRegistrationFormProps {
  assetNumber: string;
  assetName: string;
  unitName: string;
  unitSpec: string;
  acquisitionQuantity: number;
  previousPeriodBalanceQuantity: number;
  currentIncreaseQuantity: number;
  currentDecreaseQuantity: number;
  acquisitionAmount: number;
  previousPeriodBalanceAmount: number;
  currentIncreaseAmount: number;
  currentDecreaseAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const PropertyRegistrationForm: React.FC<PropertyRegistrationFormProps> = ({
  assetNumber,
  assetName,
  unitName,
  unitSpec,
  acquisitionQuantity,
  previousPeriodBalanceQuantity,
  currentIncreaseQuantity,
  currentDecreaseQuantity,
  acquisitionAmount,
  previousPeriodBalanceAmount,
  currentIncreaseAmount,
  currentDecreaseAmount,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-xl font-bold">管理資産累計マスタ</h1>

      <div className="flex space-x-4">
        <div className="space-y-2">
          {/* Asset Details */}
          <div>
            <label className="block text-sm font-medium">資産番号</label>
            <input type="text" value={assetNumber} readOnly className="border p-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">資産名称</label>
            <input type="text" value={assetName} readOnly className="border p-1" />
          </div>
        </div>

        <div className="space-y-2">
          {/* Unit Details */}
          <div>
            <label className="block text-sm font-medium">単価名称</label>
            <input type="text" value={unitName} readOnly className="border p-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">単価規格</label>
            <input type="text" value={unitSpec} readOnly className="border p-1" />
          </div>
        </div>
      </div>

      <div className="flex space-x-8">
        <div className="border p-4">
          <h2 className="font-medium mb-2">数量</h2>
          <div className="space-y-2">
            <div>
              <label className="block text-sm">取得時</label>
              <input type="number" value={acquisitionQuantity} readOnly className="border p-1" />
            </div>
            <div>
              <label className="block text-sm">前期末残高</label>
              <input type="number" value={previousPeriodBalanceQuantity} readOnly className="border p-1" />
            </div>
            <div>
              <label className="block text-sm">当期増加</label>
              <input type="number" value={currentIncreaseQuantity} readOnly className="border p-1" />
            </div>
            <div>
              <label className="block text-sm">当期減少</label>
              <input type="number" value={currentDecreaseQuantity} readOnly className="border p-1" />
            </div>
          </div>
        </div>

        <div className="border p-4">
          <h2 className="font-medium mb-2">金額</h2>
          <div className="space-y-2">
            <div>
              <label className="block text-sm">取得時</label>
              <input type="number" value={acquisitionAmount} readOnly className="border p-1" />
            </div>
            <div>
              <label className="block text-sm">前期末残高</label>
              <input type="number" value={previousPeriodBalanceAmount} readOnly className="border p-1" />
            </div>
            <div>
              <label className="block text-sm">当期増加</label>
              <input type="number" value={currentIncreaseAmount} readOnly className="border p-1" />
            </div>
            <div>
              <label className="block text-sm">当期減少</label>
              <input type="number" value={currentDecreaseAmount} readOnly className="border p-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default PropertyRegistrationForm;
