import { FC } from 'react';

// TypeScript 型定義
interface JVRegistrationProps {
  year: string;
  acceptanceDiv: string;
  jvCode: string;
  receptionNo: string;
  affairName: string;
  businessType: string;
  jvName: string;
  jvAbbreviation: string;
  onConfirm: () => void;
  onCancel: () => void;
}

// Next.js + TypeScript コンポーネント
const JVRegistration: FC<JVRegistrationProps> = ({
  year,
  acceptanceDiv,
  jvCode,
  receptionNo,
  affairName,
  businessType,
  jvName,
  jvAbbreviation,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">特定JV登録</h2>

      <div className="mb-4">
        <label className="block font-semibold">年度:</label>
        <input
          type="text"
          value={year}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">受付区分:</label>
        <input
          type="text"
          value={acceptanceDiv}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">JVコード:</label>
        <input
          type="text"
          value={jvCode}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">受付番号:</label>
        <input
          type="text"
          value={receptionNo}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">件名:</label>
        <input
          type="text"
          value={affairName}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">業種:</label>
        <input
          type="text"
          value={businessType}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">JV名称:</label>
        <input
          type="text"
          value={jvName}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">JV略名:</label>
        <input
          type="text"
          value={jvAbbreviation}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default JVRegistration;
