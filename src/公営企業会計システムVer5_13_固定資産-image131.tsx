import React from 'react';

// Define the type for component props
type AssetFormProps = {
  assetNumber: string;
  assetName: string;
  initialValues: {
    previousBalanceBook: number;
    increaseCurrentYearBook: number;
    decreaseCurrentYearBook: number;
    previousBalanceDeduction: number;
    increaseCurrentYearDeduction: number;
    decreaseCurrentYearDeduction: number;
    correctionBenefit: number;
    correctionLoss: number;
  };
  onSubmit: (values: any) => void;
  onReset: () => void;
};

// Reusable component using Tailwind CSS for styling
const AssetForm: React.FC<AssetFormProps> = ({ assetNumber, assetName, initialValues, onSubmit, onReset }) => {
  // Local state for form values
  const [values, setValues] = React.useState(initialValues);

  // Handle changes in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: Number(value),
    }));
  };

  return (
    <form
      className="p-4 border rounded-md shadow-md space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values);
      }}
    >
      {/* Asset Number and Name */}
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium">資産番号</label>
          <input
            type="text"
            className="border rounded p-1"
            value={assetNumber}
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium">資産名称</label>
          <input
            type="text"
            className="border rounded p-1"
            value={assetName}
            readOnly
          />
        </div>
      </div>

      {/* Book Value Section */}
      <div className="space-y-2">
        <h3 className="font-semibold">帳簿原価</h3>
        {['previousBalanceBook', 'increaseCurrentYearBook', 'decreaseCurrentYearBook'].map((field) => (
          <div key={field}>
            <label className="block text-sm">{getFieldLabel(field)}</label>
            <input
              type="number"
              name={field}
              className="border rounded w-full p-1"
              value={values[field as keyof typeof values]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      {/* Deduction Value Section */}
      <div className="space-y-2">
        <h3 className="font-semibold">償却累計額</h3>
        {['previousBalanceDeduction', 'increaseCurrentYearDeduction', 'decreaseCurrentYearDeduction'].map((field) => (
          <div key={field}>
            <label className="block text-sm">{getFieldLabel(field)}</label>
            <input
              type="number"
              name={field}
              className="border rounded w-full p-1"
              value={values[field as keyof typeof values]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      {/* Correction Section */}
      <div className="space-y-2">
        <h3 className="font-semibold">過年度損益</h3>
        {['correctionBenefit', 'correctionLoss'].map((field) => (
          <div key={field}>
            <label className="block text-sm">{getFieldLabel(field)}</label>
            <input
              type="number"
              name={field}
              className="border rounded w-full p-1"
              value={values[field as keyof typeof values]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button type="button" onClick={onReset} className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
        <button type="button" className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </form>
  );
};

// Utility function to get labels
function getFieldLabel(field: string): string {
  switch (field) {
    case 'previousBalanceBook':
      return '前期末残高';
    case 'increaseCurrentYearBook':
      return '当期増加額';
    case 'decreaseCurrentYearBook':
      return '当期減少額';
    case 'previousBalanceDeduction':
      return '前期末残高';
    case 'increaseCurrentYearDeduction':
      return '当期増加額';
    case 'decreaseCurrentYearDeduction':
      return '当期減少額';
    case 'correctionBenefit':
      return '修正益';
    case 'correctionLoss':
      return '修正損';
    default:
      return '';
  }
}

export default AssetForm;
```