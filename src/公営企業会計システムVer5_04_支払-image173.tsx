import React, { FC, useState } from 'react';

// TypeScriptの型定義部分
interface ChecklistProps {
  onSubmit: (data: FormData) => void;
  onClear: () => void;
  onClose: () => void;
}

interface FormData {
  belongingStart: string;
  belongingEnd: string;
  isAll: boolean;
  chargeReasonStart: string;
  chargeReasonEnd: string;
}

// コンポーネントの定義
const ChecklistComponent: FC<ChecklistProps> = ({ onSubmit, onClear, onClose }) => {
  // 初期の入力状態
  const [formData, setFormData] = useState<FormData>({
    belongingStart: '',
    belongingEnd: '',
    isAll: true,
    chargeReasonStart: '平成29年08月17日',
    chargeReasonEnd: '平成29年08月17日',
  });

  // 入力変更時のハンドラー
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 転記ボタンが押された時の関数
  const handleSubmit = () => {
    onSubmit(formData);
  };

  // コンポーネントの描画
  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">支出負担行為チェックリスト作成</h1>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">
          所属別
          <input
            type="text"
            name="belongingStart"
            value={formData.belongingStart}
            onChange={handleInputChange}
            className="mt-1 block w-full border rounded p-1"
          />
          <span className="inline-block mx-2">~</span>
          <input
            type="text"
            name="belongingEnd"
            value={formData.belongingEnd}
            onChange={handleInputChange}
            className="mt-1 block w-full border rounded p-1"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="isAll"
            value="true"
            checked={formData.isAll}
            onChange={() => setFormData({ ...formData, isAll: true })}
            className="form-radio"
          />
          <span className="ml-2">全て</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input
            type="radio"
            name="isAll"
            value="false"
            checked={!formData.isAll}
            onChange={() => setFormData({ ...formData, isAll: false })}
            className="form-radio"
          />
          <span className="ml-2">未決定</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">
          負担処理由
        </label>
        <input
          type="text"
          name="chargeReasonStart"
          value={formData.chargeReasonStart}
          onChange={handleInputChange}
          className="mt-1 block w-full border rounded p-1"
        />
        <span className="block text-center mx-2">~</span>
        <input
          type="text"
          name="chargeReasonEnd"
          value={formData.chargeReasonEnd}
          onChange={handleInputChange}
          className="mt-1 block w-full border rounded p-1"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white p-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white p-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ChecklistComponent;
```