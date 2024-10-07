import React from 'react';

// プロパティの型定義
type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    className={`bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded ${className}`}
    onClick={onClick}
  >
    {label}
  </button>
);

// ダイアログのプロパティの型定義
type DialogProps = {
  title: string;
  message: string;
  onOk: () => void;
};

// ダイアログコンポーネント
const Dialog: React.FC<DialogProps> = ({ title, message, onOk }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{message}</p>
      <Button label="OK" onClick={onOk} className="bg-blue-500 text-white" />
    </div>
  </div>
);

export default function MainMenu() {
  // ダイアログの表示状態を管理するフック
  const [dialogVisible, setDialogVisible] = React.useState(false);

  return (
    <div className="p-4">
      {/* メインメニュータイトル */}
      <h1 className="text-3xl font-bold mb-6">メインメニュー</h1>

      {/* アナウンス */}
      <section className="mb-6 p-4 border rounded shadow">
        <p className="text-sm mb-2">今月の会計締処理は〇日（△）となります。</p>
        <p className="text-sm">電気設備点検を以下の日程で実施いたします。</p>
      </section>

      {/* ボタン群 */}
      <div className="grid grid-cols-4 gap-4">
        <Button label="支 払" onClick={() => setDialogVisible(true)} />
        <Button label="調定・収納" onClick={() => setDialogVisible(true)} />
        <Button label="日 例" onClick={() => setDialogVisible(true)} />
        <Button label="練繰予算" onClick={() => setDialogVisible(true)} />
      </div>

      {/* ダイアログの表示制御 */}
      {dialogVisible && (
        <Dialog
          title="公営企業会計パッケージ"
          message="共有フォルダが開けません。接続先へのネットワーク接続を確認してください。"
          onOk={() => setDialogVisible(false)}
        />
      )}
    </div>
  );
}
