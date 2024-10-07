import React from 'react';

// TypeScriptの型定義
interface ContractFormProps {
  fiscalYear: string;
  contractorNumber: string;
  contractDate: string;
  contractNumber: string;
  contractMethod: string[];
  deliveryDate: string;
  paymentCount: number;
  customContent: string;
  summary: string;
  partner: string;
  partnerAlias: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// コンポーネントの定義
const ContractForm: React.FC<ContractFormProps> = ({
  fiscalYear,
  contractorNumber,
  contractDate,
  contractNumber,
  contractMethod,
  deliveryDate,
  paymentCount,
  customContent,
  summary,
  partner,
  partnerAlias,
  onSubmit,
  onClear,
  onClose,
}) => {

  return (
    <div className="p-6 bg-white border rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">契約報告入力（一般）</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium">負担年度</label>
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">負担番号</label>
          <input
            type="text"
            value={contractorNumber}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">契約年月日</label>
          <input
            type="date"
            value={contractDate}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">契約番号</label>
          <input
            type="text"
            value={contractNumber}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">契約方法</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md">
            {contractMethod.map((method, index) => (
              <option key={index}>{method}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">納期年月日</label>
          <input
            type="text"
            value={deliveryDate}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">支払回数</label>
          <input
            type="number"
            value={paymentCount}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">自由設定内容</label>
          <textarea
            value={customContent}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">摘要</label>
          <input
            type="text"
            value={summary}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">相手先</label>
          <input
            type="text"
            value={partner}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">相手先略名</label>
          <input
            type="text"
            value={partnerAlias}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>

        <div className="flex space-x-4">
          <button type="button" onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            OK
          </button>
          <button type="button" onClick={onClear} className="px-4 py-2 bg-gray-300 rounded-md">
            クリア
          </button>
          <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContractForm;