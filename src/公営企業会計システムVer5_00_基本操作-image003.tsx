// StickyNote.tsx
import React from 'react';

// 型定義
interface StickyNoteProps {
  title: string;
  content: string;
  color?: string;
}

export const StickyNote: React.FC<StickyNoteProps> = ({ title, content, color = 'bg-yellow-200' }) => {
  return (
    <div className={`w-64 p-4 ${color} m-2 rounded shadow-md`}>
      {/* タイトル */}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      {/* コンテンツ */}
      <p className="text-sm">{content}</p>
    </div>
  );
};

// 使用例
// <StickyNote title="注意" content="このコンポーネントは再利用可能です。" color="bg-pink-200" />
// <StickyNote title="タスク一覧" content="1. 対応中\n2. 完了" />

// デスクトップコンポーネント
const Desktop: React.FC = () => {
  return (
    <div className="flex flex-wrap p-4 bg-blue-500 h-screen">
      <StickyNote title="Meeting" content="Daily standup at 10am" color="bg-red-200" />
      <StickyNote title="Reminder" content="Submit report by EOD" color="bg-green-200" />
      <StickyNote title="Link" content="https://example.com" color="bg-blue-200" />
    </div>
  );
};

export default Desktop;




