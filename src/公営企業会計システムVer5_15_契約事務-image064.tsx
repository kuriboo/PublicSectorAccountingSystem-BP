import React from 'react';

// 定義プロパティの型
type NoticeProps = {
  title: string;
  year: string;
  section: string;
  documentNumber: string[];
  sender: string[];
  notificationText: string[];
  remarksText: string[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネント定義
const NoticeComponent: React.FC<NoticeProps> = ({
  title,
  year,
  section,
  documentNumber,
  sender,
  notificationText,
  remarksText,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2">年度</span>
        <input type="text" value={year} readOnly className="border rounded p-1 mr-4" />
        <span className="mr-2">受付区分</span>
        <input type="text" value={section} readOnly className="border rounded p-1" />
      </div>
      <div className="mb-4">
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">文書番号</th>
              <th className="border px-2 py-1">差出人</th>
            </tr>
          </thead>
          <tbody>
            {documentNumber.map((doc, index) => (
              <tr key={index}>
                <td className="border px-2 py-1">{doc}</td>
                <td className="border px-2 py-1">{sender[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <div>通知文</div>
        <textarea
          value={notificationText.join('\n')}
          readOnly
          className="w-full border rounded p-2 mt-2"
          rows={3}
        />
      </div>
      <div className="mb-4">
        <div>備考</div>
        <textarea
          value={remarksText.join('\n')}
          readOnly
          className="w-full border rounded p-2 mt-2"
          rows={3}
        />
      </div>
      <div className="flex justify-end">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded mr-2">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 py-1 px-4 rounded mr-2">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white py-1 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default NoticeComponent;
