import React from 'react';

type ImportFormProps = {
  fiscalYear: string;
  onCsvImport: (category: string) => void;
  onClear: () => void;
  onOk: () => void;
  onEnd: () => void;
};

const ImportForm: React.FC<ImportFormProps> = ({
  fiscalYear,
  onCsvImport,
  onClear,
  onOk,
  onEnd,
}) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">科目整理用データ取込</h1>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">取込年度</label>
        <span>{fiscalYear}</span>
      </div>

      <div className="mb-6">
        <fieldset className="border p-4">
          <legend className="font-semibold">予算科目</legend>
          <div className="flex items-center">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => onCsvImport('予算科目')}
            >
              CSV取込
            </button>
            <input type="text" className="border p-2 flex-grow" readOnly />
          </div>
        </fieldset>
      </div>

      <div className="mb-6">
        <fieldset className="border p-4">
          <legend className="font-semibold">仕訳科目</legend>
          <div className="flex items-center">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => onCsvImport('仕訳科目')}
            >
              CSV取込
            </button>
            <input type="text" className="border p-2 flex-grow" readOnly />
          </div>
        </fieldset>
      </div>

      <div className="mt-6">
        <button
          className="bg-gray-300 text-black font-bold py-2 px-4 rounded mr-2"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 text-black font-bold py-2 px-4 rounded mr-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 text-black font-bold py-2 px-4 rounded"
          onClick={onEnd}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ImportForm;