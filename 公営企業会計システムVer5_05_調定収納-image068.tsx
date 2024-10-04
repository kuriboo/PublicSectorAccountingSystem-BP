```tsx
import React from 'react';

// TypeScriptの型定義
interface Props {
  className?: string;
  onConfirm: () => void;
  onSearch: () => void;
  onCancel: () => void;
}

// コンポーネントの定義
const RegistrationForm: React.FC<Props> = ({ className, onConfirm, onSearch, onCancel }) => {
  return (
    <div className={`p-4 ${className}`}>
      {/* タイトル */}
      <h2 className="text-xl font-bold mb-4">還付科目登録</h2>
      
      {/* フォーム内容 */}
      <div className="space-y-4">
        <div className="flex items-center">
          <label className="w-20 text-right mr-4">節</label>
          <input className="border p-2 flex-1" type="text" placeholder="06205001" />
        </div>
        
        <div className="flex items-center">
          <label className="w-20 text-right mr-4">細節</label>
          <input className="border p-2 flex-1" type="text" placeholder="0001" />
        </div>
        
        <div className="flex items-center">
          <label className="w-20 text-right mr-4">明細</label>
          <input className="border p-2 flex-1" type="text" placeholder="0001" />
        </div>
        
        <div className="flex items-center">
          <label className="w-20 text-right mr-4">摘要</label>
          <input className="border p-2 flex-1" type="text" placeholder="説明を入力" />
        </div>
      </div>
      
      {/* ボタン群 */}
      <div className="mt-6 space-x-2">
        <button onClick={onConfirm} className="bg-gray-300 p-2 rounded">行確定</button>
        <button onClick={onSearch} className="bg-gray-300 p-2 rounded">科目検索</button>
        <button onClick={onCancel} className="bg-gray-300 p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
```