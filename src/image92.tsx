// Filename: ContractTasksComponent.tsx
import React from 'react';

// Define props type for the component
interface ContractTasksComponentProps {
  title: string;
  sections: { name: string; isActive: boolean }[];
  actions: { label: string; onClick: () => void }[];
}

const ContractTasksComponent: React.FC<ContractTasksComponentProps> = ({
  title,
  sections,
  actions,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md w-full">
      {/* Header Section */}
      <h1 className="text-xl font-bold text-center mb-4">{title}</h1>
      
      {/* Side Menu */}
      <div className="flex">
        <div className="w-1/4 space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`w-full py-2 px-4 text-left rounded-md ${
                section.isActive ? 'bg-blue-200 text-blue-600' : 'hover:bg-gray-200'
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
  
        {/* Actions */}
        <div className="w-3/4 p-4 bg-white rounded-md shadow-sm ml-4">
          <div className="flex flex-col space-y-4">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractTasksComponent;
