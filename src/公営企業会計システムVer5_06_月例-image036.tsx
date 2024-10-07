import React from 'react';

// 定義されたプロパティの型
interface BudgetFormProps {
  creationDate: string;
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({ creationDate, onOkClick, onClearClick, onExitClick }) => {
  return (
    <div className="w-full h-full bg-white">
      {/* ヘッダー */}
      <header className="flex justify-between items-center bg-blue-500 text-white p-4">
        <h1 className="text-lg">資金予算表作成</h1>
        <div className="text-right">
          <p>行政市水道事業会計</p>
          <p>総務課 予算・会計担当 ぎょうせいたろう</p>
          <p>{creationDate}</p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="p-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-blue-500 font-bold">作表日</span>
            <span className="border border-blue-300 ml-2 p-1">{creationDate}</span>
          </div>
        </div>
      </main>

      {/* フッターのボタン */}
      <footer className="flex justify-end space-x-2 p-4">
        <button onClick={onOkClick} className="btn">OK</button>
        <button onClick={onClearClick} className="btn">クリア</button>
        <button onClick={onExitClick} className="btn">終了</button>
      </footer>

      <style jsx>{`
        .btn {
          @apply bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded shadow;
        }
      `}</style>
    </div>
  );
}

export default BudgetForm;