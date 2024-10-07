import React from 'react';

type BusinessRegistrationProps = {
  fiscalYear: string;
  receiptDivision: string;
  businessName: string;
  abbreviation: string;
  searchKey: string;
  details: {
    officeDivision: string;
    contractPartner: string;
    district: string;
    phoneNumber: string;
    linkCode: string;
    linkName: string;
    postalCode: string;
    address: string;
    faxNumber: string;
    executive: string;
    contactPerson: string;
    email: string;
  };
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BusinessRegistration: React.FC<BusinessRegistrationProps> = ({
  fiscalYear,
  receiptDivision,
  businessName,
  abbreviation,
  searchKey,
  details,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-center mb-4">業者登録</h1>
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={fiscalYear}
          className="w-full mt-1 border-gray-300 rounded shadow-sm"
          readOnly
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700">受付区分</label>
          <input
            type="text"
            value={receiptDivision}
            className="w-full mt-1 border-gray-300 rounded shadow-sm"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">業者名</label>
          <input
            type="text"
            value={businessName}
            className="w-full mt-1 border-gray-300 rounded shadow-sm"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">略名</label>
          <input
            type="text"
            value={abbreviation}
            className="w-full mt-1 border-gray-300 rounded shadow-sm"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">検索力</label>
          <input
            type="text"
            value={searchKey}
            className="w-full mt-1 border-gray-300 rounded shadow-sm"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">明細編集</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">営業所区分</label>
            <input
              type="text"
              value={details.officeDivision}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">契約先</label>
            <input
              type="text"
              value={details.contractPartner}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">地区</label>
            <input
              type="text"
              value={details.district}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">電話番号</label>
            <input
              type="text"
              value={details.phoneNumber}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">リンク相手先コード</label>
            <input
              type="text"
              value={details.linkCode}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">リンク相手先名称</label>
            <input
              type="text"
              value={details.linkName}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">郵便番号</label>
            <input
              type="text"
              value={details.postalCode}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">住所</label>
            <input
              type="text"
              value={details.address}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">FAX番号</label>
            <input
              type="text"
              value={details.faxNumber}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">代表者役職</label>
            <input
              type="text"
              value={details.executive}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">担当者役職</label>
            <input
              type="text"
              value={details.contactPerson}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Eメール</label>
            <input
              type="email"
              value={details.email}
              className="w-full mt-1 border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default BusinessRegistration;
