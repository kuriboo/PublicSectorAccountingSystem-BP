// ContractResultList.tsx
import React from 'react';

type ContractResultListProps = {
  years: string[];
  industryOptions: string[];
  contractTypes: string[];
  areas: string[];
  handleSearch: (filters: { year: string; industry: string[]; contractType: string; area: string; }) => void;
};

const ContractResultList: React.FC<ContractResultListProps> = ({
  years,
  industryOptions,
  contractTypes,
  areas,
  handleSearch,
}) => {
  const [year, setYear] = React.useState<string>(years[0]);
  const [selectedIndustries, setSelectedIndustries] = React.useState<string[]>([]);
  const [contractType, setContractType] = React.useState<string>('');
  const [area, setArea] = React.useState<string>('');

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) => 
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]
    );
  };

  const handleSubmit = () => {
    handleSearch({ year, industry: selectedIndustries, contractType, area });
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-bold mb-4">業者別契約結果一覧表</h2>

      <label className="block mb-2">
        年度
        <select 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          className="block mt-1 p-2 border rounded"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </label>

      <div className="block mb-4">
        業種
        <div className="overflow-auto h-32 border p-2 mt-1">
          {industryOptions.map((industry) => (
            <div key={industry} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedIndustries.includes(industry)}
                onChange={() => toggleIndustry(industry)}
                className="mr-2"
              />
              {industry}
            </div>
          ))}
        </div>
      </div>

      <label className="block mb-2">
        契約区分
        <select 
          value={contractType} 
          onChange={(e) => setContractType(e.target.value)}
          className="block mt-1 p-2 border rounded"
        >
          {contractTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-2">
        地区
        <select 
          value={area} 
          onChange={(e) => setArea(e.target.value)} 
          className="block mt-1 p-2 border rounded"
        >
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </label>

      <button 
        onClick={handleSubmit} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        OK
      </button>
    </div>
  );
};

export default ContractResultList;