import { FC } from 'react';
import 'tailwindcss/tailwind.css';

// プロパティの型定義
interface AccountingFormProps {
  startDate: string;
  endDate: string;
  collectionTarget: string;
  blockNumber: string;
  division: string;
  articleCode: string;
  includeTransactionSummary: boolean;
  onCsvExport: () => void;
  onClear: () => void;
  onExit: () => void;
}

// コンポーネントの定義
const AccountingForm: FC<AccountingFormProps> = ({
  startDate,
  endDate,
  collectionTarget,
  blockNumber,
  division,
  articleCode,
  includeTransactionSummary,
  onCsvExport,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h1 className="text-lg font-bold mb-4">剰余金計算書</h1>
      <div className="mb-4">
        <label className="block mb-2">会計期間</label>
        <input
          type="text"
          value={startDate}
          className="border p-2 mr-2"
          readOnly
        />
        <span>～</span>
        <input
          type="text"
          value={endDate}
          className="border p-2 ml-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <fieldset>
          <legend className="mb-2">集計対象</legend>
          <label className="mr-4">
            <input
              type="radio"
              name="collectionTarget"
              value="全体"
              checked={collectionTarget === '全体'}
              readOnly
            />
            全体
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="collectionTarget"
              value="ブロック"
              checked={collectionTarget === 'ブロック'}
              readOnly
            />
            ブロック
          </label>
          <label>
            <input
              type="radio"
              name="collectionTarget"
              value="セグメント"
              checked={collectionTarget === 'セグメント'}
              readOnly
            />
            セグメント
          </label>
        </fieldset>
      </div>

      <div className="mb-4">
        <label className="block mb-2">ブロック番号</label>
        <input
          type="text"
          value={blockNumber}
          className="border p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">前年度処分区分</label>
        <input
          type="text"
          value={division}
          className="border p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">科目コード</label>
        <input
          type="text"
          value={articleCode}
          className="border p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={includeTransactionSummary}
            readOnly
          />
          伝票取りまとめ
        </label>
      </div>

      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onCsvExport}>
          CSV出力
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClear}>
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
