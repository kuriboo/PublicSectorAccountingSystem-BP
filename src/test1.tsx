// Import necessary packages and types
import React from 'react';

// Define props with TypeScript interfaces
interface DetailFormProps {
  year: string;
  budgetCode: string;
  abbreviation: string;
  taxDivision: string[];
  unpaidDivision: string[];
  consumptionTax: string;
  incomeDivision: string[];
  managementDivision: string[];
  estimationType: 'tax' | 'inclTax';
  bsInput?: string;
  gbInput?: string;
  evaluationAttribute?: string;
  propertyId?: string;
  business?: string;
  strategy?: string;
  policy?: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Functional component with Tailwind CSS for styling
const DetailForm: React.FC<DetailFormProps> = ({
  year,
  budgetCode,
  abbreviation,
  taxDivision,
  unpaidDivision,
  consumptionTax,
  incomeDivision,
  managementDivision,
  estimationType,
  bsInput,
  gbInput,
  evaluationAttribute,
  propertyId,
  business,
  strategy,
  policy,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <div className="mb-4">
        <div className="text-lg font-bold">{year} 年度</div>
        <div className="text-base">予算科目コード: {budgetCode}</div>
        <div className="text-base">略名: {abbreviation}</div>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* Tax and Division Dropdowns */}
          <div>
            <label className="block">税区分</label>
            <select className="block w-full p-2 border rounded">
              {taxDivision.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block">未払計上区分</label>
            <select className="block w-full p-2 border rounded">
              {unpaidDivision.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Input Fields */}
          <div>
            <label className="block">消費税</label>
            <input
              type="text"
              className="block w-full p-2 border rounded"
              value={consumptionTax}
            />
          </div>
          <div>
            <label className="block">収入区分</label>
            <select className="block w-full p-2 border rounded">
              {incomeDivision.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block">営経区分</label>
            <select className="block w-full p-2 border rounded">
              {managementDivision.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Calculation Type Radio Buttons */}
          <div>
            <label className="block">積算基準税込フラグ</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="estimationType"
                  checked={estimationType === 'tax'}
                  readOnly
                />
                税抜
              </label>
              <label className="ml-2">
                <input
                  type="radio"
                  name="estimationType"
                  checked={estimationType === 'inclTax'}
                  readOnly
                />
                税込
              </label>
            </div>
          </div>

          {/* Optional Input Fields */}
          <div>
            <label className="block">4号統合BS仕訳科目</label>
            <input
              type="text"
              className="block w-full p-2 border rounded"
              value={bsInput}
              readOnly
            />
          </div>

          <div>
            <label className="block">個別費目BS仕訳科目</label>
            <input
              type="text"
              className="block w-full p-2 border rounded"
              value={gbInput}
              readOnly
            />
          </div>

          <div>
            <label className="block">単価性質</label>
            <input
              type="text"
              className="block w-full p-2 border rounded"
              value={evaluationAttribute}
              readOnly
            />
          </div>

          <div>
            <label className="block">所属</label>
            <input
              type="text"
              className="block w-full p-2 border rounded"
              value={propertyId}
              readOnly
            />
          </div>

          <div>
            <label className="block">事業</label>
            <input
              type="text"
              className="block w-full p-2 border rounded"
              value={business}
              readOnly
            />
          </div>

          <div>
            <label className="block">施策</label>
            <input
              type="text"
              className="block w-full p-2 border rounded"
              value={strategy}
              readOnly
            />
          </div>

          <div>
            <label className="block">施策内訳</label>
            <input
              type="text"
              className="block w-full p-2 border rounded"
              value={policy}
              readOnly
            />
          </div>
        </div>

        {/* Button Actions */}
        <div className="flex space-x-4 mt-4">
          <button type="button" className="px-4 py-2 bg-green-500 text-white rounded" onClick={onSubmit}>
            OK
          </button>
          <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onClear}>
            クリア
          </button>
          <button type="button" className="px-4 py-2 bg-red-500 text-white rounded" onClick={onCancel}>
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetailForm;
