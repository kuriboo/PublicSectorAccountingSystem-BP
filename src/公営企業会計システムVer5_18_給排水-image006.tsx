import React from 'react';

// TypeScript type definitions for properties
type ConstructionApprovalFormProps = {
  year: string;
  receiptNumber: number;
  receiptDate: string;
  status: string;
  examinationDate: string;
  approvalDate: string;
  applicantInfo: {
    location: string;
    address: string;
    name: string;
    phone: string;
  };
  agentInfo: {
    shopName: string;
    address: string;
    phone: string;
    technician: string;
    representativePhone: string;
    qualifications: string;
    preservationMaterial: string;
  };
  workSummary: {
    usage: string;
    category: string;
    purpose: string;
    waterSupplyMethod: string;
    pressure: string;
    period: string;
  };
};

// Functional component
const ConstructionApprovalForm: React.FC<ConstructionApprovalFormProps> = ({
  year,
  receiptNumber,
  receiptDate,
  status,
  examinationDate,
  approvalDate,
  applicantInfo,
  agentInfo,
  workSummary,
}) => {
  return (
    <div className="p-4 bg-white text-gray-800 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">工事施工承認書作成</h1>
      <div className="mb-4">
        <h2 className="font-bold">年度: {year}</h2>
        <div>
          <span className="font-bold">受付番号:</span> {receiptNumber}
        </div>
        <div>
          <span className="font-bold">受付日:</span> {receiptDate}
        </div>
        <div>
          <span className="font-bold">ステータス:</span> {status}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">受付審査日: {examinationDate}</h2>
        <h2 className="font-bold">承認日: {approvalDate}</h2>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">申請者情報</h2>
        <p>施工場所: {applicantInfo.location}</p>
        <p>住所: {applicantInfo.address}</p>
        <p>氏名: {applicantInfo.name}</p>
        <p>電話番号: {applicantInfo.phone}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">工事代理人情報</h2>
        <p>工事店: {agentInfo.shopName}</p>
        <p>住所: {agentInfo.address}</p>
        <p>電話番号: {agentInfo.phone}</p>
        <p>主任技術者: {agentInfo.technician}</p>
        <p>担当者電話番号: {agentInfo.representativePhone}</p>
        <p>資格: {agentInfo.qualifications}</p>
        <p>保持機材: {agentInfo.preservationMaterial}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">工事の概要</h2>
        <p>用途: {workSummary.usage}</p>
        <p>種別: {workSummary.category}</p>
        <p>建物用途: {workSummary.purpose}</p>
        <p>給水方式: {workSummary.waterSupplyMethod}</p>
        <p>階圧: {workSummary.pressure}</p>
        <p>予定工期: {workSummary.period}</p>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded">終了</button>
      </div>
    </div>
  );
};

export default ConstructionApprovalForm;
```