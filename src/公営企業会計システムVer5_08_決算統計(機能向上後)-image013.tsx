// LogoComponent.tsx
import React from 'react';

// TypeScriptの型定義
type LogoComponentProps = {
  imageSrc: string; // ロゴの画像ソース
  altText?: string; // 画像の代替テキスト
  className?: string; // Tailwind用の追加クラス
};

const LogoComponent: React.FC<LogoComponentProps> = ({
  imageSrc,
  altText = 'Logo', // デフォルトの代替テキスト
  className = '', // デフォルトのクラス
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 画像部分 */}
      <img src={imageSrc} alt={altText} className="w-16 h-16 mr-4" />
      {/* テキスト部分 */}
      <div>
        <p className="text-lg font-bold">株式会社ぎょうせい</p>
        <p className="text-sm text-gray-600">システム事業部</p>
      </div>
    </div>
  );
};

export default LogoComponent;

```tsx
// 使用例: SomePage.tsx
import React from 'react';
import LogoComponent from './LogoComponent';

const SomePage: React.FC = () => {
  return (
    <div className="p-8">
      <LogoComponent
        imageSrc="/path/to/logo.png"
        altText="株式会社ぎょうせい ロゴ"
        className="my-custom-class"
      />
    </div>
  );
};

export default SomePage;
