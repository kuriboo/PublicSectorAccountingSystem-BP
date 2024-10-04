```tsx
import React from 'react';

type SuspensionPageProps = {
  fiscalYear: number;
  receptionCategory: string;
  date: string;
  companyName: string;
  reasons: string[];
  onEdit: () => void;
  onDelete: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const SuspensionPage: React.FC<SuspensionPageProps> = ({
  fiscalYear,
  receptionCategory,
  date,
  companyName,
  reasons,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">指名停止処理</h1>
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">年度:</label>
          <span>{fiscalYear}</span>
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">受付区分:</label>
          <span>{receptionCategory}</span>
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">年月日:</label>
          <span>{date}</span>
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">業者:</label>
          <span>{companyName}</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <table className="w-full text-left mb-2">
          <thead>
            <tr>
              <th className="border-b p-2">停止期間(から)</th>
              <th className="border-b p-2">停止期間(まで)</th>
              <th className="border-b p-2">指名停止理由1</th>
              <th className="border-b p-2">指名停止理由2</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows here if needed */}
          </tbody>
        </table>
        <div className="flex space-x-2">
          <button onClick={onEdit} className="bg-gray-200 px-4 py-2 rounded">編集</button>
          <button onClick={onDelete} className="bg-gray-200 px-4 py-2 rounded">行削除</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="mb-2">指名停止編集</h2>
        <div className="flex mb-2">
          <label className="mr-2 w-24">指名停止理由1:</label>
          <input type="text" className="border p-2 flex-grow" value={reasons[0]} readOnly />
        </div>
        <div className="flex mb-2">
          <label className="mr-2 w-24">指名停止理由2:</label>
          <input type="text" className="border p-2 flex-grow" value={reasons[1]} readOnly />
        </div>
        <div className="flex space-x-2">
          <button onClick={onConfirm} className="bg-gray-200 px-4 py-2 rounded">行確定</button>
          <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded">行キャンセル</button>
        </div>
      </div>
      <div className="flex space-x-2">
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded">クリア</button>
        <button onClick={onFinish} className="bg-gray-200 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default SuspensionPage;
```