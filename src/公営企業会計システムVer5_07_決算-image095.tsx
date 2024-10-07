// Components/BankInfoForm.tsx

import React from 'react';

interface BankInfoFormProps {
  onSubmit: (data: FormData) => void;
  onClear: () => void;
  onCancel: () => void;
}

interface FormData {
  bankName: string;
  bankBranch: string;
  accountType: string;
  accountNumber: string;
  yuchoNumber: string;
  postOfficeName: string;
}

const BankInfoForm: React.FC<BankInfoFormProps> = ({
  onSubmit,
  onClear,
  onCancel,
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    bankName: '',
    bankBranch: '',
    accountType: '',
    accountNumber: '',
    yuchoNumber: '',
    postOfficeName: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white">
      {/* Label and input for Bank Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">銀行名</label>
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Label and input for Bank Branch */}
      <div>
        <label className="block text-sm font-medium text-gray-700">銀行区分</label>
        <input
          type="text"
          name="bankBranch"
          value={formData.bankBranch}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Label and input for Account Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">預金種別</label>
        <input
          type="text"
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Label and input for Account Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700">口座番号</label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Label and input for Yucho Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700">ゆうちょ記号番号</label>
        <input
          type="text"
          name="yuchoNumber"
          value={formData.yuchoNumber}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Label and input for Post Office Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">郵便局名等</label>
        <input
          type="text"
          name="postOfficeName"
          value={formData.postOfficeName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Action buttons */}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 text-white rounded-md"
        >
          クリア
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          OK
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          キャンセル
        </button>
      </div>
    </form>
  );
};

export default BankInfoForm;
