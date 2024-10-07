import React from 'react';

type YearUpdateComponentProps = {
  currentYear: number;
  previousYear: number;
  onOkClick: () => void;
  onExitClick: () => void;
};

// Tailwind CSS classes for styling
const baseButtonClasses = "bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded";

const YearUpdateComponent: React.FC<YearUpdateComponentProps> = ({
  currentYear,
  previousYear,
  onOkClick,
  onExitClick,
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-100 rounded shadow-lg p-4 mb-4">
        <h1 className="text-2xl font-bold text-blue-800">固定資産年次更新取消</h1>
        <div className="mt-4">
          <div className="text-lg">
            <p>当期会計年度</p>
            <p>平成{currentYear}年度</p>
          </div>
          <div className="text-lg mt-4">
            <p>前期会計年度</p>
            <p>平成{previousYear}年度</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded shadow-lg p-4 mb-4">
        <h2 className="text-xl font-bold text-blue-800">処理概要</h2>
        <p className="text-black mt-2">
          平成{currentYear}年度の処理会計年度を取消し、平成{previousYear}年度へ戻す処理を行います。
          異動データを含め、年次更新後に登録更新された固定資産データは全て削除されます。
          また、予測データは全て削除されます。
          複数年度を連続して取消すことはできません。
        </p>
        <p className="text-red-600 mt-2">
          年次更新取消処理が完了するまでは、各種処理及びマスタメンテナンスによる固定資産データの更新を行わないでください。
        </p>
      </div>
      <div className="flex justify-between">
        <button className={baseButtonClasses} onClick={onOkClick}>
          OK
        </button>
        <button className={baseButtonClasses} onClick={onExitClick}>
          終了
        </button>
      </div>
    </div>
  );
};

export default YearUpdateComponent;
```