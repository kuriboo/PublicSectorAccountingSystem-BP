import React from 'react';

// Propsの型定義
type MasterCreationProps = {
  currentYear: string;
  nextYear: string;
  onOk: () => void;
  onCancel: () => void;
};

const MasterCreation: React.FC<MasterCreationProps> = ({
  currentYear,
  nextYear,
  onOk,
  onCancel
}) => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* ヘッダー */}
      <div className="w-full flex justify-between items-center bg-blue-200 p-2 rounded">
        <h1 className="text-xl text-blue-800 font-bold">次年度マスタ作成</h1>
        <div className="text-sm text-blue-800">
          <p>行政市水道事業会計</p>
          <p>総務課 予算・会計担当 ぎょうせい太郎</p>
          <p>平成29年08月15日</p>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="mt-8">
        <div className="text-center text-blue-900">
          <p>当期会計年度 平成{currentYear}年度</p>
          <p>次期会計年度 平成{nextYear}年度</p>
        </div>
      </div>

      {/* ボタン */}
      <div className="mt-8 flex space-x-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded shadow"
          onClick={onCancel}
        >
          エラー確認
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded shadow"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded shadow"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterCreation;
