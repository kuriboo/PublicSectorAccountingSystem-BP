```tsx
import React from 'react';

// Propsの型定義
type PasswordChangeFormProps = {
  onSubmit: (oldPassword: string, newPassword: string) => void;
  onCancel: () => void;
  onClear: () => void;
  minPasswordLength?: number;
  warningMessage?: string;
};

const PasswordChangeForm: React.FC<PasswordChangeFormProps> = ({
  onSubmit,
  onCancel,
  onClear,
  minPasswordLength = 8,
  warningMessage = 'パスワードには、半角英字と数値を含めて8文字以上を入力してください。',
}) => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // フォームの送信ハンドラー
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword && newPassword.length >= minPasswordLength) {
      onSubmit(oldPassword, newPassword);
    } else {
      alert(warningMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">パスワード変更画面</h2>

      {/* 旧パスワード入力 */}
      <div className="mb-2">
        <label className="block mb-1">旧パスワード</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>

      {/* 新パスワード入力 */}
      <p className="text-red-500 text-sm mb-2">{warningMessage}</p>
      <div className="mb-2">
        <label className="block mb-1">新パスワード</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>

      {/* 新パスワード(確認用)入力 */}
      <div className="mb-4">
        <label className="block mb-1">新パスワード(確認用)</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>

      {/* ボタン */}
      <div className="flex space-x-2">
        <button type="submit" className="bg-gray-300 px-4 py-2 rounded">変更</button>
        <button type="button" onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">キャンセル</button>
      </div>
    </form>
  );
};

export default PasswordChangeForm;
```