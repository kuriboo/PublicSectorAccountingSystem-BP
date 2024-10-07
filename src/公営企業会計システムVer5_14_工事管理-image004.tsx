import React from 'react';

type FormData = {
  code: string;
  name: string;
  shortName: string;
};

type ComponentProps = {
  data: FormData[];
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
  selectedData?: FormData;
};

const MasterForm: React.FC<ComponentProps> = ({ data, onSubmit, onCancel, selectedData }) => {
  const [formData, setFormData] = React.useState<FormData>(
    selectedData || { code: '', name: '', shortName: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="mb-4">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">工種区分コード</th>
              <th className="border px-2 py-1">工種区分名称</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-2 py-1">{item.code}</td>
                <td className="border px-2 py-1">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4 flex space-x-4">
        <div>
          <label>区分コード</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="border p-1"
          />
        </div>
        <div>
          <label>区分名称</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-1"
          />
        </div>
        <div>
          <label>略名称</label>
          <input
            type="text"
            name="shortName"
            value={formData.shortName}
            onChange={handleChange}
            className="border p-1"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          確定
        </button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default MasterForm;
