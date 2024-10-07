import { FC } from 'react';

// TypeScriptの型定義
interface ExtractionComponentProps {
  extractionType: 'allDataClear' | 'forecastInputConfirmed';
  processingDate: string;
  lastExtractionDate: string;
  onErrorCheck: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ExtractionComponent: FC<ExtractionComponentProps> = ({
  extractionType,
  processingDate,
  lastExtractionDate,
  onErrorCheck,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-lg font-bold mb-4">資産台帳抽出処理</h1>

      <div className="mb-4">
        <h2 className="font-semibold">抽出区分</h2>
        <div className="ml-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="extractionType"
              value="allDataClear"
              checked={extractionType === 'allDataClear'}
              readOnly
              className="form-radio"
            />
            <span className="ml-2">全データクリア</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              name="extractionType"
              value="forecastInputConfirmed"
              checked={extractionType === 'forecastInputConfirmed'}
              readOnly
              className="form-radio"
            />
            <span className="ml-2">予測入力分確保</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">抽出処理年月日</h2>
        <p className="ml-4 text-teal-500">{processingDate}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">前回抽出処理</h2>
        <p className="ml-4">{lastExtractionDate}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-blue-600">注意</h2>
        <p className="ml-4 text-sm">
          「予測入力分確保」を選択した場合でも、以下のデータはクリアされます。
          <br />
          ・異動予測データ入力画面で登録したデータ
          <br />
          ・取得予測データ入力画面で抽出処理年月日以前の取得年月で登録した資産
        </p>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onErrorCheck} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          エラー確認
        </button>
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default ExtractionComponent;
