import React from 'react';

type PropertyCodeDropdownOption = {
  value: string;
  label: string;
};

type ComponentProps = {
  propertyCode: string;
  name: string;
  abbreviation: string;
  recognitionCode: string;
  recognitionOptions: PropertyCodeDropdownOption[];
  constructionTax: number;
  constructionTaxExempt: number;
  businessExpenses: number;
  businessTaxExempt: number;
  closingCode: string;
  closingOptions: PropertyCodeDropdownOption[];
  investmentCode: string;
  investmentOptions: PropertyCodeDropdownOption[];
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const FormComponent: React.FC<ComponentProps> = ({
  propertyCode,
  name,
  abbreviation,
  recognitionCode,
  recognitionOptions,
  constructionTax,
  constructionTaxExempt,
  businessExpenses,
  businessTaxExempt,
  closingCode,
  closingOptions,
  investmentCode,
  investmentOptions,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 font-sans">
      <h2 className="text-xl font-bold mb-4">財源マスタ</h2>
      <form className="space-y-4">
        <div>
          <label>財源コード:</label>
          <input
            type="text"
            value={propertyCode}
            className="border rounded p-1 ml-2"
            readOnly
          />
        </div>
        <div>
          <label>名称:</label>
          <input
            type="text"
            value={name}
            className="border rounded p-1 ml-2"
          />
        </div>
        <div>
          <label>略称:</label>
          <input
            type="text"
            value={abbreviation}
            className="border rounded p-1 ml-2"
          />
        </div>
        <div>
          <label>償却区分コード:</label>
          <select
            value={recognitionCode}
            className="border rounded p-1 ml-2"
          >
            {recognitionOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>総工事費 税抜金額:</label>
          <input
            type="number"
            value={constructionTaxExempt}
            className="border rounded p-1 ml-2"
          />          
          <label className="ml-4">消費税額:</label>
          <input
            type="number"
            value={constructionTax}
            className="border rounded p-1 ml-2"
          />
        </div>
        <div>
          <label>総事務費 税抜金額:</label>
          <input
            type="number"
            value={businessTaxExempt}
            className="border rounded p-1 ml-2"
          />
          <label className="ml-4">消費税額:</label>
          <input
            type="number"
            value={businessExpenses}
            className="border rounded p-1 ml-2"
          />
        </div>
        <div>
          <label>計上区分コード:</label>
          <select
            value={closingCode}
            className="border rounded p-1 ml-2"
          >
            {closingOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>出資区分コード:</label>
          <select
            value={investmentCode}
            className="border rounded p-1 ml-2"
          >
            {investmentOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-2 mt-4">
          <button type="button" onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">
            OK
          </button>
          <button type="button" onClick={onClear} className="bg-gray-500 text-white py-1 px-4 rounded">
            クリア
          </button>
          <button type="button" onClick={onExit} className="bg-red-500 text-white py-1 px-4 rounded">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
```