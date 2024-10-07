// components/ProgressManagementInput.tsx

import React from 'react';

type ProgressManagementInputProps = {
  year: number;
  receptionNumber: string;
  status: string;
  place: string;
  address: string;
  name: string;
  phoneNumber: string;
  receptionDate: string;
  inspectionDate: string;
  completionDate?: string;
  approvalDate?: string;
};

const ProgressManagementInput: React.FC<ProgressManagementInputProps> = ({
  year,
  receptionNumber,
  status,
  place,
  address,
  name,
  phoneNumber,
  receptionDate,
  inspectionDate,
  completionDate,
  approvalDate,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h1 className="text-lg font-bold mb-4">進捗管理入力</h1>
      <div className="mb-4 p-2 bg-white border rounded">
        <h2 className="font-semibold">申請者情報</h2>
        <div>施工場所: {place}</div>
        <div>住所: {address}</div>
        <div>氏名: {name}</div>
        <div>電話番号: {phoneNumber}</div>
      </div>
      <div className="mb-4 p-2 bg-white border rounded">
        <h2 className="font-semibold">受付情報</h2>
        <div>受付日: {receptionDate}</div>
        <div>受付番号: {receptionNumber}</div>
        <div>ステータス: {status}</div>
      </div>
      <div className="mb-4 p-2 bg-white border rounded">
        <h2 className="font-semibold">完納日・承認日設定</h2>
        <div>完納日: {completionDate ?? '未設定'}</div>
        <div>承認日: {approvalDate ?? '未設定'}</div>
      </div>
    </div>
  );
};

export default ProgressManagementInput;
```

```tsx
// pages/index.tsx

import React from 'react';
import ProgressManagementInput from '../components/ProgressManagementInput';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <ProgressManagementInput
        year={29}
        receptionNumber="4"
        status="収納済"
        place="東村山市辺町以下"
        address="東村山市辺町以下"
        name="行政太郎"
        phoneNumber="未掲載"
        receptionDate="平成30年2月27日"
        inspectionDate="平成30年2月27日"
      />
    </div>
  );
};

export default Home;
```