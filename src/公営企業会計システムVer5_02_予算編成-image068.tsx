import React, { useState } from 'react';

type KijiFormProps = {
  onSubmit: (data: KijiFormData) => void;
};

type KijiFormData = {
  nextFiscalYear: string;
  projectCode: string;
  projectDescription: string;
  section: string;
  startFiscalYear: string;
  endFiscalYear: string;
  amount: number;
};

const KijiForm: React.FC<KijiFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<KijiFormData>({
    nextFiscalYear: '平成30',
    projectCode: '',
    projectDescription: '',
    section: '',
    startFiscalYear: '平成31',
    endFiscalYear: '平成31',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white border shadow-md">
      <div className="flex flex-col">
        <label>次期会計年度</label>
        <input
          name="nextFiscalYear"
          value={formData.nextFiscalYear}
          onChange={handleChange}
          className="border p-2 mb-2"
        />

        <label>施策</label>
        <div className="flex items-center mb-2">
          <input
            name="projectCode"
            value={formData.projectCode}
            onChange={handleChange}
            className="border p-2 mr-2"
          />
          <input
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            className="border p-2"
          />
        </div>

        <label>区分</label>
        <select
          name="section"
          value={formData.section}
          onChange={handleChange}
          className="border p-2 mb-2"
        >
          <option value="新規">新規</option>
          <option value="継続">継続</option>
        </select>

        <label>開始年度</label>
        <input
          name="startFiscalYear"
          value={formData.startFiscalYear}
          onChange={handleChange}
          className="border p-2 mb-2"
        />

        <label>終了年度</label>
        <input
          name="endFiscalYear"
          value={formData.endFiscalYear}
          onChange={handleChange}
          className="border p-2 mb-2"
        />

        <label>金額 (千円)</label>
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          className="border p-2 mb-4"
        />

        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            OK
          </button>
          <button type="button" className="bg-gray-500 text-white p-2 rounded">
            クリア
          </button>
          <button type="button" className="bg-red-500 text-white p-2 rounded">
            キャンセル
          </button>
        </div>
      </div>
    </form>
  );
};

export default KijiForm;
