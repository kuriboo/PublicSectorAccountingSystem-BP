```tsx
import React, { useState } from 'react';

// 型定義
type InventoryFormProps = {
  onSubmit: (data: InventoryData) => void;
};

type InventoryData = {
  decisionCategory: string;
  currentDate: string;
  storageLocationFrom: string;
  storageLocationTo: string;
  itemCodeFrom: string;
  itemCodeTo: string;
  digitCategory: string;
};

// コンポーネント定義
const InventoryForm: React.FC<InventoryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<InventoryData>({
    decisionCategory: '管理者',
    currentDate: '平成30年06月25日',
    storageLocationFrom: '',
    storageLocationTo: '',
    itemCodeFrom: '',
    itemCodeTo: '',
    digitCategory: 'なし',
  });

  // フォームの入力を管理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォーム送信
  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">在庫表作成</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">決裁区分</label>
        <input
          type="text"
          name="decisionCategory"
          value={formData.decisionCategory}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">在庫現在日</label>
        <input
          type="text"
          name="currentDate"
          value={formData.currentDate}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">保管場所</label>
        <input
          type="text"
          name="storageLocationFrom"
          value={formData.storageLocationFrom}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="storageLocationTo"
          value={formData.storageLocationTo}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">品番</label>
        <input
          type="text"
          name="itemCodeFrom"
          value={formData.itemCodeFrom}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="itemCodeTo"
          value={formData.itemCodeTo}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">数量Ｏ桁区分</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              name="digitCategory"
              value="なし"
              checked={formData.digitCategory === 'なし'}
              onChange={handleInputChange}
            />
            <span className="ml-2">なし</span>
          </label>
          <label>
            <input
              type="radio"
              name="digitCategory"
              value="あり"
              checked={formData.digitCategory === 'あり'}
              onChange={handleInputChange}
            />
            <span className="ml-2">あり</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default InventoryForm;
```