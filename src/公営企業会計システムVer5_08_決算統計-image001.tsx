import React from 'react';

// プロパティの型定義
interface CustomComponentProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* 画像部分 */}
      <div className="bg-cover bg-center h-56" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      <div className="p-4">
        {/* タイトル */}
        <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
        {/* 説明文 */}
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CustomComponent;
```