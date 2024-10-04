```tsx
import React from 'react';

// プロパティの型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// 再利用可能なCardコンポーネント
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* 画像表示部分 */}
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        {/* タイトル表示部分 */}
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* 説明文表示部分 */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
```