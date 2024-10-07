import React, { useState } from 'react';

type SessionManagementProps = {
  fiscalYear: number;
  majorCategory: string;
  middleCategory: string;
  minorCategory: string;
  limitCount: number;
  onRegister: () => void;
  onCorrect: () => void;
  onDelete: () => void;
};

export const SessionManagement: React.FC<SessionManagementProps> = ({
  fiscalYear,
  majorCategory,
  middleCategory,
  minorCategory,
  limitCount,
  onRegister,
  onCorrect,
  onDelete,
}) => {
  const [year, setYear] = useState(fiscalYear);
  const [major, setMajor] = useState(majorCategory);
  const [middle, setMiddle] = useState(middleCategory);
  const [minor, setMinor] = useState(minorCategory);
  const [limit, setLimit] = useState(limitCount);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-2">
        <label>会計年度</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="border rounded px-2"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label>大分類</label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          className="border rounded px-2"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label>中分類</label>
        <input
          type="text"
          value={middle}
          onChange={(e) => setMiddle(e.target.value)}
          className="border rounded px-2"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label>小分類</label>
        <input
          type="text"
          value={minor}
          onChange={(e) => setMinor(e.target.value)}
          className="border rounded px-2"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label>制限数</label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="border rounded px-2"
        />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onRegister}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          登録
        </button>
        <button
          onClick={onCorrect}
          className="bg-yellow-500 text-white rounded px-4 py-2"
        >
          訂正
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white rounded px-4 py-2"
        >
          削除
        </button>
      </div>
    </div>
  );
};
