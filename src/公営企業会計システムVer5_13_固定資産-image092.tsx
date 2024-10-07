import React from 'react';

// Type definition for component props
interface MapImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// MapImage component using Tailwind CSS for styling
const MapImage: React.FC<MapImageProps> = ({ src, alt, width = 600, height = 400 }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain border border-gray-300 shadow-md"
      />
    </div>
  );
};

export default MapImage;
```