```tsx
import React from 'react';

// TypeScriptの型定義
interface FormComponentProps {
  year: number;
  collectionNumber: number;
  itemName: string;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  year: number;
  collectionNumber: number;
  itemName: string;
}

const FormComponent: React.FC<FormComponentProps> = ({ year, collectionNumber, itemName, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    year,
    collectionNumber,
    itemName,
  });

  // 入力が変更された時のハンドラー
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // フォームを送信する時のハンドラー
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">集計番号</label>
        <input
          type="number"
          name="collectionNumber"
          value={formData.collectionNumber}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">項目名称</label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        送信
      </button>
    </form>
  );
};

export default FormComponent;
```