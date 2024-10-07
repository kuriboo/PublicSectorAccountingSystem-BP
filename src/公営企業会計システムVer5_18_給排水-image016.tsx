import React from 'react';

// Propsの型定義
interface InformationRegistrationProps {
  title: string;
  receptionNumber: string;
  status: string;
  applicantInfo: {
    location: string;
    address: string;
    name: string;
    phone: string;
  };
  contractorInfo: {
    store: string;
    address: string;
    phone: string;
  };
  onEditClick: () => void;
  onDeleteClick: () => void;
}

// コンポーネントの定義
const InformationRegistration: React.FC<InformationRegistrationProps> = ({
  title,
  receptionNumber,
  status,
  applicantInfo,
  contractorInfo,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div className="p-4 border m-4 rounded bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="mb-4">
        <label>受付番号: </label>
        <span>{receptionNumber}</span>
      </div>
      <div className="mb-4">
        <label>ステータス: </label>
        <span>{status}</span>
      </div>
      <div className="border p-2 mb-4">
        <h2 className="font-semibold">申請者情報</h2>
        <p>施工場所: {applicantInfo.location}</p>
        <p>住所: {applicantInfo.address}</p>
        <p>氏名: {applicantInfo.name}</p>
        <p>電話番号: {applicantInfo.phone}</p>
      </div>
      <div className="border p-2 mb-4">
        <h2 className="font-semibold">工事代理人情報</h2>
        <p>工事店: {contractorInfo.store}</p>
        <p>住所: {contractorInfo.address}</p>
        <p>電話番号: {contractorInfo.phone}</p>
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          onClick={onEditClick}
        >
          明細編集
        </button>
        <button
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          onClick={onDeleteClick}
        >
          行削除
        </button>
      </div>
    </div>
  );
};

export default InformationRegistration;
```