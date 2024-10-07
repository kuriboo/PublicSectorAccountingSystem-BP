import React from 'react';
import 'tailwindcss/tailwind.css';

// 型定義
type PaymentDeleteFormProps = {
  year: number;
  slipNumber: number;
  changesCount: number;
  scheduledDeletionDate: string;
  resolutionDate: string;
  invoiceDate: string;
  summary: string;
  approvedAmount: number;
  sections: {
    budgetSection: string;
    budgetDetail: string;
    tax: string;
    totalAmount: number;
    taxAmount: number;
  }[];
};

// コンポーネント定義
const PaymentDeleteForm: React.FC<PaymentDeleteFormProps> = (props) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <div className="text-xl font-bold text-center mb-4">支出削除表</div>
      
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/3 px-2">
          <label className="block">年度</label>
          <input type="text" value={props.year} readOnly className="border w-full p-2" />
        </div>
        <div className="w-full md:w-1/3 px-2">
          <label className="block">伝票番号</label>
          <input type="text" value={props.slipNumber} readOnly className="border w-full p-2" />
        </div>
        <div className="w-full md:w-1/3 px-2">
          <label className="block">変更回数</label>
          <input type="text" value={props.changesCount} readOnly className="border w-full p-2" />
        </div>
      </div>
      
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/3 px-2">
          <label className="block">削除予定日</label>
          <input type="text" value={props.scheduledDeletionDate} readOnly className="border w-full p-2" />
        </div>
        <div className="w-full md:w-1/3 px-2">
          <label className="block">決裁日</label>
          <input type="text" value={props.resolutionDate} readOnly className="border w-full p-2" />
        </div>
        <div className="w-full md:w-1/3 px-2">
          <label className="block">帳票発行日</label>
          <input type="text" value={props.invoiceDate} readOnly className="border w-full p-2" />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block">摘要</label>
        <input type="text" value={props.summary} readOnly className="border w-full p-2" />
      </div>
      
      <div className="mb-4">
        <label className="block">決裁金額</label>
        <input type="text" value={props.approvedAmount.toLocaleString()} readOnly className="border w-full p-2" />
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">予算部</th>
              <th className="px-4 py-2">予算細節</th>
              <th className="px-4 py-2">税</th>
              <th className="px-4 py-2">税込金額</th>
              <th className="px-4 py-2">消費税込額</th>
            </tr>
          </thead>
          <tbody>
            {props.sections.map((section, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{section.budgetSection}</td>
                <td className="border px-4 py-2">{section.budgetDetail}</td>
                <td className="border px-4 py-2">{section.tax}</td>
                <td className="border px-4 py-2">{section.totalAmount.toLocaleString()}</td>
                <td className="border px-4 py-2">{section.taxAmount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">OK</button>
        <button className="bg-gray-300 text-black py-2 px-4 rounded mr-2">クリア</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default PaymentDeleteForm;
```