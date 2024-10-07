import React from 'react';

// プロパティの型定義
type FormProps = {
  startDate: string;
  endDate: string;
  includeBudget?: boolean;
  onSubmit: () => void;
  onCancel: () => void;
};

// フォームコンポーネント
const ReportForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  includeBudget = false,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold text-center bg-purple-500 text-white p-2 rounded-md">
        特定収入充当表データ作成
      </h2>
      <div className="border-t border-b py-4">
        <h3 className="text-lg font-semibold">範囲指定</h3>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-bold">課税期間</span>
          <span>{startDate}</span>
          <span>〜</span>
          <span>{endDate}</span>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="budget"
          className="mr-2"
          checked={includeBudget}
          readOnly
        />
        <label htmlFor="budget">予算の財務充当データを出力する</label>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```