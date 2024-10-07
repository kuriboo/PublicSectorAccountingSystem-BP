import React from 'react';

type DropdownOption = {
  value: string;
  label: string;
};

type ContractFormProps = {
  years: DropdownOption[];
  acceptanceTypes: DropdownOption[];
  industries: DropdownOption[];
  contractTypes: DropdownOption[];
  regions: DropdownOption[];
  onSubmit: (data: any) => void;
  onClear: () => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  years,
  acceptanceTypes,
  industries,
  contractTypes,
  regions,
  onSubmit,
  onClear,
}) => {
  return (
    <form
      className="p-4 bg-white rounded shadow-md"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({});
      }}
    >
      {/* Year and Acceptance Type */}
      <div className="mb-4 flex">
        <div className="flex-1 mr-4">
          <label className="block mb-1">年度</label>
          <select className="w-full p-2 border rounded">
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block mb-1">受付区分</label>
          <select className="w-full p-2 border rounded">
            {acceptanceTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Industry */}
      <div className="mb-4">
        <label className="block mb-1">業種</label>
        <select className="w-full p-2 border rounded" multiple>
          {industries.map((industry) => (
            <option key={industry.value} value={industry.value}>
              {industry.label}
            </option>
          ))}
        </select>
      </div>

      {/* Contractor Range */}
      <div className="mb-4 flex">
        <div className="flex-1 mr-4">
          <label className="block mb-1">業者</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="flex-1">
          <label className="block mb-1">業者</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
      </div>

      {/* Contract Type & Region */}
      <div className="mb-4 flex">
        <div className="flex-1 mr-4">
          <label className="block mb-1">契約区分</label>
          <select className="w-full p-2 border rounded">
            {contractTypes.map((contract) => (
              <option key={contract.value} value={contract.value}>
                {contract.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block mb-1">地区</label>
          <select className="w-full p-2 border rounded">
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Output Type */}
      <div className="mb-4">
        <label className="block mb-1">出力区分</label>
        <div className="flex items-center">
          <label className="flex items-center mr-4">
            <input type="radio" name="outputType" value="latest" className="mr-2" />
            最新契約金額
          </label>
          <label className="flex items-center">
            <input type="radio" name="outputType" value="falling" className="mr-2" />
            落札金額
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          OK
        </button>
      </div>
    </form>
  );
};

export default ContractForm;
