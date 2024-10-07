import React from 'react';

// プロパティの型定義
type PaymentScheduleProps = {
  scheduledDate: string;
  paymentDueDate: string;
  caseDate: string;
  onDisplayClick: () => void;
  onErrorCheckClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
};

const PaymentSchedule: React.FC<PaymentScheduleProps> = ({
  scheduledDate,
  paymentDueDate,
  caseDate,
  onDisplayClick,
  onErrorCheckClick,
  onOkClick,
  onClearClick,
}) => {
  return (
    <div className="p-4 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-lg font-bold mb-4">給与預り金支払確定</h1>
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold">給与支払確定日</span>
        <span>{scheduledDate}</span>
        <button
          className="ml-4 px-3 py-1 text-white bg-gray-600 rounded"
          onClick={onDisplayClick}
        >
          表示
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold">預り金支払</span>
        <div>
          <p>支払予定日: {paymentDueDate}</p>
          <p>起案日: {caseDate}</p>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-2 text-sm text-blue-800">
        <p>処理概要</p>
        <ul>
          <li>
            預り金支払のもととなる給与支払の確定日を入力し、表示ボタンを押すことにより支払の対象となる起案項目が一覧表示されます。
          </li>
          <li>
            画面一覧より起案項目を選択し、預り金支払予定日および起案日を設定します。
          </li>
          <li>
            画面表示された起案項目に対し、いくつか支払予定日を設定する必要がある場合は、一度OKボタンで登録してから次の預り金支払予定日の設定を行なってください。
          </li>
        </ul>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="px-4 py-2 text-sm text-white bg-gray-600 rounded"
          onClick={onErrorCheckClick}
        >
          エラー確認
        </button>
        <button
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded"
          onClick={onOkClick}
        >
          OK
        </button>
        <button
          className="px-4 py-2 text-sm bg-gray-200 border border-gray-400 rounded"
          onClick={onClearClick}
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default PaymentSchedule;
```