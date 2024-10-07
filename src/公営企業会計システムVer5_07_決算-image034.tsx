import React from 'react';

interface MasterFormProps {
  currentYear: string;
  newYear: string;
  userRole: string;
  lastUpdated: string;
  onDetailsClick: () => void;
  onErrorCheckClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
}

const MasterForm: React.FC<MasterFormProps> = ({
  currentYear,
  newYear,
  userRole,
  lastUpdated,
  onDetailsClick,
  onErrorCheckClick,
  onOkClick,
  onClearClick,
  onCloseClick
}) => {
  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300 shadow-lg bg-white">
      <h1 className="text-xl font-bold text-center mb-4">次年度マスタ作成</h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p>本年度: {currentYear} 年度</p>
          <p>新年度: {newYear} 年度</p>
        </div>
        <div className="text-right">
          <p>権限: {userRole}</p>
          <p>{lastUpdated}</p>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
        <h2 className="font-semibold mb-2">処理概要</h2>
        <p>
          本年度のマスタ内容を新年度に複写します。本年度を指定してください。
          {/* Add more description here as necessary */}
        </p>
      </div>
      <div className="flex space-x-2 justify-center mb-4">
        <button onClick={onDetailsClick} className="px-4 py-2 bg-gray-300 rounded">詳細</button>
        <button onClick={onErrorCheckClick} className="px-4 py-2 bg-gray-300 rounded">エラー確認</button>
      </div>
      <div className="flex space-x-4 justify-center">
        <button onClick={onOkClick} className="px-4 py-2 bg-green-500 text-white rounded">OK</button>
        <button onClick={onClearClick} className="px-4 py-2 bg-yellow-500 text-white rounded">クリア</button>
        <button onClick={onCloseClick} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default MasterForm;