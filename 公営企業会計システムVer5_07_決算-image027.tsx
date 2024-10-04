```tsx
import React from 'react';

type AccountingFormProps = {
  year: number;
  onDisplay: () => void;
  onRetrieve: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onCSVExport: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  year,
  onDisplay,
  onRetrieve,
  onConfirm,
  onCancel,
  onCSVExport,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="bg-gray-300 p-2 mb-4">
        <h2 className="text-lg font-bold">剰余金処分計算書出力</h2>
        <div className="flex items-center">
          <label className="mr-2">年度</label>
          <input
            type="text"
            value={`平成${year}`}
            readOnly
            className="border rounded px-2"
          />
          <button onClick={onDisplay} className="ml-2 px-2 py-1 bg-blue-400 rounded">表示</button>
          <button onClick={onRetrieve} className="ml-2 px-2 py-1 bg-blue-400 rounded">前年取込</button>
        </div>
      </div>
      <div className="bg-white p-4 mb-4 border">
        <h3 className="font-bold mb-2">科目設定</h3>
        {/* Additional content and logic for 科目設定 */}
        <button className="mr-2 px-2 py-1 bg-blue-400 rounded">明細編集</button>
        <button className="px-2 py-1 bg-blue-400 rounded">行削除</button>
      </div>
      <div className="bg-white p-4 mb-4 border">
        <h3 className="font-bold mb-2">処分事由および処分額設定</h3>
        {/* Additional content and logic for 処分事由および処分額設定 */}
        <button className="mr-2 px-2 py-1 bg-blue-400 rounded">明細編集</button>
        <button className="px-2 py-1 bg-blue-400 rounded">行削除</button>
      </div>
      <div className="bg-white p-4 mb-4 border">
        <h3 className="font-bold mb-2">処分事由および処分額編集</h3>
        {/* Additional content and logic for editing sections */}
        <button className="mr-2 px-2 py-1 bg-blue-400 rounded">行確定</button>
        <button className="px-2 py-1 bg-blue-400 rounded">行キャンセル</button>
      </div>
      <div className="flex justify-end">
        <button onClick={onCSVExport} className="mr-2 px-2 py-1 bg-blue-400 rounded">CSV出力</button>
        <button onClick={onClear} className="mr-2 px-2 py-1 bg-blue-400 rounded">クリア</button>
        <button onClick={onExit} className="px-2 py-1 bg-blue-400 rounded">終了</button>
      </div>
    </div>
  );
};

export default AccountingForm;
```