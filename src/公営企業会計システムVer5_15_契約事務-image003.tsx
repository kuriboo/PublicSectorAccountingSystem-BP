import React from 'react';

type PartnerRegistrationProps = {
  updatePartner: boolean;
  updatePartnerRegisterNumber: boolean;
  partnerName: string;
  businessName: string;
  representativeName: string;
  changeDate: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const PartnerRegistration: React.FC<PartnerRegistrationProps> = ({
  updatePartner,
  updatePartnerRegisterNumber,
  partnerName,
  businessName,
  representativeName,
  changeDate,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md max-w-md mx-auto bg-white">
      <h1 className="text-lg font-bold mb-4">会計リンクジ - 相手先登録</h1>

      <div className="mb-4">
        <label className="mr-4">相手先更新</label>
        <span className="mr-4">
          <input type="radio" checked={updatePartner} readOnly className="mr-1" />有
        </span>
        <span>
          <input type="radio" checked={!updatePartner} readOnly className="mr-1" />無
        </span>
      </div>

      <div className="mb-4">
        <label className="mr-4">相手先適格登録番号更新</label>
        <span className="mr-4">
          <input
            type="radio"
            checked={updatePartnerRegisterNumber}
            readOnly
            className="mr-1"
          />
          有
        </span>
        <span>
          <input
            type="radio"
            checked={!updatePartnerRegisterNumber}
            readOnly
            className="mr-1"
          />
          無
        </span>
      </div>

      <div className="mb-4">
        <label className="mr-4">相手先</label>
        <input
          type="text"
          value={partnerName}
          readOnly
          className="border rounded px-2"
        />
      </div>

      <div className="mb-4">
        <label className="mr-4">業者</label>
        <input
          type="text"
          value={businessName}
          readOnly
          className="border rounded px-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="mr-4">代表者</label>
        <input
          type="text"
          value={representativeName}
          readOnly
          className="border rounded px-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="mr-4">変更届出日</label>
        <input
          type="text"
          value={changeDate}
          readOnly
          className="border rounded px-2 w-full"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
        
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          クリア
        </button>
        
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PartnerRegistration;
```