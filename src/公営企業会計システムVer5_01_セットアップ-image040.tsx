import React from 'react';

// TypeScriptの型定義
type ManagementNameFormProps = {
  segment?: string;
  name?: string;
  abbreviation?: string;
  onSubmit: (data: { segment: string; name: string; abbreviation: string }) => void;
};

const ManagementNameForm: React.FC<ManagementNameFormProps> = ({
  segment = '',
  name = '',
  abbreviation = '',
  onSubmit
}) => {
  const [formValues, setFormValues] = React.useState({
    segment,
    name,
    abbreviation
  });

  // フォームの値が変更されたときに呼び出される関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  // フォーム送信時に呼び出される関数
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">セグメント</label>
        <input
          type="text"
          name="segment"
          value={formValues.segment}
          onChange={handleChange}
          className="mt-1 p-2 block w-full bg-blue-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">名称</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="mt-1 p-2 block w-full bg-blue-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">略名称</label>
        <input
          type="text"
          name="abbreviation"
          value={formValues.abbreviation}
          onChange={handleChange}
          className="mt-1 p-2 block w-full bg-blue-100"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded shadow">
          OK
        </button>
        <button type="button" className="px-4 py-2 bg-gray-300 text-black rounded shadow">
          クリア
        </button>
        <button type="button" className="px-4 py-2 bg-red-500 text-white rounded shadow">
          終了
        </button>
      </div>
    </form>
  );
};

export default ManagementNameForm;