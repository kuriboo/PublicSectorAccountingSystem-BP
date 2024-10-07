import React from 'react';

// 型定義
interface AssetComponentProps {
  assetNumber: string;
  assetName: string;
  lastUpdateDate: string;
  section: string;
  detail: string;
  hasShape: boolean;
  revisedFlag: number;
  elapsedYears: number;
  rateOfProgress: number;
  bookValue: number;
  contractedMethod?: string;
  numberOfMonths?: number;
}

// コンポーネント定義
const AssetComponent: React.FC<AssetComponentProps> = ({
  assetNumber,
  assetName,
  lastUpdateDate,
  section,
  detail,
  hasShape,
  revisedFlag,
  elapsedYears,
  rateOfProgress,
  bookValue,
  contractedMethod = '',
  numberOfMonths = 0
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-bold">{assetName}</h3>
          <p className="text-gray-600">資産番号: {assetNumber}</p>
        </div>
        <p className="text-gray-600">最新更新年月日: {lastUpdateDate}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-700">節: {section}</p>
          <p className="text-sm text-gray-700">細節: {detail}</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">有形: {hasShape ? '有' : '無'}</p>
          <p className="text-sm text-gray-700">改良フラグ: {revisedFlag}</p>
          <p className="text-sm text-gray-700">経過年数: {elapsedYears}</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4">償却完了率: {rateOfProgress}</p>

      <div className="border-t border-gray-300 pt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-700">帳簿原価: {bookValue.toLocaleString()} 円</p>
          {contractedMethod && <p className="text-sm text-gray-700">契約方法: {contractedMethod}</p>}
          {numberOfMonths > 0 && <p className="text-sm text-gray-700">月数: {numberOfMonths}</p>}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600">行確定</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2 hover:bg-gray-400">行キャンセル</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2 hover:bg-gray-400">クリア</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400">終了</button>
      </div>
    </div>
  );
};

export default AssetComponent;