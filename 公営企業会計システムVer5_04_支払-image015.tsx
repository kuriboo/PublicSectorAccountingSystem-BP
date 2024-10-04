```tsx
import React from 'react';

type ContractFormProps = {
  projectName?: string;
  fiscalYear?: string;
  number?: number;
  contractDate?: string;
  deliveryDate?: string;
  contractMethod?: string;
  contractNumber?: string;
  description?: string;
  partner?: string;
  onSubmit: () => void;
  onCancel: () => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  projectName = "公営企業会計システム",
  fiscalYear = "平成29",
  number = 143,
  contractDate = "平成29年08月16日",
  deliveryDate = "平成29年08月16日",
  contractMethod = "随意契約",
  contractNumber = "",
  description = "適用1\n適用2",
  partner = "ぎょうせい工務店",
  onSubmit,
  onCancel
}) => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">{projectName}</h1>
      <div className="flex items-center mb-2">
        <label className="mr-2">負担年度: </label>
        <span className="font-medium">{fiscalYear} 年度</span>
      </div>
      <div className="flex items-center mb-2">
        <label className="mr-2">負担番号: </label>
        <input type="text" value={number} className="border p-1" readOnly />
      </div>
      <div className="flex items-center mb-2">
        <label className="mr-2">契約年月日: </label>
        <input type="text" value={contractDate} className="border p-1" readOnly />
      </div>
      <div className="flex items-center mb-2">
        <label className="mr-2">納期年月日: </label>
        <input type="text" value={deliveryDate} className="border p-1" readOnly />
      </div>
      <div className="flex items-center mb-2">
        <label className="mr-2">契約方法: </label>
        <select value={contractMethod} className="border p-1">
          <option value="随意契約">随意契約</option>
          {/* 他の契約方法を追加可能 */}
        </select>
      </div>
      <div className="flex items-center mb-2">
        <label className="mr-2">契約番号: </label>
        <input type="text" value={contractNumber} className="border p-1" />
      </div>
      <div className="mb-2">
        <label className="block mb-1">自由設定内容: </label>
        <div className="border p-2">
          <button className="bg-blue-200 rounded p-1 mb-1">ボタン1</button>
          <button className="bg-blue-200 rounded p-1">ボタン2</button>
        </div>
      </div>
      <div className="mb-2">
        <label className="block mb-1">摘要: </label>
        <textarea className="border p-2 w-full" value={description} readOnly />
      </div>
      <div className="mb-4">
        <label className="block mb-1">相手先: </label>
        <span className="block">{partner}</span>
      </div>
      <div className="flex space-x-2">
        <button onClick={onSubmit} className="bg-gray-300 rounded p-2">OK</button>
        <button onClick={onCancel} className="bg-gray-300 rounded p-2">クリア</button>
        <button onClick={onCancel} className="bg-gray-300 rounded p-2">終了</button>
      </div>
    </div>
  );
};

export default ContractForm;
```