```tsx
import React, { useState } from 'react';

// Type definitions for component props
type FormComponentProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  itemNumber: number;
  itemName: string;
  cfDivision: string;
  amountDivision: string;
  revisionDivision: string;
  indent: string;
  noOutput: boolean;
};

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  // Initialize form state
  const [formData, setFormData] = useState<FormData>({
    itemNumber: 250,
    itemName: '',
    cfDivision: '',
    amountDivision: '1',
    revisionDivision: '1',
    indent: '1',
    noOutput: false
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-2">
        <label>集計番号</label>
        <input
          type="text"
          name="itemNumber"
          value={formData.itemNumber}
          onChange={handleChange}
          className="block w-full px-2 py-1 border rounded"
          readOnly
        />
      </div>
      <div className="mb-2">
        <label>項目名称1</label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          className="block w-full px-2 py-1 border rounded"
        />
      </div>
      <div className="mb-2">
        <label>CF区分</label>
        <input
          type="text"
          name="cfDivision"
          value={formData.cfDivision}
          onChange={handleChange}
          className="block w-full px-2 py-1 border rounded"
        />
      </div>
      <div className="mb-2">
        <label>金額印字区分</label>
        <select
          name="amountDivision"
          value={formData.amountDivision}
          onChange={handleChange}
          className="block w-full px-2 py-1 border rounded"
        >
          <option value="1">名称印字字: 金額0印字</option>
        </select>
      </div>
      <div className="mb-2">
        <label>改行区分</label>
        <select
          name="revisionDivision"
          value={formData.revisionDivision}
          onChange={handleChange}
          className="block w-full px-2 py-1 border rounded"
        >
          <option value="1">1行改行</option>
        </select>
      </div>
      <div className="mb-2">
        <label>インデント</label>
        <input
          type="text"
          name="indent"
          value={formData.indent}
          onChange={handleChange}
          className="block w-full px-2 py-1 border rounded"
        />
      </div>
      <div className="mb-2">
        <label>
          <input
            type="checkbox"
            name="noOutput"
            checked={formData.noOutput}
            onChange={handleChange}
            className="mr-2"
          />
          帳票出力無し
        </label>
      </div>
      <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded">
        OK
      </button>
    </div>
  );
};

export default FormComponent;
```