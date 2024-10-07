import React, { FC } from 'react';

interface AssetRegistrationFormProps {
  jobNumber: string;
  accountYear: string;
  section: string;
  subSection: string;
  item: string;
  assetName: string;
  status: string;
  location: string;
  installationDate: string;
  acquisitionDate: string;
  acquisitionAmount: number;
  depreciationYears: number;
  limitAmount: number;
  reserveAmount: number;
  onFormSubmit: () => void;
  onFormClear: () => void;
  onFormClose: () => void;
}

const AssetRegistrationForm: FC<AssetRegistrationFormProps> = ({
  jobNumber,
  accountYear,
  section,
  subSection,
  item,
  assetName,
  status,
  location,
  installationDate,
  acquisitionDate,
  acquisitionAmount,
  depreciationYears,
  limitAmount,
  reserveAmount,
  onFormSubmit,
  onFormClear,
  onFormClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">取得資産工事台帳登録</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* Job Information */}
          <div>
            <label className="block text-sm font-medium">
              工事番号
              <input type="text" value={jobNumber} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium">
              工事会計年度
              <input type="text" value={accountYear} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>

          {/* Section Information */}
          <div>
            <label className="block text-sm font-medium">
              節
              <input type="text" value={section} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium">
              細節
              <input type="text" value={subSection} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium">
              明細
              <input type="text" value={item} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>

          {/* Asset Information */}
          <div>
            <label className="block text-sm font-medium">
              資産名称
              <input type="text" value={assetName} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium">
              異動摘要
              <input type="text" value={status} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>

          {/* Location Information */}
          <div>
            <label className="block text-sm font-medium">
              所在地
              <input type="text" value={location} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>

          {/* Dates */}
          <div>
            <label className="block text-sm font-medium">
              施工年月日
              <input type="text" value={installationDate} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium">
              取得年月日
              <input type="text" value={acquisitionDate} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>

          {/* Financial Information */}
          <div>
            <label className="block text-sm font-medium">
              取得価額
              <input type="text" value={acquisitionAmount.toLocaleString()} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium">
              耐用年数
              <input type="text" value={depreciationYears.toString()} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium">
              限度額
              <input type="text" value={limitAmount.toLocaleString()} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium">
              償却限度額
              <input type="text" value={reserveAmount.toLocaleString()} readOnly className="mt-1 block w-full rounded border-gray-300" />
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <button type="button" onClick={onFormSubmit} className="bg-blue-500 text-white px-3 py-2 rounded">
            OK
          </button>
          <button type="button" onClick={onFormClear} className="bg-gray-500 text-white px-3 py-2 rounded">
            クリア
          </button>
          <button type="button" onClick={onFormClose} className="bg-red-500 text-white px-3 py-2 rounded">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssetRegistrationForm;
