```tsx
import React from 'react';

// コンポーネントのプロパティの型定義
interface ProcessingFormProps {
  startDate: string;      // 処理対象年月日開始
  endDate: string;        // 処理対象年月日終了
  selectedMode: 'create' | 'delete';  // 作成区分の選択
  onModeChange: (mode: 'create' | 'delete') => void; // モード変更イベント
  onConfirm: () => void; // 確認ボタンクリックイベント
  onClear: () => void;   // クリアボタンクリックイベント
  onFinish: () => void;  // 終了ボタンクリックイベント
}

const ProcessingForm: React.FC<ProcessingFormProps> = ({
  startDate,
  endDate,
  selectedMode,
  onModeChange,
  onConfirm,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-lg font-bold mb-4">自動仕訳作成処理</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">処理対象年月日</label>
        <div>
          <span>{startDate}</span> 〜 <span>{endDate}</span>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-sm font-medium text-gray-700">作成区分</h2>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              checked={selectedMode === 'create'}
              onChange={() => onModeChange('create')}
            />
            <span className="ml-2">作成</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              className="form-radio"
              checked={selectedMode === 'delete'}
              onChange={() => onModeChange('delete')}
            />
            <span className="ml-2">解除</span>
          </label>
        </div>
      </div>
      <div className="mb-4 p-4 border">
        <h3 className="text-sm font-medium text-gray-700">処理概要</h3>
        <p className="text-sm text-gray-600 mt-2">
          当年度の減価償却について科目別に仕訳を作成致します。
          作成するのは当年度に遵拠した分のみです。それ以外の仕訳については「振替入力」で入力してください。
        </p>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-gray-300 text-gray-800 py-1 px-4 rounded mr-2"
          onClick={onConfirm}
        >
          エラー確認
        </button>
        <button
          className="bg-blue-500 text-white py-1 px-4 rounded mr-2"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-300 text-gray-800 py-1 px-4 rounded mr-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 text-gray-800 py-1 px-4 rounded"
          onClick={onFinish}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ProcessingForm;
```