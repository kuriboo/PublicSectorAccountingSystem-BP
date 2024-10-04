import React from 'react';

// 定義するプロパティの型
interface AssetFormProps {
  assetNumber: string;
  assetName: string;
  bookValue: { prevBalance: number; currIncrease: number; currDecrease: number };
  accDepreciation: { prevBalance: number; currIncrease: number; currDecrease: number };
  pastYearLossProfit: { adjustmentGain: number; adjustmentLoss: number };
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

// 再利用可能なコンポーネント
const AssetForm: React.FC<AssetFormProps> = ({
  assetNumber,
  assetName,
  bookValue,
  accDepreciation,
  pastYearLossProfit,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">固定資産累計マスタ</h2>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">資産番号</label>
        <input
          type="text"
          value={assetNumber}
          readOnly
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">資産名称</label>
        <input
          type="text"
          value={assetName}
          readOnly
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">帳簿原価</h3>
        <div className="flex">
          <div className="mr-4">
            <label>前期末残高</label>
            <input
              type="number"
              value={bookValue.prevBalance}
              readOnly
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="mr-4">
            <label>当期増加額</label>
            <input
              type="number"
              value={bookValue.currIncrease}
              readOnly
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <label>当期減少額</label>
            <input
              type="number"
              value={bookValue.currDecrease}
              readOnly
              className="border rounded px-2 py-1"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">償却累計額</h3>
        <div className="flex">
          <div className="mr-4">
            <label>前期末残高</label>
            <input
              type="number"
              value={accDepreciation.prevBalance}
              readOnly
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="mr-4">
            <label>当期増加額</label>
            <input
              type="number"
              value={accDepreciation.currIncrease}
              readOnly
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <label>当期減少額</label>
            <input
              type="number"
              value={accDepreciation.currDecrease}
              readOnly
              className="border rounded px-2 py-1"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">過年度損益</h3>
        <div className="flex">
          <div className="mr-4">
            <label>修正益</label>
            <input
              type="number"
              value={pastYearLossProfit.adjustmentGain}
              readOnly
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <label>修正損</label>
            <input
              type="number"
              value={pastYearLossProfit.adjustmentLoss}
              readOnly
              className="border rounded px-2 py-1"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onSubmit}
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
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetForm;