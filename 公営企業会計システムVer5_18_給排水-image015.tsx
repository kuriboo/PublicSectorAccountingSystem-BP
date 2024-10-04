```tsx
import React from 'react';

interface InvoiceProps {
  year: string;
  city: string;
  projectNumber: string;
  address: string;
  name: string;
  items: { description: string; quantity: number; unitPrice: number }[];
  subtotal: number;
  dateOfIssuance: string;
  dueDate: string;
  projectLocation: string;
  companyInfo: string;
  summary: string;
  payer: string;
}

const Invoice: React.FC<InvoiceProps> = ({
  year,
  city,
  projectNumber,
  address,
  name,
  items,
  subtotal,
  dateOfIssuance,
  dueDate,
  projectLocation,
  companyInfo,
  summary,
  payer,
}) => {
  return (
    <div className="p-6 border border-gray-300">
      <div className="text-center mb-4">
        <p>平成 {year}年度 ぎょうせい市水道事業第 {projectNumber}号</p>
        <p>申請者: {name} 様</p>
        <p>住所: {address}</p>
      </div>
      <table className="min-w-full mb-4">
        <thead>
          <tr>
            <th>納入内訳</th>
            <th>数量</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.quantity * item.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mb-4">
        <p>合計金額: {subtotal}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p>工事事業所</p>
          <p>住所: {projectLocation}</p>
          <p>氏名: {companyInfo}</p>
        </div>
        <div>
          <p>納入期限: 平成 {dateOfIssuance}</p>
          <p>発行年月日: 平成 {dueDate}</p>
          <p>摘要: {summary}</p>
        </div>
      </div>
      <div className="text-center">
        <p>納入場所: {payer}</p>
        <p>指定金融機関</p>
      </div>
    </div>
  );
};

export default Invoice;
```