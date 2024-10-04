```tsx
import React from 'react';

// Type definitions for the component props
interface NotificationFormProps {
  applicantInfo: {
    siteLocation: string;
    address: string;
    name: string;
    phoneNumber: string;
  };
  agentInfo: {
    officeNumber: string;
    officeName: string;
    address: string;
    phoneNumber: string;
  };
  adjustmentDate: string;
  paymentDeadline: string;
  summary: string[];
  onEditDetails: () => void;
  onDelete: () => void;
  onEndProcess: () => void;
}

const NotificationForm: React.FC<NotificationFormProps> = ({
  applicantInfo,
  agentInfo,
  adjustmentDate,
  paymentDeadline,
  summary,
  onEditDetails,
  onDelete,
  onEndProcess,
}) => {
  return (
    <div className="border p-4 bg-gray-100">
      <h2 className="text-xl bg-blue-200 text-center p-2 mb-4">納入通知書登録</h2>

      <div className="mb-4">
        <h3 className="text-lg">申請者情報</h3>
        <p>施工場所: {applicantInfo.siteLocation}</p>
        <p>住所: {applicantInfo.address}</p>
        <p>氏名: {applicantInfo.name}</p>
        <p>電話番号: {applicantInfo.phoneNumber}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg">工事代理人情報</h3>
        <p>工事店: {agentInfo.officeNumber} {agentInfo.officeName}</p>
        <p>住所: {agentInfo.address}</p>
        <p>電話番号: {agentInfo.phoneNumber}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg">調定日: {adjustmentDate}</h3>
        <h3 className="text-lg">納付期限: {paymentDeadline}</h3>
      </div>

      <div className="mb-4">
        <h3 className="text-lg">摘要</h3>
        {summary.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="space-x-2">
        <button onClick={onEditDetails} className="bg-blue-500 text-white p-2 rounded">明細編集</button>
        <button onClick={onDelete} className="bg-red-500 text-white p-2 rounded">行削除</button>
        <button onClick={onEndProcess} className="bg-green-500 text-white p-2 rounded">端数処理</button>
      </div>
    </div>
  );
};

export default NotificationForm;
```