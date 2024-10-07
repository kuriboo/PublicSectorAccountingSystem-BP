import React from 'react';

// TypeScript型定義
type BusinessAnalysisProps = {
  title: string;
  userInfo: string;
  date: string;
  details: string;
  onOk: () => void;
  onCancel: () => void;
};

// 再利用可能なコンポーネント
const BusinessAnalysis: React.FC<BusinessAnalysisProps> = ({
  title,
  userInfo,
  date,
  details,
  onOk,
  onCancel,
}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      {/* タイトル表示 */}
      <div className="bg-indigo-200 w-full py-2 px-4 text-xl font-bold text-gray-700 mb-4">
        {title}
      </div>
      {/* ユーザー情報と日付表示 */}
      <div className="w-full flex justify-between items-center mb-4">
        <span className="text-sm text-gray-700">{userInfo}</span>
        <span className="text-sm text-gray-700">{date}</span>
      </div>
      {/* 処理概要表示 */}
      <div className="border p-4 mb-4 text-center">
        <div className="font-bold text-gray-700 mb-2">処理概要</div>
        <p className="text-indigo-800">{details}</p>
      </div>
      {/* ボタン */}
      <div className="flex space-x-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BusinessAnalysis;

// 使用例
/*
<BusinessAnalysis
  title="経営分析表集計処理"
  userInfo="総務課 予算・会計担当 さようせいたろう"
  date="平成29年08月04日"
  details="経営分析表データを作成します。"
  onOk={() => console.log('OK clicked')}
  onCancel={() => console.log('Cancel clicked')}
/>
*/
