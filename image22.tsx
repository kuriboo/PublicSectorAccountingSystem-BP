```tsx
import React from 'react';

// 型定義
type FormData = {
  year: string;
  receptionNumber: string;
  status: string;
  applicantInfo: {
    constructionSite: string;
    address: string;
    name: string;
    phoneNumber: string;
  };
  agentInfo: {
    company: string;
    address: string;
    phoneNumber: string;
  };
  adjustmentDate: string;
  paymentDeadline: string;
  acceptanceDate: string;
  summary: string[];
};

// プロパティ型定義
type NotificationFormProps = {
  formData: FormData;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const NotificationForm: React.FC<NotificationFormProps> = ({
  formData,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 max-w-screen-lg mx-auto bg-white shadow-md rounded">
      {/* タイトルと基本情報 */}
      <h2 className="text-xl font-bold mb-4">納入通知書登録</h2>
      <div className="flex mb-4 space-x-4">
        <div>
          <label className="block font-medium">年度:</label>
          <span>{formData.year}</span>
        </div>
        <div>
          <label className="block font-medium">受付番号:</label>
          <span>{formData.receptionNumber}</span>
        </div>
        <div>
          <label className="block font-medium">ステータス:</label>
          <span>{formData.status}</span>
        </div>
      </div>

      {/* 申請者情報 */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">申請者情報</h3>
        <div className="border p-2">
          <div>施工場所: {formData.applicantInfo.constructionSite}</div>
          <div>住所: {formData.applicantInfo.address}</div>
          <div>氏名: {formData.applicantInfo.name}</div>
          <div>電話番号: {formData.applicantInfo.phoneNumber}</div>
        </div>
      </div>

      {/* 工事代理人情報 */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">工事代理人情報</h3>
        <div className="border p-2">
          <div>工事店: {formData.agentInfo.company}</div>
          <div>住所: {formData.agentInfo.address}</div>
          <div>電話番号: {formData.agentInfo.phoneNumber}</div>
        </div>
      </div>

      {/* 調定日、納付期限、摘要 */}
      <div className="flex mb-2 space-x-4">
        <div>
          <label className="block font-medium">調定日:</label>
          <span>{formData.adjustmentDate}</span>
        </div>
        <div>
          <label className="block font-medium">納付期限:</label>
          <span>{formData.paymentDeadline}</span>
        </div>
        <div>
          <label className="block font-medium">取消日:</label>
          <span>{formData.acceptanceDate}</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium">摘要:</h3>
        <div className="border p-2">
          {formData.summary.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default NotificationForm;
```