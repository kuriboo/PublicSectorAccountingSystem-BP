import { FC, useState } from 'react';

// 型定義
interface FormProps {
  classifications: string[];
  shapeOptions: string[];
  initialPrice: number;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  classification: string;
  initialShape: string;
  targetShape: string;
  price: number;
  quantity: number;
  taxRate: number;
}

// コンポーネント定義
const FormComponent: FC<FormProps> = ({
  classifications,
  shapeOptions,
  initialPrice,
  onSubmit
}) => {
  const [formData, setFormData] = useState<FormData>({
    classification: classifications[0],
    initialShape: shapeOptions[0],
    targetShape: shapeOptions[1],
    price: initialPrice,
    quantity: 1,
    taxRate: 0
  });

  // 入力変更イベントハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // フォーム送信イベントハンドラ
  const handleSubmit = () => {
    onSubmit(formData);
  };

  // コンポーネントのレンダリング
  return (
    <div className="p-4 border rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium">納付分類</label>
        <select
          name="classification"
          className="mt-1 block w-full"
          value={formData.classification}
          onChange={handleChange}
        >
          {classifications.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <span className="block text-sm font-medium">口径選択</span>
        <div className="flex items-center space-x-4">
          <select
            name="initialShape"
            className="mt-1 block"
            value={formData.initialShape}
            onChange={handleChange}
          >
            {shapeOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span>→</span>
          <select
            name="targetShape"
            className="mt-1 block"
            value={formData.targetShape}
            onChange={handleChange}
          >
            {shapeOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">単価</label>
        <input
          type="number"
          name="price"
          className="mt-1 block w-full"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium">数量</label>
          <input
            type="number"
            name="quantity"
            className="mt-1 block"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">消費税率</label>
          <input
            type="number"
            name="taxRate"
            className="mt-1 block"
            value={formData.taxRate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={() => setFormData({ ...formData, quantity: 1, taxRate: 0 })} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default FormComponent;
```