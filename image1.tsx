```tsx
import React from 'react';

// 型定義
interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

// 再利用可能なロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ src, alt, width = 100, height = 50, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={src} alt={alt} width={width} height={height} className="object-contain" />
    </div>
  );
};

export default Logo;

// 使い方例
// <Logo src="/path/to/image.jpg" alt="会社ロゴ" width={150} height={75} className="my-custom-class" />
```

```tsx
import React from 'react';

// 見出しコンポーネント
interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className = '' }) => {
  return (
    <h1 className={`text-xl font-bold ${className}`}>
      {text}
    </h1>
  );
};

export default Heading;

// 使用例
// <Heading text="株式会社ぎょうせい" className="text-gray-800" />
```

```tsx
import React from 'react';

// サブテキストコンポーネント
interface SubTextProps {
  text: string;
  className?: string;
}

const SubText: React.FC<SubTextProps> = ({ text, className = '' }) => {
  return (
    <p className={`text-sm ${className}`}>
      {text}
    </p>
  );
};

export default SubText;

// 使用例
// <SubText text="データ・システム事業部" className="text-gray-600" />
```

```tsx
import React from 'react';
import Logo from './Logo';
import Heading from './Heading';
import SubText from './SubText';

// メインコンポーネント
const CompanyLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <Logo src="/logo-path.jpg" alt="会社ロゴ" />
      <div>
        <Heading text="株式会社ぎょうせい" />
        <SubText text="データ・システム事業部" />
      </div>
    </div>
  );
};

export default CompanyLogo;
```