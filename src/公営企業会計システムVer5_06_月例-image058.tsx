import React from 'react';

// 型定義
interface ReportFormProps {
  collectionDate: string;
  startDate: string;
  endDate: string;
  departmentNumber: string;
  accountCode: string;
  section: boolean;
  hanging: boolean;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  collectionDate,
  startDate,
  endDate,
  departmentNumber,
  accountCode,
  section,
  hanging,
  onOk,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {/* タイトル */}
      <h2 className="text-lg font-bold mb-4">MAD8630 予算執行状況表（所属別）作成</h2>
      
      {/* 日付と範囲入力 */}
      <div className="mb-4">
        <label className="block mb-2">集計日付</label>
        <input type="text" value={collectionDate} readOnly className="border p-2 bg-gray-100 w-full" />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">時点</label>
        <input type="text" value={startDate} readOnly className="border p-2 bg-gray-100 w-full" />
        <input type="text" value={endDate} readOnly className="border p-2 bg-gray-100 w-full mt-2" />
      </div>

      {/* 所属と予算科目 */}
      <div className="mb-4">
        <label className="block mb-2">所属</label>
        <input type="text" value={departmentNumber} readOnly className="border p-2 bg-gray-100 w-full" />
      </div>

      <div className="mb-4">
        <label className="block mb-2">予算科目</label>
        <input type="text" value={accountCode} readOnly className="border p-2 bg-gray-100 w-full" />
      </div>

      {/* 作表区分 */}
      <div className="mb-4">
        <span className="block mb-2">作表区分</span>
        <label>
          <input type="radio" checked={section} readOnly />
          <span className="ml-2">節</span>
        </label>
        <label className="ml-4">
          <input type="radio" checked={!section} readOnly />
          <span className="ml-2">明細</span>
        </label>
      </div>

      {/* 繰越 */}
      <div className="mb-4">
        <span className="block mb-2">繰越</span>
        <label>
          <input type="radio" checked={hanging} readOnly />
          <span className="ml-2">する</span>
        </label>
        <label className="ml-4">
          <input type="radio" checked={!hanging} readOnly />
          <span className="ml-2">しない</span>
        </label>
      </div>

      {/* ボタン */}
      <div className="flex justify-end">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white mr-2">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 mr-2">クリア</button>
        <button onClick={onFinish} className="px-4 py-2 bg-red-500 text-white">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
