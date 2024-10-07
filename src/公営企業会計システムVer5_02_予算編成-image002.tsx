import React from 'react';

// 定義するプロパティの型
type FiscalYearDataFormProps = {
  fiscalYear: string;
  onFiscalYearChange: (year: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const FiscalYearDataForm: React.FC<FiscalYearDataFormProps> = ({
  fiscalYear,
  onFiscalYearChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md">
      {/* タイトル */}
      <h1 className="text-xl font-bold text-center mb-4">当年度データ作成</h1>

      {/* 新年度の選択 */}
      <div className="mb-4">
        <label className="inline-block mb-2">新年度</label>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 科目情報の選択 */}
      <div className="mb-4">
        <div className="mb-2">科目情報</div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="subject"
              className="form-radio"
            />
            <span className="ml-2">仕訳科目マスタ・予算科目マスタの次年度科目より複写</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="subject"
              className="form-radio"
            />
            <span className="ml-2">科目整理データより複写</span>
          </label>
        </div>
      </div>

      {/* 処理概要 */}
      <div className="mb-4 p-4 border rounded">
        <div className="font-bold mb-2">処理概要</div>
        <p className="text-sm mb-2">
          本年度のマスタ内容を新年度に複写します。新年度を指定して下さい。
        </p>
        <p className="text-sm mb-2">
          修正がある場合は、処理後保守画面で修正して下さい。複数回処理をすると、
          保守画面で修正した内容が削除されますので注意して下さい。
        </p>
        <p className="text-sm">
          「詳細」ボタンを押すと、マスタ設定に不整合がある場合の詳細情報を照会できます。
          照会できるのは、「仕訳科目マスタ」、「予算科目マスタ」関連のものです。
        </p>
      </div>

      {/* ボタン群 */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="p-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="p-2 bg-gray-500 text-white rounded">クリア</button>
        <button onClick={onExit} className="p-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default FiscalYearDataForm;
