import React from 'react';

// Propsの型定義
interface AutoProcessingProps {
  year: string;
  acceptanceType: string;
  minBusinessCode: string;
  maxBusinessCode: string;
  minType: string;
  maxType: string;
  showUnregisteredOnly: boolean;
  onProcess: () => void;
  onSetting: () => void;
  onClear: () => void;
  onClose: () => void;
}

// 再利用可能なコンポーネント定義
const AutoProcessing: React.FC<AutoProcessingProps> = ({
  year,
  acceptanceType,
  minBusinessCode,
  maxBusinessCode,
  minType,
  maxType,
  showUnregisteredOnly,
  onProcess,
  onSetting,
  onClear,
  onClose,
}) => {
  return (
    <div className="font-sans p-4">
      <h2 className="bg-blue-100 text-xl font-bold p-2 mb-4">自動格付処理</h2>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">年度</label>
          <input
            type="text"
            value={year}
            className="border rounded p-2"
            readOnly
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2">受付区分</label>
          <input
            type="text"
            value={acceptanceType}
            className="border rounded p-2"
            readOnly
          />
        </div>
      </div>
      <div className="border p-4 mb-4">
        <h3 className="font-bold mb-2">処理条件</h3>
        <div className="flex items-center mb-2">
          <label className="mr-2">業者</label>
          <input
            type="text"
            value={minBusinessCode}
            className="border rounded p-2 w-32 mr-2"
          />
          <span>~</span>
          <input
            type="text"
            value={maxBusinessCode}
            className="border rounded p-2 w-32 ml-2"
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">業種</label>
          <input
            type="text"
            value={minType}
            className="border rounded p-2 w-32 mr-2"
          />
          <span>~</span>
          <input
            type="text"
            value={maxType}
            className="border rounded p-2 w-32 ml-2"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={showUnregisteredOnly}
            className="mr-2"
          />
          <label>格付未登録業者のみ</label>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <button onClick={onProcess} className="border rounded p-2 bg-gray-200">
          格付処理
        </button>
        <button onClick={onSetting} className="border rounded p-2 bg-gray-200">
          格付仮設定
        </button>
      </div>
      <div className="flex justify-between">
        <button onClick={onClear} className="border rounded p-2 bg-gray-200">
          クリア
        </button>
        <button onClick={onClose} className="border rounded p-2 bg-gray-200">
          終了
        </button>
      </div>
    </div>
  );
};

export default AutoProcessing;
