import React from 'react';

type PriceSettingFormProps = {
  code: string;
  name: string;
  standard: string;
  startDate: string;
  price: number;
  mode: 'register' | 'edit';
  onFormSubmit: () => void;
  onFormClear: () => void;
  onCancel: () => void;
};

const PriceSettingForm: React.FC<PriceSettingFormProps> = ({
  code,
  name,
  standard,
  startDate,
  price,
  mode,
  onFormSubmit,
  onFormClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      {/* Mode Selection */}
      <div className="mb-4">
        <input
          type="radio"
          id="register"
          name="mode"
          checked={mode === 'register'}
          readOnly
          className="mr-2"
        />
        <label htmlFor="register" className="mr-4">登録</label>
        <input
          type="radio"
          id="edit"
          name="mode"
          checked={mode === 'edit'}
          readOnly
          className="mr-2"
        />
        <label htmlFor="edit">訂正</label>
      </div>

      {/* Form Fields */}
      <div className="mb-4">
        <div className="flex mb-2">
          <span className="w-24">単価コード</span>
          <span>{code}</span>
        </div>
        <div className="flex mb-2">
          <span className="w-24">単価名称</span>
          <span>{name}</span>
        </div>
        <div className="flex mb-2">
          <span className="w-24">単価規格</span>
          <span>{standard}</span>
        </div>
        <div className="flex mb-2">
          <span className="w-24">適用開始年月日</span>
          <span>{startDate}</span>
        </div>
        <div className="flex mb-2">
          <span className="w-24">単価</span>
          <input type="text" value={price.toLocaleString()} readOnly className="border rounded px-2" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded"
          onClick={onFormClear}
        >
          クリア
        </button>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded mr-2"
            onClick={onFormSubmit}
          >
            OK
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded"
            onClick={onCancel}
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceSettingForm;