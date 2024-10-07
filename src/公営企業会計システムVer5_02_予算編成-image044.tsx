import React, { useState } from 'react';

// TypeScriptの型定義
type BudgetFormProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  year: string;
  revisionNumber: number;
  labelCategory: string;
  amountCategory: string;
  accountCategory: string;
  rangeStart: string;
  rangeEnd: string;
};

// コンポーネント定義
const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    year: '平成29年',
    revisionNumber: 1,
    labelCategory: '見積要求額',
    amountCategory: '税込',
    accountCategory: '事業別',
    rangeStart: '0000000',
    rangeEnd: '9999999',
  });

  // フォーム変更時のハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // フォーム送信時のハンドラ
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* 年度セレクト */}
      <div className="mb-4">
        <label className="block mb-2">年度:</label>
        <select name="year" value={formData.year} onChange={handleChange} className="border p-2 rounded">
          <option value="平成29年">平成29年</option>
          {/* 他の年度のオプションも追加可能 */}
        </select>
      </div>

      {/* 補正回数入力 */}
      <div className="mb-4">
        <label className="block mb-2">補正回数:</label>
        <input 
          type="number" 
          name="revisionNumber" 
          value={formData.revisionNumber} 
          onChange={handleChange} 
          className="border p-2 rounded w-full" 
        />
      </div>

      {/* 印字区分ラジオボタン */}
      <div className="mb-4">
        <label className="block mb-2">印字区分:</label>
        <div className="space-x-4">
          <label>
            <input 
              type="radio" 
              name="labelCategory" 
              value="見積要求額" 
              checked={formData.labelCategory === '見積要求額'} 
              onChange={handleChange} 
            />
            見積要求額
          </label>
          <label>
            <input 
              type="radio" 
              name="labelCategory" 
              value="査定額" 
              checked={formData.labelCategory === '査定額'} 
              onChange={handleChange} 
            />
            査定額
          </label>
        </div>
      </div>

      {/* 金額種別ラジオボタン */}
      <div className="mb-4">
        <label className="block mb-2">金額種別:</label>
        <div className="space-x-4">
          <label>
            <input 
              type="radio" 
              name="amountCategory" 
              value="税込" 
              checked={formData.amountCategory === '税込'} 
              onChange={handleChange} 
            />
            税込
          </label>
          <label>
            <input 
              type="radio" 
              name="amountCategory" 
              value="税抜" 
              checked={formData.amountCategory === '税抜'} 
              onChange={handleChange} 
            />
            税抜
          </label>
          <label>
            <input 
              type="radio" 
              name="amountCategory" 
              value="消費税" 
              checked={formData.amountCategory === '消費税'} 
              onChange={handleChange} 
            />
            消費税
          </label>
        </div>
      </div>

      {/* 帳票種別ラジオボタン */}
      <div className="mb-4">
        <label className="block mb-2">帳票種別:</label>
        <div className="space-x-4">
          <label>
            <input 
              type="radio" 
              name="accountCategory" 
              value="事業別" 
              checked={formData.accountCategory === '事業別'} 
              onChange={handleChange} 
            />
            事業別
          </label>
          <label>
            <input 
              type="radio" 
              name="accountCategory" 
              value="所属別" 
              checked={formData.accountCategory === '所属別'} 
              onChange={handleChange} 
            />
            所属別
          </label>
        </div>
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="block mb-2">範囲指定:</label>
        <div className="flex space-x-2">
          <input 
            type="text" 
            name="rangeStart" 
            value={formData.rangeStart} 
            onChange={handleChange} 
            className="border p-2 rounded w-full" 
          />
          <span>〜</span>
          <input 
            type="text" 
            name="rangeEnd" 
            value={formData.rangeEnd} 
            onChange={handleChange} 
            className="border p-2 rounded w-full" 
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-4">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
        <button type="reset" className="bg-gray-500 text-white py-2 px-4 rounded">クリア</button>
        <button type="button" className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </form>
  );
};

export default BudgetForm;
