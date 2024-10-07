// components/AccountingForm.tsx
import React from 'react';

interface AccountingFormProps {
  aggregationNumber?: number;
  itemName?: string;
  cfDivision?: string;
  amountFormatOptions?: string[];
  revisionOptions?: string[];
  intent?: number;
  showSlipOutput?: boolean;
  destinations?: { id: string; division: string }[];
  accounts?: { 
    selfAccount: string; 
    accountAbbreviation: string; 
    counterpartAccount: string; 
    credit: string; 
    taxDivision: string; 
    trackingFlag: string; 
    remarks?: string;
  }[];
}

const AccountingForm: React.FC<AccountingFormProps> = ({
  aggregationNumber,
  itemName,
  cfDivision,
  amountFormatOptions = [],
  revisionOptions = [],
  intent,
  showSlipOutput = true,
  destinations = [],
  accounts = []
}) => {
  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <div>
          <label>集計番号</label>
          <input type="number" value={aggregationNumber} className="border p-1" readOnly />
        </div>
        <div>
          <label>項目名称1</label>
          <input type="text" value={itemName} className="border p-1 w-full" readOnly />
        </div>
        <div>
          <label>CF区分</label>
          <input type="text" value={cfDivision} className="border p-1 w-full" readOnly />
        </div>
        <div>
          <label>金額印字区分</label>
          <select className="border p-1 w-full">
            {amountFormatOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label>改行区分</label>
          <select className="border p-1 w-full">
            {revisionOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label>インデント</label>
          <input type="number" value={intent} className="border p-1" readOnly />
        </div>
        <div>
          <input type="checkbox" checked={!showSlipOutput} readOnly />
          <label>帳票出力無し</label>
        </div>
      </div>
      <div className="border p-2 mb-4">
        <h2>集計先行番号</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">集計先行番号</th>
              <th className="border px-4 py-2">加減区分</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((dest, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{dest.id}</td>
                <td className="border px-4 py-2">{dest.division}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border p-2">
        <h2>集計科目</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">自科目</th>
              <th className="border px-4 py-2">科目略名</th>
              <th className="border px-4 py-2">相手先科目</th>
              <th className="border px-4 py-2">貸借</th>
              <th className="border px-4 py-2">税区</th>
              <th className="border px-4 py-2">追跡フラグ</th>
              <th className="border px-4 py-2">備考</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{acc.selfAccount}</td>
                <td className="border px-4 py-2">{acc.accountAbbreviation}</td>
                <td className="border px-4 py-2">{acc.counterpartAccount}</td>
                <td className="border px-4 py-2">{acc.credit}</td>
                <td className="border px-4 py-2">{acc.taxDivision}</td>
                <td className="border px-4 py-2">{acc.trackingFlag}</td>
                <td className="border px-4 py-2">{acc.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountingForm;
```