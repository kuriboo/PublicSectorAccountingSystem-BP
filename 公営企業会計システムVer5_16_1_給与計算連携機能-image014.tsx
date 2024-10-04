```tsx
import React from 'react';

interface LogoProps {
  companyName?: string;
  departmentName?: string;
  logoUrl?: string;
  altText?: string;
  className?: string;
}

const CompanyLogo: React.FC<LogoProps> = ({
  companyName = "株式会社ぎょうせい",
  departmentName = "システム事業部",
  logoUrl = "/path/to/logo.png",
  altText = "会社ロゴ",
  className = ""
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo image */}
      <img src={logoUrl} alt={altText} className="w-12 h-12 mr-4" />
      {/* Company name and department text */}
      <div>
        <p className="text-lg font-bold">{companyName}</p>
        <p className="text-sm">{departmentName}</p>
      </div>
    </div>
  );
};

export default CompanyLogo;
```