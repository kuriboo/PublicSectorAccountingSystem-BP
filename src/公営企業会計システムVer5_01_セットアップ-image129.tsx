import React from 'react';

// TypeScript interface for component props
interface CsvProcessorProps {
  startId: string;
  endId: string;
  includeRegistered: boolean;
  onCsvExport: () => void;
  onCsvImport: () => void;
  onClear: () => void;
  onExit: () => void;
}

const CsvProcessor: React.FC<CsvProcessorProps> = ({
  startId,
  endId,
  includeRegistered,
  onCsvExport,
  onCsvImport,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-lg font-bold mb-4">相手先マスタ登録番号一括更新</h1>

      <div className="mb-4">
        <h2 className="font-bold mb-2">処理概要</h2>
        <ul className="text-sm list-disc pl-5">
          <li>適格請求書登録番号を相手先マスタに一括で登録します。</li>
          <li>CSVファイルを出力し、専用のEXCELファイルから取り込みます。</li>
          <li>会計システム上にて登録された相手先情報が更新されます。</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">CSVファイル出力</h2>
        <div className="flex items-center space-x-2 mb-2">
          <span>相手先：</span>
          <input
            className="border px-2 py-1"
            type="text"
            value={startId}
            readOnly
          />
          <span>～</span>
          <input
            className="border px-2 py-1"
            type="text"
            value={endId}
            readOnly
          />
        </div>

        <div className="flex items-center space-x-4 mb-2">
          <label>
            <input type="radio" name="registration" checked={includeRegistered} readOnly />
            登録済のみ
          </label>
          <label>
            <input type="radio" name="registration" checked={!includeRegistered} readOnly />
            全て
          </label>
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onCsvExport}
        >
          CSV出力
        </button>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">CSVファイル取込</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onCsvImport}
        >
          CSV取込
        </button>
        <div className="mt-2">
          <label>
            <input type="checkbox" checked={includeRegistered} readOnly />
            適格請求書登録番号が空欄の場合、登録済の番号を削除する。
          </label>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CsvProcessor;
