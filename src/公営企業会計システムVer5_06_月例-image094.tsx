import React from 'react';

// TypeScript interface for component props
interface CashFlowProps {
  fiscalYear: string;
  dateStart: string;
  dateEnd: string;
  onDisplayClick: () => void;
  onAddToCalculationClick: () => void;
  onRemoveFromCalculationClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
}

// Reusable CashFlowComponent
const CashFlowComponent: React.FC<CashFlowProps> = ({
  fiscalYear,
  dateStart,
  dateEnd,
  onDisplayClick,
  onAddToCalculationClick,
  onRemoveFromCalculationClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="p-6 border rounded shadow-md bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-lg">キャッシュフロー伝票集計先指示入力</span>
        <span className="text-sm">
          {`会計年度: ${fiscalYear} (${dateStart} ~ ${dateEnd})`}
        </span>
      </div>
      <div className="grid gap-4 grid-cols-3 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            伝票種別
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            {/* Options would go here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            発生源区分
          </label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            集計区分
          </label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
      </div>
      <div className="flex justify-end mb-4">
        <button
          className="mr-2 bg-blue-500 text-white py-2 px-4 rounded shadow"
          onClick={onDisplayClick}
        >
          表示
        </button>
        <button
          className="mr-2 bg-green-500 text-white py-2 px-4 rounded shadow"
          onClick={onAddToCalculationClick}
        >
          集計に加算
        </button>
        <button
          className="mr-2 bg-yellow-500 text-white py-2 px-4 rounded shadow"
          onClick={onRemoveFromCalculationClick}
        >
          集計から削除
        </button>
        <button
          className="mr-2 bg-red-500 text-white py-2 px-4 rounded shadow"
          onClick={onClearClick}
        >
          クリア
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded shadow"
          onClick={onExitClick}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CashFlowComponent;

