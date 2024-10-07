// Import necessary modules from React and Next.js
import { FC } from 'react';

// Define the props for the component
interface IconCardProps {
  title: string;
  imageUrl: string;
  altText: string;
}

// Define the IconCard component with specified props
const IconCard: FC<IconCardProps> = ({ title, imageUrl, altText }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded shadow-md">
      <img
        src={imageUrl}
        alt={altText}
        className="w-16 h-16 object-cover mb-2"
      />
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
};

// Export the component for external usage
export default IconCard;

// Example Usage
// <IconCard title="企業会計115" imageUrl="/path/to/image.png" altText="企業会計115のアイコン" />
