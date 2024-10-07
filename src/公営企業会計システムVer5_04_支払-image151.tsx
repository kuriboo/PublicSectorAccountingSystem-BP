import React from 'react';

// Props type definition for ReusableComponent
type ReusableComponentProps = {
  title?: string;
  departmentInfo?: string;
  userInfo?: string;
  date?: string;
  depositDateLabel?: string;
  depositDate?: string;
  onOkClick?: () => void;
  onClearClick?: () => void;
  onCloseClick?: () => void;
};

const ReusableComponent: React.FC<ReusableComponentProps> = ({
  title = "銀行別振込一覧表作成",
  departmentInfo = "行政市水道事業会計",
  userInfo = "総務課 予算・会計担当 ぎょうせい太郎",
  date = "平成29年08月17日",
  depositDateLabel = "振込日",
  depositDate = "平成29年08月17日",
  onOkClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="font-sans border border-gray-200 rounded-md w-full max-w-3xl mx-auto shadow-lg p-4">
      <div className="bg-blue-700 text-white p-2 rounded-t-md">
        <h1 className="text-xl">{title}</h1>
      </div>
      <div className="flex justify-end text-sm text-right mt-2">
        <div>
          <div>{departmentInfo}</div>
          <div>{userInfo}</div>
          <div>{date}</div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center text-lg text-blue-800">
        <span className="mr-2">{depositDateLabel}</span>
        <span className="border px-2 py-1">{depositDate}</span>
      </div>
      <div className="mt-10 flex justify-end space-x-4">
        <button 
          onClick={onOkClick}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md shadow-md"
        >
          OK
        </button>
        <button 
          onClick={onClearClick}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md shadow-md"
        >
          クリア
        </button>
        <button 
          onClick={onCloseClick}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md shadow-md"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReusableComponent;
