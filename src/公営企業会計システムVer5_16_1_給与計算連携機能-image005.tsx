import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, isActive = false }) => (
  <button
    onClick={onClick}
    className={classNames('flex items-center justify-center w-full p-2 text-white rounded-md', {
      'bg-gray-500': !isActive,
      'bg-red-500': isActive,
    })}
  >
    {text}
  </button>
);

type WorkflowStepProps = {
  steps: {
    text: string;
    isHighlighted: boolean;
  }[];
};

const WorkflowStep: React.FC<WorkflowStepProps> = ({ steps }) => (
  <div className="flex space-x-4 mt-4">
    {steps.map((step, index) => (
      <div
        key={index}
        className={classNames('p-2 text-sm bg-yellow-200 rounded-md', {
          'bg-blue-200': step.isHighlighted,
        })}
      >
        {step.text}
      </div>
    ))}
  </div>
);

type SidebarProps = {
  items: {
    text: string;
    isActive: boolean;
  }[];
  onItemClick: (index: number) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ items, onItemClick }) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <Button
        key={index}
        text={item.text}
        isActive={item.isActive}
        onClick={() => onItemClick(index)}
      />
    ))}
  </div>
);

type DashboardProps = {
  sidebarItems: {
    text: string;
    isActive: boolean;
  }[];
  workflowSteps: {
    text: string;
    isHighlighted: boolean;
  }[];
  onSidebarItemClick: (index: number) => void;
};

const Dashboard: React.FC<DashboardProps> = ({ sidebarItems, workflowSteps, onSidebarItemClick }) => (
  <div className="flex space-x-4">
    <Sidebar items={sidebarItems} onItemClick={onSidebarItemClick} />
    <WorkflowStep steps={workflowSteps} />
  </div>
);

export default Dashboard;
