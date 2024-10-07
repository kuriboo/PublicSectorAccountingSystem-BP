import React, { useState } from 'react';

// タイプ定義
type MasterCreationProps = {
  fiscalYear: string;
  processingYear: string;
  onProcess: () => void;
  onClear: () => void;
  onExit: () => void;
};

// コンポーネント
const MasterCreation: React.FC<MasterCreationProps> = ({
  fiscalYear,
  processingYear,
  onProcess,
  onClear,
  onExit,
}) => {
  const [selectedOption, setSelectedOption] = useState('masterCreation');

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold text-blue-600">決算統計マスタ作成</h1>
      <h2 className="mt-2 text-lg">{`決算統計処理年度: 令和${processingYear} 年度`}</h2>
      
      <div className="mt-6">
        <label className="block text-base font-medium text-gray-900">
          <input
            type="radio"
            name="option"
            value="masterCreation"
            checked={selectedOption === 'masterCreation'}
            onChange={() => setSelectedOption('masterCreation')}
          />
          マスタ作成
        </label>
        {selectedOption === 'masterCreation' && (
          <div className="mt-2 p-4 bg-white border border-gray-300 rounded-md">
            <p>決算統計で必要なマスタについて、前年度の情報を引き継ぎ当年度用に作成します。</p>
          </div>
        )}
      </div>

      <div className="mt-4">
        <label className="block text-base font-medium text-gray-900">
          <input
            type="radio"
            name="option"
            value="infoImport"
            checked={selectedOption === 'infoImport'}
            onChange={() => setSelectedOption('infoImport')}
          />
          改正情報取り込み
        </label>
        {selectedOption === 'infoImport' && (
          <div className="mt-2 p-4 bg-white border border-gray-300 rounded-md">
            <p>
              調査表の項目に関わる変更がある場合、さようせいかされた改正情報のCSVファイルを取り込みます。
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md" onClick={onProcess}>
              取り込む
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-end space-x-2">
        <button className="px-4 py-2 bg-green-600 text-white rounded-md" onClick={onProcess}>
          OK
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterCreation;
