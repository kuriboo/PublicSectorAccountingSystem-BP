// PasswordPolicyForm.tsx
import React from 'react';

// Props type definition
type PasswordPolicyFormProps = {
  validityPeriod: number;
  changeNotificationDays: number;
  minLength: number;
  requireComplexity: boolean;
  onValidityPeriodChange: (value: number) => void;
  onChangeNotificationDaysChange: (value: number) => void;
  onMinLengthChange: (value: number) => void;
  onRequireComplexityChange: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
};

// PasswordPolicyForm Component
const PasswordPolicyForm: React.FC<PasswordPolicyFormProps> = ({
  validityPeriod,
  changeNotificationDays,
  minLength,
  requireComplexity,
  onValidityPeriodChange,
  onChangeNotificationDaysChange,
  onMinLengthChange,
  onRequireComplexityChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">パスワードポリシーマスタ</h2>

      <div className="mb-4">
        <label className="block mb-1">有効期限</label>
        <input
          type="number"
          value={validityPeriod}
          onChange={(e) => onValidityPeriodChange(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />
        <p className="text-sm text-gray-600">パスワード変更後の有効期限を設定します。0日間を設定した場合、有効期限のチェックを行いません。</p>
      </div>

      <div className="mb-4">
        <label className="block mb-1">変更催促</label>
        <input
          type="number"
          value={changeNotificationDays}
          onChange={(e) => onChangeNotificationDaysChange(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />
        <p className="text-sm text-gray-600">有効期限までの日数が指定した日数より少なくなった際、パスワードの変更を促すメッセージを表示します。</p>
      </div>

      <div className="mb-4">
        <label className="block mb-1">複雑さ</label>
        <input
          type="checkbox"
          checked={requireComplexity}
          onChange={(e) => onRequireComplexityChange(e.target.checked)}
          className="mr-2"
        />
        <span>半角英字と数字の混合を必須とする。</span>
      </div>

      <div className="mb-4">
        <label className="block mb-1">桁数</label>
        <input
          type="number"
          value={minLength}
          onChange={(e) => onMinLengthChange(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />
        <p className="text-sm text-gray-600">パスワードの最低桁数を入力します。桁数を0で設定した場合、桁数のチェックは行いません。</p>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">クリア</button>
      </div>
    </div>
  );
}

export default PasswordPolicyForm;
