import React from 'react';

type ShirabeFormProps = {
  startDate?: string;
  endDate?: string;
  documentNumberStart?: number;
  documentNumberEnd?: number;
  onSubmit: (data: FormData) => void;
};

type FormData = {
  startDate: string;
  endDate: string;
  isInput: boolean;
  documentNumberStart: number;
  documentNumberEnd: number;
};

export const ShirabeForm: React.FC<ShirabeFormProps> = ({
  startDate = '',
  endDate = '',
  documentNumberStart = 0,
  documentNumberEnd = 999999,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    startDate,
    endDate,
    isInput: true,
    documentNumberStart,
    documentNumberEnd,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">在庫作成範囲指定</h2>
        <div className="flex gap-4 my-2">
          <div>
            <label className="block">入出庫日</label>
            <input
              type="text"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border rounded p-1"
            />
            <span> ～ </span>
            <input
              type="text"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="border rounded p-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 my-2">
          <label>
            <input
              type="checkbox"
              name="isInput"
              checked={formData.isInput}
              onChange={handleChange}
              className="mr-2"
            />
            入庫
          </label>
          <label>
            <input
              type="checkbox"
              name="isInput"
              checked={!formData.isInput}
              onChange={handleChange}
              className="mr-2"
            />
            出庫
          </label>
        </div>
        <div className="flex gap-4 my-2">
          <label className="block">伝票番号</label>
          <input
            type="number"
            name="documentNumberStart"
            value={formData.documentNumberStart}
            onChange={handleChange}
            className="border rounded p-1"
          />
          <span> ～ </span>
          <input
            type="number"
            name="documentNumberEnd"
            value={formData.documentNumberEnd}
            onChange={handleChange}
            className="border rounded p-1"
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
          エラー確認
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button type="reset" className="bg-yellow-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </form>
  );
};
