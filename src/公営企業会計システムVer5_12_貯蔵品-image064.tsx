import React, { useState } from 'react';
import clsx from 'clsx';

type FormProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  dateRangeStart: string;
  dateRangeEnd: string;
  managementLocation: string;
  categoryCodeStart: string;
  categoryCodeEnd: string;
  withZeroQty: boolean;
};

const FormComponent: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    dateRangeStart: '',
    dateRangeEnd: '',
    managementLocation: '',
    categoryCodeStart: '',
    categoryCodeEnd: '',
    withZeroQty: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 max-w-lg mx-auto bg-white shadow-md rounded-md space-y-4">
      <div className="flex justify-between">
        <label className="font-bold">入出庫年月</label>
        <input
          type="text"
          name="dateRangeStart"
          value={formData.dateRangeStart}
          onChange={handleChange}
          className="border p-1 rounded"
          placeholder="平成29年09月"
        />
        <span>〜</span>
        <input
          type="text"
          name="dateRangeEnd"
          value={formData.dateRangeEnd}
          onChange={handleChange}
          className="border p-1 rounded"
          placeholder="平成29年09月"
        />
      </div>

      <div className="flex justify-between items-center">
        <label className="font-bold">管理場所</label>
        <input
          type="text"
          name="managementLocation"
          value={formData.managementLocation}
          onChange={handleChange}
          className="border p-1 rounded"
          placeholder="管理場所"
        />
      </div>

      <div className="flex justify-between items-center">
        <label className="font-bold">分類コード</label>
        <input
          type="text"
          name="categoryCodeStart"
          value={formData.categoryCodeStart}
          onChange={handleChange}
          className="border p-1 rounded"
          placeholder="00000000"
        />
        <span>〜</span>
        <input
          type="text"
          name="categoryCodeEnd"
          value={formData.categoryCodeEnd}
          onChange={handleChange}
          className="border p-1 rounded"
          placeholder="99999999"
        />
      </div>

      <div className="flex items-center">
        <label className="font-bold">数量0印字区分</label>
        <label className="ml-2">
          <input
            type="radio"
            name="withZeroQty"
            checked={!formData.withZeroQty}
            onChange={() => setFormData((prevData) => ({ ...prevData, withZeroQty: false }))}
          />
          なし
        </label>
        <label className="ml-2">
          <input
            type="radio"
            name="withZeroQty"
            checked={formData.withZeroQty}
            onChange={() => setFormData((prevData) => ({ ...prevData, withZeroQty: true }))}
          />
          あり
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button type="button" className="px-4 py-2 bg-gray-200 rounded" onClick={() => setFormData({
          dateRangeStart: '',
          dateRangeEnd: '',
          managementLocation: '',
          categoryCodeStart: '',
          categoryCodeEnd: '',
          withZeroQty: false,
        })}>
          クリア
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
      </div>
    </form>
  );
};

export default FormComponent;