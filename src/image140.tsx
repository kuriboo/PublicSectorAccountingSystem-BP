import React from 'react';

// Type definitions for input values
type InputValues = {
  periodEndBalance: number;
  currentIncrease: number;
  currentDecrease: number;
};

// Prop types for the component
interface AssetFormProps {
  assetNumber: string;
  assetName: string;
  sourceCode: string;
  sourceName: string;
  originalValues: InputValues;
  depreciationValues: InputValues;
  exclusionValues: InputValues;
  lossValues: InputValues;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// AssetForm functional component
const AssetForm: React.FC<AssetFormProps> = ({
  assetNumber,
  assetName,
  sourceCode,
  sourceName,
  originalValues,
  depreciationValues,
  exclusionValues,
  lossValues,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white border-2 border-gray-200 rounded-md">
      <h2 className="text-xl font-bold mb-4">財源別固定資産累計編集</h2>
      
      <div className="mb-4">
        <p>資産番号: {assetNumber}</p>
        <p>資産名称: {assetName}</p>
        <p>財源コード: {sourceCode}</p>
        <p>財源名称: {sourceName}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-bold">帳簿原価</h3>
          <label>
            前期末残高:
            <input type="number" value={originalValues.periodEndBalance} readOnly className="input-style"/>
          </label>
          <label>
            当期増加額:
            <input type="number" value={originalValues.currentIncrease} readOnly className="input-style"/>
          </label>
          <label>
            当期減少額:
            <input type="number" value={originalValues.currentDecrease} readOnly className="input-style"/>
          </label>
        </div>

        <div>
          <h3 className="text-lg font-bold">償却累計額</h3>
          <label>
            前期末残高:
            <input type="number" value={depreciationValues.periodEndBalance} readOnly className="input-style"/>
          </label>
          <label>
            当期増加額:
            <input type="number" value={depreciationValues.currentIncrease} readOnly className="input-style"/>
          </label>
          <label>
            当期減少額:
            <input type="number" value={depreciationValues.currentDecrease} readOnly className="input-style"/>
          </label>
        </div>

        <div>
          <h3 className="text-lg font-bold">償却除外額</h3>
          <label>
            前期末残高:
            <input type="number" value={exclusionValues.periodEndBalance} readOnly className="input-style"/>
          </label>
          <label>
            当期増加額:
            <input type="number" value={exclusionValues.currentIncrease} readOnly className="input-style"/>
          </label>
          <label>
            当期減少額:
            <input type="number" value={exclusionValues.currentDecrease} readOnly className="input-style"/>
          </label>
        </div>

        <div>
          <h3 className="text-lg font-bold">過年度損益</h3>
          <label>
            修正益:
            <input type="number" value={lossValues.periodEndBalance} readOnly className="input-style"/>
          </label>
          <label>
            修正損:
            <input type="number" value={lossValues.currentIncrease} readOnly className="input-style"/>
          </label>
        </div>
      </div>

      <div className="mt-4 space-x-2">
        <button onClick={onSubmit} className="btn-primary">OK</button>
        <button onClick={onClear} className="btn-secondary">クリア</button>
        <button onClick={onCancel} className="btn-secondary">キャンセル</button>
      </div>
    </div>
  );
};

export default AssetForm;
```

```css
/* Tailwind styles for buttons and input fields */
.input-style {
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
}
.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
```