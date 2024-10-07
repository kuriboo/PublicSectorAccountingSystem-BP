import React from 'react';
import { useState } from 'react';

type OutputType = '業種別' | '業種地区別' | '業者別' | '地区業者別';
type TaxationType = '全て' | '適格請求書発行事業者' | '適格請求書発行事業者以外';

interface FormProps {
  initialYear?: string;
  initialOutputType?: OutputType;
  initialTaxationType?: TaxationType;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  year: string;
  outputType: OutputType;
  industryRange: string;
  supplierRange: string;
  taxationType: TaxationType;
  region: string;
  startDate: string;
  endDate: string;
  referenceDate: string;
}

const FormComponent: React.FC<FormProps> = ({
  initialYear = '令和04',
  initialOutputType = '業種別',
  initialTaxationType = '全て',
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    year: initialYear,
    outputType: initialOutputType,
    industryRange: '',
    supplierRange: '',
    taxationType: initialTaxationType,
    region: '',
    startDate: '',
    endDate: '',
    referenceDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="flex items-center space-x-2">
        <label>年度: </label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <label>出力区分: </label>
        {['業種別', '業種地区別', '業者別', '地区業者別'].map((type) => (
          <label key={type} className="flex items-center space-x-1">
            <input
              type="radio"
              name="outputType"
              value={type}
              checked={formData.outputType === type}
              onChange={handleInputChange}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <label>業種: </label>
        <input
          type="text"
          name="industryRange"
          value={formData.industryRange}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        />
        <span>~</span>
        <input
          type="text"
          name="industryRangeEnd"
          value={formData.industryRange}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <label>業者: </label>
        <input
          type="text"
          name="supplierRange"
          value={formData.supplierRange}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        />
        <span>~</span>
        <input
          type="text"
          name="supplierRangeEnd"
          value={formData.supplierRange}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <label>課税業者: </label>
        {['全て', '適格請求書発行事業者', '適格請求書発行事業者以外'].map((type) => (
          <label key={type} className="flex items-center space-x-1">
            <input
              type="radio"
              name="taxationType"
              value={type}
              checked={formData.taxationType === type}
              onChange={handleInputChange}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <label>地区: </label>
        <select
          name="region"
          value={formData.region}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        >
          <option value="">選択してください</option>
          {/* Add options here as needed */}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label>変更届出日: </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        />
        <span>~</span>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <label>指名停止基準日: </label>
        <input
          type="date"
          name="referenceDate"
          value={formData.referenceDate}
          onChange={handleInputChange}
          className="border rounded px-2 py-1"
        />
      </div>

      <div className="flex space-x-2">
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">OK</button>
        <button type="reset" className="bg-gray-200 text-black rounded px-4 py-2">クリア</button>
        <button type="button" onClick={() => window.close()} className="bg-red-500 text-white rounded px-4 py-2">終了</button>
      </div>
    </form>
  );
};

export default FormComponent;
