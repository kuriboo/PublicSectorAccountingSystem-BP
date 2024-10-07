import { useState } from 'react';

// Define the prop types for the component
interface SettingsFormProps {
  onSubmit: (formData: { code: string; details: string }) => void;
  initialCode?: string;
  initialDetails?: string;
}

const SettingsForm: React.FC<SettingsFormProps> = ({
  onSubmit,
  initialCode = '',
  initialDetails = '',
}) => {
  const [code, setCode] = useState<string>(initialCode);
  const [details, setDetails] = useState<string>(initialDetails);

  return (
    <div className="p-4 border rounded-md shadow-md space-y-4">
      {/* Radio buttons for selection */}
      <div className="flex items-center space-x-4">
        <label>
          <input type="radio" name="action" value="register" className="mr-1" />
          登録
        </label>
        <label>
          <input type="radio" name="action" value="edit" className="mr-1" />
          訂正
        </label>
      </div>

      {/* Code input section */}
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium">自由設定項目コード</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="block w-full p-2 border rounded-md"
          />
        </div>

        {/* Details input section */}
        <div>
          <label className="block text-sm font-medium">内容</label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="block w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Buttons for form actions */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => alert('前データ')}
          className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
        >
          前データ
        </button>
        <button
          type="button"
          onClick={() => alert('次データ')}
          className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
        >
          次データ
        </button>
        <button
          type="submit"
          onClick={() => onSubmit({ code, details })}
          className="px-4 py-2 border rounded-md text-white bg-blue-500 hover:bg-blue-600"
        >
          OK
        </button>
        <button
          type="button"
          onClick={() => {
            setCode('');
            setDetails('');
          }}
          className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={() => alert('キャンセル')}
          className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default SettingsForm;
