import React from 'react';

// TypeScript interface for component props
interface CommandFormProps {
  issueType: 'new' | 'reissue'; // 発行区分
  paymentStartDate: string;     // 支払年月日開始
  paymentEndDate: string;       // 支払年末日終了
  printAction: boolean;         // 負担行為伺書
  settingOption: string;        // 伝票印字用自由設定項目
  onSubmit: () => void;         // OKボタンのハンドラー
  onClear: () => void;          // クリアボタンのハンドラー
  onClose: () => void;          // 終了ボタンのハンドラー
}

const CommandForm: React.FC<CommandFormProps> = ({
  issueType,
  paymentStartDate,
  paymentEndDate,
  printAction,
  settingOption,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md">
      {/* 発行区分 */}
      <div className="mb-4">
        <label className="block font-bold mb-2">発行区分</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="issueType"
              value="new"
              checked={issueType === 'new'}
              className="mr-1"
            />
            新規
          </label>
          <label>
            <input
              type="radio"
              name="issueType"
              value="reissue"
              checked={issueType === 'reissue'}
              className="mr-1"
            />
            再発行
          </label>
        </div>
      </div>

      {/* 発行対象 */}
      <div className="mb-4">
        <label className="block font-bold mb-2">発行対象</label>
        <div>
          <label className="block mb-1">支払年月日</label>
          <input
            type="text"
            value={paymentStartDate}
            className="border p-2 w-full mb-2"
          />
          <span className="inline-block mx-2">〜</span>
          <input
            type="text"
            value={paymentEndDate}
            className="border p-2 w-full"
          />
        </div>
      </div>

      {/* 負担行為伺書 */}
      <div className="mb-4">
        <label className="block font-bold mb-2">負担行為伺書</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="printAction"
              checked={printAction}
              className="mr-1"
            />
            出力する
          </label>
          <label>
            <input
              type="radio"
              name="printAction"
              checked={!printAction}
              className="mr-1"
            />
            出力しない
          </label>
        </div>
      </div>

      {/* 伝票印字用自由設定項目 */}
      <div className="mb-4">
        <label className="block font-bold mb-2">伝票印字用自由設定項目</label>
        <input
          type="text"
          value={settingOption}
          className="border p-2 w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
          クリア
        </button>
        <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
          終了
        </button>
      </div>
    </div>
  );
};

export default CommandForm;
```