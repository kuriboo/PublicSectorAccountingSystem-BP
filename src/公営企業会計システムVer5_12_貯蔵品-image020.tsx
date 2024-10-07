import React from 'react';

// Type definition for component props
type ContractFormProps = {
  processingDate: string;
  storageLocation: string;
  department: string;
  contractMethod: string;
  contractorCode: string;
  items: { id: string; name: string; spec: string; quantity: number; unitPrice: number; total: number; }[];
  consumptionTaxRate: number;
  contractAmount: number;
  taxAmount: number;
  consumptionTax: number;
  otherTax: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  processingDate,
  storageLocation,
  department,
  contractMethod,
  contractorCode,
  items,
  consumptionTaxRate,
  contractAmount,
  taxAmount,
  consumptionTax,
  otherTax,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 border rounded-lg max-w-4xl mx-auto bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">契約発注入力</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Input fields */}
        <div>
          <label className="block mb-1">処理年月日</label>
          <input className="border p-2 w-full" type="text" value={processingDate} readOnly />
        </div>

        <div>
          <label className="block mb-1">保管場所</label>
          <input className="border p-2 w-full" type="text" value={storageLocation} readOnly />
        </div>

        <div>
          <label className="block mb-1">所属</label>
          <input className="border p-2 w-full" type="text" value={department} readOnly />
        </div>

        <div>
          <label className="block mb-1">契約方法</label>
          <input className="border p-2 w-full" type="text" value={contractMethod} readOnly />
        </div>

        <div>
          <label className="block mb-1">業者コード</label>
          <input className="border p-2 w-full" type="text" value={contractorCode} readOnly />
        </div>
      </div>

      {/* Items table */}
      <table className="table-auto w-full text-left mb-4">
        <thead>
          <tr className="border-b">
            <th className="py-2">品番</th>
            <th className="py-2">品名</th>
            <th className="py-2">規格</th>
            <th className="py-2">数量</th>
            <th className="py-2">単価</th>
            <th className="py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2">{item.id}</td>
              <td className="py-2">{item.name}</td>
              <td className="py-2">{item.spec}</td>
              <td className="py-2">{item.quantity}</td>
              <td className="py-2">{item.unitPrice}</td>
              <td className="py-2">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary and actions */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="mb-2">
            <label>消費税率</label>
            <input className="border p-2 w-full" type="text" value={consumptionTaxRate} readOnly />
          </div>
          <div className="mb-2">
            <label>契約発注金額</label>
            <input className="border p-2 w-full" type="text" value={contractAmount} readOnly />
          </div>
          <div className="mb-2">
            <label>税抜金額</label>
            <input className="border p-2 w-full" type="text" value={taxAmount} readOnly />
          </div>
          <div className="mb-2">
            <label>消費税額</label>
            <input className="border p-2 w-full" type="text" value={consumptionTax} readOnly />
          </div>
          <div className="mb-2">
            <label>他税額</label>
            <input className="border p-2 w-full" type="text" value={otherTax} readOnly />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <button className="bg-blue-500 text-white py-2 mt-2" onClick={onSubmit}>OK</button>
          <button className="bg-gray-500 text-white py-2 mt-2" onClick={onClear}>クリア</button>
          <button className="bg-red-500 text-white py-2 mt-2" onClick={onClose}>終了</button>
        </div>
      </div>
    </div>
  );
};

export default ContractForm;
