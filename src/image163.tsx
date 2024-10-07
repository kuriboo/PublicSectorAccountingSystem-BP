import React from 'react';

type FormProps = {
  accountTypeOptions: string[];
  title: string;
  subtitle?: string;
  accountName: string;
  userName: string;
  accountNumber: string;
  billingNumber: string;
  applicantName: string;
  issueDate: string;
  roundCharacterOptions: string[];
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  accountTypeOptions,
  title,
  subtitle = '',
  accountName,
  userName,
  accountNumber,
  billingNumber,
  applicantName,
  issueDate,
  roundCharacterOptions,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {subtitle && <h3 className="text-lg mb-4">{subtitle}</h3>}

      <form>
        <div className="mb-4">
          <label className="block mb-1">帳票種別</label>
          <select className="w-full border border-gray-300 p-2 rounded">
            {accountTypeOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1">会計名</label>
          <input
            type="text"
            defaultValue={accountName}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">管理者氏名</label>
          <input
            type="text"
            defaultValue={userName}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">口座番号</label>
          <input
            type="text"
            defaultValue={accountNumber}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">未請求書登録番号</label>
          <input
            type="text"
            defaultValue={billingNumber}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">納入者名</label>
          <input
            type="text"
            defaultValue={applicantName}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">丸囲いの文字</label>
          <select className="w-full border border-gray-300 p-2 rounded">
            {roundCharacterOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClear}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            クリア
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
