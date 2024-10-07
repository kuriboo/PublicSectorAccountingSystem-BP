import React from 'react';
import { useState } from 'react';

// 定義されるプロパティの型
type FormProps = {
  onSubmit: (data: FormData) => void;
  onClear: () => void;
  onExit: () => void;
};

// フォームデータの型
type FormData = {
  aggregationDate: string;
  startPeriod: string;
  endPeriod: string;
  includeDecision: boolean;
  carryForward: boolean;
};

const FormComponent: React.FC<FormProps> = ({ onSubmit, onClear, onExit }) => {
  const [formData, setFormData] = useState<FormData>({
    aggregationDate: '',
    startPeriod: '',
    endPeriod: '',
    includeDecision: true,
    carryForward: true,
  });

  // フォームデータを更新する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 提出ボタンを押した時のハンドラ
  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      <form>
        <div className="mb-4">
          <label className="block font-medium mb-1">集計日付</label>
          <input
            type="date"
            name="aggregationDate"
            value={formData.aggregationDate}
            onChange={handleChange}
            className="w-full border-b"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">時点</label>
          <div className="flex space-x-2">
            <input
              type="date"
              name="startPeriod"
              value={formData.startPeriod}
              onChange={handleChange}
              className="w-full border-b"
            />
            <span>~</span>
            <input
              type="date"
              name="endPeriod"
              value={formData.endPeriod}
              onChange={handleChange}
              className="w-full border-b"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">決算仕訳</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeDecision"
                checked={formData.includeDecision}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    includeDecision: true,
                  }))
                }
              />
              含む
            </label>
            <label>
              <input
                type="radio"
                name="includeDecision"
                checked={!formData.includeDecision}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    includeDecision: false,
                  }))
                }
              />
              含まない
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">繰越け</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="carryForward"
                checked={formData.carryForward}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    carryForward: true,
                  }))
                }
              />
              する
            </label>
            <label>
              <input
                type="radio"
                name="carryForward"
                checked={!formData.carryForward}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    carryForward: false,
                  }))
                }
              />
              しない
            </label>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClear}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            クリア
          </button>
          <button
            type="button"
            onClick={onExit}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
```