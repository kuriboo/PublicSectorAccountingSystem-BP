import React from 'react';

// Define the props type
type RegistrationFormProps = {
  title: string;
  date: string;
  userName: string;
  department: string;
  onBrowseClick: () => void;
  onFinishClick: () => void;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  title,
  date,
  userName,
  department,
  onBrowseClick,
  onFinishClick,
}) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white p-2 rounded-t-lg">
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>
            {department} {userName} {date}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="p-4 bg-gray-100 border rounded-md">
          <p className="mb-2">
            水道料金システムから出力したCSVファイルを参照し、調定収納データを一括登録します。
          </p>
          <p>参照ボタンを押し、CSVファイルを選択してください。</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          onClick={onBrowseClick}
        >
          参照
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          onClick={onFinishClick}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
