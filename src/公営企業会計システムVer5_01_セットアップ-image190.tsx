import React, { useState } from 'react';

// 型定義
interface PasswordPolicyProps {
  expiryDays?: number;
  reminderDays?: number;
  minLength?: number;
  requireComplexity?: boolean;
}

// Tailwind CSSを使用したスタイル付きコンポーネント
const PasswordPolicy: React.FC<PasswordPolicyProps> = ({
  expiryDays = 5,
  reminderDays = 0,
  minLength = 5,
  requireComplexity = false,
}) => {
  // ステート
  const [expiry, setExpiry] = useState(expiryDays);
  const [reminder, setReminder] = useState(reminderDays);
  const [length, setLength] = useState(minLength);
  const [complexity, setComplexity] = useState(requireComplexity);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-xl mb-4">パスワードポリシーマスタ</h1>

      <div className="mb-6">
        <label className="flex justify-between items-center mb-1">
          有効期限:
          <input
            type="number"
            value={expiry}
            onChange={(e) => setExpiry(Number(e.target.value))}
            className="ml-2 border rounded p-1"
          />
          日
        </label>
        <p className="text-sm text-gray-600">
          パスワード変更後の有効期限を設定します。0日間を設定した場合、有効期限のチェックを行いません。
        </p>
      </div>

      <div className="mb-6">
        <label className="flex justify-between items-center mb-1">
          変更催促:
          <input
            type="number"
            value={reminder}
            onChange={(e) => setReminder(Number(e.target.value))}
            className="ml-2 border rounded p-1"
          />
          日前
        </label>
        <p className="text-sm text-gray-600">
          有効期限までの日数が指定した日数より少なくなった際、パスワードの変更を促すメッセージを表示します。
        </p>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={complexity}
            onChange={(e) => setComplexity(e.target.checked)}
            className="mr-2"
          />
          半角英字と数値の混合を必須とする。
        </label>
      </div>

      <div className="mb-6">
        <label className="flex justify-between items-center mb-1">
          桁数:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="ml-2 border rounded p-1"
          />
          桁以上
        </label>
        <p className="text-sm text-gray-600">
          パスワードの最低桁数を入力します。桁数を0で設定した場合、桁数のチェックは行いません。
        </p>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default PasswordPolicy;
```