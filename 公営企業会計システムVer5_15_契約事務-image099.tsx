import React from 'react';

// Props type definition for the component
interface ContractorFormProps {
  year: string;
  workType: string;
  contractorId: string;
  contractorName: string;
  contractType: string;
  bidCount: number;
  dropCount: number;
  amount: number;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
}

const ContractorForm: React.FC<ContractorFormProps> = ({
  year,
  workType,
  contractorId,
  contractorName,
  contractType,
  bidCount,
  dropCount,
  amount,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-6 rounded-md shadow-md bg-white">
      <div>
        <label className="block font-bold mb-2">年度</label>
        <input type="text" value={year} readOnly className="input-readonly" />
      </div>

      <div>
        <label className="block font-bold mb-2">受付区分</label>
        <input type="text" value={workType} readOnly className="input-readonly" />
      </div>

      <div>
        <label className="block font-bold mb-2">業者</label>
        <input type="text" value={contractorId} readOnly className="input-readonly" />
        <input type="text" value={contractorName} readOnly className="input-readonly" />
      </div>

      <div>
        <label className="block font-bold mb-2">契約区分</label>
        <input type="text" value={contractType} readOnly className="input-readonly" />
      </div>

      <div>
        <label className="block font-bold mb-2">指名回数</label>
        <input type="number" value={bidCount} readOnly className="input-readonly" />
      </div>

      <div>
        <label className="block font-bold mb-2">落札回数</label>
        <input type="number" value={dropCount} readOnly className="input-readonly" />
      </div>

      <div>
        <label className="block font-bold mb-2">金額</label>
        <input type="number" value={amount} readOnly className="input-readonly" />
      </div>

      <div className="flex justify-end space-x-4 mt-4">
        <button className="btn" onClick={onConfirm}>OK</button>
        <button className="btn" onClick={onClear}>クリア</button>
        <button className="btn" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default ContractorForm;

// Tailwind CSS styles
<style jsx>{`
  .input-readonly {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    background-color: #f9fafb;
    border-radius: 0.375rem;
    margin-bottom: 1rem;
  }
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #3b82f6;
    color: white;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .btn:hover {
    background-color: #2563eb;
  }
`}</style>