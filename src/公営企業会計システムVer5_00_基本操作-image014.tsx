import React, { useState } from 'react';

// Propsの型定義
type PasswordChangeFormProps = {
  onSubmit: (oldPassword: string, newPassword: string, confirmPassword: string) => void;
  onClear: () => void;
  onCancel: () => void;
};

const PasswordChangeForm: React.FC<PasswordChangeFormProps> = ({ onSubmit, onClear, onCancel }) => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // 送信ボタンのクリックハンドラ
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(oldPassword, newPassword, confirmPassword);
  };

  // クリアボタンのクリックハンドラ
  const handleClear = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <label className="block text-lg font-bold mb-1">旧パスワード</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
      </div>
      <p className="text-red-500 text-sm">パスワードには、半角英字と数値を含めて0文字以上を入力してください。</p>
      <div>
        <label className="block text-lg font-bold mb-1">新パスワード</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
      </div>
      <div>
        <label className="block text-lg font-bold mb-1">新パスワード（確認用）</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
      </div>
      <div className="flex space-x-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          変更
        </button>
        <button type="button" onClick={handleClear} className="px-4 py-2 bg-gray-500 text-white rounded">
          クリア
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded">
          キャンセル
        </button>
      </div>
    </form>
  );
};

export default PasswordChangeForm;
