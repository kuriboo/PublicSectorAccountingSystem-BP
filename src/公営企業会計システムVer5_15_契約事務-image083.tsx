import React from 'react';

type CSVDataProps = {
  rangeType: '業者情報取込' | '案件情報抽出' | '入札結果取込';
  csvContent: string;
  onCSVContentChange: (content: string) => void;
  onEdit: () => void;
  onDelete: () => void;
};

const CSVDataComponent: React.FC<CSVDataProps> = ({
  rangeType,
  csvContent,
  onCSVContentChange,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      <div className="mb-2">
        <span className="mr-4 font-bold">連携区分</span>
        <label className="mr-4">
          <input
            type="radio"
            name="rangeType"
            value="業者情報取込"
            checked={rangeType === '業者情報取込'}
            onChange={() => onCSVContentChange('業者情報取込')}
          />
          業者情報取込
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="rangeType"
            value="案件情報抽出"
            checked={rangeType === '案件情報抽出'}
            onChange={() => onCSVContentChange('案件情報抽出')}
          />
          案件情報抽出
        </label>
        <label>
          <input
            type="radio"
            name="rangeType"
            value="入札結果取込"
            checked={rangeType === '入札結果取込'}
            onChange={() => onCSVContentChange('入札結果取込')}
          />
          入札結果取込
        </label>
      </div>
      <div className="mb-2">
        <span className="mr-2 font-bold">CSV内容</span>
        <input
          type="text"
          value={csvContent}
          onChange={(e) => onCSVContentChange(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          明細編集
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white py-1 px-4 rounded"
        >
          行削除
        </button>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="px-2 py-1">列番号</th>
            <th className="px-2 py-1">CSVデータ</th>
            <th className="px-2 py-1">システムデータ</th>
            <th className="px-2 py-1">条件区分</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows would dynamically be added here */}
        </tbody>
      </table>
    </div>
  );
};

export default CSVDataComponent;