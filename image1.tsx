申し訳ありませんが、画像を処理することができません。ですが、Next.js + TypeScriptのコンポーネントの例を以下に示します。

```tsx
// TypeScript型定義
interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

// 再利用可能なカードコンポーネント
const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* 画像の表示 */}
      <img className="w-full" src={imageSrc} alt={imageAlt} />
      <div className="px-6 py-4">
        {/* カードタイトル */}
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* カード説明 */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;

// 使用例
// <Card title="Card Title" description="Card description goes here." imageSrc="/path/to/image.jpg" imageAlt="Description of image"/>
```

このコンポーネントは、タイトル、説明、および画像を渡すことでカスタマイズ可能です。Tailwind CSSを用いて簡単なスタイリングを行っています。