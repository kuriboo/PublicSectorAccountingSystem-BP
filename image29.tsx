```tsx
// Import necessary React and Next.js modules
import React from 'react';

// Define TypeScript types for component properties
type MenuProps = {
  menus: string[];
  activeMenuIndex: number;
  onMenuClick: (index: number) => void;
};

// Create a reusable Menu component
const Menu: React.FC<MenuProps> = ({ menus, activeMenuIndex, onMenuClick }) => {
  return (
    <div className="flex flex-col w-64 bg-gray-100 p-4">
      {menus.map((menu, index) => (
        <button
          key={index}
          className={`text-left py-2 px-4 rounded mb-2 hover:bg-blue-200 ${
            activeMenuIndex === index ? 'bg-blue-300' : 'bg-gray-200'
          }`}
          onClick={() => onMenuClick(index)}
        >
          {menu}
        </button>
      ))}
    </div>
  );
};

// Define TypeScript types for MainContent properties
type MainContentProps = {
  title: string;
  content: string[];
};

// Create a reusable MainContent component
const MainContent: React.FC<MainContentProps> = ({ title, content }) => {
  return (
    <div className="flex-grow bg-white p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col">
        {content.map((item, index) => (
          <div
            key={index}
            className="border rounded p-4 mb-2 shadow-md hover:bg-gray-100"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

// Define TypeScript types for the main component properties
type DashboardProps = {
  menuItems: string[];
  content: string[];
  activeMenuTitle: string;
};

// Create a reusable Dashboard component
const Dashboard: React.FC<DashboardProps> = ({
  menuItems,
  content,
  activeMenuTitle,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="flex h-screen bg-gray-50">
      <Menu
        menus={menuItems}
        activeMenuIndex={activeIndex}
        onMenuClick={setActiveIndex}
      />
      <MainContent title={activeMenuTitle} content={content} />
    </div>
  );
};

// Export the Dashboard component as default
export default Dashboard;
```