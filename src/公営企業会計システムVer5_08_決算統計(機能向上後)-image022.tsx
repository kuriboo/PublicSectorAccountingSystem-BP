import React from 'react';

// 型定義
interface AnalysisComponentProps {
  year: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AnalysisComponent: React.FC<AnalysisComponentProps> = ({ year, onSubmit, onClear, onExit }) => {
  return (
    <div className="p-4">
      {/* タイトル */}
      <div className="bg-blue-200 text-blue-800 text-2xl py-2 px-4 rounded-md mb-4 shadow-md">
        公営企業会計システム - 決算統計分析データ作成
      </div>
      
      {/* 年度入力 */}
      <div className="mb-4">
        <span className="text-lg">年度: </span>
        <input 
          type="text" 
          value={year} 
          readOnly 
          className="border border-gray-300 rounded px-2 py-1 text-lg"
        />
      </div>

      {/* 説明文 */}
      <div className="bg-gray-100 border border-gray-300 rounded-md p-4 mb-4">
        <p>決算統計千円丸め処理をした科目明細金額を振替・性質別に集計します。</p>
        <p>科目別振替性質マスタの構成比率をもとに按分計算します。</p>
        <p>何回でも実行できますが、決算統計分析画面で入力した調整額はクリアされます。</p>
      </div>

      {/* ボタン群 */}
      <div className="flex space-x-4">
        <button 
          onClick={onSubmit} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onExit} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AnalysisComponent;
