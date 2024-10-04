```tsx
import React, { useState } from 'react';

// Props type definition
type DepreciationFormProps = {
  initialValues?: {
    acquisitionCost?: number;
    depreciationYears?: number;
    depreciationRate?: number;
    remainingValue?: number;
    annualDepreciationAmount?: number;
    limitRate?: number;
    limitedDepreciationAmount?: number;
  };
  onSubmit: (formData: Record<string, any>) => void;
};

// Main component
const DepreciationForm: React.FC<DepreciationFormProps> = ({
  initialValues = {},
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    acquisitionCost: initialValues.acquisitionCost || 2000000,
    depreciationYears: initialValues.depreciationYears || 10,
    depreciationRate: initialValues.depreciationRate || 10.0,
    remainingValue: initialValues.remainingValue || 200000,
    annualDepreciationAmount: initialValues.annualDepreciationAmount || 180000,
    limitRate: initialValues.limitRate || 95,
    limitedDepreciationAmount: initialValues.limitedDepreciationAmount || 1900000,
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-96 p-4">
      <div className="flex justify-between">
        <label>取得価格</label>
        <input
          type="number"
          name="acquisitionCost"
          value={formData.acquisitionCost}
          onChange={handleChange}
          className="p-1 bg-blue-100"
        />
      </div>

      <div>
        <label>償却方法</label>
        <div>
          <label>
            <input type="radio" name="method" value="straight-line" /> 定額法
          </label>
          <label>
            <input type="radio" name="method" value="declining-balance" /> 定率法
          </label>
        </div>
      </div>

      <div>
        <label>耐用年数</label>
        <input
          type="number"
          name="depreciationYears"
          value={formData.depreciationYears}
          onChange={handleChange}
          className="p-1 bg-blue-100"
        />
      </div>

      <div>
        <label>償却率</label>
        <input
          type="number"
          name="depreciationRate"
          value={formData.depreciationRate}
          onChange={handleChange}
          className="p-1 bg-blue-100"
        />
      </div>

      <div>
        <label>残存率</label>
        <input
          type="number"
          name="remainingValue"
          value={formData.remainingValue}
          onChange={handleChange}
          className="p-1 bg-blue-100"
        />
      </div>

      <div>
        <label>年間償却額</label>
        <input
          type="number"
          name="annualDepreciationAmount"
          value={formData.annualDepreciationAmount}
          onChange={handleChange}
          className="p-1 bg-blue-100"
        />
      </div>

      <div>
        <label>限度率</label>
        <input
          type="number"
          name="limitRate"
          value={formData.limitRate}
          onChange={handleChange}
          className="p-1 bg-blue-100"
        />
      </div>

      <div>
        <label>償却限度額</label>
        <input
          type="number"
          name="limitedDepreciationAmount"
          value={formData.limitedDepreciationAmount}
          onChange={handleChange}
          className="p-1 bg-blue-100"
        />
      </div>

      <div className="flex space-x-2 justify-center">
        <button type="submit" className="bg-gray-200 px-4 py-2">
          OK
        </button>
        <button type="button" className="bg-gray-200 px-4 py-2">
          クリア
        </button>
        <button type="button" className="bg-gray-200 px-4 py-2">
          終了
        </button>
      </div>
    </form>
  );
};

export default DepreciationForm;
```