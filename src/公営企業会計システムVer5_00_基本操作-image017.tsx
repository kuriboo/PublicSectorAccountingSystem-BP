import React from 'react';

// TypeScriptの型定義
interface NotificationProps {
  title: string;
  date: string;
  notices: string[];
  onAddClick: () => void;
  onDeleteClick: () => void;
  onSubmit: (content: string) => void;
}

const NotificationComponent: React.FC<NotificationProps> = ({
  title,
  date,
  notices,
  onAddClick,
  onDeleteClick,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = React.useState('');

  // 入力変更時の処理
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // フォーム送信時の処理
  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className="p-4 bg-gray-50">
      <header className="flex justify-between bg-blue-100 p-2">
        <h1 className="text-lg">{title}</h1>
        <span>{date}</span>
      </header>
      
      <div className="bg-white p-4 border mt-2">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2">お知らせ内容</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{notice}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-2">
          <button onClick={onAddClick} className="mr-2 p-2 bg-pink-200 rounded hover:bg-pink-300">
            行追加
          </button>
          <button onClick={onDeleteClick} className="p-2 bg-pink-200 rounded hover:bg-pink-300">
            行削除
          </button>
        </div>
      </div>

      <footer className="bg-gray-100 p-4 mt-2">
        <div className="flex items-center mb-2">
          <label className="mr-2" htmlFor="content">内容:</label>
          <input
            id="content"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-grow p-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={handleSubmit} className="mr-2 p-2 bg-gray-300 rounded hover:bg-gray-400">
            OK
          </button>
          <button className="mr-2 p-2 bg-gray-300 rounded hover:bg-gray-400">
            クリア
          </button>
          <button className="p-2 bg-gray-300 rounded hover:bg-gray-400">
            終了
          </button>
        </div>
      </footer>
    </div>
  );
};

export default NotificationComponent;
```