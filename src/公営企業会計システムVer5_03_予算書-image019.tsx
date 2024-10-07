import React from 'react';

// 定義されるプロパティの型を定義
type PlanFormProps = {
  year: string;
  requestInformation: 'estimate' | 'fixedAmount';
  numberOfCalculations: number;
  includeCalculation: boolean;
  lastYearBalance: number;
  size: 'A4横' | 'A4縦';
  title: string;
  subTitle: string;
  subTitle2: string;
  includePageNumbers: boolean;
  startPage: number;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const PlanForm: React.FC<PlanFormProps> = ({
  year,
  requestInformation,
  numberOfCalculations,
  includeCalculation,
  lastYearBalance,
  size,
  title,
  subTitle,
  subTitle2,
  includePageNumbers,
  startPage,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">当初資金計画書（円）作成</h2>
      
      {/* 年度 */}
      <div className="mb-4">
        <label className="block">年度:</label>
        <select value={year} className="border">
          <option value="平成30">平成30</option>
          {/* 他の年度のオプションを追加 */}
        </select>
      </div>

      {/* 自動仕訳情報 */}
      <div className="mb-4">
        <label className="block">自動仕訳情報:</label>
        <div>
          <label>
            <input
              type="radio"
              checked={requestInformation === 'estimate'}
              className="mr-2"
            />
            見積要求額
          </label>
          <label>
            <input
              type="radio"
              checked={requestInformation === 'fixedAmount'}
              className="mr-2"
            />
            算定額
          </label>
        </div>
        <input
          type="number"
          value={numberOfCalculations}
          className="border w-16 text-center"
        />
        回
      </div>

      {/* 前年度繰越金 */}
      <div className="mb-4">
        <label className="block">前年度繰越金:</label>
        <input
          type="number"
          value={lastYearBalance}
          className="border w-full"
          disabled
        />
        <button className="mt-2 py-1 px-3 bg-blue-500 text-white rounded">
          前年度繰越金計算
        </button>
      </div>

      {/* 書式 */}
      <div className="mb-4">
        <label className="block">サイズ:</label>
        <div>
          <label>
            <input
              type="radio"
              checked={size === 'A4横'}
              className="mr-2"
            />
            A4 横
          </label>
          <label>
            <input
              type="radio"
              checked={size === 'A4縦'}
              className="mr-2"
            />
            A4 縦
          </label>
        </div>
      </div>
      
      {/* タイトル情報 */}
      <div className="mb-4">
        <label className="block">タイトル:</label>
        <input type="text" value={title} className="border w-full" />
      </div>
      <div className="mb-4">
        <label className="block">サブタイトル:</label>
        <input type="text" value={subTitle} className="border w-full" />
      </div>
      <div className="mb-4">
        <label className="block">姓タイトル:</label>
        <input type="text" value={subTitle2} className="border w-full" />
      </div>

      {/* ページ設定 */}
      <div className="mb-4">
        <label className="block">頁印字:</label>
        <div>
          <label>
            <input
              type="radio"
              checked={includePageNumbers}
              className="mr-2"
            />
            する
          </label>
          <label>
            <input
              type="radio"
              checked={!includePageNumbers}
              className="mr-2"
            />
            しない
          </label>
        </div>
        <input
          type="number"
          value={startPage}
          className="border w-16 text-center"
        />
      </div>

      {/* ボタン */}
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="mr-2 py-2 px-4 bg-blue-500 text-white rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="mr-2 py-2 px-4 bg-gray-500 text-white rounded"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="py-2 px-4 bg-red-500 text-white rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PlanForm;