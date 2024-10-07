// components/PaymentRegistrationForm.tsx

import React from 'react';

type PaymentRegistrationFormProps = {
  accountType: string;
  accountDescription: string;
  processDate: string;
  onImport: () => void;
  onClose: () => void;
};

const PaymentRegistrationForm: React.FC<PaymentRegistrationFormProps> = ({
  accountType,
  accountDescription,
  processDate,
  onImport,
  onClose,
}) => {
  return (
    <div className="p-4 max-w-lg m-auto shadow-lg rounded bg-white">
      <h2 className="text-lg font-bold mb-2 text-center bg-blue-200 rounded py-2">
        公共料金支払データ登録
      </h2>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="font-bold">会計区分</span>
          <div className="flex items-center">
            <span className="border px-2 py-1">{accountType}</span>
            <span className="ml-2">{accountDescription}</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="font-bold">処理日</span>
          <span className="border px-2 py-1">{processDate}</span>
        </div>
      </div>
      <div className="border border-blue-400 bg-blue-50 p-4 mb-4">
        公共料金事前通知サービスで作成したファイルを取り込み、支払データを一括登録します。
        取込ボタンを押し、ファイルを選択してください。
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onImport}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          取込
        </button>
        <button
          onClick={onClose}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentRegistrationForm;
