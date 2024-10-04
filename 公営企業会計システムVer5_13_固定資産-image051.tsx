import React from 'react';

// TypeScript interface for component props
interface FormProps {
  creationDate: string;
  startYear: number;
  numberOfYears: number;
  registrationDivision: 'extractedOnly' | 'forecastOnly' | 'all';
  formatDivision: 'formal' | 'informal';
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AssetDetailForm: React.FC<FormProps> = ({
  creationDate,
  startYear,
  numberOfYears,
  registrationDivision,
  formatDivision,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <form className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">作表年月日:</label>
        <input
          type="text"
          value={creationDate}
          readOnly
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">作表開始年度:</label>
        <select
          value={startYear}
          className="border border-gray-300 p-2 rounded w-full"
        >
          {[...Array(100)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">作表年数:</label>
        <input
          type="number"
          value={numberOfYears}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">登録区分:</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              name="registrationDivision"
              value="extractedOnly"
              checked={registrationDivision === 'extractedOnly'}
            /> 抽出分のみ
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="registrationDivision"
              value="forecastOnly"
              checked={registrationDivision === 'forecastOnly'}
            /> 予測分のみ
          </label>
          <label>
            <input
              type="radio"
              name="registrationDivision"
              value="all"
              checked={registrationDivision === 'all'}
            /> すべて
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">書式区分:</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              name="formatDivision"
              value="formal"
              checked={formatDivision === 'formal'}
            /> 有形
          </label>
          <label>
            <input
              type="radio"
              name="formatDivision"
              value="informal"
              checked={formatDivision === 'informal'}
            /> 無形
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          type="button"
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </form>
  );
};

export default AssetDetailForm;