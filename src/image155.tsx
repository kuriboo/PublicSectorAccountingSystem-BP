import React from 'react';

// 定義されるプロパティの型
type FormProps = {
  fiscalYear: string;
  mainCategoryCode: string;
  mainCategoryName: string;
  subCategoryCode: string;
  subCategoryName: string;
  minorCategoryCode: string;
  minorCategoryName: string;
  abbreviation: string;
  budgetCompositionDiv: number;
  correctionTimes: number;
  checkFlag: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const CategoryForm: React.FC<FormProps> = ({
  fiscalYear,
  mainCategoryCode,
  mainCategoryName,
  subCategoryCode,
  subCategoryName,
  minorCategoryCode,
  minorCategoryName,
  abbreviation,
  budgetCompositionDiv,
  correctionTimes,
  checkFlag,
  onSubmit,
  onClear,
  onCancel
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
      {/* 年度とラジオボタン */}
      <div className="mb-4">
        <div>平成{fiscalYear}年度</div>
        <div>
          <label>
            <input type="radio" name="action" value="register" defaultChecked /> 登録
          </label>
          <label className="ml-3">
            <input type="radio" name="action" value="edit" /> 訂正
          </label>
        </div>
      </div>

      {/* コードと名称入力フィールド */}
      <div className="mb-4 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm">コード</label>
          <input
            type="text"
            value={mainCategoryCode}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">名称</label>
          <input
            type="text"
            value={mainCategoryName}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">コード</label>
          <input
            type="text"
            value={subCategoryCode}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">名称</label>
          <input
            type="text"
            value={subCategoryName}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      {/* 小分類セクション */}
      <div className="mb-4 border-t pt-4">
        <div className="mb-2">
          <label className="block text-sm font-bold">小分類</label>
          <input
            type="text"
            value={minorCategoryCode}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block">名称</label>
          <input
            type="text"
            value={minorCategoryName}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block">略名</label>
          <input
            type="text"
            value={abbreviation}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block">予算編成区分</label>
          <input
            type="number"
            value={budgetCompositionDiv}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block">補正回数</label>
          <input
            type="number"
            value={correctionTimes}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">査定フラグ</label>
          <input
            type="number"
            value={checkFlag}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          type="button"
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CategoryForm;
