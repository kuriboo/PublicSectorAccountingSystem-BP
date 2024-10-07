import React from 'react';

// TypeScriptの型定義
type DocumentComponentProps = {
  title: string;
  organization: string;
  userName: string;
  date: string;
  year: string;
  onOk: () => void;
  onExit: () => void;
};

const DocumentComponent: React.FC<DocumentComponentProps> = ({
  title,
  organization,
  userName,
  date,
  year,
  onOk,
  onExit,
}) => {
  return (
    <div className="p-4">
      {/* ヘッダー */}
      <header className="flex justify-between items-center bg-blue-200 p-2 rounded-t-md">
        <h1 className="text-xl">{title}</h1>
        <div>
          <p>{organization}</p>
          <p>{userName}</p>
          <p>{date}</p>
        </div>
      </header>

      {/* 内容 */}
      <div className="mt-4">
        <div className="flex items-center mb-4">
          <label className="mr-2">年度: </label>
          <span className="border px-2 py-1">{year}</span>
        </div>
        <div className="border p-4 mt-4">
          <p>指定した処理年度の資本的収支明細書の名称を複写処理します。</p>
        </div>
      </div>

      {/* フッター */}
      <footer className="flex justify-end space-x-4 mt-4">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onOk}>OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onExit}>終了</button>
      </footer>
    </div>
  );
};

export default DocumentComponent;

