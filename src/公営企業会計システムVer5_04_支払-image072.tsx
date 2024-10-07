'use client';

import React from 'react';

type DecisionEntryProps = {
  decisionDate?: string;
  meetingDate?: string;
  paymentDate?: string;
  invoiceNumber?: string;
  contractNumber?: string;
  contractName?: string;
  paymentMethod?: string;
  accountType?: string;
  bankName?: string;
  branchName?: string;
  accountNumber?: string;
  beneficiaryName?: string;
  totalAmount?: number;
  baseAmount?: number;
  taxAmount?: number;
};

const DecisionEntry: React.FC<DecisionEntryProps> = ({
  decisionDate = '',
  meetingDate = '',
  paymentDate = '',
  invoiceNumber = '',
  contractNumber = '',
  contractName = '',
  paymentMethod = '',
  accountType = '',
  bankName = '',
  branchName = '',
  accountNumber = '',
  beneficiaryName = '',
  totalAmount = 0,
  baseAmount = 0,
  taxAmount = 0,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl mb-2">支出決定入力</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">決定日:</label>
            <input
              type="text"
              value={decisionDate}
              className="w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">請求書番号:</label>
            <input
              type="text"
              value={invoiceNumber}
              className="w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">契約先:</label>
            <input
              type="text"
              value={contractName}
              className="w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">支払方法:</label>
            <input
              type="text"
              value={paymentMethod}
              className="w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">銀行名:</label>
            <input
              type="text"
              value={bankName}
              className="w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">支店名:</label>
            <input
              type="text"
              value={branchName}
              className="w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">口座番号:</label>
            <input
              type="text"
              value={accountNumber}
              className="w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">合計額:</label>
            <input
              type="text"
              value={totalAmount.toString()}
              className="w-full border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionEntry;
```