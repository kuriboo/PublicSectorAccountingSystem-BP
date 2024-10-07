import React from 'react';

type InspectionFormProps = {
  categories: string[];
  results: string[];
  onSubmit: (data: FormData) => void;
};

type FormData = {
  category: string;
  date: string;
  count: number;
  result: string;
  plannedDate: string;
  responsiblePerson: string;
  memo: string;
};

const InspectionForm: React.FC<InspectionFormProps> = ({ categories, results, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    category: categories[0],
    date: '',
    count: 1,
    result: results[0],
    plannedDate: '',
    responsiblePerson: '',
    memo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-md space-y-4">
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-bold mb-1">検査分類</label>
          <select name="category" value={formData.category} onChange={handleChange} className="border p-2 rounded">
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">検査日</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-bold mb-1">検査回数</label>
          <input
            type="number"
            name="count"
            value={formData.count}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">検査結果</label>
          <select name="result" value={formData.result} onChange={handleChange} className="border p-2 rounded">
            {results.map((result) => (
              <option key={result} value={result}>{result}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-bold mb-1">検査予定日</label>
          <input
            type="date"
            name="plannedDate"
            value={formData.plannedDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">検査担当者</label>
          <input
            type="text"
            name="responsiblePerson"
            value={formData.responsiblePerson}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold mb-1">メモ</label>
        <textarea
          name="memo"
          value={formData.memo}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" className="px-4 py-2 border rounded bg-gray-300 hover:bg-gray-400">
          クリア
        </button>
        <button type="button" className="px-4 py-2 border rounded bg-gray-300 hover:bg-gray-400">
          キャンセル
        </button>
        <button type="submit" className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600">
          OK
        </button>
      </div>
    </form>
  );
};

export default InspectionForm;
