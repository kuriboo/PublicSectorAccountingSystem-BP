import React from 'react';

interface Props {
  currentYear: string;
  newYear: string;
  lastUpdated: string;
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
}

const MasterCreationComponent: React.FC<Props> = ({
  currentYear,
  newYear,
  lastUpdated,
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="p-6 bg-gray-100 max-w-3xl mx-auto mt-10">
      <div className="bg-purple-300 text-white p-3 rounded-t">
        <h1 className="text-lg font-bold">貯蔵品次年度マスタ作成</h1>
      </div>
      <div className="border p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="font-bold">本年度</div>
          <div>{currentYear}</div>
          <div className="font-bold">新年度</div>
          <div>{newYear}</div>
        </div>
        <div className="mb-4">
          <h2 className="font-bold">処理概要</h2>
          <p>本年度のマスタ内容を新年度に複写します。本年度を指定して下さい。</p>
          <ul className="list-disc pl-5 py-2">
            <li>保管場所権限マスタ</li>
            <li>貯蔵品年度別準値属性マスタ</li>
          </ul>
          <p>
            ※新年度のマスタが設定されている場合は、新年度のマスタを削除してから
            本年度のマスタ内容を複写します。
          </p>
          <p>
            ※当処理は何回でも実行可能ですが、新年度マスタ修正後に当処理を実行した場合は
            新年度修正文が破棄されますので注意して下さい。
          </p>
        </div>
        <div className="text-right mb-6">
          <p>最終更新日時</p>
          <p>{lastUpdated}</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onOkClick}
          >
            OK
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={onClearClick}
          >
            クリア
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onExitClick}
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasterCreationComponent;