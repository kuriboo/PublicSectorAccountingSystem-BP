import React, { useState } from 'react';

// TypeScriptの型定義
type FormProps = {
  onSubmit: (data: FormData) => void;
  onClear: () => void;
};

type FormData = {
  startDate: string;
  endDate: string;
  title: string;
  pagePrint: boolean;
  startPage: number;
};

// コンポーネント定義
const FinancialForm: React.FC<FormProps> = ({ onSubmit, onClear }) => {
  const [formData, setFormData] = useState<FormData>({
    startDate: '',
    endDate: '',
    title: '',
    pagePrint: true,
    startPage: 1,
  });

  // フォームデータの更新
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // フォーム送信
  const handleSubmit = () => {
    onSubmit(formData);
  };

  // フォームのクリア
  const handleClear = () => {
    setFormData({
      startDate: '',
      endDate: '',
      title: '',
      pagePrint: true,
      startPage: 1,
    });
    onClear();
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">決算統計損益計算書</h2>
      <div className="mb-4">
        <label className="block mb-2">会計期間</label>
        <input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="border p-2 mb-2"
          placeholder="開始日"
        />
        <input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="border p-2"
          placeholder="終了日"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">タイトル</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">頁印字</label>
        <div>
          <label>
            <input
              type="radio"
              name="pagePrint"
              checked={formData.pagePrint}
              onChange={() => setFormData(prevState => ({ ...prevState, pagePrint: true }))}
            />
            する
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="pagePrint"
              checked={!formData.pagePrint}
              onChange={() => setFormData(prevState => ({ ...prevState, pagePrint: false }))}
            />
            しない
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">開始頁</label>
        <input
          type="number"
          name="startPage"
          value={formData.startPage}
          onChange={handleChange}
          className="border p-2"
        />
      </div>
      <div className="flex space-x-4">
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
          OK
        </button>
        <button onClick={handleClear} className="bg-gray-500 text-white p-2 rounded">
          クリア
        </button>
      </div>
    </div>
  );
};

export default FinancialForm;
