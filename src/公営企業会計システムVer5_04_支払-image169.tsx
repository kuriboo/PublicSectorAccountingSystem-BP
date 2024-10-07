import React, { useState } from 'react';

// 型定義
interface BudgetFormProps {
  onSubmit: (data: BudgetFormData) => void;
}

interface BudgetFormData {
  outputLevel: 'section' | 'detail';
  startDate: string;
  endDate: string;
  startBudgetItem: string;
  endBudgetItem: string;
  collectionTarget: 'all' | 'block' | 'segment';
  printPreviousMonth: boolean;
  printProjectName: boolean;
  printItemName: boolean;
}

// コンポーネント定義
const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<BudgetFormData>({
    outputLevel: 'section',
    startDate: '令和02年08月',
    endDate: '令和02年08月',
    startBudgetItem: '00000000',
    endBudgetItem: '99999999',
    collectionTarget: 'all',
    printPreviousMonth: false,
    printProjectName: false,
    printItemName: false,
  });

  // フォームの変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // フォーム送信
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-lg shadow-lg bg-white">
      {/* 出力レベル */}
      <div className="mb-4">
        <label className="block text-gray-700">出力レベル</label>
        <div>
          <label>
            <input
              type="radio"
              name="outputLevel"
              value="section"
              checked={formData.outputLevel === 'section'}
              onChange={handleChange}
            />
            節
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="outputLevel"
              value="detail"
              checked={formData.outputLevel === 'detail'}
              onChange={handleChange}
            />
            明細
          </label>
        </div>
      </div>
      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="block text-gray-700">範囲指定</label>
        <div className="flex">
          <input
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border rounded-md mr-2"
          />
          <input
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border rounded-md"
          />
        </div>
        <div className="flex mt-2">
          <input
            type="text"
            name="startBudgetItem"
            value={formData.startBudgetItem}
            onChange={handleChange}
            className="border rounded-md mr-2"
          />
          <input
            type="text"
            name="endBudgetItem"
            value={formData.endBudgetItem}
            onChange={handleChange}
            className="border rounded-md"
          />
        </div>
      </div>
      {/* 集計対象 */}
      <div className="mb-4">
        <label className="block text-gray-700">集計対象</label>
        <div>
          <label>
            <input
              type="radio"
              name="collectionTarget"
              value="all"
              checked={formData.collectionTarget === 'all'}
              onChange={handleChange}
            />
            全体
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="collectionTarget"
              value="block"
              checked={formData.collectionTarget === 'block'}
              onChange={handleChange}
            />
            ブロック
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="collectionTarget"
              value="segment"
              checked={formData.collectionTarget === 'segment'}
              onChange={handleChange}
            />
            セグメント
          </label>
        </div>
      </div>
      {/* その他オプション */}
      <div className="mb-4">
        <label className="block text-gray-700">その他オプション</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="printPreviousMonth"
              checked={formData.printPreviousMonth}
              onChange={handleChange}
            />
            前月保護行のみでも印字する
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="printProjectName"
              checked={formData.printProjectName}
              onChange={handleChange}
            />
            摘要欄に工事名を印字する
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="printItemName"
              checked={formData.printItemName}
              onChange={handleChange}
            />
            摘要欄に単価名称を印字する
          </label>
        </div>
      </div>
      {/* ボタン */}
      <div className="flex justify-end">
        <button type="submit" className="btn bg-blue-500 text-white shadow-lg rounded-md px-4 py-2">
          集計
        </button>
        <button type="button" className="btn bg-white border ml-2 px-4 py-2 rounded-md">
          クリア
        </button>
        <button type="button" className="btn bg-white border ml-2 px-4 py-2 rounded-md">
          終了
        </button>
      </div>
    </form>
  );
};

export default BudgetForm;
