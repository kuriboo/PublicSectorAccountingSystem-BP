// Import necessary libraries
import React from 'react';

// Define the Props type for the component
type TaxFormProps = {
  fiscalYear: string;
  startDate: string;
  endDate: string;
  taxOfficeName: string;
  address1: string;
  address2: string;
  phoneArea: string;
  phoneLocal: string;
  phoneSubscriber: string;
  companyName: string;
  companyNameFurigana: string;
  personalOrLegalNumber: string;
  representativeName: string;
  representativeFurigana: string;
  noticeNumber: string;
  usageBusinessNumber: string;
  showTaxAdjustments: boolean;
  submissionFormat: "accounting" | "xml";
};

// TaxForm component
const TaxForm: React.FC<TaxFormProps> = ({
  fiscalYear,
  startDate,
  endDate,
  taxOfficeName,
  address1,
  address2,
  phoneArea,
  phoneLocal,
  phoneSubscriber,
  companyName,
  companyNameFurigana,
  personalOrLegalNumber,
  representativeName,
  representativeFurigana,
  noticeNumber,
  usageBusinessNumber,
  showTaxAdjustments,
  submissionFormat,
}) => {

  return (
    <div className="p-4 border rounded bg-gray-50">
      <div className="text-xl font-bold mb-4">消費税申告書類作成</div>
      <div className="mb-4">
        <label className="block">会計年度:</label>
        <input type="text" value={fiscalYear} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">課税期間:</label>
        <input type="text" value={startDate} readOnly className="border p-2 w-full" />
        <span>~</span>
        <input type="text" value={endDate} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">税務署名:</label>
        <input type="text" value={taxOfficeName} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">納税地1:</label>
        <input type="text" value={address1} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">納税地2:</label>
        <input type="text" value={address2} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">納税地電話番号:</label>
        <div className="flex space-x-2">
          <input type="text" value={phoneArea} readOnly className="border p-2" />
          <input type="text" value={phoneLocal} readOnly className="border p-2" />
          <input type="text" value={phoneSubscriber} readOnly className="border p-2" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block">名前又は屋号:</label>
        <input type="text" value={companyName} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">名称又は屋号フリガナ:</label>
        <input type="text" value={companyNameFurigana} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">個人番号又は法人番号:</label>
        <input type="text" value={personalOrLegalNumber} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">代表者氏名又は氏名:</label>
        <input type="text" value={representativeName} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">代表者氏名フリガナ:</label>
        <input type="text" value={representativeFurigana} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">署番号:</label>
        <input type="text" value={noticeNumber} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label className="block">利用者識別番号:</label>
        <input type="text" value={usageBusinessNumber} readOnly className="border p-2 w-full" />
      </div>

      <div className="mb-4 flex items-center space-x-2">
        <span>指定収入による仕入控除税額の調整:</span>
        <input type="checkbox" checked={showTaxAdjustments} readOnly className="border p-2" />
      </div>

      <div className="mb-4">
        <label className="block">出力形式:</label>
        <select value={submissionFormat} readOnly className="border p-2 w-full">
          <option value="accounting">帳票出力</option>
          <option value="xml">XML出力</option>
        </select>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default TaxForm;
```