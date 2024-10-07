import React from 'react';

// Define the prop types
type FormProps = {
  title: string;
  dateRange: { start: string; end: string };
  itemRange: { start: string; end: string };
  displayOptions: {
    grouping: 'all' | 'individual';
    locationGrouping: 'managed' | 'stored';
  };
  showZeroQuantity: boolean;
  showUnitPriceDetails: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const PaymentForm: React.FC<FormProps> = ({
  title,
  dateRange,
  itemRange,
  displayOptions,
  showZeroQuantity,
  showUnitPriceDetails,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
      <h1 className="text-lg font-bold text-center mb-4">{title}</h1>
      <div className="mb-4">
        <label className="block font-semibold">期間入力</label>
        <div className="flex space-x-2">
          <span>入出庫年月</span>
          <input
            type="text"
            value={dateRange.start}
            readOnly
            className="border rounded p-1"
          />
          <span>~</span>
          <input
            type="text"
            value={dateRange.end}
            readOnly
            className="border rounded p-1"
          />
        </div>
        <div className="flex space-x-2 mt-2">
          <span>品番</span>
          <input
            type="text"
            value={itemRange.start}
            readOnly
            className="border rounded p-1"
          />
          <span>~</span>
          <input
            type="text"
            value={itemRange.end}
            readOnly
            className="border rounded p-1"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">出力区分</label>
        <div className="flex space-x-2">
          <label>
            <input
              type="radio"
              checked={displayOptions.grouping === 'individual'}
              readOnly
            />
            所属別
          </label>
          <label>
            <input
              type="radio"
              checked={displayOptions.grouping === 'all'}
              readOnly
            />
            全体
          </label>
        </div>
        <div className="flex space-x-2 mt-2">
          <label>
            <input
              type="radio"
              checked={displayOptions.locationGrouping === 'managed'}
              readOnly
            />
            管理場所別
          </label>
          <label>
            <input
              type="radio"
              checked={displayOptions.locationGrouping === 'stored'}
              readOnly
            />
            保管場所別
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">数量0印字区分</label>
        <label className="inline-flex items-center space-x-2">
          <input
            type="radio"
            checked={!showZeroQuantity}
            readOnly
          />
          <span>なし</span>
        </label>
        <label className="inline-flex items-center space-x-2">
          <input
            type="radio"
            checked={showZeroQuantity}
            readOnly
          />
          <span>あり</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">繰越単価明細表示</label>
        <label className="inline-flex items-center space-x-2">
          <input
            type="radio"
            checked={!showUnitPriceDetails}
            readOnly
          />
          <span>なし</span>
        </label>
        <label className="inline-flex items-center space-x-2">
          <input
            type="radio"
            checked={showUnitPriceDetails}
            readOnly
          />
          <span>あり</span>
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
