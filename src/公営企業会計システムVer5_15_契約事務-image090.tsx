// Import necessary libraries
import React from 'react';

// Define the types for the component's props
type NavigationButtonProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

// A reusable component for a navigation button
const NavigationButton: React.FC<NavigationButtonProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      className={`w-full py-2 px-4 text-left text-white ${
        active ? 'bg-indigo-600' : 'bg-gray-500 hover:bg-gray-600'
      } rounded`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Define the types for the main component's props
type MainComponentProps = {
  menuItems: { label: string; onClick: () => void }[];
  activeItemIndex: number;
};

// The main component using the navigation buttons
const MainComponent: React.FC<MainComponentProps> = ({ menuItems, activeItemIndex }) => {
  return (
    <div className="flex">
      <div className="w-1/5 p-2 bg-gray-200 flex flex-col">
        {menuItems.map((item, index) => (
          <NavigationButton
            key={index}
            label={item.label}
            onClick={item.onClick}
            active={index === activeItemIndex}
          />
        ))}
      </div>
      <div className="w-4/5 p-4 bg-white border">
        {/* Content goes here */}
        <h1 className="text-2xl font-bold">Content Area</h1>
      </div>
    </div>
  );
};

// Sample usage
const sampleItems = [
  { label: '業者管理', onClick: () => alert('業者管理 clicked') },
  { label: '人札管理', onClick: () => alert('人札管理 clicked') },
  // Add more items as needed
];

const App: React.FC = () => {
  return (
    <MainComponent menuItems={sampleItems} activeItemIndex={0} />
  );
};

export default App;
```