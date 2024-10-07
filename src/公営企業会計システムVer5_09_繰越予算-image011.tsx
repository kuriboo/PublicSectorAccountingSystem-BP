import React from 'react';

type ProcessDataFormProps = {
  startDate: string;
  endDate: string;
  budgetItemStart: string;
  budgetItemEnd: string;
  departmentStart: string;
  departmentEnd: string;
  onFilterChange: (filter: 'all' | 'budgetOnly' | 'plannedOnly') => void;
  onOutputOptionChange: (option: 'budget' | 'plannedOrder') => void;
};

const ProcessDataForm: React.FC<ProcessDataFormProps> = ({
  startDate,
  endDate,
  budgetItemStart,
  budgetItemEnd,
  departmentStart,
  departmentEnd,
  onFilterChange,
  onOutputOptionChange,
}) => {
  return (
    <div className="p-6 bg-white rounded shadow-md space-y-4">
      <h1 className="text-xl font-bold">未処理データ一覧表作成</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <label>処理年月</label>
          <input
            type="text"
            value={startDate}
            className="border p-2"
            readOnly
          />
          <span>〜</span>
          <input
            type="text"
            value={endDate}
            className="border p-2"
            readOnly
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-blue-500 text-white px-4 py-1 rounded">予算科目</button>
          <input
            type="text"
            value={budgetItemStart}
            className="border p-2"
            readOnly
          />
          <span>〜</span>
          <input
            type="text"
            value={budgetItemEnd}
            className="border p-2"
            readOnly
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-blue-500 text-white px-4 py-1 rounded">所属</button>
          <input
            type="text"
            value={departmentStart}
            className="border p-2"
            readOnly
          />
          <span>〜</span>
          <input
            type="text"
            value={departmentEnd}
            className="border p-2"
            readOnly
          />
        </div>
      </div>
      <div className="border-t pt-4">
        <label className="block">処理区分</label>
        <div className="flex items-center space-x-2">
          <label>
            <input
              type="radio"
              name="filter"
              onChange={() => onFilterChange('all')}
            />
            全て
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              onChange={() => onFilterChange('budgetOnly')}
            />
            負担のみ
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              onChange={() => onFilterChange('plannedOnly')}
            />
            予定のみ
          </label>
        </div>
      </div>
      <div className="border-t pt-4">
        <label className="block">出力区分</label>
        <div className="flex items-center space-x-2">
          <label>
            <input
              type="checkbox"
              onChange={() => onOutputOptionChange('budget')}
            />
            予算科目別
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => onOutputOptionChange('plannedOrder')}
            />
            予定負担番号順
          </label>
        </div>
      </div>
      <div className="flex space-x-4 pt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ProcessDataForm;
```